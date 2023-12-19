import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Login from './pages/Login';
import BookApps from './pages/BookApps';
import Dashboard from './pages/BookApps/Dashboard';
import About from './pages/BookApps/About';
import BookList from './pages/BookApps/BookList';
import BookDetails from './pages/BookApps/BookDetails';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Router;
