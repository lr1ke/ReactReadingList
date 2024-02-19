import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { books } from './data/booksData.js'
import BookCard from './components/BookCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{books.map(book => (<BookCard book={book}></BookCard> ))}      
    </>
  )
}

export default App
