
// html tree   Условие


// { <body>
//         <div>
//             <span>Enter a data please:</span><br/>
//             <input type='text' id='name'>
//             <input type='text' id='surname'>
//         </div>
//         <div>
//             <button id='ok'>OK</button>
//             <button id='cancel'>Cancel</button>
//         </div>
//     </body> }

//фАЙЛ В СТРУКТУРЕ JSON :

// let body = {
//     tagName: 'body',
//     subTags: [
//         {
//             tagName: 'div',
//             subTags:[
//                 {
//                     tagName: 'snap',
//                     text: 'Enter a data please:',
//                 },
//               { 
//                   tagName: 'br',
//             },
//             {
//                 tagName: 'input',
//                 attrs:{
//                     type: 'text',
//                     id: 'name', 
//                 },
//             },
//             {
//                 tagName: 'input',
//                 attrs:{
//                     type: 'text',
//                     id: 'surname', 
//                 },  

//             }

//         ]
//     },
//     {
//         tagName: 'div',
//         subTags:[
//             {
//                 tagName: 'button',
//                 text: 'OK',
//                 attrs:{
//                     id: 'ok',
//                 },
//             },
//             {
//                 tagName: 'button',
//                 text: 'Cancel',
//                 attrs:{
//                     id: 'cancel',
//                 },
//             },
//         ]
//     }
//     ]
// };

//  imperative array fill 3

// const arr3 = [];
//  function age(){

// let a= "";
// a =  prompt('you age',)
// arr3.push(a);
// console.log(arr3);
//  };
//  age();
//  age();
//  age();
 // 2й вариант 
//  let arr =  [];
//     arr = [+prompt("Введите элемент"), 
//     +prompt("Введите элемент"), 
//     +prompt("Введите элемент")]
//     console.log(arr)

// Задача array fill


// const arr3 = [];
//  function age(){

// let a =  prompt('you age',);
// if(a ===null){
//     return
// }
// arr3.push(a);
// console.log(arr3);
// age();
//  };
//  age();

//array fill nopush


// let x=0;
//  let arr = [];

//  function age2(){
//     let b =prompt('yuo age',);
//     if(b ===null){
//         return
//     }
//     arr[x]=b;
//  x++;
//  console.log(arr);
 
 
// age2();}
// age2();

//  Infinite probability


// function infin(){
//     let i=0;
//     while(true){
//         i++;
//         let z= Math.random();
//         if(z > 0.9){
//             alert(z);
//             break;
//         }
//     }
// };
// infin();



//  numbers
// for (let i=0;i<10;i++){
                        
//     for (j=0;j<10;j++){
//         document.write(j);          
// } 
// document.write('<br>')  ;
// }




 // chess

// let hesh = " . #"
// for (let i=0;i<10;i++){
//                 for (let j=0;j<6;j++){
//                     document.write(hesh);          
//         }   
//         document.write("<br>")
// hesh = hesh.split("").reverse().join("");
//         }

//multiply table
// let a = prompt()
// let b = prompt()
// let arr =[]
// let arr2 =[]
// for (let i=1; i<=9; i++)
// {
// for (let x=1; x<=9; x++)
// {
// arr2[x] = i*x;
// }
// arr[i] = arr2
// arr2 = []
// }
// alert(arr[a][b])



