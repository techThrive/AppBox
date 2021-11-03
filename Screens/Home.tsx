import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from "react-native";
import GoogleMaps from "../Component/GoogleMaps";
import getSearchList from "../APILayer/SearchAPI";
import { SearchData, Item } from "../Model/SearchData";
import ListItem from '../Component/ListItem';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = (props: HomeProps) => {
  const [query, setQuery] = useState("");
  const translation = useRef(new Animated.Value(0)).current;
  const [searchData, setSearchData] = useState<SearchData>();

  useEffect(() => {
    fetchSearchAPI();
  });

  const onPressShowList = () => {
    Animated.timing(translation, {
      toValue: -300,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handleSearch = (text: String) => {
    const formattedQuery = text.toLowerCase();
    // const filteredData = filter(fullData, user => {
    //   return contains(user, formattedQuery);
    // });
    // setData(filteredData);
    setQuery(text);
  };

  const heightAnimation = {
    transform: [{ translateY: translation }],
  };

  
  async function fetchSearchAPI() {
    const data = await getSearchList.getSearchData();
    const obj = JSON.parse(JSON.stringify(data)) as SearchData;
    console.log(obj);
    setSearchData(obj);
  }

  const renderItem = ({ item}) => (
      <ListItem data={item}/>
);


  return (
    <View style={styles.container}>
      <View style={styles.searchBarView}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          style={styles.textInputstyle}
        />
      </View>
      <GoogleMaps />
      <Animated.View style={[styles.listViewContainer, heightAnimation]}>
        <TouchableOpacity
          style={styles.mapExpandButton}
          onPress={onPressShowList}
        >
          <Text style={styles.textStyle}>Expand ᐯ</Text>
        </TouchableOpacity>
        <FlatList
          data={searchData?.businesses}
          renderItem={renderItem}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  searchBarView: {
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  listViewContainer: {
    backgroundColor: "green",
    top: 400,
    height: 720,
  },
  mapExpandButton: {
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: "#E0EEF3",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2683A9",
  },
  textInputstyle: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

export default Home;
