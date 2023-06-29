import "./App.css";
import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import Card from "./components/card";
import Questsbar from "./components/questsbar";
import MultiSelectBar from "./components/multiSelectBar";

function App() {
  const [showMore, setShowMore] = useState(false);
  const initialCardCount = 6;

  const [data, setData] = useState(null);
  const LoadingSpinner = () => (
    <div className="loading-spinner">
      <span>Loading...</span>
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev-api.wall.app/api/v1/core/campaigns/"
        );
        setData(response.data); // Handle the response data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  //console.log(name);
  return (
    <div style={{ backgroundColor: "black" }}>
      <Questsbar />
      <MultiSelectBar />
      <br />
      {/* <div className="card-container">
        {data.results.map((element) => (
          <Card key={element.id} name={element.name} />
        ))}
      </div> */}
      <div className="card-container">
        {data.results.slice(0, initialCardCount).map((element) => (
          <Card key={element.id} name={element.name} />
        ))}
      </div>
      {!showMore && data.results.length > initialCardCount && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <button className="view-button" onClick={() => setShowMore(true)}>
            View More
          </button>
        </div>
      )}

      {showMore && (
        <Suspense fallback={<LoadingSpinner />}>
          <div className="card-container">
            {data.results.slice(initialCardCount).map((element) => (
              <Card key={element.id} name={element.name} />
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
}

export default App;
