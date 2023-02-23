import { StyleSheet, Text, View } from 'react-native';

export default function MyAppText(props){
    return(
        <Text style={[styles.text, props.style]}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 16
    }
  });
  