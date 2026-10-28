
import axios from 'axios';

const API_URL = 'http://localhost:3001/books';

// Get all books
export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new book
export const addBook = async (book) => {
  const response = await axios.post(API_URL, book);
  return response.data;
};

// Update an existing book
export const updateBook = async (id, book) => {
  const response = await axios.put(`${API_URL}/${id}`, book);
  return response.data;
};

// Delete a book
export const deleteBook = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
