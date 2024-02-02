import { useState } from 'react'
import './contact.css'

export default function ContactUs(){
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [text, setText] = useState('')
    const [reason, setReason] = useState('complaint')
    /* const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const contact = {name,mail,text,reason};
        setIsPending(true)
        fetch('/db.json', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(contact)
        }).then(()=>{
             console.log('new info added') 
        })
    } */
        
    return(
        <div className="create">
            <h2>Leave Us a Message</h2>
            <form /* onSubmit={handleSubmit} */ className='form'>
                <label>Name:</label>
                <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label>Your Email:</label>
                <input 
                    type="text" 
                    required
                    value={mail}
                    onChange={(e)=>setMail(e.target.value)}
                />
                <label>Your message:</label>
                <textarea 
                    required
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                ></textarea>
                <label>Reason:</label>
                <select
                    value={reason}
                    onChange={(e)=>setReason(e.target.value)}
                >
                    <option value="complaint">Complaint</option>
                    <option value="follow">Follow Up</option>
                    <option value="inquiry">Inquiry</option>
                </select>
                <button>Submit</button>
                {/* {! isPending && <button>Submit</button>}
                { isPending && <button disabled>Adding comment...</button>} */}
                {/* <p>{name}</p>
                <p>{mail}</p>
                <p>{text}</p>
                <p>{reason}</p> */}
            </form>
        </div>
    )
}