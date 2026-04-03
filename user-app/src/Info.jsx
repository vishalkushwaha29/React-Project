import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Info.css";
const Info = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const fetchUsers = async () => {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        setUsers(data);
        setLoading(false);
    };

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    return (        
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="text-primary mb-4 appName"> User Fetch App </h1>
                <input type="text" className="form-control mb-3" placeholder="Search user..." onChange={(e) => setSearch(e.target.value)} />

                <button className="btn btn-success me-2" onClick={fetchUsers}>Get Users</button>
                <button className="btn btn-danger" onClick={() => setUsers([])}>Clear</button>
            </div>
            {loading && (
                <div className="text-center my-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <div className="row-mt-5">
                {filteredUsers.map((user) => (
                    <div className="col-md-4 mb-3" key={user.id}>
                        <div className="card shadow-sm p-3 userCard">
                            <Link to={`/users/${user.id}`}><h5 className="card-title">Name : {user.name}</h5></Link>
                            <p className="card-text">Email : {user.email}</p>
                            <p className="card-text">Phone : {user.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Info;