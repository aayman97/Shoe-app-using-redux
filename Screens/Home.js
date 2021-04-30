import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableHighlight, TouchableOpacity, FlatList, Animated } from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux'


const { width, height } = Dimensions.get('screen')


const data = [
    {
        image: require('../assets/Shoes/AdidasEQGazellepng.png'),
        type: 'Adidas',
        name: 'EQ Gazelle',
        price: 320
    },
    {
        image: require('../assets/Shoes/AdidasEquipment.png'),
        type: 'Adidas',
        name: 'Equipment',
        price: 410
    },
    {
        image: require('../assets/Shoes/AdidasHumanRace.png'),
        type: 'Adidas',
        name: 'Human Race',
        price: 380
    },
    {
        image: require('../assets/Shoes/AdidasStreetBall.png'),
        type: 'Adidas',
        name: 'Street Ball',
        price: 190
    },
    {
        image: require('../assets/Shoes/NikeAirJordan.png'),
        type: 'Nike',
        name: 'Air Jordan',
        price: 220
    },
    {
        image: require('../assets/Shoes/AdidasUltraBoost.png'),
        type: 'Adidas',
        name: 'Ultra Boost',
        price: 150
    },
    {
        image: require('../assets/Shoes/NikeAirMax.png'),
        type: 'Nike',
        name: 'AirMax',
        price: 175
    },
    {
        image: require('../assets/Shoes/NikeAirZoom1.png'),
        type: 'Nike',
        name: 'Air Zoom',
        price: 550
    },
    {
        image: require('../assets/Shoes/NikeAirZoomPegasus.png'),
        type: 'Nike',
        name: 'Air Zoom Pegasus',
        price: 490
    },
    {
        image: require('../assets/Shoes/NikeJoyride.png'),
        type: 'Nike',
        name: 'Joyride',
        price: 700
    },
    {
        image: require('../assets/Shoes/PumaClydeAutmn.png'),
        type: 'Puma',
        name: 'Clyde Autumn',
        price: 235
    },


]
const Home = ({ Cart, addToCart, navigation }) => {

    const heightAnimation = React.useRef(new Animated.Value(height * 0.9)).current
    const translateYText = React.useRef(new Animated.Value(50)).current
    const opacityText = React.useRef(new Animated.Value(0)).current
    const opacityImage = React.useRef(new Animated.Value(0)).current
    const translateYImage = React.useRef(new Animated.Value(50)).current
    const scrollY = React.useRef(new Animated.Value(0)).current

    const [liked, addliked] = React.useState([])
    const [selectedType, setSelectType] = React.useState([])

    return (


        <View style={styles.container}>

            <View style={{
                width,
                height: height * 0.15,
                alignItems: 'center',
                paddingHorizontal: 25,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#f4f5fc',
                overflow: 'hidden',
                paddingTop: 30
            }}>


                <View style={{
                    width: 45,
                    height: 45,
                    borderRadius: 30,
                    backgroundColor: '#aaa6d6',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={{
                            width: 30,
                            height: 30,
                            resizeMode: 'cover',
                            borderRadius: 25,
                        }}
                    />
                </View>

                <Animated.Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    transform: [{
                        translateY: scrollY.interpolate({
                            inputRange: [0, 78],
                            outputRange: [40, 0],
                            extrapolate: 'clamp'
                        })
                    }],
                    opacity: scrollY.interpolate({
                        inputRange: [0, 60, 80],
                        outputRange: [0, 0, 1],
                        extrapolate: 'clamp'
                    })
                }}>Catalog</Animated.Text>

                <AntDesign name="search1" size={35} color="black" />

            </View>


            <Animated.View style={{
                backgroundColor: '#f4f5fc',
                width,
                height: heightAnimation,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                overflow: 'hidden'
            }}>

                <Animated.FlatList
                    onScroll={
                        Animated.event(
                            [{
                                nativeEvent: {
                                    contentOffset: {
                                        y: scrollY
                                    }
                                }
                            }], {
                            useNativeDriver: false,

                        })
                    }

                    data={selectedType.length === 0 ? data : data.filter((val, i, a) => {
                        for (let i = 0; i < selectedType.length; i++) {
                            if (val.type === selectedType[i]) {
                                return val
                            }
                        }
                    })}
                    keyExtractor={(_, i) => { return i }}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => {
                        return (
                            <View >
                                <Text
                                    style={{
                                        fontSize: 50,
                                        fontWeight: 'bold'
                                    }}
                                > Catalog</Text>

                                <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} contentContainerStyle={{
                                    marginTop: 20,
                                    height: height * 0.08
                                }}>
                                    <TouchableOpacity style={{
                                        width: width * 0.3,
                                        height: height * 0.055,
                                        backgroundColor: 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        shadowOpacity: 0.1,
                                        shadowOffset: {
                                            height: 3
                                        },
                                        flexDirection: 'row'
                                    }}

                                    >
                                        <Feather name="filter" size={17} color="black" />
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 'bold'
                                        }}>  Filter</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        width: width * 0.14,
                                        height: height * 0.055,
                                        backgroundColor: selectedType.includes('Nike') ? '#f68a0a' : 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        shadowOpacity: 0.1,
                                        shadowOffset: {
                                            height: 3,
                                        },
                                        marginLeft: 20,
                                    }}
                                        onPress={() => {

                                            if (!selectedType.includes('Nike')) {
                                                setSelectType([...selectedType, 'Nike'])
                                            }
                                            else {
                                                setSelectType(selectedType.filter((value, i, a) => {
                                                    return value !== 'Nike'
                                                }))
                                            }

                                        }}


                                    >
                                        <Image
                                            source={require('../assets/images/nike.png')}
                                            style={{
                                                width: 30,
                                                height: 30,
                                                resizeMode: 'cover',
                                            }}

                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        width: width * 0.14,
                                        height: height * 0.055,
                                        backgroundColor: selectedType.includes('Adidas') ? '#f68a0a' : 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        shadowOpacity: 0.1,
                                        shadowOffset: {
                                            height: 3,
                                        },
                                        marginLeft: 20
                                    }}

                                        onPress={() => {

                                            if (!selectedType.includes('Adidas')) {
                                                setSelectType([...selectedType, 'Adidas'])
                                            }
                                            else {
                                                setSelectType(selectedType.filter((value, i, a) => {
                                                    return value !== 'Adidas'
                                                }))
                                            }

                                        }}
                                    >
                                        <Image
                                            source={require('../assets/images/adidas.png')}
                                            style={{
                                                width: 30,
                                                height: 30,
                                                resizeMode: 'cover',
                                            }}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        width: width * 0.14,
                                        height: height * 0.055,
                                        backgroundColor: selectedType.includes('Puma') ? '#f68a0a' : 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        shadowOpacity: 0.1,
                                        shadowOffset: {
                                            height: 3,
                                        },
                                        marginLeft: 20
                                    }}

                                        onPress={() => {

                                            if (!selectedType.includes('Puma')) {
                                                setSelectType([...selectedType, 'Puma'])
                                            }
                                            else {
                                                setSelectType(selectedType.filter((value, i, a) => {
                                                    return value !== 'Puma'
                                                }))
                                            }

                                        }}

                                    >
                                        <Image
                                            source={require('../assets/images/puma.png')}
                                            style={{
                                                width: 30,
                                                height: 30,
                                                resizeMode: 'cover',
                                            }}
                                        />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View style={{
                                height: height * 0.10,
                                width,

                            }}>

                            </View>
                        )
                    }}
                    numColumns={2}
                    contentContainerStyle={{ margin: 20, }}
                    renderItem={(item) => {

                        return (
                            <View style={{
                                width: width * 0.4,
                                height: height * 0.25,
                                backgroundColor: 'white',
                                borderRadius: 20,
                                margin: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                shadowOpacity: 0.1,
                                shadowOffset: {
                                    height: 3,
                                    width: 3
                                },
                                paddingHorizontal: 20,
                            }}>

                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <AntDesign name="heart" size={24} color={liked.includes(item.item) ? 'red' : "#D3D3D3"} onPress={() => {
                                        if (!liked.includes(item.item)) {
                                            let temp = [...liked, item.item]
                                            addliked(temp)
                                        }
                                        else {

                                            addliked(liked.filter((value, i, a) => {
                                                return value !== item.item
                                            }))
                                        }
                                    }
                                    }


                                    />
                                    <AntDesign name="plus" size={24} color={Cart.includes(item.item) ? 'black' : "#f68a0a"} onPress={() => Cart.includes(item.item) ? null : addToCart(item.item)} />
                                </View>

                                <TouchableOpacity style={{
                                    width: '70%',
                                    height: '35%',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}

                                    onPress={() => navigation.navigate('Details', { item: item.item, liked })}
                                >

                                    <Image
                                        source={item.item.image}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            resizeMode: 'contain',
                                            transform: [{
                                                scale: 1.2
                                            }]
                                        }}

                                    />
                                </TouchableOpacity>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: '#D3D3D3',
                                        fontWeight: 'bold'
                                    }}>{item.item.type}</Text>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: '#D3D3D3',
                                            fontWeight: 'bold'
                                        }}

                                    >{item.item.name}</Text>
                                </View>

                                <Text style={{
                                    color: '#f68a0a',
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    marginTop: 5
                                }}>${item.item.price}</Text>
                            </View>
                        )
                    }}
                />


            </Animated.View>

            <View style={{
                width,
                height: height * 0.1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                justifyContent: 'space-between'
            }}>

                <View style={{
                    width: width * 0.11,
                    height: height * 0.03,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Animated.Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        transform: [{
                            translateY: translateYText
                        }],
                        opacity: opacityText
                    }}>Cart</Animated.Text>
                </View>

                <View style={{
                    flexDirection: 'row'
                }}>

                    {
                        Cart.length > 0 ? Cart.map((item, index) => {
                            Animated.spring(heightAnimation, {
                                toValue: height * 0.74,
                                duration: 300,
                                useNativeDriver: false,
                            }).start()

                            Animated.spring(opacityText, {
                                toValue: 1,
                                duration: 100,
                                useNativeDriver: true,
                                delay: 50
                            }).start()

                            Animated.spring(opacityImage, {
                                toValue: 1,
                                duration: 100,
                                useNativeDriver: true,
                                delay: 450
                            }).start()

                            Animated.spring(translateYText, {
                                toValue: 0,
                                duration: 100,
                                useNativeDriver: true,
                                delay: 50
                            }).start()

                            Animated.spring(translateYImage, {
                                toValue: 0,
                                duration: 200,
                                useNativeDriver: true,
                                delay: 450
                            }).start()

                            if (index < 3) {
                                return (
                                    <View
                                        key={index}
                                        style={{
                                            width: width * 0.12,
                                            height: width * 0.12,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginLeft: 10,
                                            marginRight: index === Cart.length - 1 ? 10 : 0,
                                            overflow: 'hidden',
                                        }}>
                                        <Animated.Image

                                            source={item.image}
                                            style={{
                                                width: width * 0.12,
                                                height: width * 0.12,
                                                borderRadius: (width * 0.3) / 2,
                                                backgroundColor: 'white',

                                                resizeMode: 'contain',
                                                transform: [{
                                                    translateY: translateYImage
                                                }],
                                                opacity: opacityImage,
                                            }} />
                                    </View>
                                )
                            }
                            else if (index === 3) {
                                return (

                                    <View
                                        key={index}
                                        style={{
                                            width: width * 0.12,
                                            height: width * 0.12,
                                            borderRadius: (width * 0.3) / 2,
                                            marginRight: 10,
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                        }}>
                                        <Entypo name="dots-three-horizontal" size={24} color="white" />
                                    </View>
                                )
                            }

                        }) : null
                    }

                    <TouchableOpacity style={{
                        width: width * 0.12,
                        height: width * 0.12,
                        borderRadius: (width * 0.3) / 2,
                        borderColor: '#f68a0a',
                        borderWidth: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                        <AntDesign name="arrowright" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);