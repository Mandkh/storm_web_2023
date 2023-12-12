import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        console.log(authenticated)
        if (loggedInUser) {
            setauthenticated(JSON.parse(loggedInUser));
            navigate("/contact")
        }
    }, []);

    if (!authenticated) {
        navigate("/login");
    } else {
        return (
            <div>
                <p className="bg-blue-100 text-center align-center m-3">Welcome to tour Contact</p>
                <h1 className="text-white text-center bg-yellow-200 m-3">{authenticated.email}</h1>
            </div>
        );
    }
}

export default Contact;