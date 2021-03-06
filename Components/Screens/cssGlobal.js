'use strict';
var React = require('react-native');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  backgroundColorChoice: {
    fontSize: 12,
  },
  openSans: {
    fontFamily: 'openSans',
  },
  white: {
    color: '#F2FFFF',
  },
  josephine: {
    fontFamily: 'josephine',
  },
  textRed: {
    color: 'red',
  },
  toogle: {
    marginLeft: 25,
  },
  titleApp: {
    fontSize: hp('5%'),
    paddingTop: hp('3.6%'),
    marginLeft: hp('3.5%'),
    marginRight: hp('3.5%'),
    paddingLeft: hp('3%'),
    paddingRight: hp('3%'),
  },
  subtitleApp: {
    fontSize: hp('2.2%'),
    textAlign: 'center',
  },
  viewWrapper: {
    justifyContent: 'center',
    paddingTop: hp('3%'),
    alignItems: 'center',
  },
  response: {
    color: '#32ce59',
    fontWeight: 'bold',
    fontSize: hp('8%'),
    fontFamily: 'josephine',
    marginLeft: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    left: 15,
    height: '100%',
  },
  textW: {
    color: '#F1F1F1',
  },
  textPrimary: {
    color: '#3C8874',
    fontFamily: 'josephine',
  },
  fss: {
    fontSize: hp('1.5%'),
  },
  fsm: {
    fontSize: hp('2.2%'),
  },

  fsml: {
    fontSize: hp('2.5%'),
  },
  fsl: {
    fontSize: hp('4%'),
  },
  co2: {
    width: '80%',
    textAlign: 'center',
    marginLeft: '10%',
    marginTop: 25,
  },
  mb: {
    marginBottom: hp('1%'),
  },
  mt1: {
    marginTop: hp('1%'),
  },
  mt: {
    marginTop: hp('2%'),
  },
  flexText: {
    flex: 2,
  },
  borR: {
    borderColor: '#222222',
    borderWidth: 2,
    padding: 3,
    marginTop: 5,
  },
  borOk: {
    borderColor: 'green',
    borderWidth: 2,
    padding: 3,
    marginTop: 5,
  },
  btnCam: {
    color: 'red',
  },
  bb: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  alignCenter: {
    textAlign: 'center',
  },
  // ACCOUNT SCREEN
  text: {
    color: '#3C8874',
    fontSize: hp('3%'),
    fontWeight: '700',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 15,
  },
  explaination: {
    color: '#3C8874',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 50,
    paddingLeft: 30,
  },
  lottieAccount: {
    width: wp('30%'),
    height: hp('30%'),
    top: hp('0.5%'),
    bottom: hp('0.5%'),
  },
  iconAccount: {
    fontSize: 30,
  },
  iconRight: {
    fontSize: 30,
    textAlign: 'right',
  },
  test: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCard: {
    fontSize: hp('2.4%'),
    backgroundColor: '#3C8874',
    width: wp('100%'),
    color: 'white',
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    position: 'absolute',
    top: hp('5%'),
    right: wp('5%'),
    // width: 50,
    // height: 50
  },
  textInstructionTitle: {
    fontSize: hp('2.2%'),
    maxWidth: '100%',
    margin: hp('2.0%'),
  },
  textInstructionSubtitle: {
    fontSize: hp('2.0%'),
    maxWidth: '100%',
    margin: hp('2.0%'),
  },
  textTitle: {
    fontSize: hp('3%'),
    textAlign: 'left',
    width: '100%',
    marginLeft: hp('6%'),
    marginRight: hp('6%'),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
    fontWeight: 'bold',
  },
  modaltextTitle: {
    fontSize: hp('2.1%'),
    width: '100%',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    marginTop: hp('3%'),
    marginBottom: hp('1.5%'),
  },
  modaltextsubTitle: {
    fontSize: hp('1.9%'),
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    marginTop: hp('1.5%'),
    marginBottom: hp('1.5%'),
  },
  modaltextResultTitle: {
    fontSize: hp('2.5%'),
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    marginTop: hp('0.5%'),
    marginBottom: hp('1%'),
  },
  textContent: {
    fontSize: hp('1.5%'),
    height: hp('5%'),
    paddingLeft: hp('2%'),
    paddingTop: hp('2%'),
  },
  percentage: {
    fontSize: 17,
    height: 30,
  },
  textResultat: {
    fontSize: 17,
    height: 30,
    alignItems: 'center',
    marginRight: wp('2.5%'),
    marginLeft: wp('2.5%'),
  },
  textdescriptionResultat: {
    fontSize: hp('1.8%'),
    color: 'black',
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  textInstruction: {
    fontSize: hp('2.5%'),
    margin: hp('1.5%'),
    textAlign: 'center',
    marginBottom: hp('0'),
  },
  textTitleReco: {
    fontSize: hp('2.3%'),
    margin: wp('1%'),
    textAlign: 'center',
  },
  // textChoiceMonth: {
  //   fontSize: hp('2.0%'),
  //   padding: 0,
  //   margin: 0,
  //   textAlign: 'center',
  // },
  textReco: {
    fontSize: 14,
    margin: 5,
    textAlign: 'center',
    width: '40%',
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
  },
  // END ACCOUNT
  // CHOICES SCREEN
  globalChoice: {
    marginTop: hp('5%'),
    paddingLeft: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  viewResponse: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    position: 'relative',
  },
  radius: {
    marginBottom: hp('2%'),
    width: '50%',
    borderRadius: 5,
    backgroundColor: '#3C8874',
    marginTop: hp('5%'),
    left: '50%',
    marginLeft: '-25%',
  },
  btnValider: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  view: {
    position: 'absolute',
    top: 25,
    flex: 1,
    justifyContent: 'center',
  },
  response: {
    textAlign: 'center',
    fontSize: hp('3.5%'),
    borderRadius: 10,
    backgroundColor: '#3C8874',
    color: 'white',
    padding: 5,
    marginTop: 25,
  },
  title: {
    fontSize: hp('3.2%'),
    marginRight: 14,
    marginLeft: 14,
    padding: 5,
    position: 'relative',
  },
  confirmationTitle: {
    fontSize: hp('3.5%'),
    marginRight: 12,
    marginLeft: 12,
    padding: 5,
    position: 'relative',
  },
  viewLottie: {
    width: '100%',
  },
  lottieChoices: {
    position: 'absolute',
    bottom: 0,
    left: -5,
    height: hp('20%'),
  },
  toogle: {
    paddingBottom: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  toogleBio: {
    position: 'relative',
    top: 5,
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F2FFFF',
    textAlign: 'center',
  },
  seasonChoiceBad: {
    width: '100%',
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
  },
  seasonChoiceGood: {
    backgroundColor: 'green',
    color: 'white',
    marginLeft: 5,
    textAlign: 'center',
    padding: 5,
    width: '100%',
  },
  badge: {
    width: '50%',
    margin: 5,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 12,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBadge: {
    fontSize: hp('1.8%'),
    height: hp('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  containerBadge: {
    padding: hp('0.7%'),
    marginBottom: hp('0.5%'),
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#3bc724',
    backgroundColor: '#3bc724',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'josephine',
  },
  containerBadgeFalse: {
    padding: hp('0.7%'),
    marginBottom: hp('0.5%'),
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: 'red',
    backgroundColor: '#EB3720',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'josephine',
  },
  containerBadgeAlwaysTrue: {
    fontSize: hp('3%'),
    color: '#3C8874',
    width: '75%',
    fontWeight: 'bold',
    padding: 15,
    fontFamily: 'josephine',
  },
  // END CHOICES
  // CONFIRMATION SCREEN
  buttonValidateChoice: {
    margin: 5,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'absolute',
    bottom: 30,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowOffset: { width: 2, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    zIndex: 3000,
  },
  buttonValidateChoiceTitle: {
    fontFamily: 'josephine',
    fontSize: 24,
    padding: 10,
    width: '100%',
  },
  viewResponse: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    position: 'relative',
  },
  radius: {
    marginTop: '10%',
    backgroundColor: 'green',
    position: 'absolute',
    left: '50%',
    marginLeft: -75,
    width: 150,
  },
  viewT: {
    width: wp('100%'),
  },
  view: {
    position: 'absolute',
    top: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonChoice: {
    marginBottom: hp('2%'),
    width: wp('75%'),
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#3C8874',
  },
  buttonT: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  response: {
    textAlign: 'center',
    fontSize: hp('3.5%'),
    borderRadius: 10,
    backgroundColor: '#3C8874',
    color: 'white',
    padding: 5,
    marginTop: 25,
  },
  titleConfirmation: {
    fontSize: hp('2.5%'),
    marginRight: 15,
    marginLeft: 15,
    marginTop: 25,
    padding: 5,
    position: 'relative',
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    color: 'white',
  },
  viewLottie: {
    width: '100%',
  },
  lottie: {
    position: 'absolute',
    top: 0.5,
    height: hp('20%'),
  },
  toogle: {
    paddingBottom: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  contentContainerConfirmation: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#F2FFFF',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    textAlign: 'center',
  },
  secondMessage: {
    position: 'absolute',
    bottom: hp('5%'),
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: wp('30%'),
  },
  titleChoice: {
    fontSize: hp('3%'),
    textAlign: 'center',
    width: '100%',
  },
  result: {
    fontSize: hp('2.5%'),
    width: '100%',
    textAlign: 'center',
  },
  pastilleSeason: {
    color: '#F2FFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
  // END CONFIRMATION

  // HOMESCREEN
  buttonHistorique: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowOffset: { width: 2, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    zIndex: 3000,
    width: '75%',
    flex: 0.5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '12.5%',
    top: '5%',
  },
  buttonAccount: {
    marginLeft: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowOffset: { width: 2, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    zIndex: 3000,
    maxWidth: '90%',
    flex: 0.5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonHome: {
    margin: 5,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'absolute',
    bottom: 30,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowOffset: { width: 2, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    zIndex: 3000,
  },
  buttonSaveResult: {
    alignItems: 'center',
    height: 60,
    width: 60,
    padding: 5,
    borderRadius: 50,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowColor: 'white',
    shadowOpacity: 0.3,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  buttonTextHome: {
    textAlign: 'center',
    color: '#fff',
    fontSize: hp('2.0%'),
    padding: hp('1%'),
  },
  overlayText: {
    textAlign: 'left',
    color: '#fff',
    fontSize: hp('2.0%'),
    padding: hp('1%'),
  },
  TextConnection: {
    textAlign: 'center',
    color: '#3C8874',
    fontSize: hp('2.5%'),
    padding: hp('1%'),
  },
  // END HOMESCREEN
  // RECO SCRREN
  lottieReco: {
    width: wp('25%'),
    height: hp('25%'),
    left: hp('5%'),
  },
  textInstructionReco: {
    fontSize: hp('3%'),
  },
  // END RECO
  // RESULT SCREEN
  titleResult: {
    fontSize: hp('6%'),
    textAlign: 'center',
    color: '#3C8874',
    fontWeight: 'bold',
    width: '100%',
  },
  Season: {
    fontSize: hp('3.5%'),
    textAlign: 'center',
    color: '#3C8874',
    fontWeight: 'bold',
    padding: hp('3.5%'),
  },
  seasonSub: {
    fontSize: hp('2%'),
    paddingTop: 5,
    marginLeft: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  titleEmission: {
    fontSize: hp('2.5%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    textAlign: 'center',
    color: '#3C8874',
    fontWeight: 'bold',
  },
  logoResult: {
    fontSize: hp('1.5%'),
    alignItems: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    width: '60%',
    paddingBottom: hp('0.5%'),
  },
  firstView: {
    height: hp('15%'),
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  secondView: {
    height: hp('70%'),
    width: '100%',
    flex: 1,
  },
  response: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
  },
  v: {
    backgroundColor: '#F2FFFF',
    width: '80%',
    position: 'relative',
    left: '10%',
  },
  cardView: {
    width: '80%',
    position: 'relative',
    left: '10%',
  },
  textGreen: {
    color: '#32ce59',
    marginLeft: 125,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 50,
  },
  textTitle: {
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
  },
  textSubtitle: {
    textAlign: 'center',
    padding: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },
  scoreGreenBtn: {
    marginLeft: 50,
  },
  contentContainerResult: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#F2FFFF',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
  },
  contentContainerResultHistoric: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F2FFFF',
    flexDirection: 'column',
    textAlign: 'center',
  },
  pastille: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  // END RESULT
  // SEARCH SCREEN
  searchBar: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  lottieSearch: {
    width: wp('22%'),
    height: hp('22%'),
    left: hp('5%'),
  },
  buttonSearch: {
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: '10%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowOffset: { width: 2, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  buttonEnSavoirPlus: {
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: '10%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowOffset: { width: 2, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },

  buttonTextSearch: {
    color: '#fff',
    fontSize: hp('3%'),
    textAlign: 'center',
  },
  foodButton1: {
    position: 'absolute',
    top: 300,
    right: 110,
    height: hp('30%'), // 70% of height device screen
    width: wp('30%'),
  },
  // END SEARCH
  directionRow: {
    flexDirection: 'row',
  },
  directionColumn: {
    flexDirection: 'column',
  },
  centerOverlay: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center'
  },
  overlayText: {
    fontSize: hp('2.5%'),
    paddingBottom: 15,
  },
  overlaySubtitle: {
    fontSize: hp('2%'),
    paddingBottom: 10,
  },
  card: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: '#3C8874',
    height: '50%',
    position: 'relative',
  },

  // User Screen
  buttonSignUp: {
    margin: 5,
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 30,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowOffset: { width: 2, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    zIndex: 3000,
  },
  titleUserScreen: {
    fontSize: hp('4%'),
    textAlign: 'center',
    color: '#F2FFFF',
    top: 50,
  },
  buttonEnregistrer: {
    margin: hp('1.5%'),
    borderRadius: 10,
    backgroundColor: '#F2FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#F2FFFF',
    shadowOpacity: 0.3,
    zIndex: 3000,
  },
  buttonSeConnecter: {
    margin: hp('1.5%'),
    borderRadius: 10,
    backgroundColor: '#F2FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#F2FFFF',
    shadowOpacity: 0.3,
    zIndex: 3000,
  },
  buttonFacebook: {
    margin: hp('1.5%'),
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#3C8874',
    backgroundColor: '#3C8874',
    shadowOffset: { width: 2, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    zIndex: 3000,
  },
  InputUserScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderWidth: 2,
    borderColor: '#C4C9CD',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    padding: hp('1%'),
    fontSize: hp('2.5%'),
    fontFamily: 'josephine',
    color: 'black',
    margin: hp('1%'),
  },
});
