import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function GamePage() {
    const { theme, setTheme } = useContext(AppContext)
    const [playedNotes, setPlayedNotes] = useState([])

    return (
        <div>
            <p>Game Page</p>
            <p>Theme: {theme}</p>
        </div>
    )
}

export default GamePage