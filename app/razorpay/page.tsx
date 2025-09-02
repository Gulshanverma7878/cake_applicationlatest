'use client';
import { useState } from "react";

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  amount: number; // paise me amount
}

const courses: Course[] = [
  { id: 1, title: "React Basics", description: "Learn React from scratch", amount: 10000 },
  { id: 2, title: "Next.js Mastery", description: "Master Next.js framework", amount: 15000 },
  { id: 3, title: "Node.js API", description: "Build APIs using Node.js", amount: 12000 },
  { id: 4, title: "TypeScript Guide", description: "Learn TS for large apps", amount: 13000 },
  { id: 5, title: "Fullstack Bootcamp", description: "Frontend + Backend complete", amount: 20000 },
  { id: 6, title: "DevOps Essentials", description: "Learn CI/CD & cloud basics", amount: 11000 },
];

 const backendUrl = "http://192.168.1.35:3000";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  async function createOrder(amount: number) {
    try {
      const res = await fetch(`${backendUrl}/api/payment/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const order = await res.json();
      console.log(order);
    //   return;
      openRazorpayCheckout(order);
    } catch (err: any) {
      setMessage("Error creating order: " + err.message);
    }
  }

  function openRazorpayCheckout(order: any) {


    const options = {
      key: "rzp_test_O9T3hBOfhlLkqv", // Razorpay Key ID
      amount: order.amount,
      currency: order.currency,
      name: "Your Business Name",
      description: "Course Payment",
      order_id: order.id,
      handler: async (response: RazorpayResponse) => {
        try {
          const verifyRes = await fetch("http://localhost:3000/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const data = await verifyRes.json();
          if (data.success) {
            setMessage("Payment verified successfully! Payment ID: " + response.razorpay_payment_id);
          } else {
            setMessage("Payment verification failed!");
          }
        } catch (error: any) {
          setMessage("Error verifying payment: " + error.message);
        }
      },
      prefill: {
        name: "Ashoka yadav",
        email: "yashoka51@gmail.com",
        contact: "9876514254",
      },
      theme: {
        color: "#3399cc",
      },
      method: {
      upi: true,
      card: false,
      netbanking: false,
      wallet: false,
    },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
        Available Courses
      </h1> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#222", marginBottom: "0.5rem" }}>{course.title}</h2>
            <p style={{ color: "#555", marginBottom: "1rem" }}>{course.description}</p>
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.25rem",
                marginBottom: "1rem",
                color: "#3399cc",
              }}
            >
              ₹{(course.amount / 100).toFixed(2)}
            </p>
            <button
              onClick={() => createOrder(course.amount)}
              style={{
                backgroundColor: "#3399cc",
                color: "#fff",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#287abf")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3399cc")}
            >
              Pay Now
            </button>
          </div>
        ))}
      </div>

      {message && (
        <p
          style={{
            marginTop: "2rem",
            textAlign: "center",
            color: message.includes("successfully") ? "green" : "red",
            fontWeight: "600",
            fontSize: "1.1rem",
          }}
        >
          {message}
        </p>
      )}

      {/* Razorpay checkout script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  );
}
