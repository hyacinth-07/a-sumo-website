export const fetchAllRikishi = async (intai: boolean) => {
    
    if (intai === true) {

        console.log("to implement")
        
    } else {
        const response = await fetch("https://sumo-api.com/api/rikishis");

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText} | ${response.status}`);
        }

        const data = await response.json();

        return data;
    }

}