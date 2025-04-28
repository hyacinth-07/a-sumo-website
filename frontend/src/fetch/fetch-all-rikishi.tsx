// need to write the proper type for the rikishi

export const fetchAllRikishi = async (intai: boolean = false) => {
    
    if (intai) {

        const response = await fetch("https://sumo-api.com/api/rikishis?intai=true");

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText} | ${response.status}`);
        }

        const data = await response.json();

        return data;
        
    } else {
        const response = await fetch("https://sumo-api.com/api/rikishis");

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText} | ${response.status}`);
        }

        const data = await response.json();

        return data;
    }

}