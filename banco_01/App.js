import { Text, View, FlatList } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';

export default () => {

  const firebaseConfig = {
    apiKey: "AIzaSyC5HU7QtmMyTj3s_BBjAQlkmL9khV78YQo",
    authDomain: "banco01-5217b.firebaseapp.com",
    projectId: "banco01-5217b",
    storageBucket: "banco01-5217b.appspot.com",
    messagingSenderId: "139408075881",
    appId: "1:139408075881:web:9f82b01350c2e93d0d46f8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [contatos, setContatos] = useState([{}]);

  async function getContatos(db) {
    const contatosCol = collection(db, 'contatos');
    const contatosSnapshot = await getDocs(contatosCol);
    const contatosList = contatosSnapshot.docs.map(doc => doc.data());
    //return contatosList;
    setContatos(contatosList);
  }
  getContatos(db)

  /*const contatos = [
    
     5,
     4,
     'teste',
  ]
  const contatos = [
    {
      id: 1,
      nome: 'Fabiana',
      email: 'fabianasouza012@gmail.com',
      telefone: '84 99999-9999'
    },
    {
      id: 2,
      nome: 'Fabiana2',
      email: 'fabianasouza012@gmail.com2',
      telefone: '84 99999-99992'
    },
    {
      id: 3,
      nome: 'Fabiana',
      email: 'fabianasouza012@gmail.com',
      telefone: '84 99999-9999'
    },
  ] */

  return (
    <View>
      <Text>Agenda de Contatos</Text>
      <FlatList
        data={contatos}
        renderItem={({ item }) => {
          return (
            <View>
              {/*<Text>{item}</Text>*/}
              {/*<Text>Contato</Text> Testando se o texto aparece */}
              <Text>Nome: {item.nome}</Text>
              <Text>Telefone: {item.telefone}</Text>
              <Text>Email: {item.email}</Text>
            </View>
          )
        }
        }
      />
    </View>
  );
}