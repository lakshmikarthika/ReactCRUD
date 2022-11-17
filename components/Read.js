import React,{useEffect,useState} from "react";
import axios from "axios";
import { Label, Table, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom'

function Read() {
    const [apiData,setApiData] = useState([])
    useEffect(()=> {
        getData();
    })
    const setData = (id,fn,ln) => {
        localStorage.setItem('Id',id);
        localStorage.setItem('fname',fn);
        localStorage.setItem('lname',ln);
    }
    const getData = () => {
        axios.get('https://63747e9548dfab73a4e0ef1b.mockapi.io/Crud')
        .then((res)=> setApiData(res.data));
    }
    const deleteData = (id) => {
        axios.delete(`https://63747e9548dfab73a4e0ef1b.mockapi.io/Crud/${id}`)
        .then(()=> {
            getData();
        })

    }
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
            {apiData.map((data)=> (
                <Table.Row>
                <Table.Cell>
                  <Label>{data.id}</Label>
                </Table.Cell>
                <Table.Cell>{data.fname}</Table.Cell>
                <Table.Cell>{data.lname}</Table.Cell>
                <Table.Cell><Link to="/update"><Button color="green" onClick={()=> setData(data.id,data.fname,data.lname)}>Update</Button></Link></Table.Cell>
                <Table.Cell><Button color="red" onClick={()=> deleteData(data.id)}>Delete</Button></Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
