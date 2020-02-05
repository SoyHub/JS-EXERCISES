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

// let str="";
// let x=97;
// let y=65;
// for (let index = 0; index < 26; index++) {

//     str = str + String.fromCharCode(y);
//     str = str + String.fromCharCode(x)+ " ";
//     x++;
//     y++;

// }

// console.log(str);

// let num = 154545;

// let S= String(num);
// let SN = S.length;
// console.log(SN);

//multi table
let x1 = 0;
// let y1 = 1;
let z1 = 0;
let str1 = "";
let str2 = "";

for (let index = 0; index < 10; index++) {

    x1++;
    let y1=1;
    
    for (let i = 0; i < 10; i++) {

        z1 = x1 * y1;
        str1 = x1 + "x" + y1 + "=" + z1;
        str2 += str1 + " ";

        // if (y1 == 10) {
        //     y1 = 0;
        //     str2 += "\n";
        // }

        ++y1;

    }
    str2 += "\n";
}
console.log(str2);