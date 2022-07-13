import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default props => {

  const [temp, setTemp] = useState('');
  const [tempResultado, setTempResultado] = useState('');

  async function buscarTemp(){
    const resutado = await axios.get('https://goweather.herokuapp.com/weather/'+temp+'');
    setTempResultado(resutado.data);
  }

  return (
    <View>
      <Text>Tela de Temperatura</Text>
      <TextInput placeholder='Digite a Cidade' onChangeText={setTemp} />
      <Button title='Pesquisar' onPress={buscarTemp} />
      <Text>Temperatura: {tempResultado.temperature} </Text>
      <Text>Vento: {tempResultado.wind} </Text>
    </View>
  )
}