import React from 'react'

const arrayList=[10,"Hello",100,"welcome"];
let list=[200,300];

const DestructuringwithArray = () => {
 const [ten,hel,...wel]=arrayList;
[list[0],list[1]]=[list[1],list[0]]
  return (
    <div>
      <h1>DestructuringwithArray</h1>
      <h1>{ten}</h1>
      <h1>{hel}</h1>
      <h1>{wel[0]}</h1>
      <h1>{wel[1]}</h1>
      <h1>swaping</h1>
      <h1>{list[0]}</h1>
      <h1>{list[1]}</h1>
    </div>
  )
}

export default DestructuringwithArray