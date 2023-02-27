import { StyleSheet, View } from 'react-native';
import MyAppText from './MyAppText';
import MyAppHeader from './MyAppHeader';
import InfoGenerator from './InfoGenerator';
import 'react-native-url-polyfill/auto'

export default function Task(props){
    return(
        <View style = {styles.container}>        
            <MyAppHeader>
                <MyAppHeader style = {[styles.yellow, styles.priority]}>
                {"P" + props.priority +" "}
                </MyAppHeader>
                {props.title}
            </MyAppHeader> 
            <MyAppText>
                {'Date : ' + props.created_at}
            </MyAppText>
            <MyAppText style = {styles.Task}>
                {props.description}
            </MyAppText>
            <InfoGenerator fk = {props.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    yellow: {
        color: 'yellow',
        fontWeight: 'light',
    },
    priority:{
        marginRight: 15
    },
    container:{
        margin:10,
    }
  });