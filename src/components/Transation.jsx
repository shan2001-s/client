import "../App.css";
import logo from "../images/eth-card .jpg";
import { useContext } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import LoadingButton from '@mui/lab/LoadingButton';
// import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';

import { TransationContext } from "../context/TransationContext";

const Input = ({ label,name, type, value, handleChange }) => (
  <TextField
    fullWidth
    label={label} 
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    id="fullWidth" 
  
  />
);
function Transation() {
  const {handleChange,formData, setformData, sendTransation, setloading} = useContext(TransationContext);
   
  function handleSubmit(e) {
    const { addressTo, amount, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !message) {
      alert('please, fill form ')
      console.log('no data');
    }
    else {
       sendTransation();

    }
   
  }
  
  return (
  

    <div className="Transation" style={{
      backgroundColor: 'black'
    }} >

      <Container maxWidth="sm" >
        <Box p={8}>
          <Card sx={{ bgcolor: 'smoke' }} >
            <CardContent>
             <img style={ {width:' 400px'}} src={logo} alt="Logo" />
            </CardContent>
          

            <Box p={1}>
               <Input  label="Address to" type='test' name='addressTo'   handleChange={handleChange} />
          </Box>
           <Box p={1}>
              <Input  label="Amount"  type='number' name='amount' handleChange={handleChange} />
            </Box>
               <Box p={1}>
              <Input  label="Message" type='test' name='message'handleChange={handleChange} />
            </Box>
            
           
            <Box Box p={1}>
              {
                !setloading && (
                   <button type="button" onClick={handleSubmit} class="rounded-full ... bg-rose-700 px-20 py-4 color-white text-gray-50 	text-align: center; w-70 " disabled>  <div class="spinner-border spinner-border-sm text-light"  role="status">
                  <span class="sr-only">Loading...</span>
                  </div> Sending..  </button>
                  
                )
              }
              {
                setloading && (
                  <button type="button" onClick={handleSubmit} class="rounded-full ... bg-rose-500 px-20 py-4 hover:bg-rose-700 color-white text-gray-50 w-70" > Send Now </button> 
                )
             }
              

               
          
             </Box>
         
          </Card>

        </Box>
      </Container>







    </div>
  );
}

export default Transation;