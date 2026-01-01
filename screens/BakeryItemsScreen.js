import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function BakeryItemsScreen() {
    const bakery = [
        { name: 'Doughnut', price: '$2.00', image: 'https://images.unsplash.com/photo-1734772881875-26f2a3619406?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Croissant', price: '$3.00', image: 'https://images.unsplash.com/photo-1691480162735-9b91238080f6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Burger', price: '$5.00', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Pizza', price: '$6.00', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Sandwich', price: '$3.50', image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Pasta', price: '$4.00', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Freshly baked bakery items for you</Text>
            {bakery.map((bakery, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Image source={{ uri: bakery.image }} style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.name}>{bakery.name}</Text>
                        <Text style={styles.price}>{bakery.price}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => alert(`${bakery.name} added to cart`)}>
                            <Text style={styles.buttonText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}