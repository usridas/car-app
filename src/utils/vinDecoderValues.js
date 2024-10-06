import React, { useState } from 'react';

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

export const GetDecodedVin = () => {
    const [vinResponses, setVinResponses] = useState({});
    const runPostRequest = () => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3KPF54AD3NE436862?format=json', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(r => r.json()).then(r => {
            setVinResponses(getVehicleProperties(r.Results));
            console.log("VIN RESPONSES: DONE");
         }).catch(error => console.error('Error', error));
    }
    runPostRequest();
    return vinResponses;
}