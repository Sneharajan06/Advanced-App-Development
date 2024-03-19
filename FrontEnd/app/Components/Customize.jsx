// Customize.jsx
import React, { useState } from 'react';
import './Customize.css';

const Customize = () => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedDesign, setSelectedDesign] = useState('');
    const [customText, setCustomText] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedFont, setSelectedFont] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Logic to add customized product to cart
    };

    return (
        <div className="customize-container">
            <h2>Customize Your Gift</h2>
            <div className="customize-form">
                <div className="form-group">
                    <label>Select Product:</label>
                    <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                        <option value="">Select</option>
                        {/* Add product options here */}
                    </select>
                </div>
                <div className="form-group">
                    <label>Select Design:</label>
                    <select value={selectedDesign} onChange={(e) => setSelectedDesign(e.target.value)}>
                        <option value="">Select</option>
                        {/* Add design options here */}
                    </select>
                </div>
                <div className="form-group">
                    <label>Custom Text:</label>
                    <input type="text" value={customText} onChange={(e) => setCustomText(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Select Color:</label>
                    <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Select Font:</label>
                    <select value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
                        <option value="">Select</option>
                        {/* Add font options here */}
                    </select>
                </div>
                <div className="form-group">
                    <label>Quantity:</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <button className="btn-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Customize;