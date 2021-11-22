import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(date, tareq, jahid, abid, sobuj) {
  return { date, tareq, jahid, abid, sobuj };
}

const rows = [
  createData(
    "January-1",
    { breakfast: 0.5, Launch: 1, Dinner: 1 },
    { breakfast: 0.5, Launch: 1, Dinner: 1 },
    { breakfast: 0.5, Launch: 1, Dinner: 1 },
    { breakfast: 0.5, Launch: 1, Dinner: 1 }
  ),
  createData(
    "January-2",
    { breakfast: 0, Launch: 2, Dinner: 0 },
    { breakfast: 0, Launch: 2, Dinner: 0 },
    { breakfast: 0, Launch: 2, Dinner: 0 },
    { breakfast: 0, Launch: 2, Dinner: 0 }
  ),
  createData(
    "January-3",
    { breakfast: 0.5, Launch: 1, Dinner: 1 },
    { breakfast: 0.5, Launch: 1, Dinner: 1 },
    { breakfast: 0.5, Launch: 1, Dinner: 1 },
    { breakfast: 0.5, Launch: 1, Dinner: 1 }
  ),
  createData(
    "January-4",
    { breakfast: 0, Launch: 1, Dinner: 1 },
    { breakfast: 0, Launch: 1, Dinner: 1 },
    { breakfast: 0, Launch: 1, Dinner: 1 },
    { breakfast: 0, Launch: 1, Dinner: 1 }
  ),
  createData(
    "January-5",
    { breakfast: 0.5, Launch: 1, Dinner: 0 },
    { breakfast: 0.5, Launch: 1, Dinner: 0 },
    { breakfast: 0.5, Launch: 1, Dinner: 0 },
    { breakfast: 0.5, Launch: 1, Dinner: 0 }
  ),
];

const hostelMembers = ["tareq", "jahid", "abid", "sobuj"];

export default function MillTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Date</StyledTableCell>

            {hostelMembers.map((member, index) => (
              <StyledTableCell align="center" colSpan={3} key={index}>
                {member.toUpperCase()}
              </StyledTableCell>
            ))}
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center"> </StyledTableCell>

            {hostelMembers.map((member , index) => (
              <React.Fragment key={index}>
                <StyledTableCell align="center">Breakfast</StyledTableCell>
                <StyledTableCell align="center">Launch</StyledTableCell>
                <StyledTableCell align="center">Dinner</StyledTableCell>
              </React.Fragment>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>

              <StyledTableCell>{row.tareq.breakfast}</StyledTableCell>
              <StyledTableCell>{row.tareq.Launch}</StyledTableCell>
              <StyledTableCell>{row.tareq.Dinner}</StyledTableCell>

              <StyledTableCell>{row.jahid.breakfast}</StyledTableCell>
              <StyledTableCell>{row.jahid.Launch}</StyledTableCell>
              <StyledTableCell>{row.jahid.Dinner}</StyledTableCell>

              <StyledTableCell>{row.abid.breakfast}</StyledTableCell>
              <StyledTableCell>{row.abid.Launch}</StyledTableCell>
              <StyledTableCell>{row.abid.Dinner}</StyledTableCell>

              <StyledTableCell>{row.sobuj.breakfast}</StyledTableCell>
              <StyledTableCell>{row.sobuj.Launch}</StyledTableCell>
              <StyledTableCell>{row.sobuj.Dinner}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
