// // console.log(Math.floor(Math.random() * 6 + 1));

// var image = document.getElementById('img');


// var image1 = "./images/dice 1.webp"
// var image2 = "./images/dice 2.webp"
// var image3 = "./images/dice 3.webp"
// var image4 = "./images/dice 4.webp"
// var image5 = "./images/dice 5.webp"
// var image6 = "./images/dice 6.webp"


// function dice() {
//     var num = Math.floor(Math.random() * 6) + 1;
     
//     if(num === 1){
//         image.src = image1
//     }
//     else if(num === 2){
//         image.src = image2
//     }
//     else if(num === 3){
//         image.src = image3
//     }
//     else if(num === 4){
//         image.src = image4;
//     }
//     else if(num === 5){
//         image.src = image5;
//     }
//     else if(num === 6){
//         image.src = image6;
//     }
// };


// var obj = {
//     name : 'majid',
//     age : 30
// };

// for(var val of obj){
//     document.write(val)
// }


//  var plan1 = {
//    name:   "Basic",
//    price: 3.99,
//    space: 100,
//    transfer: 1000,
//    pages: 10
//  };


//   function Plan(name, price, space, transfer, pages) {
//    this.name = name;
//    this.price = price;
//    this.space = space;
//    this.transfer = transfer;
//    this.pages = pages;
//  };

//  var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);

 
//  var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
//  var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
//  var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);
 
//  console.log(plan1.price)
//  console.log(plan2)
//  console.log(plan3)


// function data() {
//   console.log('func')
// var value = document.getElementById('inp').value
// console.log('value',value)
// }

// var ul = document.getElementById('ul');

// function todo() {
//   var input = document.getElementById('inp');
//   var li = document.createElement('li');
//   var text = document.createTextNode(input.value);
//   li.appendChild(text);

//   //dlt btn
//   var dlt = document.createElement('button');
//   dlt.innerText = 'dlt';

//   dlt.addEventListener('click', function() {
//     uraDo(this)
//   })

//   li.appendChild(dlt)
//   ul.appendChild(li);

//   // edit btn
//   var edit = document.createElement('button');
//   edit.innerHTML = 'Edit';
//   li.appendChild(edit);

//   edit.addEventListener('click', function(){
//     editFunc(this)
//   });


//   input.value = '';
// };

// function editFunc(e) {
//   var li = e.parentNode.firstChild.nodeValue
//   var newValue = prompt('enter new', li);
//    e.parentNode.firstChild.nodeValue = newValue 
// }

// function uraDo(e) {
//   e.parentNode.remove();
// }




var ul = document.getElementById('ul');

function todo() {
  var inp = document.getElementById('inp');
  var input;
  if(inp.value.trim() !== ''){
    input = inp.value;
  }
  var li = document.createElement('li');
  li.innerText = input;
  ul.appendChild(li);

  // delete btn
  var dlt = document.createElement('button');
  dlt.innerHTML = 'Delete';
  li.appendChild(dlt)

  //edit btn
  var edt = document.createElement('button');
  edt.innerHTML = 'Edit';
  li.appendChild(edt);

  //add event listner
  // dlt.addEventListener('click', function() {
  //   dlte(this);
  // });
  dlt.setAttribute('onclick', 'dlte(this)')

  edt.addEventListener('click', function() {
    edit(this);
  })

  // dlt.setAttribute('class', 'dlt')
  dlt.className = 'dlt'

  inp.value = '';

};

function dlte(e) {
  e.parentNode.remove();
}

function edit(e) {
  var li = e.parentNode.firstChild.nodeValue;
  var newValue = prompt('enter new', li);
  e.parentNode.firstChild.nodeValue = newValue;
}




