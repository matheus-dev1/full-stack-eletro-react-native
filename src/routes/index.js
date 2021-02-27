import React from 'react';
import { 
    createAppContainer, 
    createSwitchNavigator
} from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Produtos from '../screens/Produtos';

const Rotas = {
    Home: {
        nome: "Home",
        screen: Home
    },
    Login: {
        nome: "Login",
        screen: Login
    },
    Produtos: {
        nome: "Produtos",
        screen: Produtos
    },
}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);