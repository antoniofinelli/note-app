import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View,Text, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { supabase } from './initSupabase'
import Task from './Task';
import 'react-native-url-polyfill/auto'

const Item = ({id, title, priority, description, created_at}) => (
  <Task id = {id} title = {title} priority = {priority} description = {description} created_at = {created_at}/>
);

export default function App() {
  const [tasks, setTask] = useState();

  //https://github.com/supabase/examples-archive/blob/main/supabase-js-v1/todo-list/expo-todo-list/components/TodoList.tsx
  useEffect(() => {
    fetchTasks()
  }, [])

  function refresh(){
    console.log('refreshing page')
    fetchTasks()
  }

  //https://github.com/supabase/examples-archive/blob/main/supabase-js-v1/todo-list/expo-todo-list/components/TodoList.tsx
  const fetchTasks = async () => {
    const { data: tasks, error } = await supabase
      .from('tasks')
      .select('*')
      .order('id', { ascending: true })
    if (error) console.log('error', error)
    else setTask(tasks)
  }

  return (
    <View style={styles.container}>
      <Button onPress={refresh} title = "Refresh"/>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Item id = {item.id} title={item.title} priority = {item.priority} description = {item.description} created_at = {item.created_at}/>}
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
