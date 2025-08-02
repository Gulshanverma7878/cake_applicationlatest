"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const CakeDetailPage = () => {
  const searchParams = useSearchParams();
  const name = decodeURIComponent(searchParams.get("name") || "");
  const price = searchParams.get("price");
  const rating = searchParams.get("rating");
  const reviews = searchParams.get("reviews");
  const tag = searchParams.get("tag");

  const [showForm, setShowForm] = useState(false);
  const [mobile, setMobile] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleOrderClick = () => setShowForm(true);

  const handleClose = () => {
    setShowForm(false);
    setMessage("");
  };

  const handleSubmit = async () => {
    if (!mobile || quantity < 1) {
      alert("Please enter valid mobile and quantity.");
      return;
    }

    const url = `https://chat.kashishindiapvtltd.com/send-message?sender=918529670548&number=${mobile}&message=your order ${quantity} ${name} cake(s) for ${price} each.&api_key=gby8vpJ3fvdMIIHvcahaQcZ0t7ktlA`;

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
      });

      if (response.ok) {
        setMessage("✅ Order placed successfully!");
        setMobile("");
        setQuantity(1);
        setShowForm(false); // ✅ Close popup on success
      } else {
        setMessage("❌ Failed to place order. Try again!");
        setShowForm(false); // ✅ Close popup on failure
      }
    } catch (error) {
      setMessage("❌ Error occurred. Check your connection.");
      setShowForm(false); // ✅ Close popup on network error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 relative">
      <h1 className="text-2xl font-bold mb-4 text-center">{name}</h1>
      <div className="flex justify-center">
        <Image
          src="/cake/cake.webp"
          alt={name}
          width={300}
          height={200}
          className="rounded-xl shadow-md"
        />
      </div>

      <p className="text-lg font-semibold mt-4 text-center">Price: ₹{price}</p>
      <p className="text-green-600 mt-1 text-center">
        Rating: {rating} ⭐ ({reviews} reviews)
      </p>
      {tag && (
        <div className="text-center mt-2">
          <span className="text-sm bg-yellow-300 text-black px-3 py-1 rounded inline-block">
            {tag}
          </span>
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={handleOrderClick}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Order Now
        </button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-2xl relative border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>

            <label className="block mb-2">
              Mobile Number:
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter 10-digit mobile number"
              />
            </label>

            <label className="block mb-4">
              Quantity:
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </label>

            {message && (
              <p className="text-sm mb-2 text-center text-green-600">
                {message}
              </p>
            )}

            <div className="flex justify-between items-center">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              <button
                onClick={handleClose}
                className="text-gray-600 px-4 py-2 hover:text-black"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CakeDetailPage;
