import React, {useEffect, useState} from "react";
import axios from "axios";

const blogListUrl = "http://localhost:3100/blog/";

export function BlogList() {

    const [blogList,setBlogList] = useState([]);

    useEffect(() => {

        const fetchData = async() => {
            const response = await axios.get(blogListUrl);
            setBlogList(response.data);
            return console.log(response.data);
            

        };
        fetchData();
    },[]);

    return(
        <>
        <h1>Blogリスト</h1>
        <ul>
            {blogList.map((blog) => 
            <li key={blog.id}>
                {blog.id} :{blog.title}
            </li>
            )}
        </ul>
        </>
    )

    
    };
