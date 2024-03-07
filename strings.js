//Question1
let text = "extravaganza";
let part = text.slice(-4);
console.log(part);
//Question2
const food =`The quick fox jumped over the lazy dog`;
 let b = "eat";
const c = `The${b}quick for jumped over the lazy dog`
console.log(c);

//Question3
let temp = "The quick brown fox jumps over the lazy dog";
let count = (temp.match(/the/g)) || [].length;
console.log(temp.match(/the/g)) || [].length;
console. log(temp.match(/brown/g)) || [].length;

//Question4
const string =`The pupils are reading in the library`;
const substring = "are";
console.log(string.includes(substring));
const string1 = "The child was sitting on the table before it fell";
const substr = "sitting";
console.log(string1.includes(substr));


//Question5
const name = "Wonderful";
const uppercase =name.toUpperCase();
console.log(uppercase);

const y = "amazing";
const lowercase = name.toLowerCase();
 console.log(lowercase);
 
 function titleCase(str){
    str = str.toLowerCase().split('');
    for (let i = 0; i<str.length; i++){
    }
    return str.join('');
}
console.log(titleCase("A wonderful world"));
