import { List, ListItem, Card } from '@mui/material';
import './VehicleProperties.scss';

export const VehicleProperties = ({vinResponses}) => {
    const propertyElements = vinResponses.map((vinResponse, index) =>{
        return (
            <List className='container'>
                <ListItem key={index} sx={{padding: 0, fontSize: 'medium'}}>
                    {vinResponse.property}: {vinResponse.value}
                </ListItem>
            </List>
        )}
    );
    return <Card variant='outlined' className='card'>{propertyElements}</Card>;
};