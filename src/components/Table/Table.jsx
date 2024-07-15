import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(Item, Name, date, status) {
  return { Item, Name, date, status };
}

const rows = [
  createData("SHEETAL Associates Flared Sleeve Maxi Dress", "Sanjana Rajput", "2 March 2022", "Approved"),
  createData("SASSAFRAS Black & Pink Floral Waist Cut-Out Maxi Dress ", "Riya Sawant", "2 March 2022", "Pending"),
  createData("FLOWERVELLY V-Neck Striped Fit and Flare Dresses", "John Mathew", "2 March 2022", "Approved"),
  createData("SASSAFRAS Black & Pink Floral Waist Cut-Out Maxi Dress", "Goldy Fernandes", "2 March 2022", "Approved"),
  createData("SHEETAL Associates Flared Sleeve Maxi Dress", "Sanjana Rajput", "2 March 2022", "Approved"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Recent Investments</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Item}
                  </TableCell>
                  <TableCell align="left">{row.Name}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
