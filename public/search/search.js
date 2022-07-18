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

let getArr = new Array(); //처음에 목록을 받아와서 이후에 검색할 때 또 받아오지 않도록 저장해두는 배열
db.collection("User").orderBy('time', 'desc').get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        let arr = new Array(11);
        let date = new Date(doc.data().time*1000);
        let year = Number(date.getFullYear()-1969); //왜그런진 모르겠는데 년도가 3991로 나옴
        let month = ("0" + Number(date.getMonth()+1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        let hour = ("0" + date.getHours()).slice(-2);
        let minute = ("0" + date.getMinutes()).slice(-2);
        arr[0] = year + "-" + month + "-" + day + " " + hour + ":" + minute;
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

        getArr.push(arr);
        let TR = document.createElement("tr");
        for(let i=0; i<11; i++){
            let TD = document.createElement("td");
            TD.innerHTML = arr[i];
            TR.appendChild(TD);
        }
        document.getElementById("tableBody").appendChild(TR);
    })
})

//검색 기능
document.getElementById("searchBtn").addEventListener("click", function(){
    let searchDate = document.getElementById("dateSearchBox").value;
    let searchName = document.getElementById("nameSearchBox").value;
    let tbodyRow = document.getElementById("tableBody").getElementsByTagName("tr");
    if(searchDate === "" && searchName !== ""){ //이름으로만 검색
        // for(let i=0; i<tbodyRow.length; i++){
        //     let td = tbodyRow[i].childNodes[1];
        //     if(td !== searchName){
        //         $("tbody tr").eq(i).remove();
        //         i--;
        //     }
        // }
    }
    else if(searchName === "" && searchDate !== ""){ //날짜로만 검색
        $("#tableBody").empty(); //테이블 비우기
        console.log(searchDate) //2022-07-19 형식

        for(let i=0; i<getArr.length; i++){
            if(getArr[i][0].substr(0,10) == searchDate){
                let TR = document.createElement("tr");
                for(let j=0; j<11; j++){
                    let TD = document.createElement("td");
                    TD.innerHTML = getArr[i][j];
                    TR.appendChild(TD);
                }
                document.getElementById("tableBody").appendChild(TR);
            }
        }
    }
    else if(searchName !== "" && searchDate !== ""){ //둘다 검색
        
    }
    else{
        alert("날짜 혹은 이름을 입력해주세요.")
    }
});