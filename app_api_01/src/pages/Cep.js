import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default props => {

  const [cep, setCep] = useState('');

  function buscarCep(){

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