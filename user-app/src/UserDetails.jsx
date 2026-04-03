import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Info.css";


const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await res.json();
            setUser(data);
        };

        fetchUsers();
    }),[id];

    if(!user){
        return <h3 className="position-absolute top-50 start-50 translate-middle">Loading...</h3>
    }

    return (
      <>
        <div className="Back-Button">
            <button type="button" class="btn btn-primary" onClick={() => navigate("/users")}>←Back</button>
        </div>
        <div className="container mt-5 bg-green">
            <h2>User Id : { id }  Name:  {user.name}</h2>
             <p>Email: {user.email}</p>
             <p>Phone: {user.phone}</p>
             <p>Website: {user.website}</p>
        </div>
      </>
    )
}

export default UserDetails;