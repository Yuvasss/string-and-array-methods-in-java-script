//flat()
//convert nested array to  single new array
const arr=[1,[2,[3,[4,[5]]]]];
const res_1=arr.flat(Infinity);
console.log(res_1);

//isArray()
//Check the 1st vaue is string or not. And it will return boolean value
const names=["abc","ivan","Liam"];
const str='Hello world'
const number=17;
const res_2=Array.isArray(names);
const res_21=Array.isArray(str);
const res_22=Array.isArray(number);
console.log(res_2);
console.log(res_21);
console.log(res_22);

//from()
//convert string to number
const str_1='123456789';
const str_res=Array.from(str_1)
console.log(str_res);

//findIndex()
//we can find the index for particular itam
const number_1=[1,2,3,4,5,6,7,8,9]
const res_3=number_1.findIndex(findindex);
function findindex(value){
    return value==9;
}
console.log(res_3);

//find
//we can find the particular value is there or not.
const name_1=['rama','krushna','lashmana'];
const res_5=name_1.find(findRama);

console.log(res_5);

function findRama(value){
    return value==='rama'
}

//some
//if givan value is there in array list it will return true or false
const number_2=[1,2,3,4,5];
const res_6=number_2.some(greaterThan);
console.log(res_6);
function greaterThan(value){
    return value>4;
}

//indexOf
//it will return 1st index of an array. if we are not fine any array it will return -1
const names_3=['raja','rama','mohan','lakshman','jaya'];
const res_7=names_3.indexOf('jay');

//lastIndexOf
//it will return last index of array.
const names_4=['raja','rama','mohan','lakshman','jaya','jaya'];
console.log(names_4.lastIndexOf('jaya'));

//shift
//it will remove the 1st element in an array and returns.
const number_5=[1,2,3];
const firstItam=number_5.shift()
console.log(firstItam);

//pop
//remove the last element in the array
const n=[1,2,3,4,5,6,7,8];
const n_res=n.pop();

console.log(n_res);

//Push
//add one or more element end of the array and return the length os the array
const abc=[1,2,3,4];
const res_abc=abc.push(2,3,4);
console.log(abc);
console.log(res_abc);

//shift
//removing the 1st element in array and returns it
const shift_1=[1,2,3,4];
const res_shift=shift_1.shift();
console.log(res_shift);

//unshift
//add element at the straing of the array
const num=[1,2,3];
const res_num=num.unshift(0,2,3,4);
console.log(num);
console.log(res_num);


//reverse
//we are reverse the given array
const rev=[1,2,3,4,5,6];
const res_rev=rev.reverse();
console.log(res_rev);


//reverse charatter array
const arrayStr=['ab','cd','ef'];
const res_12=arrayStr.reverse();
console.log(res_12);

//join
//the join method create new string from an array
const countires=['hello','how ','are'];

const countiresRes=countires.join("-");
console.log(countiresRes);

//includes
//it check the particular array element is included or not. and it will return boolean
const kmd=['abc','efg','ijklm'];
const kmdRes=kmd.includes('abc');
console.log(kmdRes);


//sort
//sort the element of any array
//by default sort is asd
const sort_1=['zz','pp','aa','kl'];
sort_1.sort();
console.log(sort_1);

//sort by number

const sort_num=[9,8,7,6,5,4,3,2,1,878];
sort_num.sort(campar);

function campar(a,b){
    return a-b;
}
console.log(sort_num);


// concat()
// Adding the two string we are using concat().
const array1=['a','b','c'];
const array2=['d','e','f'];
const array3=array1+array2;

const array4=array1.concat(array2);
console.log(array4);


//example:2
var firstName="abc";
var lastName="efg";
var output=firstName.concat(lastName);
console.log(output);

//every()
//it is comparing each and every value and returns boolean value
const value=(e)=>e<50;
const array=[1,2,3,4,40];
const output_1=array.every(value);
console.log(output_1);

//map()
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array11=[1,2,3,4,5];
const output11=array11.map((e)=>e*2);
console.log(output11);

//Fill()
//it fill all of the value in given array
//we can give strat range index and end range index
var testArray=[2,3,4,5,6,7];
testArray.fill("h");
console.log(testArray)

//we can give here strat range and end renge of the index

// //Filter()
// //we are using for deleteting 
// //whenever your using Filter you will get new array
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


//slice
//we are trying to get what value we want on that time we are using slice
var user_1=["Ted","Tim","Tom","sam","sor","sod"];
console.log(user_1.slice(1,4));

//splice()
//Inserting the value in paricular index
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//at
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);

//find
//find the length of the array
const fruits_1 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits_1.length;
console.log(length);


