export const fetchRikishi = async (name: string) => {

    // const response = await fetch("https://sumo-api.com/api/rikishi/17");
    const response = await fetch(`https://sumo-api.com/api/rikishis?shikonaEn=${name}`);
    // const response = await fetch("https://sumo-api.com/api/rikishis");

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText} | ${response.status}`);
    }

    const data = await response.json();

    return data

}