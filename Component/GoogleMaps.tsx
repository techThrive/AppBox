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
} from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

interface GoogleMapsProps {}

const GoogleMaps: FunctionComponent<GoogleMapsProps> = (
  props: GoogleMapsProps
) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 500,
  },
});

export default GoogleMaps;
