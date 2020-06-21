import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import styles from '../../styles/MapView';
import Polylines from '@mapbox/polyline';
import * as Constants from '../../common/constants';

export default class Direction extends React.Component {
    state = {
        latitude: null,
        longitude: null,
    };

    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)
        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords, () => console.log('State: ', this.state)),
            (error) => console.log('Error', error)
        )
        this.setState({
            desLatitude: this.props.navigation.state.params.lat,
            desLongitude: this.props.navigation.state.params.lng
        }, this.mergeCoords)
    }

    mergeCoords = () => {
        const {
            latitude,
            longitude,
            desLatitude,
            desLongitude
        } = this.state
        const hasStartAndEnd = latitude !== null && desLatitude !== null

        if (hasStartAndEnd) {
            const concatStart = `${latitude},${longitude}`
            const concatEnd = `${desLatitude},${desLongitude}`
            this.getDirections(concatStart, concatEnd)

        }
    }

    async getDirections(startLoc, desLoc) {
        try {
            const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=${Constants.API_key}`)
            const respJson = await resp.json();
            // console.log(respJson)
            const response = respJson.routes[0]
            const distanceTime = response.legs[0]
            const distance = distanceTime.distance.text
            const time = distanceTime.duration.text
            const points = Polylines.decode(respJson.routes[0].overview_polyline.points);
            const coords = points.map(point => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            this.setState({ coords, distance, time })
            console.log('State: ', this.state)
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    onMarkerPress = location => () => {
        const { coords: { latitude, longitude } } = location
        this.setState({
            destination: location,
            desLatitude: latitude,
            desLongitude: longitude
        }, this.mergeCoords)
    }

    renderMarkers = () => {
        // const locations = { latitude: this.props.navigation.state.params.lat, longitude: this.props.navigation.state.params.lng }
        // console.log('locations: ', locations)
        return (
            <View>
                {
                    <Marker
                    // key={idx}
                    coordinate={{ latitude: this.props.navigation.state.params.lat, longitude: this.props.navigation.state.params.lng }}
                    // onPress={this.onMarkerPress(location)}
                />
                }
            </View>
        )
    }


    render() {
        // const { latitude, longitude, coords } = this.state
        // console.log(this.state)
        const latitude = this.state.latitude
        const longitude = this.state.longitude;
        const coords = this.state.coords;
        // const {latitude, longitude} = this.state;
        if (coords) {
            return (
                <View>
                    <MapView
                        style={styles.mapView}
                        showsUserLocation
                        showsMyLocationButton={true}
                        initialRegion={{
                            latitude,
                            longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        {this.renderMarkers()}
                        <Polyline
                            strokeWidth={2}
                            strokeColor="red"
                            coordinates={coords}
                        />
                    </MapView>
                </View>
            );
        }
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
            </View>
        );
    }
}