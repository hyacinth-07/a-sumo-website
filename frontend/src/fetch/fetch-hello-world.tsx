// fix this so it returns an array
import { Rikishi } from "../types/Rikishi";

export const fetchHelloWorld = async (): Promise< Rikishi[] > => {

    const response = await fetch('http://localhost:3000/', {credentials: 'include'});

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText} | ${response.status}`);
    }

    
    const data : Rikishi[] = await response.json();

    return data
}


