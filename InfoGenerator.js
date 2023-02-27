import { StyleSheet, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { supabase } from './initSupabase';
import Info from './Info';
import 'react-native-url-polyfill/auto'

const Item = ({id, fk, content}) => (
    <Info id = {id} fk = {fk} content = {content} />
  );
  

export default function InfoGenerator(props){
    const [info, setInfo] = useState();


    //https://github.com/supabase/examples-archive/blob/main/supabase-js-v1/todo-list/expo-todo-list/components/TodoList.tsx
    useEffect(() => {
        fetchInfo()
    }, [])

    //https://github.com/supabase/examples-archive/blob/main/supabase-js-v1/todo-list/expo-todo-list/components/TodoList.tsx
    const fetchInfo = async () => {
        const { data: info, error } = await supabase
        .from('info')
        .select('*')
        .eq('fk', props.fk)
        .order('id', { ascending: true })
        if (error) console.log('error', error)
        else setInfo(info)

        console.log(info)
    }

    return(
        <View style = {styles.container}>        
            <FlatList
                data = {info}
                renderItem={({item}) => <Item id = {item.id} fk = {item.fk} content = {item.content}/>}
                keyExtractor={item => item.id}
            />
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