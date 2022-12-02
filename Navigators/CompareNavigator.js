import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Compare from "../Screens/Compare/Compare";


const Stack = createStackNavigator()

// Função Para retornar a Stack
function CompareStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CompareStack"
                component={Compare}
                options={{
                    headerShown: false,
                    headerTitle: null,
                }}
            />
            {/* <Stack.Screen
                name="Checkout"
                component={CheckoutNavigator}
                options={{
                    title: 'Checkout'
                }}
            /> */}

        </Stack.Navigator>
    )
}

export default function CompareNavigator() {
    return <CompareStack />
}