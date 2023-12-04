import Card from "./componets/Card"
import {useState} from 'react'


function App() {
  const [users,setUsers] = useState([
    {
        name:'Feruz',
        age:20,
        password: 1234,
    },
    {
        name:'John',
        age:14,
        password: 1234,
    },
    {
        name:'Bob',
        age:54,
        password: 1234,
    },
    {
        name:'Tom',
        age:12,
        password: 1234,
    },
])  


  return (
    <div className="App">
     <table border={1} cellSpacing={0}>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>password</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((val, ind) =>{
            return(
              <tr>
                 <td>{val.name}</td>
                 <td>{val.age}</td>
                 <td>{val.password}</td>
              </tr>
            )
          })
        }
      </tbody>
     </table>
    </div>
  );
}
export default App;


