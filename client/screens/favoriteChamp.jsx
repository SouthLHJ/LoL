import { View } from "react-native";
import FavChamps from "../component/favChamps";
import FontText from "../component/fontText";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function FavoriteChamp() {
    return (  
        <Stack.Navigator>
            <Stack.Screen name="favChamps"  component={FavChamps} options={{title: "즐겨찾기", headerShown : false} }/>
        </Stack.Navigator>
    );
}

export default FavoriteChamp;