import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './Blog.css'; // Import the CSS file

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreatePost = async () => {
    try {
      await axios.post('http://127.0.0.1:3000/posts', { title, content });
      fetchPosts();
      setTitle('');
      setContent('');
      alert('Post created successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to create post');
    }
  };

  const handleEditPost = (postId) => {
    const post = posts.find(post => post.id === postId);
    setTitle(post.title);
    setContent(post.content);
    setEditingPostId(postId);
  };

  const handleUpdatePost = async () => {
    try {
      await axios.put(`http://127.0.0.1:3000/posts/${editingPostId}`, { title, content });
      fetchPosts();
      setTitle('');
      setContent('');
      setEditingPostId(null);
      alert('Post updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update post');
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/posts/${postId}`);
      fetchPosts();
      alert('Post deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to delete post');
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h3><center>{editingPostId ? 'Edit Post' : 'Create Post'}</center></h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control medium-input"
              placeholder="Your title here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              className="form-control medium-input"
              placeholder="Your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <center>
            {editingPostId ? (
              <Button className="btn-green" onClick={handleUpdatePost}>Update</Button>
            ) : (
              <Button className="btn-green" onClick={handleCreatePost}>Create</Button>
            )}
          </center>
        </form>
      </div>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <div className="button-group">
                    <Button className="btn-green" onClick={() => handleEditPost(post.id)}>Edit</Button>
                    <Button className="btn-green" onClick={() => handleDeletePost(post.id)}>Remove</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
