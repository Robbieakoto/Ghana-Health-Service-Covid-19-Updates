import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const firebaseConfig = {
    apiKey: "AIzaSyBKB4mbiME1yyaxfVwZ3k216qo3LaqrRrw",
    authDomain: "ghana-covid-19-ccbdf.firebaseapp.com",
    databaseURL: "https://ghana-covid-19-ccbdf.firebaseio.com",
    projectId: "ghana-covid-19-ccbdf",
    storageBucket: "ghana-covid-19-ccbdf.appspot.com",
    messagingSenderId: "209345015686",
    appId: "1:209345015686:web:46e863be60fee6244c8607",
    measurementId: "G-K32DW09N2L"
};
firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const subscribers = db.collection('subscribers')

export default subscribers;
