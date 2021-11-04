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
  Button,
} from "react-native";
import GoogleMaps from "../Component/GoogleMaps";
import getSearchList from "../APILayer/SearchAPI";
import { SearchData, Item } from "../Model/SearchData";
import ListItem from "../Component/ListItem";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = (props: HomeProps) => {
  const [query, setQuery] = useState("");
  const translation = useRef(new Animated.Value(0)).current;
  const [searchData, setSearchData] = useState<SearchData>();
  const [loaderOn, setLoaderOn] = useState(false);
  const [listOn, setListOn] = useState(false);

  useEffect(() => {
    // fetchSearchAPI();
  });

  const onPressShowList = () => {
    if (searchData) {
      setListOn(!listOn);
      Animated.timing(translation, {
        toValue: listOn ? 0 : -300,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }else{
        Alert.alert('Search and expand')
    }
  };

  const handleSearch = (text: String) => {
    const formattedQuery = text.toLowerCase();
    setQuery(formattedQuery);
  };

  const heightAnimation = {
    transform: [{ translateY: translation }],
  };

  async function fetchSearchAPI() {
    if (query.length == 0) {
      Alert.alert("Search text empty");
      return;
    }

    setLoaderOn(true);
    try {
      const data = await getSearchList.getSearchData(query);
      const obj = JSON.parse(JSON.stringify(data)) as SearchData;
      setSearchData(obj);
    } catch (err) {
      console.error(err);
      Alert.alert("Error on data load!");
      setLoaderOn(false);
    }
  }

  const renderItem = ({ item }) => <ListItem data={item} />;

  const OnPressSearch = () => {
    setLoaderOn(true);
    {
      async () => {
        await fetchSearchAPI();
      };
    }
  };
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#DCE1E3",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarView}>
        <View style={styles.searchInputView}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={query}
            onChangeText={(queryText) => handleSearch(queryText)}
            placeholder="Search"
            style={styles.textInputstyle}
          />
        </View>
        <View style={styles.searchButtonView}>
          <TouchableOpacity
            onPress={async () => {
              await fetchSearchAPI();
            }}
          >
            <Text style={styles.textStyle}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <GoogleMaps data={searchData?.businesses as Item[]} />
      <Animated.View style={[styles.listViewContainer, heightAnimation]}>
        <View style={styles.loaderview}></View>
        <TouchableOpacity
          style={styles.mapExpandButton}
          onPress={onPressShowList}
        >
          <Text style={styles.textStyle}>
            {listOn ? "Reduce ᐯ" : "Expand ᐱ"}
          </Text>
        </TouchableOpacity>
        <View style={styles.loaderview}>
          {loaderOn && searchData == undefined && (
            <ActivityIndicator style={styles.loader} />
          )}
        </View>
        <FlatList
          data={searchData?.businesses}
          renderItem={renderItem}
          ItemSeparatorComponent={FlatListItemSeparator}
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
    flexDirection: "row",
    height: 54,
  },
  listViewContainer: {
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
    height: 40,
  },
  loaderview: {
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    marginTop: 80,
  },
  searchButtonView: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInputView: {
    flex: 0.7,
  },
});

export default Home;
