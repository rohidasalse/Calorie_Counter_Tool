import React from "react";

const DailyTracker = ({ entries }) => {
  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);

  return (
    <div className="container border rounded shadow bg-light w-75">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 mt-3">Calorie Entries</h2>
        <div className="container-fluid w-75">
          <ul className="list-unstyled space-y-2">
            {entries.map((entry, index) => (
              <li
                key={index}
                className="border rounded border-black p-2 shadow rounded-md m-1 text-success"
              >
                {entry.foodName} | {entry.quantity} | {entry.calories} cal
              </li>
            ))}
          </ul>
        </div>
        {/* Total Calories in Red */}
        <div className="mt-4 font-bold mb-4 text-danger">
          Total Calories: {totalCalories} cal
        </div>
      </div>
    </div>
  );
};

export default DailyTracker;
