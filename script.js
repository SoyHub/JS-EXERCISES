let name = 'asskm';
let surname = 'onjjr6';
let pBirth;
let sex;
let prov;
let bDate;
let cf;
let date;

function submit() {
  name = document.getElementById('inp1').value;
  surname = 'Surname = ' + document.getElementById('inp2').value;
  pBirth = 'PlaceOfBirth = ' + document.getElementById('inp3').value;
  prov = 'Prov = ' + document.getElementById('inp4').value;
  sex = 'Sex = ' + document.getElementById('sex1').value;
  date = document.getElementById('inp6').value;
  console.log(name);
  //   console.log(surname);
  //   console.log(pBirth);
  //   console.log(prov);
  //   console.log(sex);
  //   console.log(date);
  document.getElementById('out1').value = cf;
  document.getElementById('btn').style = 'display:none;';
  document.getElementById('print').style = 'display:block;';
}

function print2() {
  document.getElementById('print').style = 'display:none;';
  document.getElementById('body').style = 'background-color:white;';
  document.getElementById('main').style = ' box-shadow:none;';
  document.getElementById('out1').style = ' color:black;';
}

/////////////////////////////////////////////////////////////
function printCV(name) {
  let consnants = getCons(name);
  let vowels = getVowels(name);
  let cutCons;
    console.log("consnants = "+consnants);
    console.log("vowels = "+vowels);
 

  
  return cutCons;
}
function CFNameAndSurname(name, surname) {
  let cfName = '';
  cfName = printCV(surname) + printCV(name);
  return cfName;
}
console.log(CFNameAndSurname(name, surname));

function returnBoth(word) {
  vowelDetect(word);
  getCons(word);
}
function getVowels(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let wVowels = '';
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word[i] == vowels[j]) {
        wVowels += word[i];
      }
    }
  }
  return wVowels;
}
function getCons(word) {
  let wCons = '';
  wCons += word.replace(/e/g, '');
  wCons = wCons.replace(/o/g, '');
  wCons = wCons.replace(/i/g, '');
  wCons = wCons.replace(/a/g, '');
  wCons = wCons.replace(/u/g, '');
  wCons = wCons.replace(/ /g, '');

 


  return wCons;
}

function convertDate(date) {
  // let date = "09/12/1995"
  let month = date[3] + date[4];

  switch (month) {
    case '01':
      month = 'A';
      break;
    case '02':
      month = 'B';
      break;

    case '03':
      month = 'C';
      break;

    case '04':
      month = 'D';
      break;

    case '05':
      month = 'E';
      break;

    case '06':
      month = 'H';
      break;

    case '07':
      month = 'L';
      break;

    case '08':
      month = 'M';
      break;
    case '09':
      month = 'P';
      break;
    case '10':
      month = 'R';
      break;
    case '11':
      month = 'S';
      break;
    case '12':
      month = 'T';
      break;

    default:
      break;
  }

  bDate =
    date[date.length - 2] + date[date.length - 1] + month + date[0] + date[1];
}

convertDate('05/08/1995');
console.log(bDate);

/*

Angular
REACT
REDUX
VUE.js
Security and privacy
Wordpress
PHP
SQL
XSS and SQL injection
Angular
Social skills
HTML
CSS


*/

// https://www.paginainizio.com/service/strutturacodicefiscale.htm
// https://en.wikipedia.org/wiki/Italian_fiscal_code
// http://www.arcrealestate.it/arc_group_intranet/tabella_stati_esteri.pdf

//first 3 letters from surname without vowels, if not enough, get vowels after the consnants
//first 3 letters from name without vowels, if not enough, get vowels after the consnants if only 2 letters put x
//2 numbers for the year of birth
//1 letter months go a,b, c, d, e, etc
//2 numbers day of birth || in case of women add 40
// 1 letter and 3 numbers indicate

// Gennaio   = A           Luglio     = L
// Febbraio  = B           Agosto     = M
// Marzo     = C           Settembre  = P
// Aprile    = D           Ottobre    = R
// Maggio    = E           Novembre   = S
// Giugno    = H           Dicembre   = T
//

// MHM - SYB - 95M05 - Z336 - 'L'
// surname - name - dob - place - controllo
// Muhammed - Sohayb - 1995 august 05 - out of italy zone code - controllo

// ODD CHARACTERS
// Character	Value	Character
// 0	1	9	21	I	19	R	8
// 1	0	A	1	J	21	S	12
// 2	5	B	0	K	2	T	14
// 3	7	C	5	L	4	U	16
// 4	9	D	7	M	18	V	10
// 5	13	E	9	N	20	W	22
// 6	15	F	13	O	11	X	25
// 7	17	G	15	P	3	Y	24
// 8	19	H	17	Q	6	Z	23

// 18+18+24+21+18+13+7+15 = 134

// EVEN CHARACTERS
// Character	Value	Character
// 0	0	9	9	I	8	R	17
// 1	1	A	0	J	9	S	18
// 2	2	B	1	K	10	T	19
// 3	3	C	2	L	11	U	20
// 4	4	D	3	M	12	V	21
// 5	5	E	4	N	13	W	22
// 6	6	F	5	O	14	X	23
// 7	7	G	6	P	15	Y	24
// 8	8	H	7	Q	16	Z	25

// 7+18+1+5+0+25+3 = 59

// REMAINDER
// Remainder	Letter	Remainder
// 0	A	7	H	14	O	21	V
// 1	B	8	I	15	P	22	W
// 2	C	9	J	16	Q	23	X
// 3	D	10	K	17	R	24	Y
// 4	E	11	L	18	S	25	Z
// 5	F	12	M	19	T
// 6	G	13	N	20	U

// sum = 193 %26
