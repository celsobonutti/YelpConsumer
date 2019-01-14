import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Item from "./Item/Item";

const ItemList = props => {
  const placeList = info => (
    <Item
      text={info.item.name}
      image={info.item.image_url}
      display_phone={info.item.display_phone}
      rating={info.item.rating}
      key={info.item.id}
      onPress={() => props.onItemSelected(info.item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={props.itemList} 
        renderItem={placeList} 
        keyExtractor={item => item.id} 
        onEndReached={props.onEndReached}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%"
  }
})


export default ItemList;
