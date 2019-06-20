// ! MISE EN SOMMEIL DE L'APPAREIL PHOTO

// import React from 'react';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import { AsyncStorage, View, Text, ScrollView, TouchableOpacity } from 'react-native';
// import { connect } from 'react-redux';
// import { Icon, Overlay, Button } from 'react-native-elements';
// import { Ionicons } from '@expo/vector-icons';
// import AwesomeAlert from 'react-native-awesome-alerts';
// var s = require('./cssGlobal');

// class ResultScreenFromCamera extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: false,
//       showAlert: false,
//     };
//   }

//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: 'Next',
//       headerRight: (
//         <Ionicons
//           onPress={() => navigation.navigate('HomeScreen')}
//           name="ios-home"
//           style={{ marginRight: 25 }}
//           color="white"
//           size={30}
//         />
//       ),
//     };
//   };

//   onButtonPress = () => {
//     if (this.state.isVisible == false) {
//       this.setState({
//         isVisible: true,
//       });
//     } else {
//       this.setState({
//         isVisible: false,
//       });
//     }
//   };

//   hideAlert = () => {
//     this.setState({
//       showAlert: false,
//     });
//   };

//   showAlert = () => {
//     if (this.state.showAlert == false) {
//       this.setState({
//         showAlert: true,
//       });
//     } else {
//       this.setState({
//         showAlert: false,
//       });
//     }
//   };

//   OnSavePress = async () => {
//     let date = new Date();
//     let food = {
//       Food: this.props.data.dataFromCamera[this.props.data.chosenFood].article,
//       Date: {
//         day: date.getDate(),
//         month: date.getMonth(),
//         year: date.getFullYear(),
//       },
//       Europe: this.props.data.Europe,
//       France: this.props.data.France,
//       Local: this.props.data.Local,
//       Monde: this.props.data.Monde,
//       Quantity: this.props.data.Quantity,
//     };
//     let foods = await AsyncStorage.getItem('foods');
//     foods = JSON.parse(foods);
//     if (!foods) {
//       foods = [];
//     }
//     foods.push(food);
//     await AsyncStorage.setItem('foods', JSON.stringify(foods));
//     //foods = await AsyncStorage.clear();
//     // //console.log("contenu de l'AsyncStorage -->", foods, "<--- AsyncStorage");
//     this.props.saveDataFromCamera(foods);
//     this.props.navigation.navigate('HistoScreen');
//   };

//   render() {
//     const { showAlert } = this.state;
//     let tableSeasonFromAPI = this.props.data.dataFromCamera[this.props.data.chosenFood].article
//       .season;
//     let tableSeason = [];
//     tableSeasonFromAPI[0] ? (tableSeason[0] = '1') : null;
//     tableSeasonFromAPI[1] ? (tableSeason[1] = '2') : null;
//     tableSeasonFromAPI[2] ? (tableSeason[2] = '3') : null;
//     tableSeasonFromAPI[3] ? (tableSeason[3] = '4') : null;
//     tableSeasonFromAPI[4] ? (tableSeason[4] = '5') : null;
//     tableSeasonFromAPI[5] ? (tableSeason[5] = '6') : null;
//     tableSeasonFromAPI[6] ? (tableSeason[6] = '7') : null;
//     tableSeasonFromAPI[7] ? (tableSeason[7] = '8') : null;
//     tableSeasonFromAPI[8] ? (tableSeason[8] = '9') : null;
//     tableSeasonFromAPI[9] ? (tableSeason[9] = '10') : null;
//     tableSeasonFromAPI[10] ? (tableSeason[10] = '11') : null;
//     tableSeasonFromAPI[11] ? (tableSeason[11] = '12') : null;

//     // Prise en compte de la date du jour pour les saisons
//     let todayDate = new Date();
//     let todayMonth = todayDate.getMonth();

//     // ----- Calcul de l'emission ------- //

//     // ---- 1) Facteur d'émission ------- //
//     let emissionFactor = this.props.data.dataFromCamera[this.props.data.chosenFood].article
//       .emission;
//     emissionFactor.toFixed(2);

//     // ---- 2) Saisonalité  ------- //
//     // Supplément de 50% sur la facteur d'émission si le fruit /

//     let supplementSeason = 1;
//     this.props.data.dataFromCamera[this.props.data.chosenFood].article.season[todayMonth]
//       ? (supplementSeason = 1)
//       : (supplementSeason = 1.25);

//     // ---- 3) Provenance  ------- //

//     let supplementTransport = 1;
//     this.props.data.Local
//       ? (supplementTransport = 1)
//       : this.props.data.France
//       ? (supplementTransport = 1.1)
//       : this.props.data.Europe
//       ? (supplementTransport = 1.3)
//       : (supplementTransport = 1.5);

//     let logoResult = '';
//     let styleCopy = { ...s.response };

//     // Calcul avec 3 paramètres et arrondi à 2 chiffres
//     let emission = (
//       emissionFactor +
//       emissionFactor * (supplementSeason - 1) +
//       emissionFactor * (supplementTransport - 1)
//     ).toFixed(2);

//     // Attribution du résultat final
//     if (emission < 2) {
//       logoResult = 'FAIBLE';
//       styleCopy.color = '#32ce59';
//     } else if (emission < 10) {
//       logoResult = 'MOYEN';
//       styleCopy.color = '#FFA700';
//     } else {
//       logoResult = 'FORT';
//       styleCopy.color = '#C0392B';
//     }

//     //Afficher les saisons seulement pour les fruits et légumes
//     let season = <View />;
//     if (this.props.data.dataFromCamera[this.props.data.chosenFood].article.type === 'Vegetables') {
//       //console.log('je suis passé dans la condition ');
//       season = (
//         <View>
//           <View
//             style={{ flex: 0.2, width: '100%', flexDirection: 'column', justifyContent: 'center' }}
//           >
//             <Text style={[s.josephine, s.Season]}>Mois de Saison :</Text>
//           </View>
//           <View style={{ flex: 0.5, margin: 2 }}>
//             <View
//               style={{
//                 width: '100%',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               {tableSeasonFromAPI[0] == true ? (
//                 <Text style={s.containerBadge}>Janvier</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[1] == true ? (
//                 <Text style={s.containerBadge}>Février</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[2] == true ? (
//                 <Text style={s.containerBadge}>Mars</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}

//               {tableSeasonFromAPI[3] == true ? (
//                 <Text style={s.containerBadge}>Avril</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[4] == true ? (
//                 <Text style={s.containerBadge}>Mai</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[5] == true ? (
//                 <Text style={s.containerBadge}>Juin</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[6] == true ? (
//                 <Text style={s.containerBadge}>Juillet</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[7] == true ? (
//                 <Text style={s.containerBadge}>Août</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[8] == true ? (
//                 <Text style={s.containerBadge}>Septembre</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[9] == true ? (
//                 <Text style={s.containerBadge}>Octobre</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[10] == true ? (
//                 <Text style={s.containerBadge}>Novembre</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//               {tableSeasonFromAPI[11] == true ? (
//                 <Text style={s.containerBadge}>Décembre</Text>
//               ) : (
//                 <Text style={{ height: 0 }} />
//               )}
//             </View>
//           </View>
//         </View>
//       );
//     } else {
//       season = <View />;
//     }

//     // On distingue les aliments liquide des autres
//     let quantity = <Text style={[s.josephine, s.titleEmission]} />;
//     this.props.data.dataFromCamera[this.props.data.chosenFood].article.type === 'Beverages'
//       ? (quantity = (
//           <Text style={[s.josephine, s.titleEmission]}>
//             Quantité : {this.props.data.Quantity} mL
//           </Text>
//         ))
//       : (quantity = (
//           <Text style={[s.josephine, s.titleEmission]}>
//             Quantité : {this.props.data.Quantity} g
//           </Text>
//         ));

//     return (
//       <ScrollView
//         showsVerticalScrollIndicator={true}
//         contentContainerStyle={s.contentContainerResult}
//       >
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ textAlign: 'center' }}
//         >
//           <View style={{ flex: 0.2, marginTop: 15 }}>
//             <Text style={[s.josephine, s.titleResult]}>
//               {this.props.data.dataFromCamera[this.props.data.chosenFood].article.nameFR}
//             </Text>
//           </View>

//           <View style={{ flex: 0.1 }}>
//             {quantity}
//             <Text style={[s.josephine, s.titleEmission]}>
//               Empreinte carbone: {emission} gCO2 / g
//             </Text>
//           </View>

//           <View
//             style={{
//               flex: 0.2,
//               padding: 2,
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-evenly',
//             }}
//           >
//             <Icon name="ios-square" size={hp('8%')} type="ionicon" color={styleCopy.color} />
//             <Text style={[s.josephine, s.logoResult, styleCopy]}>{logoResult}</Text>
//           </View>

//           <View style={{ flex: 0.2 }}>
//             <Button
//               title="Pourquoi ce score ?"
//               titleStyle={[s.josephine, s.white]}
//               onPress={this.onButtonPress}
//               buttonStyle={{ backgroundColor: '#3C8874' }}
//             />
//           </View>

//           <Overlay
//             isVisible={this.state.isVisible}
//             overlayBackgroundColor="#3C8874"
//             onBackdropPress={this.onButtonPress}
//             height="20%"
//             width="90%"
//           >
//             <Text style={[s.white, s.josephine, s.directionRow, s.overlayText]}>
//               - Facteur d'émission propre à l'aliment :{' '}
//               <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold' }}>{emissionFactor}g</Text>
//             </Text>
//             <Text style={[s.white, s.josephine, s.directionRow, s.overlayText]}>
//               - Supplément lié à la saison actuelle :{' '}
//               <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold' }}>
//                 +{((supplementSeason - 1) * 100).toFixed(0)}
//               </Text>
//               %
//             </Text>
//             <Text style={[s.white, s.josephine, s.directionRow, s.overlayText]}>
//               - Supplément lié à la provenance :{' '}
//               <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold' }}>
//                 +{((supplementTransport - 1) * 100).toFixed(0)}%
//               </Text>
//             </Text>
//           </Overlay>
//           {season}
//         </ScrollView>
//         <AwesomeAlert
//           style={{ zIndex: 4000, fontSize: hp('1%') }}
//           show={showAlert}
//           showProgress={false}
//           title="Enregistrer l'aliment?"
//           message=""
//           closeOnTouchOutside={true}
//           closeOnHardwareBackPress={false}
//           showCancelButton={true}
//           showConfirmButton={true}
//           confirmText="Confirmer"
//           cancelText="Annuler"
//           confirmButtonColor="#32ce59"
//           onCancelPressed={() => {
//             this.hideAlert();
//           }}
//           onConfirmPressed={() => {
//             this.OnSavePress();
//           }}
//         />
//         <TouchableOpacity
//           style={[s.buttonSaveResult]}
//           onPress={() => this.showAlert()}
//           underlayColor="#fff"
//         >
//           <Icon
//             containerStyle={{ marginTop: 10 }}
//             name="ios-save"
//             size={30}
//             type="ionicon"
//             color="#F2FFFF"
//           />
//         </TouchableOpacity>
//       </ScrollView>
//     );
//   }
// }

// mapDispatchToProps = dispatch => {
//   return {
//     saveDataFromCamera: function(data) {
//       dispatch({
//         type: 'dataSavedFromCamera',
//         foodSaved: data,
//       });
//     },
//   };
// };

// // My new container component
// mapStateToProps = state => {
//   console.log('Réception dans ResultScreenFromCamera ---->', state.data, '<---');
//   return { data: state.data };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ResultScreenFromCamera);
