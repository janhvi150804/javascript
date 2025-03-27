const marvel_heros = ["thor" , "Ironman" , "Spiderman"];
const dc_heros = ["superman" , "flash" , "batman"];
// To merge 2 or more arrays.
 //marvel_heros.push(dc_heros); // By using push function array2 merges with array1 but array2 is stored in one index itself gives reult in the existing array i.e. array1.
 //marvel_heros.concat(dc_heros); // By using concat fucntion array2 merges with array1 and each element of array2 is stored in seperate index and doesn't give result in the existing array i.e. a new array is created .
const all_new_heros = [...marvel_heros, ...dc_heros]; //speard method.
console.log(all_new_heros);
const another_array = [1, 2, 3, [4,5,6], 7, [6,7, [4, 5]]];
const real_another_array = another_array.flat(1); // returns a new array with all sub-array elements concatenated into it recursively upto the specified depth.
console.log(real_another_array);
const real_another_array2 = another_array.flat(Infinity);
console.log(real_another_array2);

