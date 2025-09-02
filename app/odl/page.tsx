"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image1: string | null;
  image2?: string | null;
  image3?: string | null;
  image4?: string | null;
}

const API_BASE = "https://backend.fillerbay.in/";

export default function CakeDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [mobile, setMobile] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${API_BASE}api/product/subcategory_id/d155b803-8113-4b7e-98d8-c58a88e9a45b`
        );
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        if (data.length > 0) {
          setProduct(data[0]);
        } else {
          setError("No products found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    const url = `https://chat.kashishindiapvtltd.com/send-message?sender=918529670548&number=91${mobile}&message=Your order ${quantity} ${product?.name} cake(s) for ₹${product?.price} each.&api_key=gby8vpJ3fvdMIIHvcahaQcZ0t7ktlA`;

    try {
      const res = await fetch(url, { method: "POST" });
      if (res.ok) {
        setMessage("✅ Order placed successfully!");
        setTimeout(() => {
          setShowForm(false);
          setMobile("");
          setQuantity(1);
          setMessage("");
        }, 2000);
      } else {
        setMessage("❌ Failed to place order! Please try again.");
      }
    } catch (err) {
      console.error("Order submission error:", err);
      setMessage("❌ Error placing order! Please try again later.");
    }
  };

  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-6">No product found</p>;

  // Collect all available images
  const images = [product.image1, product.image2, product.image3, product.image4]
    .filter((img): img is string => img !== null)
    .map((img) => `${API_BASE}${img.replace(/^\/+/, '')}`);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">{product.name}</h1>

      {/* Image Gallery */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {images.length > 0 ? (
          images.map((src, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={src}
                alt={`${product.name} - ${i + 1}`}
                width={300}
                height={200}
                className="rounded-lg shadow-md object-cover"
                priority={i === 0}
              />
            </div>
          ))
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg">
            <p>No images available</p>
          </div>
        )}
      </div>

      <p className="text-xl font-semibold mt-4 text-center">
        Price: ₹{product.price}
      </p>
      <p className="text-gray-700 mt-2 text-center">{product.description}</p>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Order Now
        </button>
      </div>

      {/* Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
            
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">
                Mobile Number:
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="10-digit mobile number"
                  required
                />
              </label>

              <label className="block mb-4">
                Quantity:
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  required
                />
              </label>

              {message && (
                <p className={`text-sm mb-2 text-center ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}>
                  {message}
                </p>
              )}

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setMessage("");
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-black transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}