import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarsList = (props) => {
  return (
    <View style={styles.cardContainer}>
      <FlatList data={cars} renderItem={({ item }) => <CarItem car={item} />} />
    </View>
  );
};

export default CarsList;
