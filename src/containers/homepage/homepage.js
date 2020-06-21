import * as React from 'react';
import styles from '../../styles/Homepage';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomepageView from './homepageView';
import AccountView from './accountView';
import AboutView from './aboutView';


const getTabBarIcon = (props) => {

    const {route} = props;

    if (route.key === 'first') {

       return <Icon name='home' size={30} color={'#eeeeee'}/>

    } 
    if (route.key === 'second'){
        return <Icon name='account-circle' size={30} color={'#eeeeee'}/>
    }
    else {
        return <Icon name='error-outline' size={30} color={'#eeeeee'}/>
    }
}


const AboutTabView = () => (
    <AboutView />
);

const initialLayout = { width: Dimensions.get('window').width};
export default function HomePage({navigation}) {
    const HomepageTabView = () => (
        <HomepageView navigation={navigation}/>
    );

    const ProfileTabView = () => (
        <AccountView navigation={navigation}/>
    );
    
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: '' },
        { key: 'second', title: '' },
        { key: 'third', title: '' },
        // { key: 'forth', title: '' }
    ]);

    const renderScene = SceneMap({
        first: HomepageTabView,
        second: ProfileTabView,
        third: AboutTabView
    });
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar = {
                props =>
                    <TabBar
                        {...props}
                        indicatorStyle={{backgroundColor: 'red'}}
                        renderIcon={
                            props => getTabBarIcon(props)
                        }
                        tabStyle={styles.bubble}
                        labelStyle={styles.noLabel}
                        
                    />
            }
            tabBarPosition={'bottom'}
        />
    );
}