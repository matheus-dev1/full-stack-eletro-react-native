  
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logofull.png';
import styles from './styles';


function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}>

            </Image>
            <Text style={styles.texto}> Aqui em nossa loja programadores têm desconto, faça login e aproveite as ofertas!</Text>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textobtn}>Clique aqui para fazer login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Home;