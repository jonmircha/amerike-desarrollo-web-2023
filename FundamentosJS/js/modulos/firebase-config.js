import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeV0pwCankmpggJwfswzt5kZC7sfDkd2Y",
  authDomain: "dev5-desarrollo-web.firebaseapp.com",
  databaseURL: "https://dev5-desarrollo-web-default-rtdb.firebaseio.com",
  projectId: "dev5-desarrollo-web",
  storageBucket: "dev5-desarrollo-web.appspot.com",
  messagingSenderId: "89836485212",
  appId: "1:89836485212:web:714d27e8e641063ca8c499",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
