import { VehicleProperties } from "./VehicleProperties";


export const VinDecoder = ({vinResponses}) => {
    return (
    <div className='navBarContainer'>
        <VehicleProperties vinResponses={vinResponses}/>
    </div>
    )
}