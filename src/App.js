import React, { useEffect, useState } from "react";
import FoodLogForm from "./components/FoodLogForm";
import DailyTracker from "./components/DailyTracker";
import axios from "axios";

const App = () => {
  const [entries, setEntries] = useState([]);

  // Fetch existing entries from the database on load
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/entries");
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching entries: ", error);
      }
    };

    fetchEntries();
  }, []);

  const addEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Calorie Counter Tool</h1>
      <div className="row">
        {/* FoodLogForm */}
        <div className="col-12 col-md-6 mb-4">
          <FoodLogForm addEntry={addEntry} />
        </div>

        {/* DailyTracker */}
        <div className="col-12 col-md-6">
          <DailyTracker entries={entries} />
        </div>
      </div>
      <footer className="bg-dark text-light text-center py-3 mt-4">
        <div>
          © {new Date().getFullYear()} | Developed by{" "}
          <strong>Rohidas Alse</strong>
        </div>
      </footer>
    </div>
  );
};

export default App;
