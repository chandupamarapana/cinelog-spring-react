import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")

  // 1. Load movies when app starts
  useEffect(() => {
    fetchMovies();
  }, [])

  const fetchMovies = () => {
    axios.get('http://localhost:8080/api/movies')
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => console.error("Error fetching movies:", err));
  }

  // 2. Define the handleSubmit function BEFORE the return
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const movieData = {
      title: title,
      rating: rating,
      review: review,
      dateWatched: new Date().toISOString().split('T')[0]
    };

    axios.post('http://localhost:8080/api/movies', movieData)
      .then(() => {
        setTitle("");
        setReview("");
        fetchMovies(); 
      })
      .catch(err => console.error("Error adding movie:", err));
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎬 My Movie Diary</h1>
      
      <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Add a New Movie</h3>
        {/* This is where the error was coming from */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <input 
            type="text" 
            placeholder="Movie Title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            required 
            style={{ padding: '8px' }}
          />
          
          <select 
            value={rating} 
            onChange={e => setRating(e.target.value)}
            style={{ padding: '8px' }}
          >
            <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
            <option value="4">⭐⭐⭐⭐ (4/5)</option>
            <option value="3">⭐⭐⭐ (3/5)</option>
            <option value="2">⭐⭐ (2/5)</option>
            <option value="1">⭐ (1/5)</option>
          </select>

          <textarea 
            placeholder="What did you think?" 
            value={review} 
            onChange={e => setReview(e.target.value)}
            style={{ padding: '8px', minHeight: '60px' }}
          />
          
          <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
            Save Movie
          </button>
        </form>
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h2 style={{ margin: '0 0 5px 0' }}>{movie.title}</h2>
            <div style={{ color: '#f39c12' }}>{"⭐".repeat(movie.rating)}</div>
            <p style={{ color: '#555' }}>{movie.review}</p>
            <small style={{ color: '#999' }}>Watched on: {movie.dateWatched}</small>
          </div>
        ))}
        {movies.length === 0 && <p>No movies yet. Add one!</p>}
      </div>
    </div>
  )
}

export default App