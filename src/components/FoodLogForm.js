import React, { useState } from "react";
import axios from "axios";

const FoodLogForm = ({ addEntry }) => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (foodName && quantity && calories && date) {
      const newEntry = { foodName, quantity, calories: Number(calories), date };

      try {
        // Save data to the backend
        await axios.post("http://localhost:5000/api/entries", newEntry);
        alert("Entry saved to the database!");

        // Update local state
        addEntry(newEntry);

        // Reset form
        setFoodName("");
        setQuantity("");
        setCalories("");
        setDate("");
      } catch (error) {
        alert("Error saving entry: " + error.message);
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-12 col-md-10 col-lg-10 mx-auto">
            <div className="p-4 border rounded shadow bg-light">
              <h3 className="text-center mb-4">Food Entry Form</h3>

              {/* Food Name */}
              <div className="mb-3">
                <label htmlFor="foodName" className="form-label">
                  Food Name:
                </label>
                <input
                  id="foodName"
                  type="text"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              {/* Quantity */}
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity:
                </label>
                <input
                  id="quantity"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              {/* Calories */}
              <div className="mb-3">
                <label htmlFor="calories" className="form-label">
                  Calories:
                </label>
                <input
                  id="calories"
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              {/* Date */}
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date:
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              {/* Centered Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-50 mt-3">
                  Add Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FoodLogForm;
