import "../App.css";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import alldata from '../utils/dataCollection'

const TransationData = ({id, addressTo, addressFrom , timestamp, amount, message})=>{
  return (
      <TableRow>
              <TableCell>
               {id}
              </TableCell>
              <TableCell component="th" scope="row">
                  {addressTo}
              </TableCell>
            
              <TableCell align="left">{amount}</TableCell>
              <TableCell align="left">{message}</TableCell>
              <TableCell align="left">{timestamp}</TableCell>
        </TableRow>
  );
}

function Lastesttransation() {

  return (
    <div style={{backgroundColor: 'black'}}>
      
      <Box p={8}>
        <h1 style={{ color: 'white', padding:'50px'}}>Transation History</h1>
        <TableContainer component={Paper} p={4}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
           <TableHead>
              <TableRow>
                 <TableCell>id</TableCell>
                <TableCell>AddressTo</TableCell>
                <TableCell align="left">Amount&nbsp;</TableCell>
                <TableCell align="left">Message&nbsp;</TableCell>
                <TableCell align="left">Time&nbsp;</TableCell>
              </TableRow>
            </TableHead>
        <TableBody>
          {
          alldata.reverse().map((transation, i) => (
             <TransationData key={i} {...transation}></TransationData>
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
      
      <div >
      
        
    </div>
      
      </div>
    
  );
}

export default Lastesttransation;