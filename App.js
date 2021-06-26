import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';



import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView} from "@react-navigation/drawer";
import { white, pink, redBiege, grey, mintGreen } from "./AppMain/comp"
import { ItemInfo, ScreenContainer, HomeScreen, CartScreen, ProfileScreen, CategorySelectedScreen, ContactScreen, AddressCheckoutScreen, OrderScreen } from './AppMain/screens';
import React,{Component} from 'react';

// import { HomeComponent, CategoryComponent} from './AppMain/homeComp';
import { Icon, Button, Badge, withBadge} from 'react-native-elements';
import { CartItems } from './AppMain/cartComp';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const CheckStack = createStackNavigator();

//Main Screen
export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  
  return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={{
            backgroundColor:redBiege,
            drawerStyle:250,
            flex:1,
            
            paddingTop:100,
          }}
          drawerContentOptions={{
            activeTintColor: pink,
            inactiveTintColor:white,
            
            itemStyle:{justifyContent:"flex-end", paddingTop:10}
          }}
          initialRouteName="Home"
          >
          <Drawer.Screen name="Home" component={RootMain} options={{drawerLabel:"Home", drawerIcon: config=> <Image style={{width: 25, height:25}} source={require('./assets/home.png')}/>}}/>
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{drawerLabel:"Profile", drawerIcon:config => <Image source={require('./assets/profile.png')}/>}}/>
          <Drawer.Screen name="Orders" component={OrderScreen} options={{drawerLabel:"Orders", drawerIcon:config=><Image source={require('./assets/order.png')} />}}/>
          <Drawer.Screen name="About" component={Hello} options={{drawerLabel:"About Us", drawerIcon:config=><Image source={require('./assets/about.png')} />}}/>
          <Drawer.Screen name="Feedback" component={Hello} options={{drawerLabel:"Send Feedback", drawerIcon:config=><Image source={require('./assets/Feedback.png')} />}}/>
          <Drawer.Screen name="Contact" component={ContactScreen}  options={{drawerLabel:"Contact Us", drawerIcon:config=><Image source={require('./assets/contact.png')} />}}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
export var ShopBadge = CartItems.length === 0 ? (Icon): withBadge()(Icon)
function RootMain({navigation}){

 
  return(
    
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen
        options={{
          headerRightContainerStyle:{marginRight:"2%"},

          headerTitleAlign:"center",
          headerTitle: () =>  <Image style={buttonStyle.nav, iconStyle.flexSide} source={require('./assets/sm-logo.png')}/>, 
          headerRight: () => <Button 
          buttonStyle={{backgroundColor:white}} 
          icon={<ShopBadge type="simple-line-icon" size={25} color={redBiege} name="handbag"  />} 
          onPress={()=>{navigation.navigate("Cart")}}/>,
          headerLeft: () => <Button buttonStyle={{backgroundColor:white}} icon={<Icon type="ionicon"  size={30} color={redBiege} name={Platform.OS === 'ios' ? "ios-menu": "menu-outline"}/>} onPress={()=>navigation.openDrawer()}/>,
        }}
        name="HomeMain"
        component={HomeScreen}
        
      />
      <Stack.Screen 
        name="ItemInfo"
        key="ItemInfo_"
        component={ItemInfo}
        options={{
          headerRightContainerStyle:{marginRight:"2%"},
          headerRight: () => 
          (<Button 
          buttonStyle={{backgroundColor:white}} 
          icon={<ShopBadge type="simple-line-icon" size={25} color={redBiege} name="handbag" /> } 
          onPress={()=>{navigation.navigate('Cart')}}/>), // backet<ion-icon name="bag-outline"></ion-icon>
          headerLeft: ()=> <Button 
          buttonStyle={{backgroundColor:white}} 
          icon={<Icon type="ionicon"  size={25} color={redBiege} name="arrow-back-outline"/>} 
          onPress={()=>navigation.navigate("HomeMain")}/>,
          title:"Detail"
        }}
      />
      <Stack.Screen
        name="Cart"
        key="Cart"
        component={CartScreen}
        
        options={{
          headerTitle: "Cart",
          
          headerLeft: ()=> <Button 
          buttonStyle={{backgroundColor:white}} 
          icon={<Icon type="ionicon"  size={25} color={redBiege} name="arrow-back-outline"/>} 
          onPress={()=>navigation.goBack()}/>}}
      />
      <Stack.Screen
        name="Category"
        component={CategorySelectedScreen}
        options={{
          headerRightContainerStyle:{marginRight:"2%"},
          headerRight: () => 
          (<Button 
          buttonStyle={{backgroundColor:white}} 
          icon={<ShopBadge type="simple-line-icon" size={25} color={redBiege} name="handbag" /> } 
          onPress={()=>{navigation.navigate('Cart')}}/>), // backet<ion-icon name="bag-outline"></ion-icon>
          headerLeft: ()=> <Button 
          buttonStyle={{backgroundColor:white}} 
          icon={<Icon type="ionicon"  size={25} color={redBiege} name="arrow-back-outline"/>} 
          onPress={()=>navigation.navigate("HomeMain")}/>,
          
        }}
      
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{headerShown:false}}
      />
  </Stack.Navigator>
  )
}
// @connect(state => ({
//   notifications: state.notifications,
// }))

function CheckoutScreen({navigation}){
  return(
    <CheckStack.Navigator>
      <CheckStack.Screen 
        name="Addressdetails"
        component={AddressCheckoutScreen}
        options={{
          headerLeft: ()=> <Button 
          buttonStyle={{backgroundColor:"transparent"}} 
          icon={<Icon type="ionicon"  size={25} color={redBiege} name="arrow-back-outline"/>} 
          onPress={()=>navigation.goBack()}/>,
          headerTitle:"Checkout",
          headerStyle:{backgroundColor:"transparent"},
        headerTintColor:redBiege,
          headerTitleAlign:"center"
        }}
      />
    </CheckStack.Navigator>
  )
}

function Hello(){
  return(
    <ScreenContainer>
      <View style={{justifyContent:"center", alignItems:"center"}}>
      <Text>Hello</Text>
    </View>
    </ScreenContainer>
    
    
  )
}


const styles = StyleSheet.create({
  navi:{
    flex:.11,
    alignItems: "center",
    position:"relative",
  },
  navMain:{
    bottom: "-8%",
    flexDirection:"row",
    width: "100%",
    height:"50%",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor: grey,
    position:"relative",

  }

});

const buttonStyle = StyleSheet.create({
  nav:{
    borderRadius: 50,

  }
})

const iconStyle = StyleSheet.create({
  default: {
    width:100,
    height:100,
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:grey,
  },
  iconFit:{
    height:30,
    width:120,

  },
  flexPlace:{
    flex:0.75,
    height:"100%",
    
    justifyContent:"center",
    alignItems:"center",
    
  },
  flexSide:{
    height:30,
    justifyContent:"center",
    alignItems:"center",

  },


})

