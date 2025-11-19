import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css'


export default function Home() {
    const [message, setMessage] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/info');
            setMessage(response.data.message);
            console.log(response)
        } catch (err) {
            console.log("error: ", err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
      <h1>Mini Blog</h1>
        <p className="backend-message">{message}</p>

      <h3><a href="/blog1">• Why I Love JavaScript</a></h3>
      <h3><a href="/blog2">• My First Steps in Node.js</a></h3>

      <p>Welcome to my mini blog created with React.</p>
    </div>
  );
}
