import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default props => {

  const [cep, setCep] = useState('');

  async function buscarCep(){
    const resutado = axios.get('https://viacep.com.br/ws/01001000/json/');
  }

  return (
    <View>
      <Text>Tela de CEP</Text>
      <TextInput placeholder='CEP somente números' onChangeText={setCep} />
      <Button title='Pesquisar' onPress={buscarCep} />
      <Text>Logradouro:</Text>
    </View>
  )
}