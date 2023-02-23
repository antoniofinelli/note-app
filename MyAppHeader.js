import { StyleSheet, Text } from 'react-native';

export default function MyAppHeader(props){
    return(
        <Text style={[styles.text, props.style]}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 24
    }
  });
  