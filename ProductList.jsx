import React, { useState } from "react";
import { Card, CardContent } from "./Card";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Input } from "./Input";
import { handleImageUpload } from "./helpers";
import { ShoppingCart, User, Home } from "lucide-react";
function ProductList() {
    
    const [products, setProducts] = useState([
      { id: 1, name: "Laptop", price: 1000, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Smartphone", price: 500, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Headphones", price: 200, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Smartwatch", price: 150, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Tablet", price: 300, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Gaming Console", price: 400, image: "https://via.placeholder.com/150" },
      { id: 7, name: "Monitor", price: 250, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Keyboard", price: 50, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Mouse", price: 30, image: "https://via.placeholder.com/150" },
      ]);
    
      const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", image: "" });
      const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

    
    return(
        <>
        
        <div className="txt-username">
        <h2 ClassName="txt-head">🛒 Product Advertisements</h2>
                <div className="txt-icons">
                  <ShoppingCart className="cursor-pointer" />
                  <User className="cursor-pointer" />
                </div>
         </div>
        <div className="product-form">
        <Input placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <Input placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
        <Input placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setNewProduct, newProduct)} className="mt-2" />
        <Button onClick={() => setProducts([...products, { ...newProduct, id: products.length + 1 }])} className="mt-2">Add Product</Button>
      </div>
      <div className="grid gap-6">
        {products.map((product) => (
          <motion.div key={product.id} whileHover={{ scale: 1.05 }}>
            <Card className="product-card">
              <CardContent>
                {product.image && <img src={product.image} alt={product.name} className="product-image" />}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <Button className="mt-2" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 p-4 border-t">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <ul className="mt-2">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between border-b py-2">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          )}
          <Button className="mt-4 bg-green-500">Checkout</Button>
        </div>
        </>
    );

}

export default ProductList