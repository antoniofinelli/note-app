import { StyleSheet, View } from 'react-native';
import MyAppText from './MyAppText';
import MyAppHeader from './MyAppHeader';

export default function Task(props){
    return(
        <View style = {styles.container}>        
            <MyAppHeader>
                <MyAppHeader style = {[styles.red, styles.priority]}>
                {"P" + props.priority}
                </MyAppHeader>
                {props.title}
            </MyAppHeader> 

            <MyAppText style = {styles.Task}>
                {props.description}
            </MyAppText>
        </View>
    )
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
        fontWeight: 'light',
    },
    priority:{
        marginRight: 15
    },
    container:{
        margin:10,
    }
  });