import React,{ useEffect,useState } from 'react';
import axios from 'axios';

const UseEffectAxiosAPI = () => {
  const [info,setInfo]=useState([]);

useEffect(()=>{
  axiosApiData()
},[])

const axiosApiData=()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then(res=>{
    let newIfno=res.data.filter(row=>row.id<=10)
    setInfo(newIfno)
  })
  .catch(e=>console.log(e))
}
console.log(info);

  return (
  <>
    <table className='mt-5 table table-bordered border-primary table-hover'>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
        </tr>
      </thead>
      <tbody>
        {
          info.length>0 && info.map(row=>{
            return <React.Fragment key={row.id} >
              <tr>
                <td>{row.id}</td>
                <td>{row.title}</td>
              </tr>
            </React.Fragment>
          })
        }
      </tbody>
    </table>
  </>
  )
}

export default UseEffectAxiosAPI