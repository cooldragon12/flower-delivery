import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {Icon, Avatar, Button} from "react-native-elements"
import { color } from "react-native-elements/dist/helpers";
import { TextInput } from "react-native-gesture-handler";
import {redBiege, darkerGrey, grey, white,pink} from "./comp"
import { useNavigation } from "@react-navigation/native";
export function ContactComponent(){
    const {navigate} = useNavigation()
        return(
            <View style={{flex:1, position:"relative", flexDirection:"column"}}>
                <View style={{poistion:"absolute", flexDirection:"row", alignItems:"center"}}>
                    <Button buttonStyle={{backgroundColor:"transparent"}} onPress={()=>navigate('Home')} icon={<Icon type="ionicon" size={40} name="arrow-back-circle-outline" color={redBiege}/>}/>
                    <Text style={{fontWeight:"bold", fontSize:25, color:redBiege}}>Contact Us</Text>
                </View>
                <View style={{flex:.3, alignItems:"center", overflow:"hidden"}}>
                    <Image style={{width:"75%", height:300}} source={require('../assets/contactpic.png')}/>
                </View>
                
                <View style={{flexDirection:"column", borderColor:redBiege, borderTopWidth:35,flex:.7, justifyContent:"center"}}>
                    <View style={{alignItems:'center', marginVertical:"3%"}}>
                        <Icon type="ionicon" name="phone-portrait-outline" color={redBiege}/>
                        <Text style={style.contactFont}>+63 906 911 4321</Text>
                    </View>
                    <View style={{alignItems:'center', marginVertical:"3%"}}>
                        <Icon type="ionicon" name="mail-outline" color={redBiege}/>
                        <Text style={style.contactFont}>fleurist.ph@gmail.com</Text>

                    </View>
                    <View style={{alignItems:'center', marginVertical:"3%"}}>
                        <Icon type="ionicon" name="time-outline" color={redBiege}/>
                        <View style={{alignItems:"center"}}>
                            <Text style={style.contactFont}>Deliveries will only be at:</Text>
                            <View style={{marginVertical:"3%", alignItems:"center"}}>
                                <Text style={style.constactFontBold}>Mon - Fri</Text>
                                <Text style={style.contactFont}>8 am - 6 pm</Text>

                            </View>
                            <View style={{marginVertical:"3%", alignItems:"center"}}>
                                <Text style={style.constactFontBold}>Sat - Sun</Text>
                                <Text style={style.contactFont}>9 am - 5 pm</Text>

                            </View>
                        </View>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{color:redBiege, fontSize:25, fontWeight:"bold"}}>
                            SOCIAL MEDIA
                        </Text>
                        <View style={{flexDirection:"row"}}>
                            <Icon containerStyle={{marginHorizontal:"2%"}} type="ionicon" name="logo-facebook" size={40} color="#4267B2"/>
                            <Icon containerStyle={{marginHorizontal:"2%"}} type="ionicon" name="logo-twitter"size={40} color="#55acee"/>

                        </View>
                    </View>

                </View>

            </View>
        )
    // }
}
const style = StyleSheet.create({
    contactFont:{
        fontSize:20,
        color:darkerGrey
    },
    constactFontBold:{
        fontSize:20,
        fontWeight:"bold",
        color:darkerGrey
    }
})