import React,{useEffect, useState} from 'react'
import axios from "axios";

function Answer() {
    const [consulta, setConsulta]=useState()
    const [effect, setEffect]=useState(0)
    useEffect(()=>{
        axios.get("http://localhost:3001/consultas/one")
        .then((res)=>{
            if(res.data.consultas){
                setConsulta(res.data.consultas)
             }else{
                setConsulta(false)
            }}
    )},[effect])
    const [data,setData]=useState({
        answer:""
    })
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3001/consultas/${consulta._id}`,{...data,complete:true})
        .then((res)=>console.log(res.data))
        console.log(data)
        setData({
            answer:""
        })
        setEffect(effect+1)
    }
    const handleaOnChange = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
      };
    return (
        <div>            
        {consulta? (<div style={{/* display:'flex', alignItems:"center",justifyContent:"center"  */ marginTop:"50px"}}>
            <div class="row body ">
                
                <div>
                    <h2>ANSWER</h2>
                </div>
                <form  data-form-title="CONTACT US" onSubmit={handleSubmit} >
                    <input type="hidden" data-form-email="true"/>
                    <div class="form-group p-2">
                        <h4>De: {consulta.name}</h4>
                    </div>
                    
                    <div class="form-group p-2">
                        <h5>
                            Consulta:  {consulta.consulta}
                        </h5>
                    </div>                                
                    <div class="form-group p-2">
                        <textarea class="form-control" name="answer" placeholder="Message" rows="6"  data-form-field="Consulta" onChange={handleaOnChange} value={data.answer}></textarea>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-lg btn-danger p-2">ANSWER</button>
                    </div>
                </form>
            </div>
                    
        </div>):(        
        <h3 style={{ textAlign: "center", margin: "20px 0" }}>
            no hay mas consultas!
          </h3>
        )}
        </div>
    )
}

export default Answer
