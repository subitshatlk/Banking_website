import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAvGtymTc72Bihzu0Qb18yW10vCY9ZZL5Q",
    authDomain: "bankingapp-18c5a.firebaseapp.com",
    projectId: "bankingapp-18c5a",
    storageBucket: "bankingapp-18c5a.appspot.com",
    messagingSenderId: "1053610683601",
    appId: "1:1053610683601:web:0ef4eb3c8f396c386d69f0"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export const addUser = ([name, email, accountno, balance]) => {
  return db
    .collection("users")
    .add({ name: name, email:email, accountno: accountno, balance: balance });
};

export const addTransaction = ( receiver, sender, amount) => {
  return db
    .collection("transactions")
    .add({ receiver: receiver, sender: sender, amount: amount, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [db.collection("users").doc(id1).update({
    balance: Number(balance1) - Number(amount)
  }),
  db.collection("users").doc(id2).update({
    balance: Number(balance2) + Number(amount)
  })]

}

export { db };
  //firebase.initializeApp(firebaseConfig);
  //export default firebase