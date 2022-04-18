const firebaseConfig = {
    apiKey: "AIzaSyAETLy6EubnWcv2NARqyEKLIfC-rRBin3w",
    authDomain: "enneatest-b7cc9.firebaseapp.com",
    projectId: "enneatest-b7cc9",
    storageBucket: "enneatest-b7cc9.appspot.com",
    messagingSenderId: "918072804291",
    appId: "1:918072804291:web:52953c709becdbe7cfb376"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("User").get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        let arr = new Array(11);
        arr[0] = new Date(doc.data().time*1000);
        arr[1] = doc.data().name;
        arr[2] = doc.data().one;
        arr[3] = doc.data().two;
        arr[4] = doc.data().three;
        arr[5] = doc.data().four;
        arr[6] = doc.data().five;
        arr[7] = doc.data().six;
        arr[8] = doc.data().seven;
        arr[9] = doc.data().eight;
        arr[10] = doc.data().nine;

        let TR = document.createElement("tr");
        for(let i=0; i<11; i++){
            let TD = document.createElement("td");
            TD.innerHTML = arr[i];
            TR.appendChild(TD);
        }
        document.getElementById("tableBody").appendChild(TR);
    })
})