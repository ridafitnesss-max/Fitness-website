import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
 apiKey: "YOUR_API_KEY",
 authDomain: "YOUR_AUTH_DOMAIN",
 projectId: "YOUR_PROJECT_ID",
 storageBucket: "YOUR_STORAGE_BUCKET",
 messagingSenderId: "YOUR_SENDER_ID",
 appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").onclick = ()=>{
 const email=document.getElementById("email").value;
 const password=document.getElementById("password").value;
 signInWithEmailAndPassword(auth,email,password)
   .then(()=>document.getElementById("status").innerText="تم تسجيل الدخول!")
   .catch(e=>document.getElementById("status").innerText="خطأ: "+e.message);
};