import { Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import { app } from './src/config/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function cadastrar() {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Cadastrou");
        setEmail('');
        setSenha('');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //menssagem de alerta
        alert(errorMessage);
        // ..
      });
  }

  function autenticar() {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert('Autenticou');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //menssagem de alerta
        alert(errorMessage);
      });
  }

  function desconectar() {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('Desconectado');
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  function verificar(){
    const auth = getAuth(app);
    if(auth.currentUser){
      alert(auth.currentUser.email);
    }else{
    alert('Não tem nenhum uruário autenticado');
    }
  }

  return (
    <View>
      <TextInput placeholder='E-mail' onChangeText={setEmail} />
      <TextInput placeholder='Senha' onChangeText={setSenha} secureTextEntry={true} />

      <Button color='#00FFFF' title='Cadastrar' onPress={cadastrar} />
      <Button color='#00FFFF' title='Autenticar' onPress={autenticar} />
      <Button color='#00FFFF' title="Verificar Usuário Autenticado" onPress={verificar} />
      <Button color='pink' title="Logout" onPress={desconectar} />
    </View>
  )
}