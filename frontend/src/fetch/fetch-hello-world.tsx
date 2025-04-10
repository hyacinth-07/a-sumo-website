// fix this so it returns an array

export const fetchHelloWorld = async (): Promise<string> => {

    const response = await fetch('http://localhost:3000/', {credentials: 'include'});

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText} | ${response.status}`);
    }

    
    const data = await response.json();
    console.log(data)

    return data
}


