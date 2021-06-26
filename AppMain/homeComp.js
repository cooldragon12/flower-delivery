// ./AppMain/homeComp.js
import {Button, Header, Card, Icon} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  
    } from 'react-native';

import React from 'react';

import { white, pink, grey, mintGreen, redBiege } from './comp';

import {items, items2} from '../item_fetcher';

import { useNavigation } from '@react-navigation/native'

import {CartItems} from './cartComp'

import {addCart} from './productComp'

function CategoryGather(category, list, list2){
    var listFeatured =[]
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if(item.category == category){
            listFeatured.push(item)
        }
    }
    for (let i = 0; i < list2.length; i++) {
        const item = list2[i];
        if(item.category == category){
            listFeatured.push(item)
        }
    }
    return listFeatured
}

function featuredGather(listItems, listItems2){
    var listFeatured =[]
    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];
        if(item.featured){
            listFeatured.push(item)
        }
    }
    for (let i = 0; i < listItems2.length; i++) {
        const item = listItems2[i];
        if(item.featured){
            listFeatured.push(item)
        }
    }
    return listFeatured
}
function bestGather(listItems, listItems2){
    var listFeatured =[]
    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];
        if(item.bestSeller){
            listFeatured.push(item)
        }
    }
    for (let i = 0; i < listItems2.length; i++) {
        const item = listItems2[i];
        if(item.bestSeller){
            listFeatured.push(item)
        }
    }
    return listFeatured
}
export const HomeComponent = () => {
    const featuredItem = featuredGather(items, items2)
    const bestItem = bestGather(items, items2)
    return(
        // Featured
        // Budget Deal 
        // Best Sellers
        <ScrollView style={{backgroundColor:white}}>
            <View style={{marginVertical:12}}>
                <Text style={style.title,style.addFontMore} h1>Featured</Text>
                <ScrollView horizontal={true}>
                    {
                        featuredItem.map((item,index)=>{
                            return <FeaturedItem key={index} item={item}/>
                        })
                    }
                </ScrollView>
            </View>
            
            <View style={{marginVertical:12}}>
                <Text style={style.title, style.addFontMore} h1>Budget Deals</Text>
                <View style={{flex:1}}>
                    <ScrollView horizontal={true}>
                        {
                            bestItem.map((item, index)=>{
                                return <HorizontalItem key={index} item={item}/>
                            })
                        }
                    </ScrollView>
                </View>
            </View>
            <View style={{marginVertical:12}}>
                <Text style={style.title, style.addFontMore} h1>Best Sellers</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{flexDirection:"column", flex:.5}}>
                    {
                    items2.map((
                        item
                    ) =>{
                        return(
                            <VerticalItem 
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                img={item.img}
                                description={item.description}
                                contents={item.contents}
                                ratings={item.ratings}
                            />
                        )
                    })
                }
                    </View>
                    <View style={{flexDirection:"column", flex:.5}}>
                    {
                    items.map((
                        item
                    ) =>{
                        return(
                            <VerticalItem 
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                img={item.img}
                                description={item.description}
                                contents={item.contents}
                                ratings={item.ratings}

                            />
                        )
                    })
                }
                    </View>

                </View>
            </View>
            </ScrollView>
    )
};
export function CategoryComponent(){
    return(
        <ScrollView>
            <View  style={{alignItems:"center"}}>
                <CategoryItem img={require('../flowerpic/Jade.png')} name="Valentines"  category="Valentines"/>
                <CategoryItem img={require('../flowerpic/SweetRosieBirthdayBundle.png')} name="Birthdays" category="Birthdays"/>
                <CategoryItem img={require('../flowerpic/CloudsOfAffection.png')}name="For Loved Ones" category="ForLovedOnes"/>
                <CategoryItem img={require("../flowerpic/DivineFeminine.png")} name="Thank You Moments" category="ThankYouMoments"/>
                <CategoryItem img={require("../flowerpic/PuffyPurple.png")} name="Congratulations" category="Congratulations"/>
                <CategoryItem img={require("../flowerpic/Evergreen.png")} name="General Occassions" category="GeneralOccassions"/>
            </View>
            

        </ScrollView>
    )
  };

function HorizontalItem(props){
    const navigate = useNavigation().navigate
    const item = {
        title: props.item.title,
                price: props.item.price,
                img: props.item.img,
                description: props.item.description,
                contents: props.item.contents,
                rating: props.item.ratings,
    }
        return(
            <TouchableOpacity onPress={()=>navigate('ItemInfo', {
                title: item.title,
                price: item.price,
                img: item.img,
                description: item.description,
                contents: item.contents,
                rating: item.ratings,
            })}>
                <Card containerStyle={style.transCont}>
                    <View style={{ width:"100%",flexDirection:"row",}}>
                        {/* <View style={style.transPic}> */}
                            <Card.Image placeholderStyle={{zIndex:3}}  containerStyle={style.transPic} source={item.img}/>
                        {/* </View> */}
                        <View style={style.transInfo}>
                            <Card.Title style={style.title,{textAlign:"left", fontSize:20}}>{item.title}</Card.Title>
                            <Text style={style.description}>{item.description}</Text>
                            <Text style={style.price, {textAlign:"left", fontWeight:"bold", color:redBiege}}>Php{item.price}</Text>

                            <TouchableOpacity style={{alignSelf:"flex-end"}} onPress={() =>{addCart(item)}}>
                                <View style={{ backgroundColor:redBiege, borderRadius: 10, width:"25%", alignItems:"center", padding:3}}>
                                    {/* <Image  source={require('../assets/add_cart.png')}/> */}
                                <Icon type="material-community" name="cart-plus" color="white" size={23}/>

                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Card>
                
            </TouchableOpacity>
        );
    // }
    
}


function VerticalItem (props){
    const navigate = useNavigation().navigate;

    const item = {
        title: props.title,
        price: props.price,
        img: props.img,
        description: props.description,
        contents: props.contents,
        ratings: props.ratings,
        quantity:1,
    }
        return(
            <TouchableOpacity onPress={()=>navigate('ItemInfo',{
                title: item.title,
                price: item.price,
                img: item.img,
                description: item.description,
                contents: item.contents,
                ratings: item.ratings,
            })}>
                <Card containerStyle={{borderRadius:20, shadowColor:pink, shadowRadius:10}}>
                        <Card.Image style={{borderColor:pink, borderWidth:1}} source={item.img}/>
                        <Card.Divider/>
                        <Card.Title style={style.productNameRegular}>{item.title}</Card.Title>
                        <Text style={style.price}h4>Php {item.price}</Text>
                        <TouchableOpacity style={{alignItems:"flex-end"}} onPress={()=>{addCart(item)}}>
                            <View style={{ backgroundColor:redBiege, borderRadius: 10, width:"25%", alignItems:"center", padding:2}}>
                                {/* <Image  source={require('../assets/add_cart.png')}/> */}
                                <Icon type="material-community" name="cart-plus" color="white" size={24}/>
                            </View>
                        </TouchableOpacity>
                </Card>
            </TouchableOpacity>
        )
}



function FeaturedItem(props){
    // render(){
        const navigate = useNavigation().navigate
        return(
            <TouchableOpacity onPress={()=>navigate('ItemInfo', {
                title: props.item.title,
                price: props.item.price,
                img: props.item.img,
                description: props.item.description,
                contents: props.item.contents,
                rating: props.item.ratings,
            })}>
                
                    <Card wrapperStyle={{margin:0, width:"100%",overflow:"visible", flexDirection:"row", elevation:0}}containerStyle={style.solidCont}>
                    
                        <View style={{flexDirection:"column", width:"40%",margin:15}}>
                                <Card.FeaturedTitle style={style.productNameL}>{props.item.title}</Card.FeaturedTitle>
                                <Text style={style.description}h4>{props.item.description}</Text>
                        </View>
                            
                            <Card.Divider/>
                            <Card.Image containerStyle={{width:"50%", height:"120%"}} source={props.item.img} />
                    </Card>
            </TouchableOpacity>
        )
    // }
}
function CategoryItem(props){
    
        const {navigate} = useNavigation()
        const itemList = CategoryGather(props.category, items, items2)
        return(
            <TouchableOpacity onPress={()=>navigate('Category', itemList)}>
                <Card wrapperStyle={{padding:0, margin:0,overflow:"visible"}}  containerStyle={style.categoryItemCont}>
                <View style={style.categoryItemBack}>
                    <ImageBackground imageStyle={{opacity:0.7,width:400, height:200, transform:[{rotateZ:"180deg"}, {translateX:40}]}} blurRadius={6} style={style.imgBackground } source={props.img}>
                        <Image style={{width:"60%", height:"120%", transform:[{rotate:"0deg"}, {translateY:-10}]}} source={props.img}/>
                    </ImageBackground>
                </View>

                <View style={style.categoryItemTitleCont}>
                    <Text style={style.whiteTitle} h1>{props.name}</Text>
                </View>
            </Card>
            </TouchableOpacity>
            
        )
}
export const CategorySelected = (props) => {
    const {listItem} = props

    return(
        <ScrollView style={{backgroundColor:white}}>
            <View style={{flexDirection:"column", flex:.5}}>
                {
                    listItem.map((item)=>{
                        return <VerticalItem 
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                img={item.img}
                                description={item.description}
                                contents={item.contents}
                                ratings={item.ratings}/>
                    })
                }
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
        categoryItemCont:{
            borderRadius: 20,
            backgroundColor: pink,
            width: 350,
            height:200,
            overflow:"hidden"
    
        },
        categoryItemBack:{
           height: "70%", width:"100%",
          
           
           
        },
        categoryItemTitleCont:{
            height:"30%",
            justifyContent: "center",
            alignItems:"center",
            overflow:"hidden"

        },
        
        solidCont:{
            borderRadius:20,
            width:350,
            height:180,
            backgroundColor:pink,
            flexDirection:"row",
            elevation:0,
            shadowOffset: { height: 0, width: 0 },
        },
    
        transCont:{
            borderRadius:20,
            borderColor:pink,
            borderStyle:"solid",
            borderWidth:1,
            width:360,
            height:200,
            shadowColor:pink,
            shadowOffset: { height: 0, width: 0 },

            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center"
        },
    
        transPic:{
            width:"50%",
            borderStyle:"solid",
            borderWidth:2,
            marginVertical: 10,
            marginHorizontal:18,
            borderColor:pink,
            justifyContent:"center",
            alignItems:"center",
        },
        transInfo:{
            width:"40%",zIndex:2, padding:7,
            justifyContent:'flex-start',
            alignItems:"flex-start",
            flexDirection:"column"
        },
        
        imgBackground: {
            
            resizeMode: "cover",
            justifyContent: "center",
            alignItems:"center"
        },
        
    
        addFontMore:{
            fontSize:23,
            fontWeight:"bold",
            marginHorizontal:20,
        },
        whiteTitle:{
            fontSize:20,
            fontWeight:"bold",
            color:white,
        },
        title:{
            fontSize:20,
            fontWeight:"bold",
        },
        productNameL:{
            fontSize:18,
        },
        productNameRegular:{
            fontSize:15,
    
        },
        productNamesmall:{
            fontSize:13,
        },
        description:{
            fontWeight:"normal",

            fontSize:11,
        },
        price:{
            fontSize:15,
            fontWeight:"bold",
            color:redBiege,
            textAlign:"center"
        },
        title:{
            fontSize:20,
            fontWeight:"bold",
            
        },
        
    })