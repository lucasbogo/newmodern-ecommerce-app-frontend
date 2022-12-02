import React, { useState } from 'react'
import { View, Button } from 'react-native'
import { Container, Header, Content, ListItem, Text, Radio, Right, Left, Picker, Icon, Body, Title } from 'native-base';


/**
 * Dentro de <Content></Content>, é ncessário realizar loop condicional nos métodos para poder cria-los
 * 
 * 
 * Em <ListItem></ListItem>, existe botão que éga o valor do item para, assim, buscar o valor de 
 * cada método
 * 
 * Condição pagamento cartão, se o valor selecionado for 2 (cartão), chama se a funcionalidade ReactNative
 * Picker, para poder escolher o tipo de cartão que o usuário irá utilizar.
 */


// Array para tipos de pagamento: não implementaremos 
const methods = [
    { name: 'Espécie', value: 1 },
    { name: 'Cartão', value: 2 },
    { name: 'PIX', value: 3 },
    { name: 'Boleto', value: 4 },

]

// Array para tipos de cartão
const cardTypes = [
    { name: "Visa", value: 1 },
    { name: "Mastercard", value: 2 },
    { name: "Elo", value: 3 }
]

// Passar o props em Pagamento para pegar o obeto pedido (order)
const Payment = (props) => {

    // Pegar (catch) o objeto pedido (order) em Checkout.js. Para fazer isso, escreva uma variável (order) e passe props.route.params
    const order = props.route.params;

    // State para tipo pagamento selecionado
    const [selected, setSelected] = useState();

    // State para tipo de cartão selecionado
    const [card, setCard] = useState();
    return (
        <Container>
            <Header>
                <Body>
                    <Title> Escolha o seu tipo de pagamento</Title>
                </Body>
            </Header>
            <Content>
                {methods.map((item, index) => {
                    return (
                        <ListItem
                            key={item.name}
                            onPress={() => setSelected(item.value)}>
                            <Left>
                                <Text>{item.name}</Text>
                            </Left>
                            <Right>
                                <Radio selected={selected == item.value} />
                            </Right>

                        </ListItem>
                    )
                })}
                {selected == 2 ? (
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name={"arrow-down"} />}
                        headerStyle={{ backgroundColor: 'orange' }}
                        headerBackButtonTextStyle={{ color: '#fff' }}
                        headerTitleStyle={{ color: '#fff' }}
                        selectedValue={card}
                        onValueChange={(x) => setCard(x)}
                    >
                        {cardTypes.map((cardType, index) => {
                            return <Picker.Item
                                label={cardType.name}
                                value={cardType.name}
                                key={cardType.name} />
                        })}
                    </Picker>
                ) : null}
                <View style={{ marginTop: 60, alignSelf: 'center' }}>
                    <Button
                        title={"Confirmar"}
                        color="green"
                        onPress={() => props.navigation.navigate("Confirmar", { order })}
                    />
                </View>
            </Content>
        </Container>
    )
}

export default Payment;