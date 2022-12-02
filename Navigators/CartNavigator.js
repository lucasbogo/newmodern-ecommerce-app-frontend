import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cart from "../Screens/Cart/Cart";
import CheckoutNavigator from "./CheckoutNavigator";

const Stack = createStackNavigator()

// Função Para retornar a Stack
function CartStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CarrinhoStack"
                component={Cart}
                options={{
                    headerShown: false,
                    headerTitle: null,
                }}
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutNavigator}
                options={{
                    title: 'Checkout'
                }}
            />

        </Stack.Navigator>
    )
}

export default function CartNavigator() {
    return <CartStack />
}