import React from "react";
import { StyleSheet, Image, View, StatusBar } from "react-native";

/**
 * Componente para controlar a barra de status do app. A barra de status é a zona, 
 * normalmente na parte superior da tela, que exibe a hora atual, informações de rede Wi-Fi e celular, 
 * nível de bateria e/ou outros ícones de status.
 * 
 * Troquei a cor do StatusBar para combinar com a cor da logomarca
 * 
 */

// Header com logotipo
const Header = () => {
    return (
        <View style={styles.header}>
            <StatusBar
                backgroundColor="#1a5a7f"
                barStyle="light-content"
            />
            <Image
                source={require('../assets/LogotipoNewModern.png')}
                resizeMode='contain'
                style={{ height: 80 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '11%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 2,
        marginTop: -10,
        backgroundColor: "gold"
    }
})

export default Header;