import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';
import './CategoryMain.css';
import axios from 'axios';

const API_URL = 'http://192.168.10.8:5000/api/learning-path/categories';

const CategoryMain = () => {
  const [categories, setCategories] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddCategory = async (category) => {
    try {
      const response = await axios.post(API_URL, category);
      setCategories([...categories, response.data]);
      setFormVisible(false);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="category-main">
      <button className="add-button" onClick={() => setFormVisible(!isFormVisible)}>
        Add Category
      </button>
      {isFormVisible && <CategoryForm onAddCategory={handleAddCategory} />}
      <CategoryList categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default CategoryMain;
