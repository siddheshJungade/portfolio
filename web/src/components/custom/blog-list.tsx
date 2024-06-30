"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [count,setCount] = useState(1)
  const fetchPosts = async (limit: number) => {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        query: `{
        publication(host: "blog.siddheshjungade.dev") {
          title
          posts(first: ${limit}) {
            pageInfo{
              hasNextPage
              endCursor
            }
            edges {
              node {
                url    
                title     
                coverImage {
                  url
                }
                publishedAt
              }
            }
          }
        }
      }`,
      }),
    });
    const ApiResponse = await response.json();
    setPosts(ApiResponse.data);
    console.log(ApiResponse.data);
  };
  useEffect(() => {
    fetchPosts(count);
  }, [count]);

  return <div className="technology">1</div>;
};

export default Blog;
