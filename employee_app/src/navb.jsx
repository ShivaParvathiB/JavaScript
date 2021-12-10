import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const NavB = (props) => {

  const {data, setData} = props;

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [empId,setEmpId] = useState('');
  const [dep,setDep] = useState('');


  const [modalForm, setModalForm] = useState(false);

// //   const onChangeHandler1=(e)=>{
// //     setName(e.target.value);
// //   }
//   const onChangeHandler2=(e)=>{
//     setEmail(e.target.value)
//   }
//   const onChangeHandler3=(e)=>{
//     setEmpId(e.target.value);
//   }
//   const onChangeHandler4=(e)=>{
//     setDep(e.target.value);
//   }
  
  const onChangeSubmit = (e) => {
      e.preventDefault();
      setModalForm(false);
      
  }
  const onChangeAdd=(e)=>{
    setData([...data, name, email, empId,dep]);
  }



return(

    <div align="center">
        <button type="done" onClick={() => setModalForm(true)}>Add New Details </button>

        {modalForm && <Modal isOpen>

            <ModalHeader>New Employee</ModalHeader>

            <ModalBody>

                <form  type="done" onSubmit={onChangeSubmit}>
                    <label>Name :</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br/>
                    <label>Email :</label>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                    <label>EmpId :</label>
                    <input type="text" value={empId} onChange={(e)=>{setEmpId(e.target.value)}}/> <br/>
                    <label>Department :</label>
                    <input type="text" value={dep} onChange={(e)=>{setDep(e.target.value)}}/> <br/> 

                    <button type="done" onClick={onChangeAdd}>Add</button>
                </form>
                
            </ModalBody>
        </Modal>
        }      
    </div>
    )
}
export default NavB;


// import { useState } from "react";
// const NavB = () => {
//     const [items,setItems]=useState([]);
//     const [name,setName]=useState([]);
//     const [email,setEmail]=useState([]);
//     const [empId,setEmpId]=useState([]);
//     const [dep,setDept]=useState([]);

//     const onChangeHandler=(e)=>{
//         setName(e.target.value);
//         setEmail(e.target.value);
//         setEmpId(e.target.value);
//         setDept(e.target.value);

//     }

//     const onChangeSubmit=(e)=>{
//         setItems([...items,name,email,empId,dep]);
//     }
//     return(
//     <>
        
//         <form onClick="">
//             <div>
//             <p>Name</p>
//             <input type="text" placeholder="Enter" value={name} onChange={onChangeHandler} />
//             </div>
//             <div>
//                 <p>Email</p>
//                 <input type="text" placeholder="Enter" value={email} onChange={onChangeHandler} />
//             </div>
//             <div>
//             <p>Employee Id</p>
//             <input type="text" placeholder="Enter" value={empId} onChange={onChangeHandler} />
//             </div>
//             <div>
//             <p>Department</p>
//             <input type="text" placeholder="Enter" value={dep} onChange={onChangeHandler} />
//             </div>
//             <button type="done" onClick={onChangeSubmit}>Add</button>
//         </form>
              
//     </>
//   );
// };

// export default NavB;
