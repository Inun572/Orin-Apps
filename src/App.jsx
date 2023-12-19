import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Login from './pages/Login';
import BookApps from './pages/BookApp';
import About from './pages/BookApp/About';
import BookList from './pages/BookApp/BookList';
import BookDetails from './pages/BookApp/BookDetails';
import NotFound from './pages/NotFound';
import Dashboard from './pages/BookApp/Dashboard';

export default function App() {
  return (
    <Layout>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookapps" element={<BookApps />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="books" element={<BookList />} />
            <Route path="books/:bookId" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Layout>
  );
}
