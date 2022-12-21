import { useContext, useEffect, useState } from "react";
import { FlatList,ImageBackground,StyleSheet, View } from "react-native";
import FavChampsData from "../context/app-context";
import FontText from "./fontText";
import { champoions } from "../data/data-dummy";

function FavChamps() {
    const {favChamps,addFavorite,removeFavorite} = useContext(FavChampsData);

    const [datas, setDatas] = useState([])
    useEffect(()=>{
        const save = champoions.filter((one) =>{
            return favChamps.includes(one.id);
        })
        setDatas(save);
    },[favChamps])

    return (
        <View>
            {
                datas ?
                <FlatList  data={datas}
                renderItem={(one)=>{
                    // console.log(one.item.id)
                    return (
                        <View style={{flex:1}}>
                            <ImageBackground source={{uri: one.item.simpleImage}} style= {{flex : 1,justifyContent : "flex-end", height:180,width:180}}>
                                
                                <View style={styles.textContainer}>
                                    <FontText style={styles.name}>{one.item.name}</FontText>
                                    <FontText style={styles.id}>{one.item.id}</FontText>
                                </View>
                            </ImageBackground>
                        </View>

                    )
                }}
                /> : null
            }
        </View>
    );
}

export default FavChamps;

const styles = StyleSheet.create({
    cateContainer :{
        flexDirection : "row",
        justifyContent  : "flex-end",
    },
    category : {
        fontSize : 20,
        color : "white",
        padding : 5
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