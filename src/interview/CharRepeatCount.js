import React from 'react'

const CharRepeatCount = () => {
    
const str="aaabbcaabdddd";
let unik=Array.from(new Set(str))
let str1=str.split("");

const counters=(ch)=>{
  let count=0;
  str1.forEach(element => {
    if(element===ch)count++;
 });
 return count;
}

let finalStr="";
for (const ch in unik) {
 finalStr+=unik[ch]+ counters(unik[ch])
}
console.log(finalStr)
  return (
    <div>aaabb</div>
  )
}
export default CharRepeatCount;
