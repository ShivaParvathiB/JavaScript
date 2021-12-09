
import { useState } from "react";
const NavB = () => {
    const [items,setItems]=useState([]);
    const [name,setName]=useState([]);
    const [email,setEmail]=useState([]);
    const [empId,setEmpId]=useState([]);
    const [dep,setDept]=useState([]);

    const onChangeHandler=(e)=>{
        setName(e.target.value);
        setEmail(e.target.value);
        setEmpId(e.target.value);
        setDept(e.target.value);

    }

    const onChangeSubmit=(e)=>{
        setItems([...items,name,email,empId,dep]);
    }
    return(
    <>
        
        <form onClick="">
            <div>
            <p>Name</p>
            <input type="text" placeholder="Enter" value={name} onChange={onChangeHandler} />
            </div>
            <div>
                <p>Email</p>
                <input type="text" placeholder="Enter" value={email} onChange={onChangeHandler} />
            </div>
            <div>
            <p>Employee Id</p>
            <input type="text" placeholder="Enter" value={empId} onChange={onChangeHandler} />
            </div>
            <div>
            <p>Department</p>
            <input type="text" placeholder="Enter" value={dep} onChange={onChangeHandler} />
            </div>
            <button type="done" onClick={onChangeSubmit}>Add</button>
        </form>
              
    </>
  );
};

export default NavB;