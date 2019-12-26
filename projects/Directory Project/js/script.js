let xmlhttp = new XMLHttpRequest();
let url = "../data/data.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        studentInfo(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send()

let students = [];

function studentInfo(info){
    for (let i = 0; i < info.students.length; i++){
        let nFo = 
        {
            "firstName": info.students[i].firstName, 
            "lastName": info.students[i].lastName,
            "nickName": info.students[i].nickName,
            "email": info.students[i].email,
            "slackName": info.students[i].slackName,
            "hobby": info.students[i].hobby
        }
        students.push(nFo);
    }
}
let i = 0;


let random = document.getElementById('studentsInfo');
random.addEventListener('click', function(e){
    i = Math.floor(Math.random()*students.length);
    console.log(i);
    firstName.innerText = students[i].firstName;
    lastName.innerText = students[i].lastName;
    nickName.innerText = students[i].nickName;
    email.innerText = students[i].email;
    slackName.innerText = students[i].slackName;
    hobby.innerText = students[i].hobby;


});
 let next = document.getElementById('studentsInfoNext');
 next.addEventListener('click', function(e){
     i++;
     if (i>22){
         i=0;
     }
     firstName.innerText = students[i].firstName;
     lastName.innerText = students[i].lastName;
     nickName.innerText = students[i].nickName;
    email.innerText = students[i].email;
    slackName.innerText = students[i].slackName;
    hobby.innerText = students[i].hobby;
 });
 let prev = document.getElementById('studentsInfoPrev');
 prev.addEventListener('click', function(e){
     i--;
     if (i<0){
         i=22;
     }
     firstName.innerText = students[i].firstName;
     lastName.innerText = students[i].lastName;
     nickName.innerText = students[i].nickName;
    email.innerText = students[i].email;
    slackName.innerText = students[i].slackName;
    hobby.innerText = students[i].hobby;
 });
 let first = document.getElementById('studentsInfoFirst');
 first.addEventListener('click', function(e){
     i=0;
     firstName.innerText = students[i].firstName;
     lastName.innerText = students[i].lastName;
     nickName.innerText = students[i].nickName;
    email.innerText = students[i].email;
    slackName.innerText = students[i].slackName;
    hobby.innerText = students[i].hobby;
 });
 let last = document.getElementById('studentsInfoLast');
 last.addEventListener('click', function(e){
     i=22;
     firstName.innerText = students[i].firstName;
     lastName.innerText = students[i].lastName;
     nickName.innerText = students[i].nickName;
    email.innerText = students[i].email;
    slackName.innerText = students[i].slackName;
    hobby.innerText = students[i].hobby;
 });