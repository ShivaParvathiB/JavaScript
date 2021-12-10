import { useState } from "react";
import NavB from "./navb";


const Home = () => {

    const [state, setState] = useState([{
      name:'Shiva Parvathi', 
      email:'abc@gmail.com', 
      empId:1,
      dep:'ECE'
    }])
                              
    
    return(

        <>
           <h1 align="center">Employee App</h1> 

           <NavB state={state} setState={setState}/> 
           {state.map((x) => (<>
                                  {/* <p>{x.name}</p> 
                                  <p>{x.email}</p>
                                  <p>{x.empId}</p>
                                  <p>{x.dep}</p> */}
                                  <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Emp Id</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                                  <tbody>
                                    <tr>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.empId}</td>
                                    <td>{x.dep}</td>
                                    </tr>
                                    </tbody>
                                    </table>
                                  </>
         ))} 
           
        </>
    )
}
export default Home;