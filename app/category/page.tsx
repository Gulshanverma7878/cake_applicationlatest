'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  // Other fields from your API
}

const API_BASE = "https://216r2ntv-3016.inc1.devtunnels.ms/";

const Category = ({ id }: { id: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${API_BASE}api/product/category_id/${id}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        
        // Set the first available image as selected by default
        if (data.length > 0) {
          const firstProduct = data[0];
          const firstImage = [firstProduct.image1, firstProduct.image2, firstProduct.image3, firstProduct.image4]
            .find(img => img !== null);
          
          if (firstImage) {
            setSelectedImage(`${API_BASE}${firstImage}`);
          }
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (products.length === 0) return <div className="text-center py-8">No products found</div>;

  const getProductImages = (product: Product) => {
    return [product.image1, product.image2, product.image3, product.image4]
      .filter((img): img is string => img !== null)
      .map(img => `${API_BASE}${img}`);
  };

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleThumbnailHover = (image: string | null) => {
    setHoveredImage(image);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {products.map(product => (
        <div key={product.id} className="flex flex-col md:flex-row gap-8">
          {/* Left side - Main Image */}
          <div className="md:w-2/3">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No image available
                </div>
              )}
            </div>
            
            <div className="mt-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary mt-2">
                ₹{parseFloat(product.price).toFixed(2)}
              </p>
              <p className="text-gray-600 mt-4">{product.description}</p>
            </div>
          </div>
          
          {/* Right side - Thumbnails */}
          <div className="md:w-1/3">
            <div className="grid grid-cols-3 gap-2">
              {getProductImages(product).map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === image ? 'border-primary' : 'border-transparent'
                  } ${
                    hoveredImage === image ? 'opacity-100 scale-105' : 'opacity-90'
                  }`}
                  onClick={() => handleThumbnailClick(image)}
                  onMouseEnter={() => handleThumbnailHover(image)}
                  onMouseLeave={() => handleThumbnailHover(null)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;