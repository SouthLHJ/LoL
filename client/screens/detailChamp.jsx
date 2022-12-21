import { useContext, useEffect, useState } from "react";
import { Button, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, View } from "react-native";
import FontText from "../component/fontText";
import {iconPath} from "../component/iconPath"
import { FontAwesome5 ,AntDesign,MaterialCommunityIcons,Ionicons ,Entypo  } from '@expo/vector-icons';
import IconButton from "../component/iconButton";
import FavChampsData from "../context/app-context";

function DetailChamp({navigation,route}) {
    const {favChamps, addFavorite, removeFavorite} = useContext(FavChampsData);


    const [champ, setChamp] = useState([]);
    const [stats, setStats] = useState(false);

    const [icon, setIcon] = useState(favChamps.includes(champ.id));

    const [load, setLoad] = useState(false);


    useEffect(()=>{
        setChamp(route.params.item);
        setLoad(true);
    },[])

    useEffect(()=>{
        //setOption으로 설정해 줄 수 있음
        // console.log(favChamps,champ.id,icon)
        setIcon(favChamps.includes(champ.id))
        navigation.setOptions({
            title : champ.name, headerRight : ()=>{
                return <IconButton onPress={handlePress} name={icon ? "star"  : "star-outlined"}></IconButton>
            }
        })
    },[load, icon])

    const handlePress =()=>{
        if(icon){
            removeFavorite(champ.id)
        }else{
            addFavorite(champ.id)
        }
        setIcon((current)=> !current);

    }

    let detail;

    if(load){
        if(stats){
            detail = (
                <View>
                    <FontText style={styles.blurb}>{champ.blurb}</FontText>
                </View>
            )
        }else{
            detail = (
                <>
                    <FontText style={styles.stats}><AntDesign name="heart" size={15} color="black" /> : {champ.stats.hp}</FontText>
                    <FontText style={styles.stats}><FontAwesome5 name="wine-bottle" size={15} color="black" /> : {champ.stats.mp}</FontText>
                    <FontText style={styles.stats}><MaterialCommunityIcons name="shoe-sneaker" size={15} color="black" /> : {champ.stats.movespeed}</FontText>
                    <FontText style={styles.stats}><Ionicons name="shield" size={15 } color="black" /> : {champ.stats.armor}</FontText>
                    <FontText style={styles.stats}><MaterialCommunityIcons name="bow-arrow" size={15} color="black" /> : {champ.stats.attackrange}</FontText>
                    <FontText style={styles.stats}><MaterialCommunityIcons name="knife-military" size={15} color="black" /> : {champ.stats.attackdamage}</FontText>
                    <FontText style={styles.stats}><Entypo name="menu" size={15} color="black" /><MaterialCommunityIcons name="knife-military" size={15} color="black" /> : {champ.stats.attackspeed}</FontText>
                </>
            )
        } 
    }else{
        detail = null
    }

    return (  
        <>
            {load ?
                <View style={styles.container}>
                    <View style={{flex: 4, alignItems :"center"}}>
                        <ImageBackground source={{uri : champ.fullImage}} style={styles.image} >
                            <View style={styles.info}>
                                <View style={styles.nameId}>
                                    <FontText style={styles.name}>{champ.name}</FontText>
                                    <FontText style={styles.id}>{champ.id}</FontText>
                                </View>
                                <View style={styles.tagsContainer}>
                                    {champ.tags.map((one)=>{
                                        return (<FontText key={one} style={styles.tages}>{one}</FontText>)
                                    })}
                                </View>
                                <FontText style={styles.title}>{champ.title}</FontText>
                            </View>
                        </ImageBackground>

                    </View>

                    <View style={styles.viewBtn}>
                        <Pressable onPress={()=>{setStats(false)}}> 
                            <View>
                                <FontText style={styles.detail}>기본 스탯 보기</FontText>
                            </View>
                        </Pressable>
                        <Pressable onPress={()=>{setStats(true)}}> 
                            <View>
                                <FontText style={styles.detail}>스토리 상세보기</FontText>
                            </View>
                        </Pressable>
                        
                    </View>
                    <ScrollView style={{flex : 5, height: 200 , marginHorizontal : 10}}>
                        {detail}
                    </ScrollView>
                </View>
             : <FontText style={{fontSize : 10}}>로오오오오도이이잉이이이이잉</FontText>}
        </>
    );
}

export default DetailChamp;

const styles = StyleSheet.create({
    container :{
        flex : 1,
        height : 300
    },
    image:{
        flex : 1,
        width : 300,
        resizeMode: "stretch",
        justifyContent: "flex-end"
    },

    info : {
        flexDirection : "column",
        alignItems : "flex-end",
        marginRight : 5,
        paddingVertical : 5,

        backgroundColor : "rgba(0,0,0,0.5)"
    },
    nameId : {
        flexDirection : "row",
        alignItems : "flex-end"
    },
        name : {
            fontSize : 15,
            color : "white",
            fontWeight :"bold"
        },
        id : {
            fontSize : 10,
            color : "white"
        },
    title : {
        fontSize : 15,
        color : "white"
    },

    tagsContainer:{
        flexDirection : "row",
        alignItems : "flex-end"
    },  
    tages : {
        fontSize : 15,
        color : "white",
        marginLeft : 10
    },


    viewBtn :{
        flexDirection : "row",

    },  
    blurb :{
        fontSize : 15,
        color : "black",
        lineHeight : 30

    },
    detail : {
        fontSize : 15,
        color : "blue",
        marginLeft : 10
    },
    stats : {
        fontSize : 15,
        color : "black"
    }
})