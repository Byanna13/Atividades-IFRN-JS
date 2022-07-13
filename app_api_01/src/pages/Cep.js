import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default props => {

  const [cep, setCep] = useState('');
  const [cepResultado, setCepResultado] = useState('');
  {/*const [cepResultado, setCepResultado] = useState({});*/}

  async function buscarCep(){
    const resutado = await axios.get('https://viacep.com.br/ws/'+cep+'/json/');
    setCepResultado(resutado.data);
  }

  return (
    <View>
      <Text>Tela de CEP</Text>
      <TextInput placeholder='CEP somente números' onChangeText={setCep} />
      <Button title='Pesquisar' onPress={buscarCep} />
      <Text>Logradouro: {cepResultado.logradouro} </Text>
      <Text>Bairro: {cepResultado.bairro} </Text>
      <Text>Cidade: {cepResultado.localidade} </Text>
      <Text>Estado: {cepResultado.uf} </Text>
    </View>
  )
}