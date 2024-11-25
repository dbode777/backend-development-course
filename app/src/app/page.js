"use client"
import { Post } from "@/components/Post";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// If a state change occurs in the Home function, it rerenders the whole page and every component in the page.
function Text({ content, strong }) {
  return strong ? <strong>{ content }</strong> : <p>{ content }</p>;
}

export default function Home() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log("Initializing Home")
  }, []);

  function addPost() {
    const newPost = {
      title: title,
      author: author,
      content: content,
      following: false
    }

    setPosts([...posts, newPost]);
    setTitle("");
    setAuthor("");
    setContent("");
  }

  function navigate() {
    router.push(`/user/${userId}`);
  }

  return (
    <div>
      <Link href="/about">About</Link>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title"
      />
      <input 
        type="text" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        placeholder="Author"
      />
      <input 
        type="text" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Content"
      />
      <button onClick={addPost}>Add Post</button>
      <div className="posts"> 
        { posts.map((post, idx) => <Post key={idx + Math.random()} {...post} />) }
      </div>
      <div> 
        <input type="text" 
          placeholder="Search by user id" 
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={navigate}>Go To Profile</button>
      </div>
    </div>
  )
}
