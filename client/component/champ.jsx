import { Image, ImageBackground, Pressable, StyleSheet, View } from "react-native";
import FontText from "./fontText";

function SimpleChamp({item,onMovePage}) {
    return (  
        <View key={item.id} style={styles.champContainer}>
            <Pressable  style= {{flex : 1}} onPress={()=>{return onMovePage(item)}}>
                <ImageBackground source={{uri: item.simpleImage}} style= {{flex : 1,justifyContent : "flex-end"}}>
                <View style={styles.textContainer}>
                    <FontText style={styles.name}>{item.name}</FontText>
                    <FontText style={styles.id}>{item.id}</FontText>
                </View>
                </ImageBackground>
            </Pressable>
        </View>
    );
}

export default SimpleChamp;

const styles = StyleSheet.create({
    champContainer : {
        flex : 1,
        height : 150,
        marginBottom : 2,
    },
    textContainer:{
        flexDirection : "column",
        alignItems  : "flex-end",
        backgroundColor : "rgba(0,0,0,0.6)",
        paddingHorizontal : 5
    },
    name : {
        fontSize : 20,

        color : "white",
        fontWeight : "bold",

    },
    id :{
        fontSize : 12,

        color : "white",

        marginLeft : 5,
    },
})