import React, {useState, useEffect} from 'React'
import './ServiceForm.css'
import ReactQuill from 'react-quill'

const ServiceForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [message, setMessage] = useState('')
     return(
         <form>
             <input onChange={() => setName(e.target.value)} type="text"/>
             <input onChange={() => setEmail(e.target.value)} type="text"/>
             <input onChange={() => setPhone(e.target.value)} type="text"/>
             <input onChange={() => setMake(e.target.value)} type="text"/>
             <input onChange={() => setModel(e.target.value)} type="text"/>
             <input onChange={() => setYear(e.target.value)} type="text"/>
             <ReactQuill placeholder="...type your message here" />
         </form>
     )
}
export default ServiceForm