import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Button} from 'react-native-elements'
import { RadioGroup } from 'react-native-btr';
import darkColors from 'react-native-elements/dist/config/colorsDark';
import { darkerGrey, grey, redBiege, white } from './comp';
import {style} from './comp'
import { Root, Popup } from 'popup-ui'

export function CheckoutComponent(){
    const [state, setState] = useState({
        radioButtons: [
          {
            label: 'Door delivery',
            value: 'DoorDelivery',
            key:'1',
            checked: true,
            color: redBiege,
            disabled: false,
            flexDirection: 'row',
            size: 13
          },
          {
            key:'2',
            label: 'Pick up',
            value: 'PickUp',
            checked: false,
            color: redBiege,
            disabled: false,
            flexDirection: 'row',
            size: 13
          }
        ]
        })
    return(
        <View style={{flex:1}}>
            <Text style={{color:redBiege, fontWeight:"bold", fontSize:24, margin:"8%"}}>Delivery Information</Text>
            <View >
                {/* Main */}
                <View style={{alignItems:"center"}}>
                    {/* Address detail */}
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{color:darkerGrey, fontSize:18, flex:1, marginLeft:"8%"}}>Address details</Text>
                        <Button title="change" buttonStyle={{backgroundColor:"transparent", flex:1,marginRight:"8%"}} titleStyle={{color:redBiege}}/>

                    </View>
                    
                    <View style={{flexDirection:'column',alignItems:"center", marginVertical:"5%"}}>
                        <View style={{flexDirection:"row", borderBottomColor:grey, borderBottomWidth:2}}>
                            <Text style={{fontWeight:"bold", fontSize:17}}>Flora Cortez</Text>
                            <Text style={{fontSize:17, marginLeft:"4%"}}>+234 9011039271</Text>
                        </View>
                        <View style={{width:400,alignItems:"center"}}>
                        <Text numberOfLines={2} style={{textAlign:"left",width:"50%"}}>Km 5 refinery road oppsite re
                            public road, effurun, delta state</Text>
                        </View>
                        
                    </View>
                </View>
                <View>
                    <Text style={{color:darkerGrey, fontSize:18,marginLeft:"8%"}}>Delivery method</Text>
                    <View>
                        <RadioGroup
                            color={redBiege}
                            labelStyle={{ fontSize: 15 }}
                            radioButtons={state.radioButtons}
                            onPress={radioButtons => setState({ radioButtons })}
                            style={{ paddingTop: 90 }}
                            />
                    </View>
                </View>
                <View style={{margin:"10%"}}>
                    <Button  onPress={()=>Popup.show({
                        type: 'Warning',
                        title: 'Something wrong',
                        button: false,
                        textBody: 'Something is mising',
                        buttontext: 'Ok',
                        callback: () => Popup.hide()})} title="Proceed to payment" titleStyle={{color:white}} buttonStyle={{borderRadius:15, paddingVertical:"2%",backgroundColor:redBiege}}/>
                </View>
            </View>
        </View>
    )
}