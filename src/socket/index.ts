import { io } from './server'; // <- no extension

// runtime implementation of `thing` is taken from ".js"
console.log(io); // 42

// type declaration of `thing` is taken from ".d.ts"
type TypeOfIO = typeof io; // number
