// let y; 
// alert("WELCOME TO THE GUESSING GAME!")

// while ( (y !=="STOP") && (y !=="QUIT") && (y !=="EXIT") )
// {
//     let x= Math.floor((Math.random()*10)+1);
//     console.log(x);
//     y = prompt("Guess a number from 1 to 10").toUpperCase();
    
        
//         if ((y == "STOP") || (y == "QUIT") || (y == "EXIT") ){

//         alert("The game is shutting down!");
//         }  else if(isNaN(y)){
        
//             alert("Invalid input! Try again!")
        
//         }  else if (y==x){
            
//             alert ("Nice shot!");
//         }
//         else if (y==x+1 ||y==x-1 ){
            
//             alert ("You were close! The answer is "+x);
//         }
        
//         else {
        
//             alert("Wrong! The answer is "+ x );
        
//         }

// }
let num;
function myFunction(){
    num= Math.floor((Math.random()*10)+1);
    document.getElementById('ans').innerHTML=(num);
    let input=document.getElementById('inp').value;
  
    if(input==num) {
        document.getElementById('title').innerHTML=("YOU WON!");
        document.getElementById('ans').style.backgroundColor = "rgba(145, 231, 124, 0.521)";
    
    // } else if (typeof(input)!='number') {
        // document.getElementById('title').innerHTML=("YOU HAVE TO PUT A NUMBER!");
        // document.getElementById('inp').style.backgroundColor="rgba(231, 124, 124, 0.521)" ;
    } else if (input==""){
        document.getElementById('title').innerHTML=("You have to enter something!");
        document.getElementById('ans').innerHTML=("?");
        
    }
    
    else {
        document.getElementById('title').innerHTML=("YOU LOST!");
        document.getElementById('ans').style.backgroundColor="rgba(231, 124, 124, 0.521)" ;
    }
    // document.getElementById('inp').value="";
    // document.getElementById('btn').innerHTML=("TRY AGAIN!");
    document.getElementById('ans').style.color="black";
    // document.getElementById('inp').value="";
    document.getElementById('btn').style.display="none";
    document.getElementById('btn2').style.display="block";
    
}
function myFunction2(){
    document.getElementById('btn').style.display="block";
    document.getElementById('btn2').style.display="none";
    document.getElementById('inp').value="";
    document.getElementById('ans').innerHTML=("?");
    document.getElementById('ans').style.color="rgba(0, 0, 0, 0.233)";
    document.getElementById('ans').style.backgroundColor="white" ;
    document.getElementById('title').innerHTML=("Guess again from 1 to 10 !");
    
}
