import React,{useEffect,useState} from "react";
import axios from "axios";
import { Label, Table, Button } from "semantic-ui-react";

function Read() {
    const [apiData,setApiData] = useState([])
    useEffect(()=> {
        axios.get('https://63747e9548dfab73a4e0ef1b.mockapi.io/Crud')
        .then((res)=> setApiData(res.data));
    })
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
                <Table.Cell><Button color="green">Update</Button></Table.Cell>
                <Table.Cell><Button color="red">Delete</Button></Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
