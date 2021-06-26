import { View, Text  } from "react-native";
import React from "react";
import { Button, Icon } from "react-native-elements";
import { darkerGrey, grey, redBiege, white } from "./comp";
import { useNavigation } from "@react-navigation/native";

        
export function OrderComponent(){
    const navigation = useNavigation();
    return(
        <View style={{flex:1}}>
            <View style={{alignItems:"center", flexDirection:"row"}}>
            <Button 
                buttonStyle={{backgroundColor:"transparent"}} 
                style={{flex:1}}
                icon={<Icon type="ionicon"  size={25} color={redBiege} name="arrow-back-outline"/>} 
                onPress={()=>navigation.goBack()}/>
                <Text style={{color:redBiege, fontWeight:"bold", fontSize:25, flex:1 }}>Orders</Text>
            </View>
            <View style={{flex:1,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <View style={{alignItems:"center", marginVertical:"10%"}}>
                    <Icon type="ionicon" size={150} name="cart-outline" color={grey}/>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:20, fontWeight:"bold"}}>No orders yet</Text>
                        <Text numberOfLines={2} style={{color:darkerGrey, width:150, textAlign:"center"}}>Hit the pink button down below to create an order</Text>
                    </View>
                </View>
                <View style={{width:"40%", marginVertical:"10%"}}>
                    <Button title="Start Ordering" titleStyle={{color:white}} buttonStyle={{backgroundColor:redBiege, borderRadius:15, paddingVertical:"7%"}}/>
                </View>
            </View>
            

        </View>
    )
}