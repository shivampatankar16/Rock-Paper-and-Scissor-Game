// ============================= Chapter 1 Variables ============================================

// Fullname="Shivam Patankar";
// console.log(Fullname);

// let fullname="shivam";
// let N_mango="23"
// console.log(fullname);
// console.log(N_mango);

// const a=10;
// console.log(a)

// let a;
// console.log(a)

// ================================== Data type js ==============================================

// let price=100.5;
// console.log(price);

// let fullname='shivam patankar';

// isfollow= true;
// console.log(isfollow);

// let x = BigInt("123");
// let y = symbol("Hellow!!");

// const student =
// {
//     fullName:"Sumit gupta",
//     age :20,
//     cgpa:8.2,
//     ispass:true
// };

// console.log(student);
// console.log(student["cgpa"]);
// student["fullName"]= "Rhaul choudary";

// ============================== Practice 1 ========================================
// 1Q
// const product ={
//     title: "Ballpen" ,
//     rating:4,
//     offer: 5,
//     price: 270

// };

// console.log(product);

// 2Q

// const profile ={
//     username: "Shivam KP",
//     post: 5,
//     follower: 45,
//     following:67,
//     isfollow:false
// };

// console.log(profile);
// console.log(typeof profile["username"])
// console.log(typeof profile["isfollow"])

// ================================ Chapter 2 Operator ===========================================
// Arithematic ooperator
// let a= 10;
// let b= 2;

// console.log("a= ",a, " b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);

// Unary operator
// let a= 10;
// let b= 2;

// console.log("a= ",a, " b=",b);
// a=a+1;
// console.log("a=",a);

// b=b-1;
// console.log("b=",b);

// a=a++;
// console.log("a=",a);
// b=b--;
// console.log("b=",b);

// console.log("++a=",++a);
// console.log("a++=",a++);
// console.log("a=",a);

// Assigement operator

// let a=4;
// let b=5;

//  a +=4;       //a = a+4;
// console.log("a=",a);

//  a -=4;       //a = a-4;
// console.log("a=",a);

//  a *=4;       //a = a*4;
// console.log("a=",a);

//  a /=4;       //a = a/4;
// console.log("a=",a);

//  a **=4;       //a = a**4;
// console.log("a=",a);

//  a %=4;       //a = a%4;
// console.log("a=",a);

// Comparison Operator

// let a=5;
// let b=6;

// console.log("a==b",a==b);  // true or false
// console.log("a!=b",a!=b);  
// console.log("a===b",a===b);  
// console.log("a!==b",a!==b);  

// console.log("a>b",a>b);  
// console.log("a>=b",a>=b);  
// console.log("a<b",a<b);  
// console.log("a<=b",a<=b);  

// =============================== Condition statement ===========================

// let age = 25;

// if(age>=18)  // true or false
// {  
//     console.log("you can vote");
// }

// let mode = "dark";
// let color;

// if( mode === "dark" ){
//     color = "black";
// }

// if( mode === "light" ){
//     color = "white";
// }
// console.log(color);


// if_else condition

// let a = 4;

// if(a % 2==0){
//     console.log("The result is even");
// }else{
//      console.log("The result is odd");
// }

// else-if condition

// even/odd

// num = 11;
// if( num %2 ==0){
//     console.log("num is even.");
// }
// else if( num %2 !=0){
//  console.log("num is odd.");
// }else{
//     console.log("num is either even or odd.");
// }

// alert("Hello!"); ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let name= prompt('Hello!!');
// console.log(name);

// ============================= Practice 2 ========================================================

// 1Q
// let num = prompt("Enter the number:");

// if(num % 5===0){
//     console.log(num,"is a multiple of 5.");
// }else{
//     console.log(num,"is NOT multiple of 5.");
// }

// 2Q program js

// let mar = prompt("Enter the marks(0-100):");

// if(mar >= 80 && mar <= 100){
//     console.log(mar, "marks you get grad A.");
// }
// else if(mar >= 70 && mar <= 89){
//      console.log(mar, "marks you get grad B.");
// }else if(mar >= 60 && mar <= 69){
//      console.log(mar, "marks you get grad C.");
// }else if(mar >= 50 && mar <= 59){
//      console.log(mar, "marks you get grad D.");
// }else{
//      console.log(mar, "marks you get grad F.");
// }


// ======================================== Chapter 3 Loops ================================================

// for(let i=1; i<= 5; i++)
// {
//     console.log("shivam");
// }
//     console.log("Code ended.");

// Calculate the sum of program 1 to 5

// let Sum = 0;
// for(let i=1; i <= 5; i++){
//     Sum = Sum + i;
// }
// console.log(Sum,"is a total sum.");

// While Loop

// let i=1;
// while(i <= 5){
//     console.log("Mango");
//     i++;
// }

// do while loop

// let i = 1;
// do{
//     console.log("Mango");
//      i++;
// }while(i <= 10);

// ========================================= Practice 3 ======================================================

// 1Q even num 0 to 100

// for(let i=0; i <= 100; i++){
//     if(i %2 ===0)
//         console.log("Even num =",i);
// }

// 2Q Game making program

// let gameNum = 25;

// let userNum = prompt("Guse the game number:");
// while(userNum != gameNum){
//      userNum = prompt("You entered wrong number. Guse again:");
// }
// console.log("Congratulation, you entered right number." );

// ================================ Strings ====================================================

// let str = "Shivam";

// console.log(str.length);
// console.log(str[3]);

// String Methods -----------------------------------------

// let str = "Shivam Patankar";

// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase())

// let str = "       Shivam Patankar       "; // Remove whitespaces

// console.log(str.trim());

// 1. str.slice(StaticRange,end?);
// let str = "Hellow!!";
// console.log(str.slice(0,3));

// 2. str1.concat(str2);
// let str1 = "Shivam";
// let str2 = "Patankar";
// let r = str1.concat(str2);
// console.log(r);
// console.log(str1+str2);

// 3. str.replace(searchval,newval);
// let str = "Beautiful";
// console.log(str.replace("B","M"));

// 4. str.charAt(idx);
// let str = "Happy";
// console.log(str.charAt(3));

// =============================== Practice 4 =============================================================

// 1Q

// let username = "@";
// let fullleg = "02";
// let name = prompt("Enter the full name:");
// console.log(username + name + fullleg);

// ================================ Chapter 4 Array ===================================================

// let Marks = [97, 87, 77, 56, 50];
// console.log(Marks);

// let heros = ["Batman", "Spiderman", "Shaktiman", "Krrish"]
// console.log(heros);

// Array indixes

// let Marks = [97, 87, 77, 56, 50];
// console.log(Marks[1]);

// let r = Marks[3]= 54;
// console.log(r);

// Looping over an array

// let fruits = ["mango", "cherry", "watermelon", "kevi", "apple"];

// for(let i=0; i<fruits.length; i++)
// {
//     console.log(fruits[i]);
// }

// ======================================= Practice 5 ===================================================

// 1Q

// let marks = [85, 97, 44, 37, 76, 60];

// let sum =0;
// for(let val of marks)
// {
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log('avg marks of the class =',avg);

// 2Q

// let items = [250, 645, 300, 900, 50];

// for(let i=0; i<items.length; i++)
// {
//     let offer = items[i]/10;
//     items[i]= items[i]- offer;
// }
// console.log(items);

// Array Methods in JS

// let sports = ["Cricket", "Football", "Hockey", "Tennis","kohoko"]

// sports.push("chess","kabadi","karem");
// console.log(sports);

// let del= sports.pop();
// console.log(del);

// let str = sports.toString();
// console.log(str);


// let sports1 = ["Cricket", "Football", "Hockey"];
// let sports2 = [ "Tennis","kohoko"];

// let sport = sports1.concat(sports2);
// console.log(sport);

// sports2.unshift("kabadi");
// console.log(sports2);

// sports1.shift( );
// console.log(sports1);

// let m = [23, 45, 12, 32, 56, 78];

// console.log(m);
// console.log(m.slice(1,4));

// let Mar = [0, 1, 2, 3, 4, 5, 6, 7];
// Mar.splice(1, 2, 101, 102);

// Mar.splice(1, 2, 101,102);
// console.log(Mar);

// Add Element
// Mar.splice(3, 0, 2.5)

// Delete Element
// Mar.splice(4, 1);

// ======================================= Practice 6 ====================================

// 1Q

// let Cmy = ["Bloomber", "Microsoft", "Uber", "Google", "IBM", "Netflix" ]

// Remove fist company
// Cmy.splice(0,1);
// console.log(Cmy);

// Add Ola and Remove Uber
// Cmy.splice(2, 1, "Ola");
// console.log(Cmy);

// Add Amazon at end
// Cmy.push("Amazon");
// console.log(Cmy);

// ============================================= Chapter 5 Function =====================================

// function myFunction()
// {
//     console.log("I Love cricket.");
//     console.log("I Love Food.");
// }
// myFunction();

// function myFunction(msg) //parameter
// {
//     console.log(msg);
// }
// myFunction("I am dedicated"); //Argument

// function -> 2 number, sum

// function sum(x,y){
//     z = x+y;
//     console.log(z);
// }
// sum(3,4);

// function sum(x,y){
//     s = x+y;
//     return s;
// }
// let z= sum(3,4);
// console.log(z);

// Arrow Function -----------------------------------

// const arrowMul =(a,b)=>{
//     return a*b;
// }
// console.log(arrowMul(3,4));

// ====================================== Practice 7 ===========================================================

// 1Q

// function countvow(str){
//     let count = 0;
//    for(const char of str){
//     if( char ==="a" ||char ==="e" ||char ==="i" ||char ==="o" || char ==="u"){
//         count++;
//     }
//    }

//  return count;
// }

// 2Q
  
// const countvow= (str)=>{
//         let count = 0;
//    for(const char of str){
//     if( char ==="a" ||char ==="e" ||char ==="i" ||char ==="o" || char ==="u"){
//         count++;
//     }
//    }

//  return count;

// }

// forEach function in array -------------------------------------------

// let arr = ["Mango", "Cherry", "Watermelon", "Banana", "Apple"];

// arr.forEach(function frt(value){
//   console.log(value);
// });


// arr.forEach((value)=>{
//   console.log(value.toUpperCase());
// });

// arr.forEach((value ,idx , arr) => {
//   console.log(value.toUpperCase(),idx , arr);
// });

// ================================ Practice 8 ====================================================


// 1Q

// let nums = [3, 5, 6, 7,];

// nums.forEach(function square(val){
//   console.log(val*val); //val*2
// });

// =========================== DOM document object model part1 ==============================================

// console.dir(document);
// console.dir(document.images);

// DOM manipulation-------------------------
// 1. Selecting with id  

// let heading = document.getElementById("myid");
// console.dir(heading);

// 2. Selecting with class
// let heading= document.getElementsByClassName("myclass");
// console.dir(heading);
// console.log(heading);

// 3. Selecting with Tag

// let para = document.getElementsByTagName("p");
// console.dir(para);

// DOM properties -------------------------
// 1. tagName
// 2. innertext
// 3. innerHTML
// 4. textcontent
// let para = document.getElementsByTagName("p");
// console.log(para);

// ============================================== Practice 9======================================

// 1Q

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apana collage students";

// 2Q

// let divs = document.querySelector("box");
// // console.dir(divs);

// divs[0].innerText ="i was hope this ans is coorect";

// ============================== DOM part 2 ========================================================

// Attributes
// let divs = document.querySelector("div");
// console.log(divs);

// let id= divs.getAttribute("id");
// console.log(id);

// let p = document.querySelector("p");
// console.log(p);

// let tag = p.setAttribute("id", "paragraph");
// console.log(tag);

//  style

// div.style.backgroundColor ="green";
// div.style.fontsize= "20px";

// Document manipulation

// let newBtn =document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);

