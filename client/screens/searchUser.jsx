import { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import SearchUserApi from "../api/searchUser";
import FontText from "../component/fontText";

const searchUserApi = new SearchUserApi(`http://192.168.4.35:8080`);


function SearchUser() {
    const [inText, setInText] = useState();
    const [userData, setUserData] =useState();

    const handleSearch = ()=>{
        searchUserApi.find(inText)
         .then((rcv)=>{
            console.log(rcv);
            setUserData(rcv);
         })

    }

    return (  
        <View>
            <TextInput style={styles.input} onChangeText={(p)=>setInText(p)} />
            <Button title="찾기" onPress={handleSearch}/>
            {
                userData && (
                    <>
                        <FontText style={styles.text}>유저이름 : {userData.name}</FontText>
                        <FontText style={styles.text}>유저레벨 : {userData.summonerLevel}</FontText>
                        <FontText style={styles.text}>플레이시간 : {(Date.now(userData.revisionDate))}</FontText>
                    </>
                )
            }
        </View>
    );
}

export default SearchUser;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    text :{
        fontSize : 20
    }
});