import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Button, ScrollView } from "react-native";
import { Right, Left, H1, Container } from "native-base";
import Toast from "react-native-toast-message"; // importar toast msg.
import StyledButton from "../../Shared/Style/StyledButton"; // importar Botão Estilizado usando Styled Components
import TrafficLight from "../../Shared/Style/TrafficLight";




import { connect } from "react-redux";// importar a conexão com redux
import * as actions from '../../Redux/Actions/CartActions';// importar todas as ações criadas na pasta redux

const DetailedProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);

    // Verificar se o item está disponível ou não | seta-se o estado incial como nulo (não disponível)
    const [availabilty, setAvailabity] = useState(null);

    // useState para disponibilidade produto com TrafficLight (StyledComponents)
    const [availabityText, setAvailabilityText] = useState('');


    useEffect(() => {
        // Condição status produto: se o atributo quantidade da rota item for igual 0
        if (props.route.params.item.qty == 0) {
            // passe a useState availability e setAvaila...Text passando o StyledComponent TrafficLight indisponível
            setAvailabity(<TrafficLight unavailable></TrafficLight>);
            setAvailabilityText("Indisponível em Estoque")

            // Ou se o atributo quantidade da rota item for menor ou igual 5
        } else if (props.route.params.item.qty <= 5) {
            // passe a useState availability e setAvaila...Text passando o StyledComponent TrafficLight limitado (quase acabando)
            setAvailabity(<TrafficLight limited></TrafficLight>);
            setAvailabilityText("Estoque Limitado")

            // Caso contrário, se o atributo quantidade da rota item for maior ou igual 5, passa-se Trafficlight Disponível
        } else {
            // passe a useState availability e setAvaila...Text passando o StyledComponent TrafficLight disponível 
            setAvailabity(<TrafficLight available></TrafficLight>);
            setAvailabilityText("Disponível")
        }

        // Limpar State retornando 'nulo'
        return () => {
            setAvailabity(null);
            setAvailabilityText('');
        }

    }, [])

    // Retorna Container com único produto | Produto Detalhado
    return (
        <Container style={styles.detailedProductContainer}>
            <ScrollView style={{ marginBottom: 80, padding: 5 }}>
                <View>
                    <Image
                        source={{ uri: item.image }}
                        resizeMode="contain"
                        style={styles.imageDetailedProduct}
                    />
                </View>
                <View style={styles.productDetailsContainer}>
                    <H1 style={styles.productDetailsHeader}>{item.name}</H1>
                    <Text style={styles.productDetailsText}>{item.brand}</Text>
                </View>
                <View>
                    <View style={styles.trafficLightAvailabilityContainer}>
                        <Text style={styles.trafficLightAvailabilityText}>
                            Disponibilidade: {availabityText}
                        </Text>
                        {availabilty}
                    </View>
                    <Text>{item.description}</Text>
                </View>

            </ScrollView>
            <View style={styles.productDetailsBottomContainer}>
                <Left>
                    <Text style={styles.productDetailsPrice}>R$ {item.price}</Text>
                </Left>
                <Right>
                    <StyledButton
                        primary
                        medium
                        //chamar o método mapDispatchToProps no onPressEvent
                        onPress={() => {
                            props.addItemToCart(item.id),
                                Toast.show({
                                    topOffset: 60,
                                    type: "success",
                                    text1: `${item.name} foi adicionado ao seu carrinho`,
                                    text2: "Navegue para seu carrinho para completar o pedido"
                                })
                        }}
                    >
                        {/*  Texto p/ button*/}
                        <Text style={{ color: "white" }}>Adicionar</Text>
                    </StyledButton>
                </Right>
            </View>

        </Container>
    )
}

// Utilizei a mesma lógica realizada em ProductCard | Podemos reaproveitar esse código
const mapDispatchToProps = (dispatch) => {
    // retornar o método chamar button
    return {
        addItemToCart: (product) =>
            dispatch(actions.addToCart({ quantity: 1, product }))
    }
}


const styles = StyleSheet.create({
    detailedProductContainer: {
        position: 'relative',
        height: '100%'
    },
    imageDetailedProductContainer: {
        backgroundColor: 'white',
        margin: 0,
        padding: 0
    },
    imageDetailedProduct: {
        width: '100%',
        height: 150
    },
    productDetailsContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productDetailsHeader: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    productDetailsText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    productDetailsBottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    productDetailsPrice: {
        fontSize: 18,
        color: 'darkred',
        marginTop: 10
    },
    trafficLightAvailabilityContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    trafficLightAvailabilityText: {
        flexDirection: 'row',
        marginBottom: 10,
    }
})

// Encapsular o export no connect | reaproveitamento de código...
export default connect(null, mapDispatchToProps)(DetailedProduct);