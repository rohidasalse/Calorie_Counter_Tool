import React, { useEffect, useState } from "react";

export default function OneWayBinding() {
  const [data, setData] = useState([]); // Store all fetched data
  const [visibleCount, setVisibleCount] = useState(10); // Initial number of visible items

  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch("data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json(); // Parse JSON data
      })
      .then((d) => {
        setData(d); // Store all data in state
      })
      .catch((error) => {
        console.error("Error fetching the data:", error); // Handle errors
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Show 10 more items
  };
  const handlePrevious = () => {
    if (visibleCount > 10) {
      setVisibleCount((prevCount) => prevCount - 10);
    } else {
      alert("alert");
    }
  };

  return (
    <div>
      <h1>One-Way Binding with Load More</h1>
      <ul>
        {data.slice(0, visibleCount).map((ele) => (
          <li key={ele.id}>{ele.name}</li> // Use a unique key for each item
        ))}
      </ul>
      {visibleCount < data.length && (
        <button onClick={handlePrevious}>Previous</button> // Show button if more items exist
      )}
      {visibleCount < data.length && (
        <button onClick={handleLoadMore}>Load More</button> // Show button if more items exist
      )}
    </div>
  );
}

// import React, { useEffect, useState } from "react";

// export default function OneWayBinding() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("data.json")
//       .then((responce) => {
//         return responce.json();
//       })
//       .then((d) => {
//         setData(d.slice(0, 30));
//       });
//   }, []);

//   return (
//     <div>
//       <h1>One-Way Binding Example</h1>
//       <ul>
//         {data.map((ele) => (
//           <li key={ele.id}>{ele.name}</li> // Add a unique key prop
//         ))}
//       </ul>
//     </div>
//   );
// }
