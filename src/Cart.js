import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {addToCart,clear,decrement,increment,removeItem} from '../Redux/cartSlice'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const renderStoreItems = ({ item }) => {
    return (
      <View style={styles.storeItem}>
        <View style={styles.storeItemImg}>
          <Image style={styles.storeItemImage} source={{ uri: item.image }} />
        </View>
        <View style={styles.storeItemInfo}>
          <Text style={styles.storeItemTitle}>{item.title}</Text>
          <Text style={styles.storeItemPrice}>
            R{item.quantity * item.price}
          </Text>
          <View style={styles.addToCart}>
            <View style={styles.cartItemAmount}>
              <TouchableOpacity
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    console.log("removed");
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}
              >
                <Ionicons name="md-remove" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.cartItemAmountText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}
              >
                <Ionicons name="md-add" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={styles.cartItemRemoveButton}
              >
                <Ionicons name="md-trash" size={15} color="black" />
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };



  return (
    <View>
      <FlatList data={cart}
        renderItem={renderStoreItems}
        keyExtractor={(item) => item.id} />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
  },
  storeItemImg: {
    width: "30%",
    height: 100,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
  },
  addToCart: {
    backgroundColor: "coral",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemRemove: {
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartFooter: {
    justifyContent: "space-between",
  },
})