import { Text } from 'react-native';

function FontText({style,children,bold,title}) {
    let text;
    if(style.fontWeight){
        if(bold =="extra"){
            text = (<Text style={[style,{fontFamily : "GothicA1-ExtraBold"}]}>{children}</Text>);
        }else if (bold == "semi"){
            text = (<Text style={[style,{fontFamily : "GothicA1-SemiBold"}]}>{children}</Text>);
        }else{
            text = (<Text style={[style,{fontFamily : "GothicA1-Bold"}]}>{children}</Text>);
        }
    }else{
        if(title){
            text = (<Text style={[style,{fontFamily : "Gugi-Regular"}]}>{children}</Text>);

        }else{
            text = (<Text style={[style,{fontFamily : "GothicA1-Regular"}]}>{children}</Text>);
        }
    }

    return ( 
        <>
            {text}
        </>
    );
}

export default FontText;