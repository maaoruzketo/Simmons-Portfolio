//Set up element to inject
let inject = document.getElementById('inject');
listItemsArray = [];

//declare button and event listener
let addItemBtn = document.getElementById('addItem');
addItemBtn.addEventListener('click', function (e) {
    generateRow('What to do today');
    getListItems();
});

if (localStorage.getItem('listItemsArray')){
    listItemsArray = JSON.parse(localStorage.getItem('listItemsArray'));
    console.log(listItemsArray);
    for (let i = 0; i < listItemsArray.length; i++){
        generateRow(listItemsArray[i]);
    }
} else {
    listItemsArray = [];
}
//Generate our row
function generateRow(text) {
    //The Outer Div Tag
    let outerDiv = document.createElement('div')
    outerDiv.className = 'row py-2';
    inject.append(outerDiv);

    //first col-1
    let col_s1 = document.createElement('div');
    col_s1.className = 'col-1';
    //add col_s1 to outerDiv
    outerDiv.append(col_s1);

    //inside col-1...another div
    let col_s1_1 = document.createElement('div');
    col_s1_1.className = 'input-group-text bgText';
    //add this to the inside of col_s1
    col_s1.append(col_s1_1);

    //inside of col_s1_2
    let col_s1_1_input = document.createElement('input');
    col_s1_1_input.setAttribute('type', 'checkBox');
    col_s1_1_input.setAttribute('class', 'inputBigCheckBox');
    col_s1_1_input.setAttribute('aria-label', 'Checkbox for following test input');
    //add input to col_s1_1
    col_s1_1.append(col_s1_1_input);

    //create col-2
    let col_s2 = document.createElement('div');
    col_s2.className = 'col-1';
    //add this to show up below col-1
    outerDiv.append(col_s2);

    //create col-8
    let col_s3 = document.createElement('div');
    col_s3.className = 'col-8 bgText';
    col_s3.setAttribute('id', 'click1');
    //add this to show up below col-2
    outerDiv.append(col_s3);

    //create H5 inside of col-8
    let col_s3_1 = document.createElement('h5');
    col_s3_1.className = "pt-3 fontJav listItem";
    col_s3_1.setAttribute('id', 'myH5');
    col_s3_1.contentEditable = true;
    col_s3_1.addEventListener('keypress', function (e) {
        setTimeout(getListItems, 2);
    });
    col_s3_1.innerText = text;
    //add this to the inside of col-8
    col_s3.append(col_s3_1);

    //create col-1 after col-8
    let col_s4 = document.createElement('div');
    col_s4.className = 'col-2';
    //add this to outer div
    outerDiv.append(col_s4);

    //add button isde of col_s4
    let col_s4_1 = document.createElement('button');
    col_s4_1.className = 'btn btn-danger btnDel';
    col_s4_1.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove();
        getListItems();
    });
    //col_s4_1.innerText = "Delete";
    col_s4.append(col_s4_1);

    let col_s4_2 = document.createElement('img');
    col_s4_2.src = '/images/trubbish.png';
    col_s4_2.className = 'img-fluid garbordor';
    //outerDiv.append(col_s4);
    col_s4_1.append(col_s4_2);
}


function getListItems(){
    listItemsArray=[];
    let listItems = document.getElementsByClassName('listItem');
    console.log(listItems);
    for (let i = 0; i < listItems.length; i++){
        listItemsArray.push(listItems[i].innerText);
    }
    // listItems.forEach(element => {
    // });
    saveTheLocals();
}
//parent is a parameter representing a div, and this function will remove all children inside it.
//anakin(inject)

function saveTheLocals(){
    localStorage.setItem('listItemsArray',JSON.stringify(listItemsArray));
}
function anakin(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



// let pCounter = 0;

// let names = [
//     'Trever', 'Deon', 'Lourn', 'Kevin', 'Nimish', 'Abraham'
// ]

// let addPtag = document.getElementById('addPtag');
// let addList = document.getElementById('addList');
// let saveBtn = document.getElementById('saveBtn');
// let textArea = document.getElementById('txtArea');

// let addElements = document.getElementById('addElements');
// let keyPress = document.getElementById('keyPress');


// function createPElement(content) {
//     let pElement = document.createElement('p');
//     pElement.innerText = content;
//     pElement.setAttribute('class', 'list-group-item');
//     pElement.setAttribute('id', pCounter);
//     pElement.addEventListener('click', function (e) {
//         document.getElementById("addElement").contentEditable = "true";
//         //alert("I am poor...");
//     });
//     addElements.append(pElement);
//     pCounter++;

// }

// //Add event listeners
// keyPress.addEventListener('keypress', function (e) {
//     console.log(e.code);
//     if (e.code == 'Enter' && keyPress.value != '') {
//         //put data entered into p tag
//         createPElement(keyPress.value);

//         //going to save value into array
//         todoList.push(keyPress.value);

//     }
//     pElement.innerText = keyPress.value;
//     pElement.setAttribute('class', 'list-group-item');
//     pElement.setAttribute('id', pCounter);
//     //
//     //save items to local storage
//     localStorage.setItem('todo', JSON.stringify(todoList));
//     //clears what is entered
//     keyPress.value = null;

// });

// addPtag.addEventListener('click', function (e) {
//     let pElement = document.createElement('p');
//     pElement.innerText = "I am poor.";
//     addElements.append(pElement);

// });

// addList.addEventListener('click', function (e) {
//     let pElement = document.createElement('p');
//     //Create a UL Element
//     let ulElement = document.createElement('ul');

//     //Adding a list Element
//     let listElement = document.createElement('li');
//     listElement.innerText = "I am struggling.";
//     listElement.setAttribute('class', 'list-group-item');
//     pElement.setAttribute('id', pCounter);
//     pElement.addEventListener('click', function (e) {
//         alert("Hello, I am poor & struggling.");
//     });
//     addElements.append(pElement);

//     //Appending items in the proper order
//     //Appending list element to ul Element
//     ulElement.append(listElement);

//     //Appending ul Element to add Elements
//     addElements.append(ulElement);
// });

// saveBtn.addEventListener('click', function (e) {
//     alert(textArea.value);
//     //This stores textArea.value into localStorage
//     localStorage.setItem('Text', textArea.value);
//     localStorage.setItem('names', JSON.stringify(names));


// });

// //Retrieve itrem from local storage
// let storageItem = localStorage.getItem('Text');
// //Assign value to textArea
// textArea.value = storageItem;

// if (localStorage.getItem('todo') != '') {
//     console.log(JSON.parse(localStorage.getItem('todo')))
//     let todoLocal = JSON.parse(localStorage.getItem('todo'));
//     //populate array items into p tagas
//     for (let i = 0; i < todoLocal.Length; i++){
//         createPElement(todoLocal[i]);
//     }
//     //saving local storage into our array
//     todoList = todoLocal;
// }

// if (localStorage.getItem('names') != '') {
//     console.log(JSON.parse(localStorage.getItem('names')));
// }

// let namez = []