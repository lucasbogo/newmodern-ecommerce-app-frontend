import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/CartActions"

import axios from "axios";
import baseURL from "../../assets/common/baseURL";

var { height, width } = Dimensions.get("screen")


const Confirm = (props) => {

    // Paramêtro rota atribuída a variável finalOrder
    const finalOrder = props.route.params;

    // Add this
    const [productUpdate, setProductUpdate] = useState();
    useEffect(() => {
        if (finalOrder) {
            getProducts(finalOrder);
        }
        return () => {
            setProductUpdate();
        };
    }, [props]);

    // Add this
    const getProducts = (x) => {
        const order = x.order.order;
        var products = [];
        if (order) {
            order.orderItems.forEach((cart) => {
                axios
                    .get(`${baseURL}products/${cart.product}`)
                    .then((data) => {
                        products.push(data.data);
                        setProductUpdate(products);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            });
        }
    };


    // Método para confirmar pedido
    const confirmOrder = () => {
        // Setar a variável order como finalOrder
        const order = finalOrder.order.order;

        // Chamar metodo post do axios. com o objeto orders Assim salva os pedidos no backend 
        axios
            .post(`${baseURL}orders`, order)
            // pegar a resposta da API...
            .then((res) => {
                if ((res.status == 200 || res.status == 201)) {
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: "Pedido Realizado com Sucesso",
                        text2: "",
                    })
                    // Setar um 'time-out' ao clickar no botão, assim é possível dar um tempo para o sistema simular as conexões
                    setTimeout(() => {
                        props.clearCart();
                        props.navigation.navigate("Carrinho");
                    }, 500);
                }
            }).catch((error) => {
                console.error(error)
                Toast.show({
                    topOffset: 60,
                    type: "error",
                    text1: "Algo deu errado",
                    text2: "Por favor, tente novamente",
                })
            })
    }

    // Variável rota | redirecionamento para tela confirmar || trabalhar sem servidor
    // const confirm = props.route.params

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Confirmar Pedido
                </Text>
                {props.route.params ?
                    <View style={{ borderWidth: 1, borderColor: '#1a5a7f' }}>
                        <Text style={styles.title}>Endereço de envio:</Text>
                        <View style={{ padding: 8 }}>
                            <Text>Rua: {finalOrder.order.order.street}</Text>
                            <Text>Numero: {finalOrder.order.order.number}</Text>
                            <Text>Bairro: {finalOrder.order.order.division}</Text>
                            <Text>Cidade: {finalOrder.order.order.city}</Text>
                            <Text>Cep: {finalOrder.order.order.zip}</Text>
                            <Text>País: {finalOrder.order.order.country}</Text>
                            <Text>Observações: {finalOrder.order.order.observations}</Text>
                        </View>
                        <Text style={styles.title}>Produtos:</Text>

                        {productUpdate && (
                            <>
                                {productUpdate.map((x) => {
                                    return (
                                        <ListItem style={styles.listItem} key={x.name} avatar>
                                            <Left>
                                                <Thumbnail source={{ uri: x.image }} />
                                            </Left>
                                            <Body style={styles.body}>
                                                <Left>
                                                    <Text>{x.name}</Text>
                                                </Left>
                                                <Right>
                                                    <Text>R$ {x.price}</Text>
                                                </Right>
                                            </Body>
                                        </ListItem>
                                    );
                                })}
                            </>
                        )}
                    </View>
                    : null}
                <View style={{ alignItems: "center", margin: 20 }}>
                    <Button title={"Fazer Pedido"} onPress={confirmOrder} />
                </View>
            </View>
        </ScrollView>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart()),
    };
};

const styles = StyleSheet.create({
    container: {
        height: height,
        padding: 8,
        alignContent: "center",
        backgroundColor: "white",
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    title: {
        alignSelf: "center",
        margin: 8,
        fontSize: 16,
        fontWeight: "bold",
    },
    listItem: {
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
        width: width / 1.2,
    },
    body: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
    },
});

export default connect(null, mapDispatchToProps)(Confirm);

