import getClasses from './getClasses'

console.log("hello from index.js")
getClasses()

const obj = { a: "aplha", b: "beta" }

const newObj = { ...obj, c: "charlie" }