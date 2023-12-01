var button = document.getElementById("menuButton");
button.addEventListener("click", choose);

const select = document.querySelector('#choices')
// bringing the select and button into js

const brFoods = document.getElementsByClassName("breakfast"); 
const lnFoods = document.getElementsByClassName("lunch"); 
const diFoods = document.getElementsByClassName("dinner"); 
const deFoods = document.getElementsByClassName("dessert"); 
// lists of each type of food in the html

// function to show the corresponding dishes when the visitor presses the button
function choose() {
    event.preventDefault();

    // console log the selected option
    console.log(select.value);

    // make everything invisible to start
    displayNone();

    // match the selected value to a list and make those visible
    if(select.value == "Breakfast"){
      for (let i = 0; i < brFoods.length; i++) {
        brFoods[i].style.display = "inline";
      }
    }else if(select.value == "Lunch"){
        for (let i = 0; i < lnFoods.length; i++) {
          lnFoods[i].style.display = "inline";
        }
    }else if(select.value == "Dinner"){
      for (let i = 0; i < diFoods.length; i++) {
        diFoods[i].style.display = "inline";
      }
    }else if(select.value == "Dessert"){
        for (let i = 0; i < deFoods.length; i++) {
          deFoods[i].style.display = "inline";
        }
    }else{
      console.log("Oops");
    }



};

// make every menu item invisible 
function displayNone(){

  for (let i = 0; i < brFoods.length; i++) {
    brFoods[i].style.display = "none";
  }
  for (let i = 0; i < lnFoods.length; i++) {
    lnFoods[i].style.display = "none";
  }
  for (let i = 0; i < diFoods.length; i++) {
    diFoods[i].style.display = "none";
  }
  for (let i = 0; i < deFoods.length; i++) {
    deFoods[i].style.display = "none";
  }
}

window.onload = displayNone();








// the comments are mad chatGPT vibes xd - ralph <3
/*// JavaScript code for showing/hiding food sections
function showFoodSection(section) {
  // Hide all food sections
  document.querySelectorAll('.food-section').forEach(function (el) {
    el.classList.remove('active');
  });

  // Show the selected food section
  var selectedScetion = document.getElementById(section + '-section');
  selectedSection.classList.add('active');

  documnet.querySelectorALL('food-section p').forEach(function (el){
    el.style.display = 'none';
  });

  //Show the text inside the <h2> element of the selceted section
  var contentPragraph = selectedSection.querySelector('p');
  if (contentPragraph) {
    contentParagraph.style.display = 'block';
  }
}
*/