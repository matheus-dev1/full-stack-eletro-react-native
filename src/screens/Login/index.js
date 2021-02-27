import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import Logo from '../../../assets/logofull.png';

import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "ines@gmail.com",
    senha: "123"
}

function Login({navigation}) {

    function autenticacao() {
       
        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
            navigation.navigate("Produtos");
        }else {
            Alert.alert("Usuario inválido", "É necessário informar um usuário válido.")
        }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        
        <View style={styles.container}>
           
            <Image source={Logo}>

            </Image>
            <View>
                <Text style={styles.titulo}>Login</Text>
            </View>

            <View style={styles.inputs}>

                <TextInput 
                    placeholder="E-mail" 
                    style={styles.input}
                    value={usuario}
                    onChangeText={(text) => setUsuario(text)}
                />

                <TextInput 
                    placeholder="Senha" 
                    style={styles.input} 
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />

                <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                    <Text style={styles.texto}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


export default Login;