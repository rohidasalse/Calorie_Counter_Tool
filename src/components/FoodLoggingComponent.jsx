import React, { useState } from "react";

const FoodLogForm = ({ addEntry }) => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodName && quantity && calories && date) {
      addEntry({ foodName, quantity, calories: Number(calories), date });
      setFoodName("");
      setQuantity("");
      setCalories("");
      setDate("");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Food Name:</label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="border p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label>Calories:</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="border p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Add Entry
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default FoodLogForm;
