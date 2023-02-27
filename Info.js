import { StyleSheet, View } from 'react-native';
import MyAppText from './MyAppText';
import 'react-native-url-polyfill/auto'

export default function Info(props){
    return(
        <View style = {styles.container}>        
            <MyAppText>{'> ' + props.content}</MyAppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:0,
        marginLeft:20
    }
  });