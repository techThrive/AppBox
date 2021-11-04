import React, { FunctionComponent, useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Config from '../Config/index';

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Item } from "../Model/SearchData";

export interface GoogleMapsProps {
  data: Item[];
}

const GoogleMaps: FunctionComponent<GoogleMapsProps> = (
  props: GoogleMapsProps
) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: Config.LATITUDE,
          longitude: Config.LONGITUDE,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {props.data != undefined && props.data.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.coordinates.latitude,
              longitude: marker.coordinates.longitude,
            }}
            title={marker.name as string}
            description={marker.location.city as string}
          />
        ))}
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 400,
  },
});

export default GoogleMaps;
