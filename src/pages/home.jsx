import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function HomePage() {
    const { theme, setTheme } = useContext(AppContext)

    return (
        <div>
            <p>Home Page</p>
            <p>Theme: {theme}</p>
            <button onClick={() => {
                setTheme("dark")
            }}>change theme</button>
            <Link to="/game">Game Page</Link>
        </div>
    )
}

export default HomePage