import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

const FavChampsData = React.createContext({
    favChamps : [],
    addFavorite : (id)=>{},
    removeFavorite : (id)=>{}
});

export function FavChampsDataProvider({children}){
    const [favChamps, setFavChamps] = useState([]);

    useEffect(()=>{
        //useEffect는 async 작동으로 만드는 것을 비추천한다. 그래서 그 안에 비동기 함수로 하나를 만들어서 넣어버리기
        async function load(){
            const savedFavorites = await AsyncStorage.getItem("favorites")
            if(savedFavorites !== null){
                setFavChamps(JSON.parse(savedFavorites));
            }
        }
        load();
    },[]);

    //관심 있는 챔프 즐겨찾기 등록 및 해제
    const addFavorite = (id)=>{
        if(!favChamps.includes(id)){
            setFavChamps(current =>  [...current,id]);

            const data = [...favChamps, id]
            AsyncStorage.setItem("favorites",JSON.stringify(data))
        }
    }
    const removeFavorite = (id)=>{
        setFavChamps(current =>{
            const data = favChamps.filter((one)=>one !== id)
            AsyncStorage.setItem("favorites",JSON.stringify(data))
            return current.filter((one)=>one !== id);
        });

    }
    return (<FavChampsData.Provider value={{favChamps,addFavorite,removeFavorite}}>{children}</FavChampsData.Provider>)
}


export default FavChampsData;