import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


/**
 * chama-se as Stacks criadas em /Navigators dentro de components... 
 * 
 * Exemplo: component={HomeNavigator}
 */

// Importar aqui todas as Stacks (/Navigators) 
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";
import CompareNavigator from "./CompareNavigator";

// Importar o ícone carrinho (notificação de quantos itens existem dentro do carrinho)
import CartIcon from "../Shared/CartIcon";
// Importar o ícone carrinho (notificação de quantos itens existem dentro do carrinho)
import CompareIcon from "../Shared/CompareIcon";

// Variável TAB tirado diretamente da biblioteca createBottomTabNavigator
const Tab = createBottomTabNavigator();

// Primeiro componente para o Navigator
const Main = () => {

    // Esse componente deve retornar/renderizar a variável Tab | é o MainWrapper do nosso Navigator
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: "gold",
                inactiveTintColor: "#1a5a7f"
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    showLabel: false,
                    headerShown: false,
                    headerTitle: null,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon
                                name="home"
                                style={{ position: "relative" }}
                                color={color}
                                size={30}
                            />
                        </View>

                    )
                }}
            />
            <Tab.Screen
                name="Carrinho"
                component={CartNavigator}
                options={{
                    showLabel: false,
                    headerShown: false,
                    headerTitle: null,
                    tabBarIcon: ({ color }) => (
                        <View>
                            {/* Encapsular ìcone dentro da View para pode pegar qty itens*/}
                            <Icon
                                name="shopping-cart"
                                style={{ position: "relative" }}
                                color={color}
                                size={30}
                            />
                            {/* Chamar CartIcon para encapsular na View */}
                            <CartIcon />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Compare"
                component={CompareNavigator}
                options={{
                    showLabel: false,
                    headerShown: false,
                    headerTitle: null,
                    tabBarIcon: ({ color }) => (
                        <View>
                            {/* Encapsular ìcone dentro da View para pode pegar qty itens*/}
                            <Icon
                                name="exchange"
                                style={{ position: "relative" }}
                                color={color}
                                size={30}
                            />
                            {/* Chamar CompareIcon para encapsular na View */}
                            <CompareIcon />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Usuario"
                component={UserNavigator}
                options={{
                    showLabel: false,
                    headerShown: false,
                    headerTitle: null,
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="user"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Main;