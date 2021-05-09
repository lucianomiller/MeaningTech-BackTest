import React,{useState} from 'react'
import "./ConsultaForm.css"
import axios from "axios";

function ConsultaForm() {
    const [data,setData]=useState({
        name:"",
        lastname:"",
        email:"",
        consulta:""
    })
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/consultas",data)
        .then((res)=>console.log(res.data))
        console.log(data)
        setData({
            name:"",
            lastname:"",
            email:"",
            consulta:""
        })

    }
    const handleaOnChange = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
      };
    return (
        <div style={{/* display:'flex', alignItems:"center",justifyContent:"center"  */ marginTop:"50px"}}>
            <div class="row body ">
                
                <div>
                    <h2>CONTACT US</h2>
                </div>
                <form  data-form-title="CONTACT US" onSubmit={handleSubmit}>
                    <input type="hidden" data-form-email="true"/>
                    <div class="form-group p-2">
                        <input type="text" class="form-control" name="name" required={true} placeholder="Name*" data-form-field="Name" onChange={handleaOnChange} value={data.name}/>
                    </div>
                    <div class="form-group p-2">
                        <input type="text" class="form-control" name="lastname" required={true} placeholder="Lastname*" data-form-field="Lastname" onChange={handleaOnChange} value={data.lastname}/>
                    </div>
                    <div class="form-group p-2">
                        <input type="email" class="form-control" name="email" required={true} placeholder="Email*" data-form-field="Email" onChange={handleaOnChange} value={data.email}/>
                    </div>                                
                    <div class="form-group p-2">
                        <textarea class="form-control" name="consulta" placeholder="Message" rows="6"  data-form-field="Consulta" onChange={handleaOnChange} value={data.consulta}></textarea>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-lg btn-danger p-2">CONTACT US</button>
                    </div>
                </form>
            </div>
                    
        </div>
        
    )
}

export default ConsultaForm
