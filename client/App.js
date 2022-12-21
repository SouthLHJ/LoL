/* 폰트 사용 -> npx expo install expo-font */
// import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import FontText from './component/fontText';


import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import RoleList from './screens/roleList';
import Champions from "./screens/champions";

/*
원활한 navigation 효과를 위해 react native앱에서는 
third party library를 활용하는데 React Navigation를 활용한다.
*/
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import DetailChamp from "./screens/detailChamp";
import FavoriteChamp from "./screens/favoriteChamp";
import SearchUser from "./screens/searchUser";
import { FavChampsDataProvider } from "./context/app-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function Menu(){
  return(
    <Drawer.Navigator screenOptions={{headerTitleStyle : {fontFamily : "Gugi-Regular"},headerStyle : {backgroundColor: 'white' },headerTintColor : "black" ,drawerActiveBackgroundColor :"black",drawerActiveTintColor :"white"}} >
      <Drawer.Screen name="roleList" options={{title: "역할군", drawerIcon : ({color})=><MaterialIcons name="group" size={24} color={color} />}} component={RoleList} />
      <Drawer.Screen name="favorite" options={{title: "즐겨찾기",  drawerIcon : ({color})=><Entypo name="star" size={24} color={color} />}} component={FavoriteChamp} />
      <Drawer.Screen name="summaryUser" options={{title: "유저검색",  drawerIcon : ({color})=><Entypo name="star" size={24} color={color} />}} component={SearchUser} />
    </Drawer.Navigator>
  )
}

export default function App() {

  const [screen, setScreen] = useState(0);

  useEffect(()=>{
    // fetch("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/cler",
    // {
    //   "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    //   "Origin": "https://developer.riotgames.com",
    //   "X-Riot-Token": "RGAPI-96cd4a33-23b3-4914-99ac-6691898753df"
    // })
    // .then((rcv)=>{
    //   console.log(rcv);
    // }).catch((err)=>{
    //   console.log(err.message)
    // })
  },[])


  const [fontsLoaded] = useFonts({
    'GothicA1-Black': require('./assets/fonts/GothicA1-Black.ttf'),
    'GothicA1-Bold': require('./assets/fonts/GothicA1-Bold.ttf'),
    'GothicA1-ExtraBold': require('./assets/fonts/GothicA1-ExtraBold.ttf'),
    'GothicA1-SemiBold': require('./assets/fonts/GothicA1-SemiBold.ttf'),
    'GothicA1-Light': require('./assets/fonts/GothicA1-Light.ttf'),
    'GothicA1-Medium': require('./assets/fonts/GothicA1-Medium.ttf'),
    'GothicA1-Regular': require('./assets/fonts/GothicA1-Regular.ttf'),
    'GothicA1-Thin': require('./assets/fonts/GothicA1-Thin.ttf'),
    "Gugi-Regular"  : require('./assets/fonts/Gugi-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // 스크린

  return (
    <>
      <StatusBar style="auto" />
      <FavChampsDataProvider> 
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerTitleStyle : {fontFamily : "Gugi-Regular"},headerStyle : {backgroundColor: 'white' },headerTintColor : "black"}}>
            <Stack.Screen name="menu" component={Menu}  options={{title: "Menu", headerShown : false}} />
            <Stack.Screen name="champions"  component={Champions} options={{title: "챔프"}}/>
            <Stack.Screen name="detailChamp" component={DetailChamp} options={{title: "Champion"}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </FavChampsDataProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text : {
    fontSize : 30,
    // fontWeight : "bold",
  }

});
