import React from "react";

const LetAndConst = () => {
  const letFunction = () => {
    let a = 40;
    a = 200;
    if (true) {
      let a = 50;
      console.log(a)
    }
    return <h1>{a}</h1>;
  };

  const constFunction = () => {
    const a =100;
    if (true) {
      const a = 50;
      console.log(a)

    }
    return <h1>{a}</h1>;
  };

  return (
    <div>
      <h1>LetAndConst</h1>
      {letFunction()}
      {constFunction()}
    </div>
  );
};

export default LetAndConst;
