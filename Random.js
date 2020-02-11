//// Concats ex
// // Details into variables
// const firstName = 'Sohayb';
// const lastName = 'Hassan';
// const street= 'Caporal Cattaneo';
// const city= 'Favria';
// const region= 'Torino';
// const country= 'Italy';
// //
// // Concat Address 
// const myAddress = `Via ${street},
// ${city} ${region} (TO)
// ${country}`;
// //Ends

// // console.log(myAddress);
// //
// // Cv Variables
// const workXP = 
// `Teacher     2015
// Manager     2014
// Broker      2013
// Sportsman   2012
// Cool guy    2011`;
// //
// const studies = 
// `Business    2014
// Management  2013
// Broking     2012
// Sports      2011`;
// //
// const softSkills = 
// `Communication Skills
// Managment skills
// Learning skills
// Cool skills`;
// //
// const languages = 
// `English
// Arabic
// Italian
// Russian`;
// const hr = "*-*-*-*-*-*-*-*-*-*-*";
// //
// // Concat cv
// const cv = 
// `      My CV 

// ${hr}

// Working Experience:
// ${workXP}    

// ${hr}

// My studies:
// ${studies}

// ${hr}

// My softskills:
// ${softSkills}
// n
// ${hr}

// Languages that I speak:
// ${languages}

// ${hr}`;
// //Ends

// console.log(cv);

// //*************************************
////fibonacci series

// // var s=1000;
// // var x= setInterval(myTimer, s);

// // var y = 0 ;

// // function myTimer() {
// //     console.clear();
// //     y++;
// //     console.log(y);
// //     if(y == 10) 
// //     {
// //         clearInterval(x);
// //     }

// // }

// //*************************************
////fibonacci series

// var s2 = 1000;
// var x2= setInterval(myTimer2, s2);

// var a=1;
// var b=1;
// var c=0;
// var limit=150;


// console.clear();
// console.log(a);
// console.log(b);

// function myTimer2() 
// {

//         if(a+b < limit) 
//             {
//             c=a+b; 
//             console.log(c);
//             }


//     b=c;
//         if(a+b < limit) 
//             {
//             c=a+b; 
//             console.log(c);
//             }
//     a=c;

//         if(a+b > limit) 
//             {
//             clearInterval(x2);
//             }
// }

// //*************************************
// print all the alphabetic numbers
// let str="";
// let str2="";

// for (let index = 97; index < 123; index++) {
//     str+= String.fromCharCode(index)+ " ";

// }
// for (let index = 65; index < 91; index++) {
//     str2+= String.fromCharCode(index)+ " ";

// }
// console.log(str);
// console.log(str2);

// another way to do it
// let str="";
// let x=97;
// let y=65;
// for (let index = 0; index < 26; index++) {

//     str += String.fromCharCode(y);
//     str += String.fromCharCode(x)+ " ";
//     x++;
//     y++;

// }
// console.log(str);

// Count digits in a number
// let num = 154545;
// let S= String(num);
// let SN = S.length;
// console.log(SN);

//multi table
// let x1 = 0;
// let z1 = 0;
// let str1 = "";
// let str2 = "";

// for (let index = 0; index < 10; index++) {

//     x1++;
//     let y1=1;

//     for (let i = 0; i < 10; i++) {

//         z1 = x1 * y1;
//         str1 = x1 + "x" + y1 + "=" + z1;
//         str2 += str1 + " ";
//         ++y1;

//     }
//     str2 += "\n";
// }
// console.log(str2);

// Get the first and the last digits...
// let num= 45616;
// let stNum= String(num);
// let fDigit= "The first digit is: " + stNum[0]
// + "\nThe second digit is: " + stNum[stNum.length-1] ;
// console.log(fDigit);

////Loops ex
// let i = 0;
// while(++i<5){
//     console.log(i);
// }
// i=0;
// console.log("SEPARATE")
// while(i++<5){
//     console.log(i);
// }

//another ex
// let x=0;
// for (let index = 0; index < 11; index++) {
//     if (x % 2 == 0) {
//         console.log(x);
//     }
//     x++
// }
// for (let index = 0; index < 11; index=index +2) {
//    console.log(index);
// }


//greater than 100 ex
// let x = prompt("Enter a number greater that 100 please!");
// while (x<100 && x==""){
//     x = prompt("Enter a number greater that 100 please!");
// }

//Another way
// let x;
// for (let index = 0; index < Infinity; index++) {
//     if (x>100 || x =="") {
//         break;
//     }  
// }

//The one line solution
//for (let x=0; isNaN(x) || x<100 && x!==null; x = prompt("Enter a number greater that 100 please!")){}


//The solution with functions
// let str;
// function row (){
//     str="";
//     for (let i = 0; i < 7; i++) {
//        str += "*";
//     }
// }
// let str2="";
// for (let i = 0; i < 3; i++) {
//     row();
//     str2 += str +"\n";
// }

// prime numbers
// let x=0;
// for (let i = 0; i <20;  i++) {
// if (x%2==1) {
//     console.log(x);
// }
// x++;

// }


// let num = 6316556645465566.2;


// function decimalDetector(num){
// if(num%1 > 0 && num%1<1 ){
//     console.log(num+' is Decimal');
// } else {
//     console.log(num+" is whole");
// }
// }

// decimalDetector(num);

//Prime detector
// let min = 50;
// let max = 90;
// function primeDetector(num) {
//     if (num == 1) {
//         return false;
//     } else if (num == 2 || num == 3 || num == 7) {
//         return true;
//     } else if ((num / 2 % 1 > 0 && num / 2 % 1 < 1) && (num / 3 % 1 > 0 && num / 3 % 1 < 1) && (num / 5 % 1 > 0 && num / 5 % 1 < 1) && (num / 7 % 1 > 0 && num / 7 % 1 < 1)) {
//         return true;
//     }

// }

// for (let i = min; i < max; i++) {

//     if (primeDetector(i)) {
//         console.log(i);
//     }
// }


// function DecimalDetector2(num){
// let fnum = Math.floor(num);
// let cnum = Math.ceil(num);

// if (fnum == cnum) {
//     console.log("The number "+num+" is whole");
// } else {
//     console.log("The number "+num+" is decimal");
// }
// }

// DecimalDetector2(66.12356486);
// decimalDetector(655);

// let i = 1

// while (i < 10) {
//     if (i > 4) { break; }
//     console.log(i)
//     i++

// }


// function fibonacci(n) {
//     let first = 0;
//     let second = 1;
//     let fib = 1;
//     while (first + second <= n) {
//       fib = first + second;
//       first = second;
//       second = fib;
//     }
//     console.log(fib);
//     return fib
//   }



// function timer (t){
//     setInterval(() => {
//         console.log (fib);
//     }, t);

// }

// for (let i = 0; i < 30; i++) {

//   fibonacci(i);

// }

// let num =232.343466667886;
// let str= String(num);

// console.log(str.split('.')[1])


// let str;
// let str2 = "";
// for (let j = 1; j < 11; j++) {
//   str = "Table of [" + j + "]\t|";
//   let result = ""
//     for (let i = 1; i < 11; i++) {
//       result = `${i}x${j} = ${i * j}\t| `
//       str += `${result}`
//     }
//   console.log(str);
// } 

// // Prime detector that shows you the divisible
// //numbers and tells you if the number is Prime or not

function primeDetect(num) {
    function decimalDetector(n) {
        if (n % 1 > 0 && n % 1 < 1) {
            return true;
        } else {
            return false;
        }
    }

    let x = 2;
    let isPrime = false;

    while (x < num) {

        if (!decimalDetector(num / x)) {
            console.log("Divisible by: " + num / x);
            isPrime = true;
        }
        x++;

    }

    if (isPrime) {
        console.log("So " + num + " is not Prime..");
        return false;
    } else {
        console.log(num + " is Prime");
        return true;
    }
}
// primeDetect(55);

//Prime printer is a function that prints all the prime numbers.
//You only have to give it a start number and an end number.
// function printPrime(start, end) {
//     function decimalDetector(n) {
//         if (n % 1 > 0 && n % 1 < 1) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     function primeDetect(num) {
//         let x = 2;
//         let isPrime = false;

//         while (x < num) {

//             if (!decimalDetector(num / x)) {
//                 isPrime = true;
//             }
//             x++;

//         }

//         if (isPrime) {
//             return false;
//         } else {
//             return true;
//         }
//     }


//     while (start < end) {
//         if (primeDetect(start)) { console.log(start) }
//         start++
//     }
// }
// printPrime(20, 80);

// //Exercise on switch case
// let card = prompt("Enter the card:");
// let value;

// switch (card) {
//     case 'A':
//         value = 1;

//         break;
//     case 'J':
//         value = 11;

//         break;
//     case 'Q':
//         value = 12;

//         break;
//     case 'K':
//         value = 13;
//         break;
//     default:
//         isNaN(Number(card)) ?
//             value = (card + " is not valid!")
//             : value = (Number(card));

// }

// alert(value);

////Flip image
// document.getElementById('h1').innerHTML = "Wanna know the difference between<br>women driving and aliens?<br>look carefully at the photo below then click it!";
// let it = false;

// function click3() {
//     document.getElementById('img').style = "transition: all 3s; transform: rotate(180deg);";

//     if (it) {
//         document.getElementById('h1').innerHTML = "ECCO!";
//     } else {
//         document.getElementById('h1').innerHTML = "HERE YOU GO!";
//     }
//     document.getElementById('button').style="display:none";
// }

// function click4() {
//     document.getElementById('h1').innerHTML = "Vuoi sapere la differenza\ntra donne che guidono e alieni?\nguarda attentamente la foto qui sotto,\npoi fai clic!";
//     it = true;
//     document.getElementById('button').style="display:none";
// }    

/*

**********
*        *
* Anton  *
*        *
*        *
**********

*/
// //A function that puts a word inside a box of asterisks
// //with a height and a width that you choose
// //The manual width
// function printBox(word, height, width) {
//     const borders = 2;
//     // let str = "*".repeat(word.length + 2 + width * 2);
//     if (word.length + borders > width) {
//         console.log("The word you entered is way bigger than the width!");
//     } else if (height<3){
//         console.log("The height is too low!\nIt can't be less than 3");
//     }else {

//         let str = "*".repeat(width);
//         let wordn = "*" + " ".repeat(Math.ceil((width - word.length - borders) / 2)) + word + " ".repeat((width - word.length - borders) / 2) + "*"
//         let spaces = "*" + " ".repeat(width - borders) + "*"

//         console.log(str);



//         for (let i = 0; i < height - borders; i++) {

//             if (i == Math.floor(((height - borders) / 2) -1)) {
//                 if (word.length < str.length) {
//                     console.log(wordn);
//                 }

//             }
//             else {
//                 console.log(spaces);
//             }

//         }
//         console.log(str);

//     }

// }


////function (word, height, width)
// printBox("s", 4, 4);

//Exercise on switch with functions
function rank(damage) {
   let ranking;
    switch (damage) {
        case 1:
            ranking = "Dull!";
            break;
        case 5:
            ranking = "Cool!";
            break;
        case 10:
            ranking = "Bravo!";
            break;
        case 15:
            ranking = "Awesome!";
            break;
        case 20:
            ranking = "Stylish!";
            break;
        default:
            break;
    }
    return ranking;
}


//This function prints what the previous function returns.
function printRank(damage) {
    console.log(rank(damage));
}


// printRank(20);

// primeDetect(918256645);


//A function that puts a word inside a box of asterisks
//with a height that you choose and center it
//The width is calculated automatically
function printBox(word, height) {
    const borders = 2;
    // let str = "*".repeat(word.length + 2 + width * 2);
    if (height<3){
        console.log("The height is too low!\nIt can't be less than 3");
    }else {

        let str = "*".repeat(word.length+4);
        let wordn = "*" + " "+ word + " " + "*"
        let spaces = "*" + " ".repeat((word.length+borders)) + "*"

        console.log(str);



        for (let i = 0; i < height - borders; i++) {

            if (i == Math.floor(((height - borders) / 2) )) {
                if (word.length < str.length) {
                    console.log(wordn);
                }

            }
            else {
                console.log(spaces);
            }

        }
        console.log(str);

    }

}


////function (word, height, width)
printBox("Ciaovhsdkljfdsjkfdskjlfhklsahklfklhsaghgg", 5);