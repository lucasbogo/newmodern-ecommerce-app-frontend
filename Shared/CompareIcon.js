import React from "react";
import { StyleSheet } from "react-native";
import { Badge, Text } from "native-base";

// Importar ReactRedux
import { connect } from "react-redux";

/** 
 * Usamos react fragment, assim não gastamos um 'node' no processo
 * 
 * Antes de renderizar a Interface Usuário, é ncessário realizar um 'loop' pelo o 'state'
 * 
 * Para fazer isso é necessário mapear o state  para props(map the state to props)
 * 
 * Depois de criar state to map props (ver linha 27), chama-se esse método dentro do React Fragment
 * 
 */

const CompareIcon = (props) => {
    return (
        //React Fragment. Primeiro verifica-se 
        <>
            {props.compareItem.length ? (
                <Badge style={styles.badge}>
                    <Text style={styles.text}>{props.compareItem.length}</Text>
                </Badge>
            ) : null}
        </>
    )
}

// Mapear o State para props...
const mapStateToProps = (state) => {
    const { compareItem } = state;
    return {
        compareItem : compareItem 
    }
}

const styles = StyleSheet.create({
    badge: {
        width: 25,
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        top: -4,
        right: -15,
    },
    text: {
        fontSize: 12,
        width: 100,
        fontWeight: "bold",
    },
});

export default connect(mapStateToProps)(CompareIcon);