import { useEffect, useState } from "react";
import Users from "../components/Users";

const UsersData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(users);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postData();
    }, []);

    const postData = async () => {
        await fetch(
            `https://jsonplaceholder.typicode.com/posts`
        )
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(posts);

    return (
        <div>
            {users.map((item) => (
                <Users
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    onClick={postData}
                />
            ))}
        </div>
    );

};

export default UsersData;
