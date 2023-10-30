// CategoryList.js
import React from 'react';

function CategoryList({ categories, onSelect }) {
    return (
        <ul className="category-list">
            {categories.map((category) => (
                <li key={category.id} onClick={() => onSelect(category.id)}>
                    {category.name}
                </li>
            ))}
        </ul>
    );
}

export default CategoryList;

