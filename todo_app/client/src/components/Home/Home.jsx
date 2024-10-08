import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToDoApp1 from "../Images/ToDoApp1.png";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const text = "To Do App"; // The full text to display
  const speed = 350; // Speed of typing (in milliseconds)
  const pauseDuration = 2500; // Pause before the cycle starts again

  useEffect(() => {
    let index = 0;
    let intervalId = null;

    // Function to handle text typing
    const typeText = () => {
      intervalId = setInterval(() => {
        if (index < text.length-1) {
          setDisplayedText((prev) => prev + text[index]); // Append characters one by one
          index++;
        } else {
          clearInterval(intervalId); // Stop typing when the full text is displayed
          setTimeout(() => {
            setDisplayedText(""); // Reset the displayed text after a pause
            index = -1; // Reset the index to start over
            typeText(); // Restart the typing cycle
          }, pauseDuration);
        }
      }, speed);
    };

    typeText(); // Start the typing effect

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array to run effect only once

  return (
    <div
      className="container mx-auto px-12 py-6 mt-4 mb-4"
      style={{
        backgroundImage: `url(${ToDoApp1})`,
        backgroundSize: "cover", // Cover the entire area
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling
      }}
    >
      <div className="shadow-lg mb-8 py-3 h-[20%]">
        <h3 className="text-2xl mt-4 py-3 text-center font-bold reflection">
          {displayedText}
        </h3>
      </div>

      {/* Other content */}
      <div className="shadow-lg mb-5 p-4 rounded-lg bg-white">
        <h4 className="py-4 text-gray-700">This App will help you to...</h4>
        <ul className="list-disc ml-8 space-y-2 text-gray-700">
          <li>Establish and act toward achieving goals</li>
          <li>Increased level of engagement</li>
          <li>Safe Place to Gain Perspective</li>
          <li>Deeper Level of Learning</li>
          <li>Build Personal Awareness</li>
          <li>Boost your networking opportunities</li>
        </ul>
      </div>

      <div className="shadow-lg mb-5 p-4 rounded-lg bg-white text-center mt-6">
        <h4>Please sign in to enjoy
          <Link
            to="login"
            className="font-bold text-blue-500 hover:text-blue-700 underline"
          >
            ...
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Home;
