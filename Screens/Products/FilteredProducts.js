import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base";

/**
 * 
 * @param {filteredProducts} props 
 * @returns: renderização do produto se existir ou combinar com a pesquisa usuário
 *           Caso contrário, retorna a mensagem: Não possuímos esse produto.
 */

var { width } = Dimensions.get("window")

// Filtrar produtos
const FilteredProduct = (props) => {
    // Atribuir props à filterProducts (evitar repetição de código)
    // se o legnht (tamanho) for maior que zero: renderiza-se a função map (para fazeer um 'loop' no array de todosos produtos filtrados
    const { filteredProducts } = props;
    return (
        <Content style={{ width: width }}>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                    <ListItem
                        key={item.filterProd}
                        onPress={() => {
                            props.navigation.navigate("DetalhesProduto", { item: item })
                        }}
                        avatar
                    >
                        <Left>
                            <Thumbnail
                                source={{ uri: item.image }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
            ) : (
                <View style={StyleSheet.center}>
                    <Text style={{ alignSelf: 'center' }}>
                        Nao possuímos esse produto em estoque.
                    </Text>
                </View>
            )}
        </Content>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default FilteredProduct;

