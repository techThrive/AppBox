import React, { FunctionComponent, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from "react-native";
import FastImage from "react-native-fast-image";
import { Item } from "../Model/SearchData";
import { Rating } from "react-native-ratings";

interface ListItemProps {
  data: Item;
}

const ListItem: FunctionComponent<ListItemProps> = (props: ListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <FastImage
          style={{ height: 120, borderRadius: 12 }}
          source={{
            uri: props.data.image_url as string,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.titleTextStyle}> {props.data.name} </Text>
        <Text style={styles.subTitle}>
          {" "}
          {props.data.location.address}, {props.data.location.city}
        </Text>
        <Text style={styles.subTitle}> {props.data.phone}</Text>
        <View style={styles.bottomView}>
        <View style={styles.ratingView}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={20}
        />
        </View>
        <View style={styles.ratingView}>
            <Text style={styles.subTitle}> Total Review: {props.data.review_count}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
  },
  imageView: {
    height: 120,
    marginVertical: 10,
    marginLeft: 10,
    backgroundColor: "blue",
    borderRadius: 12,
    flex: 0.4,
  },
  details: {
    flex: 0.6,
    marginRight: 10,
    marginVertical: 10,
    marginLeft: 10,
  },
  titleTextStyle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#34344c",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Helvetica",
    color: "#34344c",
  },
  bottomView:{
    height:60,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  ratingView:{
      justifyContent:'flex-end',
  },

});

export default ListItem;
