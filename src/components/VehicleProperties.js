export const VehicleProperties = (vinResponses) => {
    const propertyElements = vinResponses.map((vinResponse) =>{
        return (<li>Property: {vinResponse.property}, Value: {vinResponse.value}</li>)}
        );
        return propertyElements;
};