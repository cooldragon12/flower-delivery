
import React, {setState, useState} from 'react'
import {View, Image, Text, ScrollView,TextInput,StyleSheet} from 'react-native'
import {CartItems} from './cartComp'
import {ButtonGroup, Button, Icon, Rating} from 'react-native-elements'
import { white, pink, grey, mintGreen, redBiege, darkerGrey, style } from './comp';


export function ItemComponent(props){

    const [quantity, setQuantity] = useState(1)
    const incrementQuantity = () => setQuantity(quantity + 1);
    let decrementQuantity= () => quantity === 1 ? setQuantity(1) :setQuantity(quantity- 1);
    
    // render(){
        const item = {
            title: props.item.title,
            price: props.item.price,
            img: props.item.img,
            description: props.item.description,
            contents: props.item.contents,
            ratings: props.item.ratings,
            quantity: quantity,
        }

        return(
            <ScrollView>
                <View >
                    <View style={{zIndex:1, height:"40%", justifyContent:"center"}}>
                        <Image style={{ width:"100%"}}  resizeMethod="auto" resizeMode="center" source={item.img}/>
                    </View >
                    <View nativeID="info-cont" style={{ zIndex:2, flexDirection:"column",height:"60%", backgroundColor: pink, borderTopRightRadius: 25, borderTopLeftRadius:25, }}>
                    
                        <View style={{margin:25}}>
                            <Text style={{ fontSize:25, fontWeight:"bold"}} h1>{item.title}</Text>
                            
                            <View style={{flexDirection:"row", marginVertical:20}}>
                                <Rating type='heart'tintColor={pink}  style={{backgroundColor:pink, color:redBiege}} readOnly startingValue={item.ratings} imageSize={24}  />
                                <Text style={{fontWeight:"bold", fontSize:20, color:darkerGrey, marginLeft:"40%"}}>Php {item.price}</Text>
                            </View>
                            <View style={{ flexDirection:"column", marginVertical:10 }}>
                                <Text style={style.description} h3>DESCRIPTION</Text>
                                <Text style={{ flex:0.5, color:darkerGrey, fontSize:13}}>{item.description}</Text>
                                <Text style={style.description} h3>INCLUDES</Text>
                                <Text style={{ flex:0.5, color:darkerGrey, fontSize:13}}>{item.contents}</Text>
                            </View>
                            <View style={{ flexDirection:"row", marginVertical:"5%" }}>
                                <View style={{flexDirection:"row"}}>
                                    <Incrementer decrement={decrementQuantity} increment={incrementQuantity} quantity={quantity}/>
                                    <Button titleStyle={{fontSize:18}} buttonStyle={{paddingHorizontal:20,paddingVertical:15,backgroundColor:redBiege, borderRadius:25, marginLeft:"40%"}} title="Add Cart" 
                                    onPress={()=>addCart(item)}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            
        </ScrollView>
        )
    // }
}
// Quantity Buttons
// const ButtonPlus = (props) =>{
//     return(
        
//     )
// }
// const ButtonMinus = (props) =>{
//     return(
        
//     )
// }
export const QuantityView = (props) =>{
    const quantity = props.quantity
    const quantityText = quantity.toString();
    return(
        <TextInput textAlign="center" style={{color:darkerGrey,backgroundColor:white,paddingHorizontal:"1%", borderRadius:20, marginHorizontal:3}}
        keyboardType='numeric'
        value={quantityText}
        editable={false}
    />
    )
}
const Incrementer=(props) =>{
    return(
        <View style={{flexDirection:"row"}}>

            <Button   buttonStyle={style.buttonDesign} icon={<Icon type="ionicon" name="remove-outline" size={28}  color={pink}/>} onPress={props.decrement}/>
            <QuantityView quantity={props.quantity}/>
            <Button  buttonStyle={style.buttonDesign}  icon={<Icon type="ionicon" name="add-outline" size={28}color={pink}/>} onPress={props.increment}/>

        </View>
    )
}
//==================================================


export const addCart = (item) =>{
    const checkIfExist = (toFind, list) =>{
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (toFind === item){
                return true
                break
            }else{
                continue
            }
        }
        return false
    }
    switch (CartItems.length) {
        case 0:
            CartItems.push(item)
            break;
    
        default:
            if (checkIfExist(item, CartItems))
            {for (let i = 0; i < CartItems.length; i++) {
                const itemIn = CartItems[i];
                if (item.title == itemIn.title){
                    itemIn.quantity += item.quantity
                    break
                }
            }console.log("exist")

            }else{
                console.log("not")
                CartItems.push(item)

            }

            break;
    }
    
}


