import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

// Componente ItemCompare
const CompareItem = (props) => {
    
    const data = props.item.item;
    // retorna UI renderizada
    return (
        <ListItem
            style={styles.listItem}
            key={Math.random()}
            avatar
        >
            <Left>
                <Thumbnail
                    source={{uri: data.image }} 
                    />
            </Left>
            <Body style={styles.body}>
                <Left>
                    <Text>{data.name}</Text>
                    <Text>{data.brand}</Text>
                    <Text>{data.description}</Text>
                </Left> 
                <Right>
                    <Text>R$ {data.price}</Text>
                </Right>
            </Body>
        </ListItem>

    );
};

const styles = StyleSheet.create({
    listItem: {
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
    },
    body: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
    }
});

export default CompareItem;