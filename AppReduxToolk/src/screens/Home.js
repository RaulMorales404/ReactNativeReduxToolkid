import React, {useEffect} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, moreValue} from '../slices/counter';
import {useNavigation} from '@react-navigation/native';
import {store} from '../app/Store';
import {getPokemons} from '../slices/pokemon';
import Loading from '../components/Loading';

const Home = () => {
  const {counter} = useSelector(state => state.counter);
  const {isLoading} = useSelector(state => state.pokemons);
  // const pokemons = store.getState().pokemons;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getPokemons());
    return () => {};
  }, []);

  console.log(isLoading ? 'cargando' : 'no cargando');
  if (isLoading) return <Loading />;

  return (
    <View>
      <Text>Hola {counter}</Text>
      <Button title={`+1 `} onPress={() => dispatch(increment())} />
      <Button title={`-1`} onPress={() => dispatch(decrement())} />
      <Button
        title={`more value `}
        onPress={() =>
          dispatch(
            moreValue({
              nombre: 'fermanndo',
              age: 50,
            }),
          )
        }
      />
      <Button title="Pokemons" onPress={() => navigation.navigate('Pokemon')} />
      <Button title="Todos" onPress={() => navigation.navigate('Todos')} />
      <ScrollView>
        <Text>{JSON.stringify(store.getState('state'), null, 4)}</Text>
      </ScrollView>
    </View>
  );
};

export default Home;
