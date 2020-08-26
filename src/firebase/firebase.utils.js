import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import {tasks} from "../data/tasks";


const config = {
  apiKey: "AIzaSyD5kjFvOxxk_Wz6CfaGCNEYA5VS9Zqq5DI",
  authDomain: "study-smile-e1475.firebaseapp.com",
  databaseURL: "https://study-smile-e1475.firebaseio.com",
  projectId: "study-smile-e1475",
  storageBucket: "study-smile-e1475.appspot.com",
  messagingSenderId: "15794704052",
  appId: "1:15794704052:web:8d5578e26141d250bc51e1",
  measurementId: "G-5V5BS1YBN7"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();


// adding collection of data
export const addCollectionAndDocuments = async () => {
  firestore.collection("tasks").doc('2').set({
    "dustbins": tasks[2].dustbins,
    "boxes": tasks[2].boxes,
  }).then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export default firebase;