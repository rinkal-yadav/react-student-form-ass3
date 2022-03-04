import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Student = () => {
    const [userInfo]=useState([
        {
            id: 1,
            name: "Atul",
            age: 25,
            course: "MERN",
            batch: "october"
        },

        {
            id: 2,
            name: "Rahul",
            age: 22,
            course: "MERN",
            batch: "November"
        },

        {
            id: 3,
            name: "Adity",
            age: 23,
            course: "MERN",
            batch: "September"
        },

        {
            id: 4,
            name: "Rinkal",
            age: 24,
            course: "MERN",
            batch: "September"
        },

        {
            id: 5,
            name: "Praju",
            age: 20,
            course: "MERN",
            batch: "December"
        }
    ])
  return (
    <div>
        <div>
            <span>Student Details</span>
            <span><Link to='/student/desc'>Add Students</Link></span>
        </div>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userInfo.map((row,index) => (
            <TableRow key={index}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right"><Link to='/edit'> Edit </Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Student