import React from "react";
import { Property } from "../models/property";

const PropertyCard: React.FC<{property: Property}> = ({ property }) => {

    return (
        <>
            <div>{property.title}</div>
            <div>{property.description}</div>
            <div>{property.price}</div>
            <div>{property.address.city}</div>
            <hr />
         </>
    );

}

export default PropertyCard