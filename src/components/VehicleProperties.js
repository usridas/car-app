import './VehicleProperties.scss';

export const VehicleProperties = ({vinResponses}) => {
    const propertyElements = vinResponses.map((vinResponse) =>{
        return (
            <div className='container'>
                <p>
                    {vinResponse.property}: {vinResponse.value}
                </p>
            </div>
        )}
    );
    return propertyElements;
};