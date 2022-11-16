import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

const Create = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const sendData = () => {
        axios.post('https://63747e9548dfab73a4e0ef1b.mockapi.io/Crud',{
            fname,
            lname
        })
    }
    return (
        <>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e)=> setFname(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e)=> setLname(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={sendData}>Submit</Button>
            </Form>
        </>
    )

}

export default Create
