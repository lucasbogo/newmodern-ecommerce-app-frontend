import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


// Importar todas as telas
import Checkout from "../Screens/Checkout/Checkout";
import Payment from "../Screens/Checkout/Payment";
import Confirm from "../Screens/Checkout/Confirm";

const Tab = createMaterialTopTabNavigator();

function CheckoutTabs() {
    return (
        // Navegação entre telas
        <Tab.Navigator>
            <Tab.Screen name="Envio" component={Checkout} />
            <Tab.Screen name="Pagamento" component={Payment} />
            <Tab.Screen name="Confirmar" component={Confirm} />
        </Tab.Navigator>
    );
}

export default function CheckoutNavigator() {
    return <CheckoutTabs />
}