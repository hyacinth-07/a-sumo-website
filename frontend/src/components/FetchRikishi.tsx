import { useState, useEffect } from "react";
import { fetchRikishi } from "../fetch/fetch-rikishi";
import { fetchAllRikishi } from "../fetch/fetch-all-rikishi";

export default function FetchRikishi() {

    const [result, setResult] = useState("");
    const [searchedName, setSearchedName] = useState("")
    const [suggestions, setSuggestions] = useState(Array)

    useEffect(() => {
        try {
            fetchAllRikishi(true).then((data) => setSuggestions(data.records))
        } catch (error) {
            throw new Error(`${error}`)
        }
    }, [])

    const searchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (typeof value === "string" || value === "") {
            setSearchedName(value);
        } 
    };
    
    const handleClick = async (name: string) => {

        try {
            fetchRikishi().then((data) => setResult(data))
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
        <div>
            {suggestions.filter((item) => item.shikonaEn?.toLowerCase().includes(searchedName.toLowerCase())).map(item => <p key={item.id}>{item.shikonaEn}, {item.currentRank}</p>)}
        </div>
        {result && (
            <pre> 
                {JSON.stringify(result, null, 2)}
            </pre>
            )}
    </div>
    )
}