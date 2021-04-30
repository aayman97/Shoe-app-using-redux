import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableHighlight, TouchableOpacity, FlatList, Animated } from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux'


const { width, height } = Dimensions.get('screen')

const Details = ({ Cart, addToCart, type, name, price, route, navigation }) => {

    const wholeView = React.useRef(new Animated.Value(height * 0.549)).current
    const opacityType = React.useRef(new Animated.Value(0)).current
    const opacityName = React.useRef(new Animated.Value(0)).current
    const translateYName = React.useRef(new Animated.Value(10)).current
    const translateYTpe = React.useRef(new Animated.Value(10)).current
    const opacityImage = React.useRef(new Animated.Value(0)).current
    const translateSizeView = React.useRef(new Animated.Value(20)).current
    const opacitySizeView = React.useRef(new Animated.Value(0)).current
    const translateColorView = React.useRef(new Animated.Value(20)).current
    const opacityColorView = React.useRef(new Animated.Value(0)).current
    const translateButtonView = React.useRef(new Animated.Value(20)).current
    const opacityButtonView = React.useRef(new Animated.Value(0)).current

    const { item, liked } = route.params

    React.useEffect(() => {

        Animated.spring(wholeView, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            velocity: 5, bounciness: 0
        }).start()
        Animated.spring(opacityImage, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 200
        }).start()
        Animated.timing(opacityType, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 500
        }).start()
        Animated.timing(translateYName, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 500
        }).start()
        Animated.timing(opacityName, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 600
        }).start()
        Animated.timing(translateSizeView, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 700
        }).start()
        Animated.timing(opacitySizeView, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 700
        }).start()
        Animated.timing(translateColorView, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 800
        }).start()
        Animated.timing(opacityColorView, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 800
        }).start()
        Animated.timing(translateButtonView, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 900
        }).start()
        Animated.timing(opacityButtonView, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 900
        }).start()

    })
    return (
        <View style={{ flex: 1, backgroundColor: '#aaa6d6', alignItems: 'center' }}>

            <View style={{
                width,
                height: height * 0.15,
                alignItems: 'center',
                paddingHorizontal: 25,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#aaa6d6',
                overflow: 'hidden',
                paddingTop: 30
            }}>
                <AntDesign name="arrowleft" size={30} color="white" onPress={() => navigation.goBack()} />
                <AntDesign name="heart" size={30} color={liked.includes(item) ? 'red' : 'white'} />
            </View>

            <Animated.Image

                source={item.image}
                style={{
                    width: width * 0.4,
                    height: height * 0.3,
                    resizeMode: 'center',
                    transform: [{
                        scale: 2
                    }],
                    opacity: opacityImage
                }}
            />
            <Animated.View style={{
                width,
                height: height * 0.549,
                backgroundColor: '#f4f5fc',
                borderTopLeftRadius: 60,
                borderTopRightRadius: 60,
                justifyContent: 'space-evenly',
                paddingHorizontal: 25,
                paddingVertical: 0,
                transform: [{
                    translateY: wholeView
                }]
            }}>
                <View >
                    <Animated.Text style={{
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'bold',
                        opacity: opacityType,
                        transform: [{
                            translateY: translateYName
                        }]
                    }}>{item.type}</Animated.Text>
                    <Animated.Text style={{
                        fontSize: 15,
                        color: '#D3D3D3',
                        fontWeight: 'bold',
                        opacity: opacityName,
                        transform: [{
                            translateY: 3
                        }]
                    }}>{item.name}</Animated.Text>
                </View>

                <Animated.View style={{
                    transform: [{
                        translateY: translateSizeView
                    }],
                    opacity: opacitySizeView
                }}>
                    <Animated.Text style={{
                        fontSize: 18,
                        color: '#D3D3D3',
                        fontWeight: 'bold'
                    }}>Size</Animated.Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.92 }}>
                        <TouchableOpacity style={{
                            width: width * 0.16, height: width * 0.16, backgroundColor: '#f68a0a', borderRadius: 20,
                            alignItems: 'center', justifyContent: 'center', marginTop: 10, shadowOpacity: 0.1, shadowOffset: {
                                height: 2
                            },
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'white',
                                fontWeight: 'bold',
                            }} >US 6</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: width * 0.16, height: width * 0.16, backgroundColor: 'white', borderRadius: 20,
                            alignItems: 'center', justifyContent: 'center', marginTop: 10, shadowOpacity: 0.1, shadowOffset: {
                                height: 2
                            },
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                            }} >US 7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: width * 0.16, height: width * 0.16, backgroundColor: 'white', borderRadius: 20,
                            alignItems: 'center', justifyContent: 'center', marginTop: 10, shadowOpacity: 0.1, shadowOffset: {
                                height: 2
                            },
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                            }} >US 8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: width * 0.16, height: width * 0.16, backgroundColor: 'white', borderRadius: 20,
                            alignItems: 'center', justifyContent: 'center', marginTop: 10, shadowOpacity: 0.1, shadowOffset: {
                                height: 2
                            },
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                            }} >US 9</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: width * 0.16, height: width * 0.16, backgroundColor: 'white', borderRadius: 20,
                            alignItems: 'center', justifyContent: 'center', marginTop: 10, shadowOpacity: 0.1, shadowOffset: {
                                height: 2
                            },
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                            }} >US 10</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                <Animated.View style={{
                    transform: [{
                        translateY: translateColorView
                    }],
                    opacity: opacityColorView
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: '#D3D3D3',
                        fontWeight: 'bold'
                    }}>Color</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.545 }}>

                        <TouchableOpacity style={{
                            width: width * 0.16, height: width * 0.16, backgroundColor: 'white', borderRadius: 20,
                            alignItems: 'center', justifyContent: 'center', marginTop: 10, shadowOpacity: 0.1, shadowOffset: {
                                height: 2
                            }, borderWidth: 3, borderColor: '#f68a0a'
                        }}>
                            <View style={{
                                width: '45%',
                                height: '45%',
                                backgroundColor: 'tomato',
                                borderRadius: 8
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: width * 0.16, height: width * 0.16, backgroundColor: 'white', borderRadius: 20,
                            alignItems: 'center', justifyContent: 'center', marginTop: 10, shadowOpacity: 0.1, shadowOffset: {
                                height: 2
                            },
                        }}>
                            <View style={{
                                width: '40%',
                                height: '40%',
                                backgroundColor: 'limegreen',
                                borderRadius: 8
                            }} />
                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            width: width * 0.16, height: width * 0.16, backgroundColor: 'white', borderRadius: 20,
                            alignItems: 'center', justifyContent: 'center', marginTop: 10, shadowOpacity: 0.1, shadowOffset: {
                                height: 2
                            },
                        }}>
                            <View style={{
                                width: '40%',
                                height: '40%',
                                backgroundColor: 'indigo',
                                borderRadius: 8
                            }} />
                        </TouchableOpacity>


                    </View>
                </Animated.View>

                <Animated.View style={{
                    backgroundColor: 'orange',
                    width: width * 0.85,
                    height: height * 0.08,
                    borderRadius: 30,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    opacity: opacityButtonView,
                    transform: [{
                        translateY: translateButtonView
                    }]
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 5,
                        color: 'white'
                    }}>${item.price}</Text>

                    <TouchableOpacity style={{
                        width: '50%', height: '65%', backgroundColor: 'white', borderRadius: 20, flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'center'
                    }}

                        onPress={() => {
                            if (!Cart.includes(item)) {
                                addToCart(item)
                                navigation.goBack()
                            }
                        }}
                    >
                        <AntDesign name="shoppingcart" size={24} color="black" />
                        <Text style={{
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>  Add to cart</Text>

                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </View>
    )
}
function mapStateToProps(state) {
    return {
        Cart: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)