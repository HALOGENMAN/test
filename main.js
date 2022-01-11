import './style.css';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUgYNxBlLRJTW0ypZ-5GeFU16qs6c7umw",
  authDomain: "node-276507.firebaseapp.com",
  projectId: "node-276507",
  storageBucket: "node-276507.appspot.com",
  messagingSenderId: "856376338172",
  appId: "1:856376338172:web:7430221a2e4b4e78151979",
  measurementId: "G-P972LV82V3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();




const btn = document.getElementById('btn')



btn.onclick = async () =>{
  const inp = document.getElementById('inp')
  // console.log(inp.value)
  const callDoc = firestore.collection('calls').doc()
  // console.log(callDoc.id)

   callDoc.set({ name:inp.value })
  .then(()=>{
    
    console.log("success")
  })
  .catch((err)=>{console.log(err)})

}

