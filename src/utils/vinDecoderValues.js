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

export const getVehicleProperties = ({props, setOilType, oilType}) => {
    const filteredProperties = props.filter(prop => 
        vinDecoderValues.includes(prop.Variable)).map(prop => 
            {
                return {property: prop.Variable, value: prop.Value}
            }
        );
    
    getCarCode (setOilType, 'kia forte 2.0 2022');
    filteredProperties.push({property: 'Oil Type', value: oilType});
    return filteredProperties;
};

export function getDecodedVin (setVinResponses, vin) {
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

function getOilType (setOilType, typeId) {
    const runPostRequest = () => {
        fetch('https://motorex.com/api/oilfinder/recommendation?lang=en-US&type='+typeId, {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': '*/*',
              'Content-Type': 'application/json',
              'Host': 'motorex.com'
            },
          }).then(r => r.json()).then(r => {
            setOilType(r.data.components[0].usageGroups[0].products[0].productName);
         }).catch(error => console.error('Error', error));
    }
    runPostRequest();
}

export function getCarCode (setOilType, carTitle) {
    const runPostRequest = () => {
        fetch('https://motorex.com/api/oilfinder/search?lang=en-US&search='+carTitle+'&catId=1&categoryName=Cars', {
          mode: 'no-cors',
            method: 'GET',
            redirect: 'follow',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': '*/*',
              'Content-Type': 'application/json',
              'Host': 'motorex.com'
            },
          }).then(r => {r.json(); console.log("hewo: ", r)}).then(r => {
            getOilType(setOilType, r.data.results[0].typeId);
         }).catch(error => console.error('Error', error));
    }
    runPostRequest();
}