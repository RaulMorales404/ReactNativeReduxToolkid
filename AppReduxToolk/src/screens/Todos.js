import React, {useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {useGetTodosByIdQuery, useGetTodosQuery} from '../api';
import Loading from '../components/Loading';

const Todos = () => {
  // const {data, isLoading} = useGetTodosQuery();
  const [id, setId] = useState(1);
  const {data, isLoading} = useGetTodosByIdQuery(id);
  if (isLoading) return <Loading />;

  const nextTodo = () => {
    setId(id + 1);
  };
  const PrevTodo = () => {
    id > 1 ? setId(id - 1) : null;
  };

  return (
    <View>
      <Text>TODOS RTQRY</Text>
      <Text>ISlOADING</Text>
      <Button title="Next pages" onPress={() => nextTodo()} />
      <Button title="Previe pages" onPress={() => PrevTodo()} />
      <ScrollView>
        <Text>{JSON.stringify(data, null, 4)}</Text>
      </ScrollView>
    </View>
  );
};

export default Todos;
