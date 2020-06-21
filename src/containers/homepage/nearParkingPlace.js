import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Platform,
    UIManager,
    LayoutAnimation,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    ImageBackground,
    Dimensions
} from 'react-native';
import styles from '../../styles/NearParkingPlaceStyle';
import * as Constants from '../../common/constants';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


export default class NearParkingPlace extends React.Component {
    state = {
        refreshing: false,
        status: 'row',
        isLoading: true,
        lat: this.props.navigation.state.params.lat,
        lng: this.props.navigation.state.params.lng
    };
    componentDidMount() {
        this.searchCoords();
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        fetchData().then(() => {
            this.setState({ refreshing: false });
        });
    }

    selectionHandler = (idx) => {
        const { data } = this.state.dataSource;
        let arr = this.state.dataSource.map((item, index) => {
            if (idx == index) {
                item.isSelected = !item.isSelected
            }
            return { ...item }
        })
        this.setState({ dataSource: arr })
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
    searchCoords() {
        fetch(Constants.BASE_URL + '/search/coord/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // lat: this.state.lat,
                // lon: this.state.lng,
                lat: 10.7733743,
                lon: 106.6606193,
                distance: '5km',
                size: 5,
                index: 0
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson.result,
                    },
                    function () {
                        //   if (this.state.dataSource.token){
                        //     this.props.navigation.navigate('HomePage');
                        // console.log(this.state.dataSource);
                        // console.log(JSON.stringify(this.state.lat));
                        //   }
                        let arr = this.state.dataSource.map((item, index) => {
                            item.isSelected = false
                            return { ...item };
                        })
                        // console.log(arr)
                        this.setState({ dataSource: arr })
                        console.log(this.state)
                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/img/abstract_background_5.jpg')} style={{ flex: 1, resizeMode: 'contain', width: Dimensions.get('window').width, paddingTop: 24 }}>
                    {this.state.dataSource.length > 0 &&
                        <ScrollView
                        // refreshControl={
                        //     <RefreshControl
                        //         refreshing={this.state.refreshing}
                        //         onRefresh={this._onRefresh}
                        //     />
                        // }>
                        >
                            {this.state.dataSource.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => this.selectionHandler(index)}
                                    style={!item.isSelected ? styles.mainBlock_Row : styles.mainBlock_Col} >
                                    {!item.isSelected &&
                                        <View style={styles.leftBlock}>
                                            <Text style={styles.whiteText}>10.000 VND</Text>
                                            <Text style={styles.whiteText}>Closed    05:10 PM</Text>
                                        </View>}
                                    {!item.isSelected &&
                                        <View style={styles.rightBlock}>
                                            <Text style={styles.whiteText} numberOfLines={1}>{item.address}</Text>
                                            <Text style={styles.whiteText}>6AM - 9PM</Text>
                                        </View>}
                                    {item.isSelected &&
                                        <View style={styles.expandedInfo}>
                                            <View>
                                                <Image style={styles.imageParking} source={require('../../assets/img/uni.jpg')} />
                                                <Text style={styles.name}>HCMC</Text>
                                                <Text style={styles.carText}>CARS</Text>
                                                <Text style={styles.carNumber}>50/100</Text>
                                                {/* <Text style={styles.addText}>ADDRESS</Text> */}
                                                <Text style={styles.add}>{item.address}</Text>
                                            </View>
                                            <View style={[styles.subBlock, { backgroundColor: '#fff' }]}>
                                                <Text style={styles.owner}>Owner</Text>
                                                <Text style={styles.ownerName}>{item.location_name}</Text>
                                            </View>
                                            <View>
                                                <TouchableOpacity
                                                    style={styles.bookingBtn}
                                                    onPress={() => this.props.navigation.navigate('Direction', { lat: item.lat, lng: item.lon })}>
                                                    <Text style={styles.bookingTxt}>
                                                        BOOKING
                                            </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>}
                                </TouchableOpacity>))}
                        </ScrollView>}
                    {this.state.dataSource.length == 0 &&
                        <View style={styles.noParking}>
                            <Text style={styles.noParkingTxt}> There is no parking nearby </Text>
                        </View>}
                </ImageBackground>
            </View>
        )
    }
}