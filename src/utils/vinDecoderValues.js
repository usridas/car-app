export const vinDecoderValues = [
    'Make',
    'Model',
    'Model Year',
    'Series',
    'Vehicle Type',
    'Body Class',
    'Gross Vehicle Weight Rating From',
    'Gross Vehicle Weight Rating To',
    'Engine Number of Cylinders',
    'Displacement (CC)',
    'Displacement (CI)',
    'Displacement (L)',
    'Engine Model',
    'Fuel Type - Primary',
    'Fuel Delivery / Fuel Injection Type'
];

export const getVehicleProperties = (props) => {
    const filteredProperties = props.filter(prop => 
        vinDecoderValues.includes(prop.Variable)).map(prop => 
            {
                return {property: prop.Variable, value: prop.Value}
            }
        );
    return filteredProperties;
};

export function getDecodedVin (setVinResponses, vin) {
    console.log("HEWO: ", vin);
    const runPostRequest = () => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/'+vin+'?format=json', {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(r => r.json()).then(r => {
            setVinResponses(getVehicleProperties(r.Results));
         }).catch(error => console.error('Error', error));
    }
    runPostRequest();
}