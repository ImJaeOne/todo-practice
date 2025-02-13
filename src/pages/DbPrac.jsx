import React, { useEffect, useState } from "react";
import supabase from "../supabase/client";

const DbPrac = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await supabase.from("posts").select("*");
        console.log(data);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {post.map((p) => {
        return (
          <div key={p.postNum}>
            title: {p.postTitle} content: {p.postDetail}
          </div>
        );
      })}
    </div>
  );
};

export default DbPrac;
