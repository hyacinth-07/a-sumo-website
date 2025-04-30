import { useState, useEffect } from "react";
import { fetchRikishi } from "../fetch/fetch-rikishi";
import { fetchAllRikishi } from "../fetch/fetch-all-rikishi";

export default function FetchRikishi() {

    const [result, setResult] = useState("");
    const [searchedName, setSearchedName] = useState("")
    // const [suggestions, setSuggestions] = useState(Array)
    const [autocomplete, setAutocomplete] = useState(Array)

    const searchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // Update the searchedName state
        setSearchedName(value);

        // Only filter suggestions if the input length is greater than 2
        if (value.length >= 2) {
            try {
                fetchAllRikishi().then((data) => {
                    // setSuggestions(data.records);

                    // Filter suggestions based on the current input value
                    setAutocomplete(
                        data.records.filter((item) =>
                            item.shikonaEn?.toLowerCase().includes(value.toLowerCase())
                        )
                    );
                });
            } catch (error) {
                console.error("Error fetching rikishi:", error);
            }
        } else {
            // Clear autocomplete if input length is 2 or less
            setAutocomplete([]);
        }
    };
    
    const handleClick = async (name: string) => {

        try {
            fetchRikishi(name).then((data) => setResult(data))
        } catch (error) {
            throw new Error(`${error}`)
        }

    }
        
    return (
    <div>
        <label>Search by Name:
            <input type="text" name="rikishiName" id="rikishiName" value={searchedName} onChange={searchOnChange}/>
        </label>
        <button onClick={() => handleClick(searchedName)}>Find one!</button>
        
        {autocomplete.length > 0 && (autocomplete.map(item => <p key={item.id}>{item.shikonaEn}, {item.currentRank}</p>)).slice(0, 10)}

        {result && (
            <pre> 
                {JSON.stringify(result, null, 2)}
            </pre>
            )}
    </div>
    )
}