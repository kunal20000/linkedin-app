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
      const {data} = await resData.json();
      console.log("data", data);
      setPost(data.slice(0,10));
      
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
      <section>
        {post.map((posts) => {
          const { author, id } = posts;
          return 
          <div>
          <p key={id} style={{color:"black"}}>{author.name}</p>
          <p> </p>
          </div>
        })}
      </section>
    </>
  );
};

export default Home;
