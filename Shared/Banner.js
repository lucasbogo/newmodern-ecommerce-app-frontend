import { Item } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Dimensions, ScrollView, Image, StyleSheet, } from "react-native";
import Swiper from "react-native-swiper";

var { width } = Dimensions.get("screen");


const Banner = () => {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners([

            "https://img.freepik.com/premium-psd/latest-smart-phone-pro-mockup_139955-31.jpg?w=740",
            "https://img.freepik.com/free-vector/realistic-smarphone-different-perspectives_52683-51018.jpg?w=996&t=st=1666495677~exp=1666496277~hmac=0102ccc58a24e7239fac9300347d69914568b1dbe0f008adae26388bb07690f4",
            "https://img.freepik.com/free-psd/android-smartphone-device-mockup_165789-482.jpg?w=740&t=st=1666495546~exp=1666496146~hmac=ce63a20689ff76ead60a49158a50022c3480d9148935a67e1465c0a05e7eea82"
        ])

        return () => {
            setBanners([])
        }
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    {/* habilitar ou desabilitar mudança de imagem automatica = autoplay(true or false) */}
                    <Swiper
                        style={{ height: width / 2 }}
                        showsButtons={false}
                        autoplay={true} 
                        autoplayTimeout={5}
                    >
                        {banners.map((item) => {
                            return (
                                <Image
                                    key={item}
                                    style={styles.bannerImage}
                                    resizeMode="contain"
                                    source={{ uri: item }}
                                />
                            );
                        })}

                    </Swiper>
                    <View style={{ height: 20 }}>

                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 10
    },
    bannerImage: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner;