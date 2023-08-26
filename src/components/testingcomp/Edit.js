import React from "react";

const Edit = ({list, item,handleUpdate }) => {
    console.log(list[item])
  return (
    <div>
      <input type="text" defaultValue={list[item]} onChange={(e)=>handleUpdate(e,item)} />
    </div>
  );
};

export default Edit;

// import React, { useState } from "react";
// import ReadList from "./components/testingcomp/ReadList";
// import Edit from "./components/testingcomp/Edit";

// const TestingCode = () => {
// const [inp,setInp]=useState("");
// const [list,setList]=useState([]);
// const [edit,setEdit]=useState("");


// const handleBtn=()=>{
//   let newList=[...list,inp]
//   setList(newList);
//   setInp("");
// }


// const handleEdit=(event,val)=>{
//   event.preventDefault();
//   setEdit(val);
// }

// const handleUpdate=(event,update)=>{
//   event.preventDefault();
// console.log(update);
//   setEdit(update);
// }

// return (
//     <>
//       <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)} />
//       <button onClick={handleBtn} >Add</button>
//       <div>
//         {
//           list && list.length>0 &&
//           list.map((item)=>{
//             return <div key={item}>
//              {
//               edit===item?<Edit item={item} list={list}  handleUpdate={handleUpdate} />:
//               <ReadList item={item} handleEdit={handleEdit} />
//              }
            
//             </div>
//           })
//         }
//       </div>
//     </>
//   );
// };

// export default TestingCode;

