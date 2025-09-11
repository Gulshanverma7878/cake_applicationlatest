'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     if (query) {
//       // yaha API call ya local filter kar sakta hai
//       fetch(`/api/search?search=${query}`)
//         .then((res) => res.json())
//         .then((data) => setItems(data));
//     }
//   }, [query]);

let items=[{
    id:1,
    name:"asohka",
    price:22
}]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Results for: <span className="text-pink-500">{query}</span>
      </h1>

      {items.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="p-4 border rounded">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items found</p>
      )}
    </div>
  );
}
