import React from "react";
import { ScrollView, Dimensions, StyleSheet, Text } from "react-native";

/**
 * ScrollView é um tipo especial de View, ScrollView tem duas partes:
 *
 * Container é a vista externa, sua altura não pode exceder 100% da altura da janela
 *
 * O conteúdo é a parte interna, pode ser maior que a altura da janela, é o que está 
 * se movendo dentro do container.
 * 
 * O estilo ScrollView define o contêiner externo do ScrollView, por exemplo, 
 * sua altura e relações com elementos irmãos 
 * 
 * ScrollView contentContainerStyle define o contêiner interno dele, por exemplo, 
 * alinhamentos de itens, preenchimento, etc.
 * 
 * 
 */

var { width } = Dimensions.get("screen");

const FormContainer = (props) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 400,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    }
})

export default FormContainer;