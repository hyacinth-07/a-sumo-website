import { useState, useEffect } from "react";
import { fetchRikishi } from "../fetch/fetch-rikishi";
import { fetchAllRikishi } from "../fetch/fetch-all-rikishi";

export default function FetchRikishi() {

    const [text, setText] = useState("");
    const [searchedName, setSearchedName] = useState("")



    useEffect(() => {
        try {
            fetchAllRikishi().then((data) => console.log(data))
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
    
    const handleClick = async () => {

        try {
            fetchRikishi().then((data) => setText(data))
            console.log(text)
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
        

    return (
    <div>
        <label>Search by Name:
            <input type="text" name="rikishiName" id="rikishiName" value={searchedName} onChange={searchOnChange}/>
        </label>
        <button onClick={handleClick}>Find one!</button>
        {text && (
            <pre> 
                {JSON.stringify(text, null, 2)}
            </pre>
            )}
    </div>
    )
}