import { getVehicleProperties } from "../utils/vinDecoderValues";

export const TextInput = ({setVinResponses}) => {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());

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
    
      console.log("HIII: ", formJson.vinInput);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          VIN: <input name="vinInput" />
        </label>
        <button type="submit">Submit form</button>
      </form>
    );
  }
          