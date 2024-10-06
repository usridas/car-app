import { getDecodedVin } from "../utils/vinDecoderValues";
import React, { useState } from 'react';
import { VehicleProperties } from "./VehicleProperties";


export const VinDecoder = () => {
    const [vinResponses, setVinResponses] = useState([]);
    const onClick = () => {
        getDecodedVin(setVinResponses)
    }
    return (
    <div className='navBarContainer'>
        <a className='tab' href='#artdesign' onClick={onClick}>
            hello
        </a>
        <VehicleProperties vinResponses={vinResponses}/>
    </div>
    )
}