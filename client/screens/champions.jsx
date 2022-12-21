import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import SimpleChamp from "../component/champ";
import FontText from "../component/fontText";

import {champoions} from "../data/data-dummy"

function Champions({navigation,route}) {
    const [champs , setChamps] = useState([]);
    const dim = useWindowDimensions();
    console.log(dim)

    //배경색
    let backgroundColor ;
    switch(route.params.name){
        case "Tank" : backgroundColor = "#000066"
            break;
        case "Fighter" : backgroundColor = "#663300"
            break;
        case "Assassin" : backgroundColor = "#660000"
            break;
        case "Mage" : backgroundColor = "#0000e6"
            break;
        case "Marksman" : backgroundColor = "#003300"
            break;
        case "Support" : backgroundColor = "#005266"
            break;

    }


    useEffect(()=>{
        const datas = champoions.filter((one)=>{
            return one.tags.includes(route.params.name);
        })
        setChamps(datas);
    },[])

    const handleMovePage = (item)=>{
        
        navigation.navigate("detailChamp",{item : item})
    }   

    const champ = (itemData)=> {
        const { item } = itemData;

        return ( <SimpleChamp item={item} onMovePage={handleMovePage}/>    
        )
    }


    return (  
        <View>
            <View style={[styles.cateContainer,{backgroundColor : backgroundColor}]}>
                <FontText style={styles.category} title={true}>{route.params.name}</FontText>
            </View>
            <FlatList  data={champs} keyExtractor={(one)=>{return one.id}}
             renderItem={champ}
             numColumns={dim.height <400 ?"5" : "3"}
            />

        </View>
    );
}

export default Champions;

const styles = StyleSheet.create({
    cateContainer :{
        flexDirection : "row",
        justifyContent  : "flex-end",
    },
    category : {
        fontSize : 20,
        color : "white",
        padding : 5
    }
})