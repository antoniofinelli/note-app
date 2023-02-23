import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View,Text } from 'react-native';
import MyAppText from './MyAppText';
import Task from './Task';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    priority: '1',
    description: 'This is some description text for the task. This is not the task itself.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    priority: '2',
    description: 'This is some description text for the task. This is not the task itself.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    priority: '1',
    description: 'This is some description text for the task. This is not the task itself.',
  },
];

const Item = ({title, priority, description}) => (
  <Task title = {title} priority = {priority} description = {description}/>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} priority = {item.priority} description = {item.description}/>}
        keyExtractor={item => item.id}
      />
      <Text style = {styles.titleText}>S L I P S T R E A M</Text>
      <Text style = {styles.titleText}>ANTONIO FINELLI 2023</Text>
      
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'black',
    // textAlign:'center',
    // alignItems: 'center',

    padding:20
  },
  titleText:{
    color: 'white',
    fontSize: 14
  }
});
