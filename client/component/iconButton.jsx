import { Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons';

function IconButton({onPress,name}) {
    return (  
        <Pressable onPress={onPress} style={
            ({pressed})=>{ return  pressed && {opacity : 0.6} }}>
            <Entypo name={name} size={30} color="black" />
        </Pressable>
    );
}

export default IconButton;