"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
}

const API_BASE = "https://backend.fillerbay.shop/";

const Category = () => {
  const params = useParams();
  const id = params.subcategory as string;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://backend.fillerbay.shop/api/product/category_id/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
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
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (products.length === 0)
    return <div className="text-center py-8">No products found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const firstImage =
            product.image1 ||
            product.image2 ||
            product.image3 ||
            product.image4;

          return (
            <Link key={product.id} href={`/category/${id}/${product.id}`}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100">
                  {firstImage ? (
                    <Image
                      src={`${API_BASE}${firstImage}`}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      No image
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-primary font-bold mt-1">
                    ₹{parseFloat(product.price).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
