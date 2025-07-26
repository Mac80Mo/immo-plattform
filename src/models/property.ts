export enum PropertyType {
    APPARTMENT = "Apartment",
    HOUSE = "House",
    OFFICE = "Office"
}

export interface Address {
    street: string;
    city: string;
    postcode: string;
    country: string;
}

export interface Property {
    readonly id: number;
    title: string;
    description: string;
    price: number;
    address: Address;
    property_type: PropertyType;
    imageUrl: string;
}