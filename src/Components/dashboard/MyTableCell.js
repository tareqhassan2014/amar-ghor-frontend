import { TableCell } from "@mui/material";
import React from "react";

const hostelMembers = ["tareq", "jahid", "abid", "sobuj"];

const MyTableCell = ({ row }) => {
//   console.log(row);
//   console.log(hostelMembers);
  return (
    <React.Fragment>
      {hostelMembers.map((member, index) => (
        <React.Fragment key={index}>
          <TableCell onDoubleClick={() => console.log(row.date, member,"breakfast" ,row.[member].breakfast)}>{row.[member].breakfast}</TableCell>
          <TableCell>{row.[member].Launch}</TableCell>
          <TableCell>{row.[member].Dinner}</TableCell>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default MyTableCell;
