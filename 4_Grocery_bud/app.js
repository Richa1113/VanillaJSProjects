//*****************SELECT ITEMS**************//

const alert = document.querySelector(".alert");
const groceryText = document.getElementById("grocery");
const groceryForm = document.querySelector(".grocery-form");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const groceryList = document.querySelector(".grocery-list");
const groceryContainer = document.querySelector(".grocery-container");

//........EDIT OPTION.....
let editElement;
let editFlag = false;
let editId = "";

//*****************EVENT LISTENERS************//

// SUBMIT ITEM 
groceryForm.addEventListener("submit", addItem);
// CLEAR ITEM
clearBtn.addEventListener("click", clearItems);
// ON LOAD
window.addEventListener("DOMContentLoaded", setupItems)

//*****************FUNCTIONS*****************//
function addItem(e){
    e.preventDefault();
    //console.log(groceryText.value);
    const value = groceryText.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        //console.log("item added succesfully");
        createListItems(id, value);
        //.......display alert.........
        displayAlert("Item added successfully", "success");
        //.......show container
        groceryContainer.classList.add("show-container");

        //...........add to local storage.....
        addToLocalStorage(id, value);

        //........set back to default.........
        setBackToDefault();
    }
    else if(value && editFlag){
        //console.log("item is editing");
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        //edit local storage
        editLocalStorage(editId, value);
        //back to default values
        setBackToDefault(); 

    }
    else{
        // alert.textContent = "EMPTY VALUE";
        // alert.classList.add("alert-danger");
        //console.log("value is empty");

        displayAlert("Please enter value", "danger");
    }
}
//......CLEAR THE ITEMS...........
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");
    if(items.length > 0){
        items.forEach(function(item){
            groceryList.removeChild(item);
        })
    }
    groceryContainer.classList.remove("show-container");
    displayAlert("list is empty", "danger");
    setBackToDefault();
    //clear from local storage
    localStorage.removeItem("list");
}

//.........DISPLAY ALERT..........
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

//........Remove Alert.............
setInterval(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
},2000);
}

//...........DELETING ITEM.....
function deleteItem(e){
    //console.log("item is deleted");
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    groceryList.removeChild(element);
    if(groceryList.children.length === 0){
        groceryContainer.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();

    //remove from local storage
    removeFromLocalStorage(id);
}

//............EDITING ITEM.........
function editItem(e){
    //console.log("edit item")
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set from value
    groceryText.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    // change text of button
    submitBtn.textContent = "edit";
}

//.......SET BACK TO DEFAULT.....
function setBackToDefault(){
    //console.log("set back to default");
    groceryText.value = "";
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit";
}

//******************FUNCTIONS OF LOCAL STORAGE***************************//
function addToLocalStorage(id, value){
    //console.log("added to local storage");
    //const grocery = {id:id, value:value} or when both key n pair names are same we can write directly 
    const grocery = {id, value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
    
}

function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}

function removeFromLocalStorage(id){
   let items = getLocalStorage();
   items = items.filter(function(item){
    if(item.id !== id){
        return item;
    }
   })
   localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
    //console.log("edit local storage");
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    //console.log("shake n bake");
    localStorage.setItem("list", JSON.stringify(items));
}
//localstorage API
//set item
//get item
//remove item
// localStorage.setItem("fruits", JSON.stringify(["orange", "banana"]));
// const fruits = JSON.parse(localStorage.getItem("fruits"));
// console.log(fruits);
// localStorage.removeItem("fruits");

//************SETUP ITEMS*************************//
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
    items.forEach(function(item){
        createListItems(item.id, item.value);
    })};
    groceryContainer.classList.add("show-container");
}
// create items on list
function createListItems(id, value){
    const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;

        //delete button
        const deleteBtn = element.querySelector(".delete-btn");
        //delete item
        deleteBtn.addEventListener("click", deleteItem);

        //edit button
        const editBtn = element.querySelector(".edit-btn");
        //edit item
        editBtn.addEventListener("click", editItem);
        
        //....append child.......
        groceryList.appendChild(element);
}