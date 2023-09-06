import React, { useEffect, useState } from "react";

const Home = () => {
  const [post, setPost] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const resData = await fetch(
        "https://academics.newtonschool.co/api/v1/linkedin/post",
        {
          method: "GET",
          headers: {
            projectId: "YOUR_PROJECT_ID",
          },
        }
      );
      if (!resData.ok) {
        throw new Error("Request failed");
      }
      const { data } = await resData.json();
     
      setPost(data.slice(0, 10));
       console.log("data", data);
    } catch (err) {
      // handle error during the fetching request
      console.error();
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);
  return (
   
      <>
        {post.map((posts) => {
          const {author, id} = posts
          return(
            <div key={id} className="card-container">
              <p>{author.name}</p>
              <p>{author.profileImage}</p>
              
            </div>
          )
          
        })}
      </>
    
  );
};

export default Home;
