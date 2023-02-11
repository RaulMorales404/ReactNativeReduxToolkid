import React from 'react';
import {View, Text, FlatList, Button, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getPokemons} from '../slices/pokemon';
import {useGetTodosQuery} from '../api/todosApi';

const Pokemon = () => {
  const {pokemons, isLoading, page} = useSelector(state => state.pokemons);


  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <Text style={{color: '#000'}}>Pokemon</Text>
      <Button title="paginate" onPress={() => dispatch(getPokemons(page))} />
      <FlatList
        data={pokemons.results}
        renderItem={({item}) => <Text style={{color: 'red'}}>{item.name}</Text>}
        keyExtractor={pokemon => pokemon.name}
      />

      <Text>TODOS RTKQ</Text>
      <Text>isLoading</Text>
      <Button title="NextTodo" />
    </View>
  );
};

export default Pokemon;
