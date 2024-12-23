function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = combineArrays(array1, array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const array3: string[] = ['a', 'b', 'c'];
const array4: string[] = ['d', 'e', 'f'];
const combinedArray2 = combineArrays(array3, array4);
console.log(combinedArray2); // Output: ['a', 'b', 'c', 'd', 'e', 'f']

//Another example
const array5: any[] = [1, 'a', true];
const array6: any[] = [2, 'b', false];
const combinedArray3 = combineArrays(array5, array6);
console.log(combinedArray3); //Output: [1, 'a', true, 2, 'b', false] 