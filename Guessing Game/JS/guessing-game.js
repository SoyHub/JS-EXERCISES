let num;

function myFunction() {
    num = Math.floor((Math.random() * 10) + 1);
    document.getElementById('ans').innerHTML = (num);
    let input = Number(document.getElementById('inp').value);

    if (input == num) {
        document.getElementById('title').innerHTML = ("NICE SHOT!");
        document.getElementById('ans').style.backgroundColor = "rgba(145, 231, 124, 0.521)";


    } else if (input == "") {
        document.getElementById('title').innerHTML = ("Enter something!");
        document.getElementById('ans').innerHTML = ("?");

    } else if (input == num + 1 || input == num - 1) {
        document.getElementById('title').innerHTML = ("THAT WAS TOO CLOSE!");
        document.getElementById('ans').style.backgroundColor = "rgba(231, 124, 124, 0.521)";

    }
    else if (input > 10 || input < 0) {
        document.getElementById('title').innerHTML = ("ONLY FROM 1 TO 10");
        document.getElementById('ans').style.backgroundColor = "rgba(231, 124, 124, 0.521)";
        document.getElementById('ans').innerHTML = ("?");
        document.getElementById('ans').style.backgroundColor = "white";
        document.getElementById('inp').style.backgroundColor = "rgba(231, 124, 124, 0.521)";
    }
    else if (isNaN(input)) {
        document.getElementById('title').innerHTML = ("ONLY NUMBERS!");
        document.getElementById('ans').style.backgroundColor = "rgba(231, 124, 124, 0.521)";
        document.getElementById('ans').innerHTML = ("?");
        document.getElementById('ans').style.backgroundColor = "white";
        document.getElementById('inp').style.backgroundColor = "rgba(231, 124, 124, 0.521)";
    }

    else {
        document.getElementById('title').innerHTML = ("YOU LOST!");
        document.getElementById('ans').style.backgroundColor = "rgba(231, 124, 124, 0.521)";
    }

    document.getElementById('ans').style.color = "black";
    document.getElementById('btn').style.display = "none";
    document.getElementById('btn2').style.display = "block";
    document.getElementById('inp').setAttribute('readonly', true);

}

function myFunction2() {
    document.getElementById('btn').style.display = "block";
    document.getElementById('btn2').style.display = "none";
    document.getElementById('inp').value = "";
    document.getElementById('ans').innerHTML = ("?");
    document.getElementById('ans').style.color = "rgba(0, 0, 0, 0.233)";
    document.getElementById('ans').style.backgroundColor = "white";
    document.getElementById('inp').style.backgroundColor = "white";
    document.getElementById('title').innerHTML = ("Guess again from 1 to 10");
    document.getElementById('inp').removeAttribute('readonly');
}

function showInfo() {
    document.getElementById('infotext').style = "display: block;";
    document.getElementById('infotext').style = "opacity:0.999;";
    document.getElementById('infotext').style = "z-index: 9;";
    document.getElementById('info2').style = "opacity: 1;";
    document.getElementById('info').style = "display: none;";
    document.getElementById('info2').style = "display: block;";
   
}

function hideInfo() {
    document.getElementById('infotext').style = "display: none;";
    document.getElementById('infotext').style = "opacity:0;";
    document.getElementById('info').style = "opacity: 1;";
    document.getElementById('info').style = "display: block;";
    document.getElementById('info2').style = "display: none;";
    document.getElementById('main').style = "height: auto;";
    

}
function changeColor(){
    document.getElementById('main').style = " background-color: rgb(192, 7, 7); color: white;";
    document.getElementById('body').style = "background-color: rgb(170, 19, 19); color:white;";
    document.getElementById('gi2').style = "color:black;";
    document.getElementById('the').style = "color:white;";
    document.getElementById('title').style = "color:white;";
    document.getElementById('btn').style = "background-color: darkred; color:white;";
    
    
}
function returnColor(){
    document.getElementById('main').style = "background-color: lightblue;";
    document.getElementById('body').style = "background-color: cadetblue;";
    document.getElementById('gi2').style = "color:black;";
    document.getElementById('the').style = "color:black;";
    document.getElementById('title').style = "color:black;";
    document.getElementById('btn').style = "background-color: rgb(8, 211, 150); color:white;";
    
    
}