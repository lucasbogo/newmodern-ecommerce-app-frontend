// Novo componente. Aqui será gerado o 'CARDS' do produto. (funcionalidade React Native)
import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

import ProductCard from "./ProductCard";

/**
 * TouchableOpacity: Como os aparelhos são 'touch', é ncessário usar propriedades 'tocáveis', como TouchableOpacity;
 * TouchableHighlight... etc.
 * 
 * Dimensions: Também é funcionalidade nativa ReactNative; Ele permite com que a gente descubra e 'pegue' as
 * dimensão da tela de um smartphone, tablet, etc. Assim é possível calcular dinamicamente o estilo da aplicação
 * 
 * implementação Dimension: Importa-se o Dimension, linha 3 e cria-se uma variável para ela.
 * 
 */

// Variável Dimension
var { width } = Dimensions.get("screen");

const ProductList = (props) => {

    // Passar o objeto props para item. Fica mais fácil entender. Ai passa o props que agora é item em ProductCard
    const { item } = props;

    return (
        <TouchableOpacity
            style={{ width: '50%' }}
            onPress={() => 
                props.navigation.navigate("DetalhesProduto", {item: item})
            }
        >
            <View style={{
                width: width / 2,
                backgroundColor: 'lightgrey'
            }} >
                <ProductCard {...item} />
            </View>
        </TouchableOpacity >
    )
}

// Exportar módulo
export default ProductList;