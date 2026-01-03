// ====================== Events in js ==========================================
// let button = document.querySelector("#box");
// button.onclick =() =>{
//     console.log("Button is click!!");
//     let a =25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover =() =>{
//     console.log("Mouse was click !!");
// };

// Event object ----------------------------------------------
// let button = document.querySelector("#box"); 
// button.onclick =(evt) =>{
//   console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX,evt.clientY);

// };

// Event Listeners
// .addEventListener("click","callback");    //type
// .removeEventListener("click","callback");

// let button = document.querySelector("#box"); 

// button.addEventListener("click", () =>{
//     console.log("this is box button.")
// });

// button.addEventListener("click", (evt) =>{
//     console.log("this is box button.")
//     console.log(evt);
//     console.log(evt.type);

// });

// button.addEventListener("click", () =>{
//    console.log("this is box button 1.")
//  });

//  button.addEventListener("click", () =>{
//    console.log("this is box button 2.")
//  });

//  const button3 = () =>{
//    console.log("this is box button 3.")
//  }

//  button.addEventListener( "click","button3");
//  button.removeEventListener("click","button3");


//  button.addEventListener("click", () =>{
//    console.log("this is box button 4.")
//  });

//  button.removeEventListener("click","button3");
  

// ============================== practice 10 ============================================
// 1Q

// let Button = document.querySelector("#mode");
// let curmode = "light";
// Button.addEventListener("click",() =>{
//     if(curmode === "light"){
//         curmode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         curmode = "light";
//          document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(curmode);
// });

// ============================ Chapter 10 class and object =====================================
                            // ___proto__


// -------------------------------- Object ---------------------------------------------------

// const Student = {
//     FullName:"shivam patankar",
//     Rollno : 72,
//     Marks: 90.99 ,
//     printMarks : function(){
//         console.log("Marks =",this.Marks); // this.Marks means Student.Marks
//     },
// };

// const employee ={
//     calTax() {
//         console.log("Tax rate is 10%");
//     },
// };

// const KaranArjun ={
//     salary: 50000,
// };

// KaranArjun__proto__ = employee;

// ------------------------------------------- Classes ----------------------------------------------------

// class car {
//     start(){
//         console.log("Start");
//     }

//     stop(){
//         console.log("Stop");
//     }
// }

// let BMW = new car();

// class car {

//     constructor(brand){
//         console.log("Creating a new car.");
//         this.brand = brand;
//     }
//     start(){
//         console.log("Start");
//     }

//     stop(){
//         console.log("Stop");
//     }
// }

// let BMW = new car("BMW");

// Inheritance

// class person {
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends person {
//     work(){
//         console.log("Solve problem");
//     }
// }

// let shivamobj = new Engineer();


// ============================================= practice 11 ============================================

// 1Q

// let DATA = "Secret Information!"

// class user {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     newView(){
//         console.log("data =",DATA);
//     }
// }

// let student1 = new user("shivam","shivam2@gmail.com");

// class Admin extends user {
//     editdata(){
//         DATA = "Solving edited probllem which can handle easly";
//     }
// }

// let admin = new Admin("Sumit", "Gupata@123gmail.com");

// ==================================== chapter 11 cancelIdleCallback, promises and Async-await =============================

// Callback

// function start( a,b){
//     z= a+b;
   
// }
// start(2,3);
// console.log(z);

//  student =() => {
//     console.log("what is your name.");
// }

// setTimeout(student, 3000);

// Promises

// let promise = new Promise((resolve, reject) =>{ 
//     console.log("enter your no.");
//     reject("error");
// });


// const getpromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("this is a promises");
//         resolve("this is a resolve");
//     });
// };


// let promise = getpromise();
// promise.then((res)=>{
//     console.log("promises fulfilled.",res);
// });

// promise.catch((err)=>{
//     console.log("Error");
// });

// Async-await

// async function hello(){
//     console.log("Hello world.");
// }

// function hello(){
//     setTimeout(() => {
//         console.log("World");
//     }), 2000;
// };

// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         }),3000;
//     });
// }

// async function getWeatherData(){
//     await api();

// };



