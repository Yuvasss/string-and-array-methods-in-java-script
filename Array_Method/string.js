//STRING

//length
//find the lenth of string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

//Extracting String Parts
// /slice() extracts a part of a string and returns the extracted part in a new string.
// syt: slice(start, end)
let text_1 = "Apple, Banana, Kiwi";
let part = text_1.slice(7, 13);
console.log(part)

let text_2 = "Apple, Banana, Kiwi";
let part_1 = text_2.slice(7);
console.log(part_1);

//substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
let res_1 = str.substr(7, 6);
console.log(res_1);


//substr(start, length)
// /The difference is that the second parameter specifies the length of the extracted part.

let str_1 = "Apple, Banana, Kiwi";
let part_2 = str.substr(7, 6);
console.log(part_2);

//replace
//it is used for replace the string
let str_repl="hello how are you";
let res_3=str_repl.replace('hello',"hey");
console.log(res_3);

//toUpperCase()
//convert lowercase to uppercase
let toupp="hello how are you";
let toupp_res=toupp.toUpperCase();
console.log(toupp_res);

//toLowerCase()
//convert uppercase to lower case
let lowCas="HELLO HOW ARE YOU";
let lowCas_res=lowCas.toLocaleLowerCase();
console.log(lowCas_res);

//The concat() method can be used instead of the plus operator. These two lines do the same:
let textA="hello";
let textB="how ";
let cont_res1=textA.concat(textB);
console.log(cont_res1)
let cont_res=textA+textB;
console.log(cont_res);



//String trim()
//remove the whitespace in strat and end
let trimA="         HELLO          ";
let rtrim_res=trimA.trim();
console.log(rtrim_res);



//String trimStart()
//removes whitespace only from the start of a string.
let A="   hello      !";
let a_res=A.trimStart();
console.log(a_res);

//String trimEnd()
//removes whitespace only from the end of a string.
let B="   hello!    ";
let b_res=B.trimEnd();
console.log(b_res);


//padStrat
//add padding at the strat
var pad_s='abc'.padStart(10);
console.log(pad_s);

var pad_s1='abc'.padStart(10,'hello');
console.log(pad_s1);


//padEnd
//add padding at the End
var pad_e='abc'.padEnd(10);
console.log(pad_e);



var pad_e1='abc'.padEnd(10,'12345678');
console.log(pad_e1);


//charAt() 
//This method returns the character at a specified index (position) in a string:

let textAbc = "HELLO WORLD";
let char = textAbc.charAt(0);
console.log(char);

//charCodeAt()
//This method returns the unicode of the character at a specified index in a string
let textU = "HELLO WORLD";
let char_res = text.charCodeAt(0);
console.log(char_res);


//split
//we are using for spliting
let text_11 = "Hello";
const myArr = text_11.split("");

console.log(myArr);
text = "";
for (let i = 0; i < myArr.length; i++) {
    text_11 += myArr[i] + "<br>"
}