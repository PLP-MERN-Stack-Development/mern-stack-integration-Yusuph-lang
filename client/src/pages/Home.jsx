import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    api.get('/posts').then(r => setPosts(r.data)).catch(console.error);
  },[]);

  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.length === 0 && <p>No posts yet</p>}
      {posts.map(p => (
        <article key={p._id} style={{border:'1px solid #eee', padding:12, marginBottom:10, borderRadius:6}}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
          <small>By {p.author} — {new Date(p.createdAt).toLocaleString()}</small>
        </article>
      ))}
    </div>
  );
}
