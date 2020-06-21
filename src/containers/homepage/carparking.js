import React from 'react';
import { View, TextInput, Image, TouchableOpacity, ActivityIndicator, Dimensions, ImageBackground, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
// import MapView from 'expo';
import Polylines from '@mapbox/polyline';
import * as Permissions from 'expo-permissions';
import styles from '../../styles/CarParkingStyle'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Constants from '../../common/constants';
import Geocode from "react-geocode";

const locations = require('./locations.json')


export default class CarParking extends React.Component {

    state = {
        latitude: null,
        longitude: null,
        address: null,
        // locations: locations,
        isLoading: true

    }
    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)
        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, () => console.log('State: ', this.state), this.getAddress(latitude, longitude)),
            (error) => console.log('Error', error)
        )
    }
    getAddress = async (lat, lng) => {
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey(Constants.API_key);

        // set response language. Defaults to english.
        Geocode.setLanguage("en");

        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion("es");

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();
        // Get address from latidude & longitude.
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                // console.log(address);
                this.setState({
                    address: address
                })
            },
            error => {
                console.error(error);
            }
        );
    }

    getCoord = async (address) => {
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.props.navigation.navigate('NearParkingPlace', { lat: lat, lng: lng })
            },
            error => {
                console.error(error);
            }
        );
    }
    // _resolve1 = async (lat, long) => {
    //     let country = await this._coordToCountry(lat, long)
    //     this.setState({ country: country })
    // }
    // _coordToCountry = async (lat, long) => {
    //     let locationDetail = await Location.reverseGeocodeAsync({
    //         latitude: lat,
    //         longitude: long
    //     });

    //     if (locationDetail.length > 0) {
    //         console.log(locationDetail)
    //         if (locationDetail[0]['name'] && locationDetail[0]['street'] && locationDetail[0]['region']) {
    //             return locationDetail[0]['name'] + ', ' + locationDetail[0]['street'] + ', ' + locationDetail[0]['region'] + ', ' + locationDetail[0]['country'];
    //         }
    //         else if (!ocationDetail[0]['name'] && locationDetail[0]['street'] && locationDetail[0]['region']) {
    //             return locationDetail[0]['street'] + ', ' + locationDetail[0]['region'] + ', ' + locationDetail[0]['country'];
    //         }
    //         else if (ocationDetail[0]['name'] && !locationDetail[0]['street'] && locationDetail[0]['region']) {
    //             return locationDetail[0]['name'] + ', ' + locationDetail[0]['region'] + ', ' + locationDetail[0]['country'];
    //         }
    //         else if (ocationDetail[0]['name'] && locationDetail[0]['street'] && !locationDetail[0]['region']) {
    //             return locationDetail[0]['name'] + ', ' + locationDetail[0]['street'] + ', ' + locationDetail[0]['country'];
    //         }
    //     } else {
    //         console.log('no where')
    //         return 'no where'
    //         // this._resolve1(lat, long)
    //     }
    // }

    // mergeCoords = () => {
    //     const {
    //         latitude,
    //         longitude,
    //         desLatitude,
    //         desLongitude
    //     } = this.state
    //     const hasStartAndEnd = latitude !== null && desLatitude !== null

    //     if (hasStartAndEnd) {
    //         const concatStart = `${latitude},${longitude}`
    //         const concatEnd = `${desLatitude},${desLongitude}`
    //         this.getDirections(concatStart, concatEnd)

    //     }
    // }

    // async getDirections(startLoc, desLoc) {
    //     try {
    //         const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyD9fQhfeJy5GOSJ9OnKJs7oRrlmJuinHpA`)
    //         const respJson = await resp.json();
    //         // console.log(respJson)
    //         const response = respJson.routes[0]
    //         const distanceTime = response.legs[0]
    //         const distance = distanceTime.distance.text
    //         const time = distanceTime.duration.text
    //         const points = Polylines.decode(respJson.routes[0].overview_polyline.points);
    //         const coords = points.map(point => {
    //             return {
    //                 latitude: point[0],
    //                 longitude: point[1]
    //             }
    //         })
    //         this.setState({ coords, distance, time })
    //         // console.log(this.state)
    //     } catch (error) {
    //         console.log('Error: ', error);
    //     }
    // }

    // onMarkerPress = location => () => {
    //     const { coords: { latitude, longitude } } = location
    //     this.setState({
    //         destination: location,
    //         desLatitude: latitude,
    //         desLongitude: longitude
    //     }, this.mergeCoords)
    // }

    // renderMarkers = () => {
    //     const { locations } = this.state
    //     return (
    //         <View>
    //             {
    //                 locations.map((location, idx) => {
    //                     const {
    //                         coords: { latitude, longitude }
    //                     } = location
    //                     return (
    //                         <Marker
    //                             key={idx}
    //                             coordinate={{ latitude, longitude }}
    //                             onPress={this.onMarkerPress(location)}
    //                         />
    //                     )
    //                 })
    //             }
    //         </View>
    //     )
    // }

    search(address) {
        fetch(Constants.BASE_URL + '/search/address/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                address: this.state.country
            })
        })
            .then(respond => respond.json())
            .then(respondJson => {
                this.setState({
                    dataSource: respondJson
                },
                    function () {
                        console.log(respondJson)
                    })
            })
            .catch(error => {
                console.log(error)
            })
        // console.log('SEARCH', address)
    }
    render() {
        const {
            latitude,
            longitude,
            address
        } = this.state
        if (address) {
            return (
                <ImageBackground source={require('../../assets/img/abstract_background_7.jpg')} style={{ flex: 1, resizeMode: 'contain' }}>
                    <View>
                        <MapView style={styles.mapView}
                            showsUserLocation
                            showsMyLocationButton={true}
                            initialRegion={{
                                latitude,
                                longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                            {/* {this.renderMarkers()}
                            <Polyline
                                strokeWidth={2}
                                strokeColor="red"
                                coordinates={coords}
                            /> */}
                        </MapView>
                        <View style={{position: 'absolute', marginTop: 60}}>
                            <View style={styles.searchView}>
                                <GooglePlacesAutocomplete
                                    styles={styles.searchTxt, {
                                        textInputContainer: {
                                            backgroundColor: 'transparent',
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0,
                                        },
                                        textInput: {
                                            marginLeft: 0,
                                            marginRight: 8,
                                            // height: 38,
                                            // borderRadius: 5,
                                            color: '#fff',
                                            fontSize: 16,
                                            backgroundColor: 'transparent',
                                            fontFamily: 'UTM-Swiss-Condensed',
                                            // selectionColor: '#fff',
                                            color: '#fff'
                                        },
                                        predefinedPlacesDescription: {
                                            color: '#fff',
                                        },
                                        container: {
                                            marginRight: 8
                                        },
                                        separator: {
                                            borderColor: '#fff'
                                        },
                                        poweredContainer: {
                                            display: 'none'
                                        },
                                        predefinedPlacesDescription: {
                                            color: '#fff'
                                        },
                                        description: {
                                            color: '#fff',
                                            fontFamily: 'UTM-Swiss-Condensed',
                                        },
                                    }}
                                    getDefaultValue={() => {
                                        return this.state.address; // text input default value
                                    }}

                                    onPress={(data, details = null) => {
                                        // 'details' is provided when fetchDetails = true
                                        this.getCoord(data.description)
                                    }}
                                    query={{
                                        key: 'AIzaSyD9fQhfeJy5GOSJ9OnKJs7oRrlmJuinHpA',
                                        language: 'en',
                                        components: 'country:vn',
                                    }}
                                />
                                <TouchableOpacity onPress={() => this.search(country)}>
                                    <Icon name='search' size={24} color={'#fff'} style={{ justifyContent: 'center', marginRight: 16, marginTop: 8 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.filter}>
                                <TouchableOpacity style={styles.filterItem, {borderRadius: 5}}>
                                    <Text style={styles.filterTxt}>Price</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.parkingPlaceBtn}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NearParkingPlace', { lat: latitude, lng: longitude })}>
                            <Image style={styles.logo} source={require('../../assets/img/ic_launcher_round.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomView}>

                    </View>
                </ImageBackground>
            );
        }
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
            </View>
        );
    }
}