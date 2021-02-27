import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Logo from '../../../assets/logofull.png';
import styles from './styles';

const prods = [
    {
        produto: "Aspirador de Pó - R$167,00"
    },
    {
        produto: "Ventilador - R$169,00"
    },
    {
        produto: "Centrifuga - R$349,00"
    },
    {
        produto: "Sanduicheira - R$79,90"
    },
    {
        produto: "Liquidificador - R$104,90"
    },
    {
        produto: "Panela Elétrica - R$119,90"
    }
]

function Produtos({navigation}) {

  return (
    
      <View style={styles.container}> 

        <Image source={Logo} style={styles.logo}>

        </Image>
          <Text style={styles.titulo}>Produtos</Text>
        {
            prods.map((prods, index) =>
            <Text key={index} style={styles.texto}>{prods.produto}</Text>      
            )
        }

        <TouchableOpacity
            style={styles.btn}
            onPress={() => 
            navigation.navigate('Home')}>
            <Text style={styles.btnTexto}>Voltar para a Página Inicial</Text>
        </TouchableOpacity>
            
       </View>
  )
}

export default Produtos;