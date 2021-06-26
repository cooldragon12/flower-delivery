import React, { useState } from 'react'
import { View, Image, TouchableHighlight, TextInput, Text, ScrollView, Platform} from 'react-native'
import {Button, CheckBox, ButtonGroup, Icon} from 'react-native-elements'
// import {SwipeListView} from 'react-native-swipe-list-view'
import { grey, pink, redBiege, darkerGrey, white, style } from './comp'
import { useNavigation } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import {style} from './productComp'




export function CartComponent(){
    var [listItemAdded, setListData] = useState(
        CartItems.map((item, index)=>({
            key:index.toString(),
            title: item.title,
            price:item.price,
            img:item.img,
            contents:item.contents,
            quantity:item.quantity,
        }))
    );

    
    const [amount, setAmount] = useState(TotalGet(listItemAdded))
    let getNewTotal = ()=> setAmount(TotalGet(listItemAdded))
    const navigation = useNavigation();

    const [selectedAll, setSelectedAll] = useState(true)
    let checkAll = ()=>setSelectedAll(selectedAll === false? true:false)        
        
       
    const deleteRow=(item, list) =>{
        
        const updatedData = [...list]
        const prevIndex = list.find(items => items.key ===item.key)
        updatedData.splice(prevIndex, 1);
        setListData(updatedData);
    }
    const quantityChange = (item,quantity)=>{

        item.quantity = quantity
    }

    function TotalGet(list){
        let amount = 0
        if (list.length > 0){
            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                amount += item.price*item.quantity
                
            }
        }
        
        console.log(amount)
        return amount.toFixed(2)
    
    }
    const TemplateItem = (data)=>{
        var quant = data.item.quantity
        var item = data.item
        var itemkey = data.item.key
    
        const [checkItem, setCheckItem] = useState(data.select)
        let checker = ()=>setCheckItem(checkItem === false ? true:false)
        
        
        const [quantity, setQuantity] = useState(quant)
        const incrementQuantity = () => setQuantity(quantity + 1);item.quantity = quantity; getNewTotal()
        let decrementQuantity= () => quantity === 1 ? setQuantity(1) :setQuantity(quantity- 1);item.quantity = quantity;getNewTotal()
    
        return(
            <TouchableHighlight style={{flexDirection:"row", marginHorizontal:"1%", height:125}}>
                <View style={{flexDirection:"row",alignItems:"center",  width:"95%", height:"100%", borderColor:grey, borderWidth:.5}}>
                    <CheckBox  checkedColor={pink} key={data.item.key} 
                    checked={checkItem === false? true:data.allSelect} 
                    onPress={checker}/>
                    <View style={{width:"25%", height:"100%", justifyContent:"center", alignItems:"center"}}>
                        <Image resizeMode="center"  style={{width:"90%", height:80}} source={data.item.img}/>
                    </View>
                    <View style={{flexDirection:"column", width:"100%"}}>
                        <Text style={{fontWeight:"bold", fontSize:16, color:darkerGrey}}>{data.item.title}</Text>
                        <Text style={{fontWeight:"bold", color:redBiege}}>Php {data.item.price}</Text>
                        <View style={{width:"50%"}}>
                            <View style={{alignItems:"flex-end", flexDirection:"row-reverse"}}>
                                <Button buttonStyle={style.buttonDesign} icon={<Icon type="ionicon" name="add-outline"/>} onPress={incrementQuantity}/>
                                <TextInput textAlign="center" style={{color:darkerGrey,backgroundColor:white,paddingHorizontal:"1%", borderRadius:20, marginHorizontal:3}}
                                    keyboardType='numeric'
                                    value={quantity.toString()}
                                    editable={false}
                                />
                                <Button buttonStyle={style.buttonDesign} icon={<Icon type="ionicon" name="remove-outline"/>} onPress={decrementQuantity}/>
                            </View>
                        </View>
                    </View>
                </View>
                
            </TouchableHighlight>
        )
    }
    
    
    
    
    return(
            
            
            listItemAdded.length === 0 ? <View style={{paddingBottom:75,flex:1,alignItems:"center", justifyContent:"center"}}>
                    <Icon type="simple-line-icon" color={pink}style={{margin:15}} name="handbag"size={150}/>
                    <Text style={{ fontWeight:"bold", fontSize:25 }} >No items in the cart</Text>
                    <Text style={{ margin:5,color:darkerGrey }}>Hit the gray button down below to browse some flowers</Text>
                    <Button buttonStyle={{ margin:15,paddingHorizontal:20,paddingVertical:15,backgroundColor:redBiege, borderRadius:50, }} title="Start Shopping" onPress={()=>navigation.navigate('HomeMain')}/>
                </View>:
                <ScrollView style={{backgroundColor:white, height:"100%"}}>
                <View style={{backgroundColor:white, width:"100%"}}>
                    <View style={{flexDirection:"row", alignItems:'center', justifyContent:"flex-start", position:'relative'}}>
                        <CheckBox containerStyle={{backgroundColor:white, borderWidth:0}} textStyle={{color:darkerGrey}} title="Select All" checkedColor={pink} size={28} 
                        checked={selectedAll} onPress={checkAll}
                        />
                        <View style={{flexDirection:"row",flex:1,marginRight:"1%", alignItems:'center', justifyContent:"flex-end",}}>
                        <Button buttonStyle={{backgroundColor:white}} onPress={selectedAll === true ? ()=>setListData(listItemAdded[0]):()=>{}} icon={<Icon type="ionicon" color={darkerGrey} size={28} name="trash-outline"/>}/>
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:"center", flexDirection:"column"}}>
                    {
                        listItemAdded.map((item, index)=><TemplateItem key={index} item={item} select={selectedAll} allSelect={selectedAll}
                            
                        />)
                    }
                    </View>
                </View>
                <View style={{ flexDirection:"row", justifyContent:"center"}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}> 
                        <Text style={{fontSize:17}}>Total:</Text>
                        <TextInput textAlign="center" style={{fontSize:20, fontWeight:"bold",color:darkerGrey,paddingHorizontal:"1%", borderRadius:20, marginHorizontal:3}}
                            keyboardType='numeric'
                            value={amount}
                            editable={false}
                            
                        />
                    </View>
                    <Button titleStyle={{color:white, fontSize:17, fontWeight:"bold"}} title="Checkout"  buttonStyle={{margin:"6%",backgroundColor:redBiege,borderRadius:15, paddingHorizontal:"8%", paddingVertical:"9%"}} onPress={()=>navigation.navigate('CheckoutScreen')}/>
                </View>
                
            </ScrollView>
    )
}




export var CartItems = [
    // {
    //     id:1,
    //     description:"",
    //     title:"Blushing Blossoms",
    //     price:1299.99,
    //     img:require("../flowerpic/BlushingBlooms.png"),
    //     contents:`Small Roses Bouquet
    //     2 pcs Pink Lillies
    //     3 pcs Unbloomed Pink Lillies`,
    //     quantity:1,
    // }
]

