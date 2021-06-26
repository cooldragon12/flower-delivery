import { View, Text, Image} from "react-native";
import { Icon, Button,  Avatar} from "react-native-elements";
import { pink, redBiege, white } from "./comp";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import {ShopBadge} from '../App'
export function ProfileComponent(){

        const navigation = useNavigation();

        return(
            <View style={{flexDirection:"column", flex:1, position:"relative"}}>
                <View style={{flexDirection:"row", top:0}}>
               
                <View style={{alignItems:"flex-start", flex:1}}>
                <Button buttonStyle={{backgroundColor:white}} icon={<Icon type="ionicon"  size={30} color={redBiege} name={Platform.OS === 'ios' ? "ios-menu": "menu-outline"}/>} onPress={()=>navigation.openDrawer()}/>
                </View>
                
                <View style={{alignItems:"center", flex:1}}>
                <Image style={{borderRadius: 50, flex:0.75,height:"100%",justifyContent:"center",alignItems:"center",}} source={require('../assets/sm-logo.png')}/>
            
                </View>
                <View style={{alignItems:"flex-end", flex:1}}>
                <Button buttonStyle={{backgroundColor:white}} icon={<ShopBadge type="simple-line-icon" size={25} color={redBiege} name="handbag"  />} onPress={()=>{navigation.navigate("Cart")}}/>
                </View>
               
                
                </View>
                <View style={{flexDirection:"row", flex:0.15}}>
                    <View style={{flex:1}}>
                        <Avatar  size={100} icon={{name:"person-circle-outline",size:100, color:redBiege,type:"ionicon"}}/>
                    </View>
                    <View style={{flexDirection:"row", flex:1,alignItems:"center",justifyContent:"flex-end"}}>
                        <Button title="Log In" buttonStyle={{borderColor:redBiege, borderWidth:1 ,backgroundColor:white, borderRadius:15, marginHorizontal:"5%"}} titleStyle={{color:redBiege}}/>
                        <Button title="Sign Up" buttonStyle={{backgroundColor:redBiege, borderRadius:15, marginHorizontal:"10%"}} titleStyle={{color:white}}/>
                    </View>

                </View>
                <View style={{backgroundColor:redBiege, flex:0.85, borderRadius:30, alignItems:"center"}}>
                    <View style={{width:"80%", height:"80%", marginTop:"20%"}}>
                        <View style={{borderBottomColor:white, borderBottomWidth:2,marginVertical:"3%", flexDirection:"row"}}>
                            <View style={{flexDirection:"row", alignItems:"center", flex:1}}>
                                <Icon type="ionicon" name="list-circle-outline" size={30} color={white}/>
                                <Text style={{color:white, fontSize:19, margin:"3%"}}>My Purchase</Text>
                                
                            </View>
                            <View style={{flex:1, alignItems:"flex-end", justifyContent:"center"}}>
                                    <Icon type="ionicon" color={white} name="chevron-down-outline"/>
                            </View>
                        </View>
                            <View style={{borderBottomColor:white, borderBottomWidth:2,marginVertical:"3%", flexDirection:"row"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Icon type="ionicon" name="heart-outline" size={30} color={white}/>
                                <Text style={{color:white, fontSize:19, margin:"3%"}}>Likes</Text>
                            </View>
                            <View style={{flex:1, alignItems:"flex-end", justifyContent:"center"}}>
                                    <Icon type="ionicon" color={white} name="chevron-down-outline"/>
                            </View>
                        </View>
                        <View style={{borderBottomColor:white, borderBottomWidth:2,marginVertical:"3%", flexDirection:"row"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Icon type="ionicon" name="timer-outline" size={30} color={white}/>
                                <Text style={{color:white, fontSize:19, margin:"3%"}}>Recently Viewed</Text>
                            </View>
                            <View style={{flex:1, alignItems:"flex-end", justifyContent:"center"}}>
                                    <Icon type="ionicon" color={white} name="chevron-down-outline"/>
                            </View>
                        </View>
                        <View style={{borderBottomColor:white, borderBottomWidth:2,marginVertical:"3%", flexDirection:"row"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Icon type="ionicon" name="settings-outline" size={30} color={white}/>
                                <Text style={{color:white, fontSize:19, margin:"3%"}}>Account Settings</Text>
                            </View>
                            <View style={{flex:1, alignItems:"flex-end", justifyContent:"center"}}>
                                    <Icon type="ionicon" color={white} name="chevron-down-outline"/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    // }
}