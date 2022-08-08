import { useState } from 'react'
import { Text, View, TextInput, Button, FlatList} from 'react-native'
import { doc, setDoc, addDoc, collection, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { db } from "./src/config/firebaseconfig"

export default () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [contatos, setContatos] = useState([{}])
    const [idContato, setIdContato] = useState('')

    async function listar(){
        const contatosCol = collection(db, 'contatos');
        const contatosSnapshot = await getDocs(contatosCol);
        const contatosList = contatosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContatos(contatosList);
    }

    async function remover(id_contato){
        await deleteDoc(doc(db, "contatos", id_contato));
        setTelefone('');
        setNome('');
        setEmail('');
        setIdContato('');
        listar();
    }

    function atualizar(){
        updateDoc(doc(db, "contatos", idContato), {
            nome: nome,
            email: email,
            telefone: telefone
          }).then(() => {
            //alert("Cadastrado com sucesso")
          }).catch((error) => {
            alert(error)
          })

        setTelefone('');
        setNome('');
        setEmail('');
        setIdContato('');
        listar();
    }

    //async function cadastrar(){
    function cadastrar(){
        //setDoc(doc(db, "contatos", "LA"), {
        //await addDoc(collection(db, "contatos"), {
        addDoc(collection(db, "contatos"), {
            nome: nome,
            email: email,
            telefone: telefone
          }).then(() => {
            //alert("Cadastrado com sucesso")
          }).catch((error) => {
            alert(error)
          })

          setTelefone('');
          setNome('');
          setEmail('');
          listar();
    }

    return (
        <View>
            <Text>Autenticação</Text>
            <TextInput value={nome} placeholder='Nome' onChangeText={setNome} />
            <TextInput value={email} placeholder='E-mail' onChangeText={setEmail}/>
            <TextInput value={telefone} placeholder='Telefone' onChangeText={setTelefone}/>
            <Button title='Cadastrar' onPress={cadastrar}/>
            <Button title='Atualizar' onPress={atualizar}/>
            <Button title='Listar' onPress={listar}/>
            <Text>{'\n\n'}</Text>
            <Text>LISTA DE CONTATOS</Text>
            <Text>{'\n'}</Text>
            <FlatList 
                // de onde vem os dados
                data={contatos}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View>
                    <Text>Contato {item.id}</Text>
                    <Text>Nome: {item.nome}</Text>
                    <Text>E-mail: {item.email}</Text>
                    <Text>Telefone: {item.telefone}</Text>
                    <Button title='Editar' onPress={()=>{
                        setNome(item.nome);
                        setEmail(item.email);
                        setTelefone(item.telefone);
                        setIdContato(item.id);
                    }}/>
                    <Button title='Remover' onPress={()=>{
                        remover(item.id)
                    }}/>
                    <Text>{'\n'}</Text>
                </View>
            }
            />
        </View>
    )
}