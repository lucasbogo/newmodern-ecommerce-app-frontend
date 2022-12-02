import React from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Content, Left, Body, ListItem, Thumbnail, Text, Badge } from "native-base";

/**
 * 
 * @param {*} props 
 * filtrar categorias: o usuário pode escolher a categoria.
 * Existe uma condição estilizada para essa escolha, ou seja, a 'badge' ou 'pill' categoria
 * terá uma cor diferente para 'ativada' e 'desativada' (escolhida). Isso é uma boa prática de UX Design.
 * A lógica é feito via objeto css, isto é, defini-se dois tipos de estilos utilizando um array
 * sendo um defindo pela variável e a outra, inline, conforme mostra a linha: 30.
 *                                    
 * 
 * @returns interface usuário
 */

const FilteredCategories = (props) => {

    // Retornar interface usuário
    return (
        <ScrollView
            style={{ backgroundColor: "white" }}
            horizontal={true}
            bounces={true}
        >
            <ListItem style={{ margin: 0, padding: 0, borderRadius: 0 }}>
                <TouchableOpacity
                    key={1}
                    onPress={() => {
                        props.categoryFilter('all'), props.setActive(-1)
                    }}
                >
                    <Badge
                        style={[styles.center, { margin: 2 },
                        props.active == -1 ? styles.active : styles.inactive
                        ]}
                    >
                        <Text style={{ color: 'white' }}>Todas</Text>
                    </Badge>
                </TouchableOpacity>

                {props.categories.map((item) => (
                    <TouchableOpacity
                        // key={item._id.$oid}
                        key={item._id}
                        onPress={() => {
                            // TRABALHAR COM DADOS ESTÁTICOS
                            // props.categoryFilter(item._id.$oid),
                                props.categoryFilter(item._id),
                                props.setActive(props.categories.indexOf(item))
                        }}
                    >
                        <Badge
                            style={[styles.center, { margin: 2 },
                            props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                            ]}
                        >
                            <Text style={{ color: 'white' }}>{item.name}</Text>
                        </Badge>
                    </TouchableOpacity>
                ))}
            </ListItem>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: "gold"
    },
    inactive: {
        backgroundColor: '#1a5a7f'
    }

})

export default FilteredCategories 
