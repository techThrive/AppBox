// import Geolocation from '@react-native-community/geolocation';
// import React, {FunctionComponent,useEffect} from 'react';
// import {
//     Platform,
//   } from 'react-native';

// interface LocationManagerProps {
//     onStatusUpdate: () => void
//     onLongitude:() => void
//     onLatitude:() => void
//   }
  
//   const LocationManager = () =>{
//     useEffect(() => {
//         const requestLocationPermission = async () => {
//           if (Platform.OS === 'ios') {
//             getOneTimeLocation();
//             subscribeLocationLocation();
//           } else {
//             try {
//               const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                   title: 'Location Access Required',
//                   message: 'This App needs to Access your location',
//                 },
//               );
//               if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 //To Check, If Permission is granted
//                 getOneTimeLocation();
//                 subscribeLocationLocation();
//               } else {
//                 setLocationStatus('Permission Denied');
//               }
//             } catch (err) {
//               console.warn(err);
//             }
//           }
//         };
//         requestLocationPermission();
//         return () => {
//           Geolocation.clearWatch(watchID);
//         };
//       }, []);
    
//   }

//   const getOneTimeLocation = () => {
//     setLocationStatus('Getting Location ...');
//     Geolocation.getCurrentPosition(
//       //Will give you the current location
//       (position) => {
//         setLocationStatus('You are Here');

//         //getting the Longitude from the location json
//         const currentLongitude = 
//           JSON.stringify(position.coords.longitude);

//         //getting the Latitude from the location json
//         const currentLatitude = 
//           JSON.stringify(position.coords.latitude);

//         //Setting Longitude state
//         setCurrentLongitude(currentLongitude);
        
//         //Setting Longitude state
//         setCurrentLatitude(currentLatitude);
//       },
//       (error) => {
//         setLocationStatus(error.message);
//       },
//       {
//         enableHighAccuracy: false,
//         timeout: 30000,
//         maximumAge: 1000
//       },
//     );
//   };

//   export default getOneTimeLocation;