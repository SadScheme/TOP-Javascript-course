const target = {a: 1, b: 2}
const source = {b: 5, c:7}
const anothersource = {c: 8, d: 9}

const test = Object.assign({}, target,source,anothersource)

console.log(target)
console.log(source)
console.log(anothersource)
console.log(test)
