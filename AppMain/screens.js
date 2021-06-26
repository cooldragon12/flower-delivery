import {Button, Header, Card, Rating} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
    } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { HomeComponent, CategoryComponent, CategorySelected } from './homeComp'; // Home 0Component

import { ItemComponent } from './productComp'

import { ContactComponent } from './contactComp';

import {CheckoutComponent} from './checkOutComp'

import { ProfileComponent } from './profileComp';

import { OrderComponent } from './orderComp';
import  {CartComponent} from './cartComp'
import { white, pink, grey, mintGreen, redBiege } from './comp';
import React from 'react';


const Tab = createMaterialTopTabNavigator();

export const ScreenContainer = ({children}) => {
    return(
        <SafeAreaView style={style.main}>{children}</SafeAreaView>
    );
};

export const Loading = () => {
    return(
    <ScreenContainer>
        <View>
            <Image source={require('../assets/splash.png')}/>
        </View>
    </ScreenContainer>
    )
  
};


export function ItemInfo({route}){
    // const {state} = navigation
    const item = route.params
    const thisItem ={
        title: item.title,
        price: item.price,
        img: item.img,
        description: item.description,
        contents: item.contents,
        ratings: item.ratings,
    }
    
    return(
        
        <ItemComponent item={thisItem}/>
        
    )
};
export function HomeScreen(){
    // var state={
    //     key:""
    // }
    return(
            <Tab.Navigator  tabBarOptions={{
                activeTintColor: redBiege,
                indicatorStyle:{backgroundColor:redBiege}
                
                }}>
                <Tab.Screen name="HomePage" component={HomeComponent}/>
                <Tab.Screen name="Categories" component={CategoryComponent}/>
            </Tab.Navigator>
            
    )
  };
export function CartScreen(props){
    
    return(
    <View style={{minHeight:"100%"}}>

        <CartComponent />
    </View>
    )
}
export function ContactScreen(){
    return(
        <ScreenContainer>
        <ContactComponent/>
        </ScreenContainer>
    )
}



// function AboutScreen(){
//  return(
//     <AboutComponent/>
// )
// }

export function CategorySelectedScreen({route}){
    const list = route.params
    return(
        <CategorySelected listItem={list}/>
    )
}

export function ProfileScreen(){
    return(
        <ScreenContainer>
            <ProfileComponent/>
        </ScreenContainer>
    )
}

export function AddressCheckoutScreen(){
    return(
        <CheckoutComponent/>
    )
}
export function OrderScreen(){
    return(
        <ScreenContainer>
            <OrderComponent/>
        </ScreenContainer>
        
    )
}
const style = StyleSheet.create({
    main: {
        backgroundColor: white,
        flex:1,
        paddingTop: (Platform.OS === 'ios' ? 0 : StatusBar.currentHeight*1.5),
        position:"relative"
    },
});