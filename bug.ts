function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = combineArrays(array1, array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//Type Error
const array3: string[] = ['a', 'b', 'c'];
const array4: number[] = [1, 2, 3];
const combinedArray2 = combineArrays(array3, array4); //Error