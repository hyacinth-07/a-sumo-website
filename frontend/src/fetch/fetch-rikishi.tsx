export const fetchRikishi = async () => {

    // const response = await fetch("https://sumo-api.com/api/rikishi/17");
    const response = await fetch("https://sumo-api.com/api/rikishis?shikonaEn=Endo");
    // const response = await fetch("https://sumo-api.com/api/rikishis");

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText} | ${response.status}`);
    }

    const data = await response.json();

    return data

}