import React, { useState,useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Update = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [id,setId] = useState(null);
    const navigate = useNavigate();
    const sendData = () => {
        axios.put(`https://63747e9548dfab73a4e0ef1b.mockapi.io/Crud/${id}`,{
            fname,
            lname
        })
        navigate('/read')
    }
    useEffect(()=> {
        setFname(localStorage.getItem('fname'));
        setLname(localStorage.getItem('lname'));
        setId(localStorage.getItem('Id'))
    },[])
    return (
        <>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={fname} onChange={(e)=> setFname(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lname} onChange={(e)=> setLname(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={sendData}>Update</Button>
            </Form>
        </>
    )

}

export default Update
