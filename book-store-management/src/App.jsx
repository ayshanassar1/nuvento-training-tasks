
import { useEffect, useState } from 'react';
import {
  getBooks,
  addBook,
  updateBook,
  deleteBook
} from './services/bookService';
import { FaBookOpen, FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import './App.css';

const emptyBook = {
  title: '',
  author: '',
  price: '',
  category: '',
  description: '',
  available: true,
  cover: ''
};

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyBook);

  const loadBooks = async () => {
    try {
      setError('');
      const data = await getBooks();
      setBooks(data);
    } catch {
      setError('Unable to load books. Please make sure JSON Server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const categories = [
    'All',
    ...new Set(books.map((book) => book.category).filter(Boolean))
  ];

  const filteredBooks = books.filter((book) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText);

    const matchesCategory =
      categoryFilter === 'All' || book.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const openAddForm = () => {
    setEditingId(null);
    setFormData(emptyBook);
    setShowForm(true);
    setMessage('');
    setError('');
  };

  const openEditForm = (book) => {
    setEditingId(book.id);
    setFormData({
      title: book.title || '',
      author: book.author || '',
      price: String(book.price ?? ''),
      category: book.category || '',
      description: book.description || '',
      available: Boolean(book.available),
      cover: book.cover || ''
    });
    setShowForm(true);
    setMessage('');
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    const price = Number(formData.price);

    if (
      !formData.title.trim() ||
      !formData.author.trim() ||
      !formData.category.trim() ||
      !formData.description.trim() ||
      formData.price === '' ||
      !Number.isFinite(price) ||
      price < 0
    ) {
      setError('Please fill in all required fields with a valid price.');
      return;
    }

    const bookData = {
      ...formData,
      title: formData.title.trim(),
      author: formData.author.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      price,
      cover:
        formData.cover.trim() ||
        'https://placehold.co/300x420/e8ebdf/344e3b?text=Book+Cover'
    };

    try {
      if (editingId !== null) {
        await updateBook(editingId, bookData);
        setMessage('Book updated successfully!');
      } else {
        await addBook({
          ...bookData,
          id: String(Date.now())
        });
        setMessage('Book added successfully!');
      }

      setFormData(emptyBook);
      setEditingId(null);
      setShowForm(false);
      await loadBooks();
    } catch {
      setError('Unable to save the book. Please check the backend connection.');
    }
  };

  const handleDelete = async (id, title) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );

    if (!confirmed) return;

    setMessage('');
    setError('');

    try {
      await deleteBook(id);
      setBooks((previous) => previous.filter((book) => book.id !== id));
      setMessage('Book deleted successfully!');
    } catch {
      setError('Unable to delete the book. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar bookstore-navbar">
        <div className="container">
          <a className="navbar-brand" href="#top">
            <span className="brand-icon"><FaBookOpen /></span>
            Book Haven
          </a>
          <span className="nav-tagline">
            Your next chapter starts here.
          </span>
        </div>
      </nav>

      <main className="container py-5" id="top">
        <section className="hero-section">
          <div>
            <p className="eyebrow">THE WORLD OF BOOKS</p>
            <h1>Find your next<br />favorite story.</h1>
            <p className="hero-description">
              Discover stories, explore new ideas, and manage your book
              collection in one place.
            </p>
            <a href="#book-collection" className="btn btn-dark hero-button">
              Explore Books
            </a>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="book book-one">READ<br />MORE</div>
            <div className="book book-two">DREAM<br />BIG</div>
            <div className="book book-three">NEW<br />WORLDS</div>
            <div className="art-circle">B</div>
          </div>
        </section>

        {message && (
          <div className="alert alert-success mt-4" role="status">
            {message}
          </div>
        )}

        {error && (
          <div className="alert alert-danger mt-4" role="alert">
            {error}
          </div>
        )}

        <section className="book-collection" id="book-collection">
          <div className="collection-heading">
            <div>
              <p className="eyebrow">OUR LIBRARY</p>
              <h2>Explore the collection</h2>
              <p>Find a book that speaks to you.</p>
            </div>

            <button className="btn add-book-button" onClick={openAddForm}>
              <FaPlus className="me-2" />
              Add Book
            </button>
          </div>

          {showForm && (
            <section className="book-form-section">
              <h3>{editingId !== null ? 'Edit Book' : 'Add a New Book'}</h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Book Title *</label>
                    <input
                      id="title"
                      name="title"
                      className="form-control"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      maxLength={100}
                      placeholder="Enter book title"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="author" className="form-label">Author *</label>
                    <input
                      id="author"
                      name="author"
                      className="form-control"
                      value={formData.author}
                      onChange={handleInputChange}
                      required
                      maxLength={100}
                      placeholder="Enter author name"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="price" className="form-label">Price (₹) *</label>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      min="0"
                      step="0.01"
                      className="form-control"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter price"
                    />
                  </div>

                  <div className="col-md-8">
                    <label htmlFor="category" className="form-label">Category *</label>
                    <input
                      id="category"
                      name="category"
                      className="form-control"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      maxLength={60}
                      placeholder="e.g. Fiction, Biography, Self-Help"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="description" className="form-label">
                      Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-control"
                      rows="3"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      placeholder="Write a short description"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="cover" className="form-label">
                      Book Cover Image URL
                    </label>
                    <input
                      id="cover"
                      name="cover"
                      type="url"
                      className="form-control"
                      value={formData.cover}
                      onChange={handleInputChange}
                      placeholder="https://example.com/book-cover.jpg"
                    />
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        id="available"
                        name="available"
                        type="checkbox"
                        className="form-check-input"
                        checked={formData.available}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="available">
                        Available in stock
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-actions mt-4">
                  <button type="submit" className="btn add-book-button">
                    {editingId !== null ? 'Save Changes' : 'Add Book'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setShowForm(false);
                      setEditingId(null);
                      setFormData(emptyBook);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </section>
          )}

          <div className="book-toolbar">
            <div className="search-box">
              <FaSearch />
              <input
                type="search"
                aria-label="Search books by title or author"
                placeholder="Search by title or author..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <select
              className="form-select category-select"
              aria-label="Filter by category"
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="collection-summary">
            <span>{filteredBooks.length} book(s) found</span>
          </div>

          {loading && <p className="py-4">Loading books...</p>}

          {!loading && !error && filteredBooks.length === 0 && (
            <div className="empty-state">
              <FaBookOpen />
              <h3>No books found</h3>
              <p>Try another search or add a new book to your collection.</p>
            </div>
          )}

          <div className="row g-4">
            {!loading && filteredBooks.map((book) => (
              <div className="col-12 col-sm-6 col-lg-3" key={book.id}>
                <article className="book-card h-100">
                  <img
                    className="book-cover"
                    src={
                      book.cover ||
                      'https://placehold.co/300x420/e8ebdf/344e3b?text=Book+Cover'
                    }
                    alt={`Cover of ${book.title}`}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        'https://placehold.co/300x420/e8ebdf/344e3b?text=Book+Cover';
                    }}
                  />

                  <div className="book-card-body">
                    <span className="book-category">{book.category}</span>
                    <h3>{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-description">{book.description}</p>

                    <div className="book-card-bottom">
                      <strong>₹{Number(book.price).toFixed(2)}</strong>
                      <span
                        className={`availability ${
                          book.available ? 'available' : 'unavailable'
                        }`}
                      >
                        {book.available ? 'Available' : 'Out of stock'}
                      </span>
                    </div>

                    <div className="book-actions">
                      <button
                        className="btn edit-button"
                        onClick={() => openEditForm(book)}
                        aria-label={`Edit ${book.title}`}
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="btn delete-button"
                        onClick={() => handleDelete(book.id, book.title)}
                        aria-label={`Delete ${book.title}`}
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bookstore-footer">
        <div className="container">
          <p>Book Haven · Every book opens a new world.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
