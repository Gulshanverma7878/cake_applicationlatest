'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from 'next/navigation'

import { useRouter } from 'next/navigation';

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

const API_BASE = "https://backend.fillerbay.shop";

export default function CakeDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    quantity: 1,
    product_id: '',
    price: ''
  });
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();
  const productId = params.id as string;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/product/id/${productId}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const data = await res.json();
        if (data.length > 0) {
          const productData = data[0];
          setProduct(productData);
          // Set first available image
          const firstImage = [productData.image1, productData.image2, productData.image3, productData.image4]
            .find(img => img !== null);
          if (firstImage) {
            setSelectedImage(`${API_BASE}/${firstImage.replace(/^\/+/, '')}`);
          }
          // Initialize form data with product info
          setFormData(prev => ({
            ...prev,
            product_id: productData.id,
            price: productData.price
          }));
        } else {
          setError("No product found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'mobile' 
        ? value.replace(/\D/g, '').slice(0, 10) 
        : name === 'quantity'
          ? Math.max(1, Math.min(10, Number(value) || 1))
          : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    
    // Validation
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setMessage("Please enter a valid 10-digit mobile number");
      setIsSubmitting(false);
      return;
    }

    if (!formData.name.trim()) {
      setMessage("Please enter your name");
      setIsSubmitting(false);
      return;
    }

    if (!formData.address.trim()) {
      setMessage("Please enter your address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          address: formData.address,
          quantity: formData.quantity,
          product_id: formData.product_id,
          price: formData.price
        }),
      });

      if (response.ok) {
        setMessage("✅ Order placed successfully!");
        
        setTimeout(() => {
          setShowForm(false);
          setFormData(prev => ({
            ...prev,
            name: '',
            mobile: '',
            address: '',
            quantity: 1
          }));
          setMessage("");
           router.push("/"); // Home page pe redirect karega
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to place order");
      }
    } catch (err) {
      console.error("Order submission error:", err);
      setMessage("❌ Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  //this one is ashoka 
  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-6">No product found</p>;

  // Collect all available images
  const images = [product.image1, product.image2, product.image3, product.image4]
    .filter((img): img is string => img !== null)
    .map((img) => `${API_BASE}/${img.replace(/^\/+/, '')}`);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Main Image */}
        <div className="md:w-1/2">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
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
        </div>

        {/* Right Side - Product Info */}
        <div className="md:w-1/2">
          <p className="text-2xl font-semibold text-center md:text-left">
            Price: ₹{product.price}
          </p>
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">More Images</h3>
              <div className="grid grid-cols-3 gap-3">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className={`relative aspect-square cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === src ? 'border-blue-500' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`${product.name} - ${i + 1}`}
                      fill
                      className="object-cover hover:opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Order Button */}
          <div className="flex justify-center md:justify-start mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="10-digit number"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Quantity (Max 10)</label>
                <input
                  type="number"
                  name="quantity"
                  min={1}
                  max={10}
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              {message && (
                <p className={`text-sm text-center ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}>
                  {message}
                </p>
              )}

              <div className="flex justify-between pt-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setMessage("");
                  }}
                  className="px-6 py-2 text-gray-600 hover:text-black transition-colors"
                  disabled={isSubmitting}
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