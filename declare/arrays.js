//find the last elements
const arr1=[3,7,34,90,12];
const lastItem=arr1[arr1.length -1];
console.log(arr1.length);

const arr2=[true,"green","where",12,56]
const lastitem=arr2[arr2.length -1];
console.log(arr2.length)

//write a javascript program that will join the following array elements into a string
 const myPets=["cow","Bird","Snake","Dog"];
 const elements=['Cow','Bird','Snake','Dog'];
console.log(elements.join());

var arr3=[-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);

//write a program to remove duplicates  from the following array
//console the array without duplicates,nd console another array that only contains the duplicates
var arr=["apple","mango","apple","orange","mango","mango"];
function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates(arr));


//write a js  script to search for the following word in the array
let x="way"
const arr5=["the","way","x",4];
arr5.find(
    function(arr5){
        return arr5==x;
    }
)

console.log(x)

let y="way"
const arr6=["the","way","x",4];
 let z=arr6.find(
    function(arr6){
        arr6=y;
    }
)
console.log(z);

//Js script to sort string
let word ="sevink"
console.log(word);








