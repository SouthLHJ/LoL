import { Image, ImageBackground, Pressable, StyleSheet, View } from "react-native";
import FontText from "./fontText";
import {iconPath} from "./iconPath.js"


function RoleItem({item,onMovePage}) {
    //리플 색깔
    let rippleColor;
    switch(item.name){
        case "Tank" : rippleColor = "#000066"
            break;
        case "Fighter" : rippleColor = "#663300"
            break;
        case "Assassin" : rippleColor = "#660000"
            break;
        case "Mage" : rippleColor = "#0000e6"
            break;
        case "Marksman" : rippleColor = "#003300"
            break;
        case "Support" : rippleColor = "#005266"
            break;
    }
    
    return (
        <View style={styles.outerContainer}>
            <Pressable android_ripple={{color : rippleColor}} style={{flex : 1, justifyContent : "center",}} onPress={()=>{return onMovePage(item.name)}}>
            <View style={styles.innerContainer}>
                <ImageBackground source={iconPath[item.name]} style={styles.image} >
                    <View style={styles.textContainer}>
                        <FontText style={styles.role}>{item.role}</FontText>
                        <FontText style={styles.name}>{item.name}</FontText>
                    </View>
                </ImageBackground>
            </View>
            </Pressable>
        </View>
    );
}

export default RoleItem;

const styles = StyleSheet.create({
    outerContainer : {
        // borderColor : "#00004d",
        // borderWidth : 1,
        borderRadius : 10,
        margin : 8,
        flex :1,
        justifyContent : "center",
        
        height :  200,
        overflow : "hidden",
    },  
    innerContainer : {
        fiex : 1,
        borderRadius : 10,
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
    },

    image :{
        borderRadius : 8,
        marginBottom : 5,
        width : 180,
        height : 180,
        justifyContent  : "flex-end"

    },

    textContainer :{
        flexDirection : "column",
        alignItems : "center",
        backgroundColor : "rgba( 0, 0, 0, 0.5 )",
        
    },  

    name : {
        fontSize : 15,
        color : "white"
    }  ,
    role : {
        fontSize : 20,
        fontWeight : "bold",
        color : "white"

    } 
})
