import { TextField, Button } from '@mui/material';
import { getVehicleProperties } from "../utils/vinDecoderValues";
import './TextInput.scss';

export const TextInput = ({setVinResponses}) => {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
      console.log("iuwhei: ", formData.entries());
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log("HEWO: ", formJson);

      // You can pass formData as a fetch body directly:
      fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/'+formJson.vinInput+'?format=json', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(r => r.json()).then(r => {
        console.log("maybe i got here: ", getVehicleProperties(r.Results));
        setVinResponses(getVehicleProperties(r.Results));
     }).catch(error => console.error('Error', error));
    }
  
    return (
      <form className='container' method="post" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" name='vinInput' label="VIN" variant="outlined" size='small'/>
        <Button variant="contained" type="submit">SUBMIT</Button>
      </form>
    );
  }
          