import { useState } from "react";
import { fetchRikishi } from "../fetch/fetch-rikishi";

export default function FetchRikishi() {

    const [text, setText] = useState("");
    
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
        <button onClick={handleClick}>Find one!</button>
        {text && (
            <pre> 
                {JSON.stringify(text, null, 2)}
            </pre>
            )}
    </div>
    )
}