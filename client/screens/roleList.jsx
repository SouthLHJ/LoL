import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import FontText from "../component/fontText";
import RoleItem from "../component/roleItem";
import {categories} from "../data/data-dummy"


function RoleList({navigation,route}) {
    // console.log("!@!@#",props);
    const dim = useWindowDimensions();

    const handleMovePage = (name)=>{
        navigation.navigate("champions",{name : name})
    }

    return (
        <View style={styles.outContainer}>
            <View style={styles.roleContainer}>
                <FlatList data={categories} keyExtractor={(one)=>{return one.id}} 
                renderItem={(({index,item}) =>{
                    return (<RoleItem onMovePage={handleMovePage} item={item}/>)
                })}

                numColumns={dim.height <400 ?"3" : "1"}
                />
            </View>
            
        </View>

    );
}

export default RoleList;

const styles = StyleSheet.create({
    outContainer:{
        flex : 1,
    },
    titleContainer:{
        marginTop : 35,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#000080"
    },
    title : {
        color : "white",
        fontSize : 30,
        marginBottom : 5,
        paddingVertical : 10
    },
    roleContainer:{
        flex : 1,
    },
    

})