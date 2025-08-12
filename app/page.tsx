// app/page.tsx
"use client";

import { useState } from "react";
import BakerySlider from "./components/Home/BakerySlider";
import CustomerReviews from "./components/Home/CustomerReviews";
import SimilarRestaurants from "./components/Home/SimilarRestaurants";
import MapWithInfoBox from "./components/Home/MapWithInfoBox";
import StoreInfoSection from "./components/Home/StoreInfoSection";
import ColdDrinkList from "./components/Home/ColdDrinkList";
import FriesSection from "./components/Home/FryItem";
import BurgerList from "./components/Home/BurgerList";
import OffersSection from "./components/Home/OffersSection";
import { offers, coldrink } from "@/data/menuData";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Offers");

  return (
    <>
      <BakerySlider />
      <OffersSection />
      <BurgerList />
      <FriesSection />
      <ColdDrinkList/>
      <div className="flex flex-col gap-8 p-6 bg-gray-100">
        <StoreInfoSection />
        <MapWithInfoBox />
      </div>
      <div className="py-8 bg-gray-100">
        <CustomerReviews />
        <SimilarRestaurants />
      </div>
    </>
  );
}
