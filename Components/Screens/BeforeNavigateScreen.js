// ! MISE EN SOMMEIL DE L'APPAREIL PHOTO

// import React from 'react';
// import { View, Animated, Easing, TouchableOpacity } from 'react-native';
// import { Button, Text } from 'react-native-elements';
// import LottieView from 'lottie-react-native';
// import { Ionicons } from '@expo/vector-icons';
// var s = require('./cssGlobal');

// export default class BeforeNavigate extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       progress: new Animated.Value(0),
//     };
//   }

//   // Retour vers l'écran Account
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: 'Home',
//       headerRight: (
//         <Ionicons
//           onPress={() => navigation.navigate('AccountScreen')}
//           name="ios-home"
//           style={{ marginRight: 25 }}
//           color="white"
//           size={30}
//         />
//       ),
//       headerLeft: (
//         <Button
//           icon={{ name: 'arrow-left', type: 'font-awesome', color: 'white' }}
//           title="Back"
//           onPress={() => navigation.navigate('SearchScreen')}
//           buttonStyle={{ backgroundColor: 'transparent' }}
//         />
//       ),
//     };
//   };

//   componentDidMount() {
//     this.animationInput.play(0, 100);
//     this.animationCamera.play(0, 100);
//     Animated.timing(this.state.progress, {
//       toValue: 1,
//       duration: 10000,
//       easing: Easing.linear,
//     }).start();
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: '#F2FFFF' }}>
//         <View style={{ flex: 0.5, height: '50%', marginBottom: '2.5%', alignItems: 'center' }}>
//           <TouchableOpacity
//             onPress={() => this.props.navigation.navigate('CameraChildScreen')}
//             underlayColor="#fff"
//             style={{
//               borderBottomWidth: 10,
//               borderBottomColor: '#3C8874',
//               paddingBottom: 10,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <LottieView
//               style={{ width: '50%', justifyContent: 'center' }}
//               ref={animationCamera => {
//                 this.animationCamera = animationCamera;
//               }}
//               source={require('../../assets/camera__.json')}
//               onPress={() => this.props.navigation.navigate('CameraChildScreen')}
//             />
//             <Text
//               style={{
//                 textAlign: 'center',
//                 fontSize: 23,
//                 fontFamily: 'josephine',
//                 marginTop: 15,
//                 borderBottomWidth: 3,
//                 borderBottomColor: '#3C8874',
//               }}
//             >
//               Prendre en photo l'aliment
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 0.5,
//             height: '50%',
//             marginTop: '0.5%',
//             marginBottom: '2.5%',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => this.props.navigation.navigate('SearchScreen')}
//             underlayColor="#fff"
//             style={{
//               borderBottomWidth: 10,
//               borderBottomColor: '#3C8874',
//               paddingBottom: 10,
//               width: '75%',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <LottieView
//               style={{ width: '90%' }}
//               ref={animationInput => {
//                 this.animationInput = animationInput;
//               }}
//               source={require('../../assets/input.json')}
//             />
//             <Text
//               style={{
//                 textAlign: 'center',
//                 fontSize: 23,
//                 fontFamily: 'josephine',
//                 marginTop: 15,
//                 borderBottomWidth: 3,
//                 borderBottomColor: '#3C8874',
//               }}
//             >
//               Barre de recherche
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
