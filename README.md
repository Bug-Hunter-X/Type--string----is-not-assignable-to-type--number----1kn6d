# TypeScript Type Error: Type 'string[]' is not assignable to type 'number[]'

This repository demonstrates a common TypeScript type error and its solution.  The error arises when attempting to combine arrays of different types using a function that expects a specific type.

## The Bug

The `combineArrays` function is designed to accept two number arrays and return a new array containing all elements from both inputs. However, when called with a string array and a number array, a type error occurs because TypeScript's type system prevents the implicit conversion between string and number arrays. 

## The Solution

The solution involves using generics to make the `combineArrays` function type-safe and flexible.  The generic type parameter `T` allows the function to accept arrays of any type and return an array of the same type. This eliminates the type error and improves the function's reusability.
