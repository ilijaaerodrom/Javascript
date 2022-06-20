console.log(`test`);

const theList = [`Laurence`, `Svekis`, true, 35, null, undefined,
  { test: `one`, score: 55 }, [`one`, `two`]];
console.log(theList);
theList.pop();
console.log(theList);
theList.shift();
console.log(theList);
theList.unshift(`FIRST`);
console.log(theList);
theList.splice(3, 4, `hello world`);
console.log(theList);

let index = theList.indexOf(true);
theList[index] = `MIDDLE`;
console.log(theList);
theList.push(`LAST`);
console.log(theList);