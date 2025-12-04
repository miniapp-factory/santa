"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Payment() {
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    // Placeholder for real payment logic
    console.log("Purchase initiated");
    setPurchased(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <Button onClick={handlePurchase} disabled={purchased}>
        {purchased ? "Purchased" : "Buy Hamster Sticker"}
      </Button>
      {purchased && (
        <p className="text-green-600">Thank you for your purchase!</p>
      )}
    </div>
  );
}
