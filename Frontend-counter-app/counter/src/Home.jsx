import { useState } from "react";
import "./App.css";
import p1 from "./assets/p1.jpg";
import { useNavigate, Routes, Route } from "react-router-dom";
import Form from "./Form"; // Import Form component

function App() {
  const [counter, setCounter] = useState(9);
  const navigate = useNavigate();

  const addValue = () => {
    setCounter(counter + 1);
  };

  const remove = () => {
    setCounter(counter - 1);
  };

  const handleNavigate = () => {
    navigate("/form"); // Navigate to /form
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2 className="text-center p-3">Hello Dighe</h2>
              <h3 className="text-2xl font-bold text-center bg-yellow-400 p-1 rounded-xl">
                Counter Value: {counter}
              </h3>
              <img className="mx-auto p-2 max-w-sm w-80" src={p1} alt="photo" />

              <button
                onClick={addValue}
                className="p-3 mb-2 bg-white cursor-pointer hover:bg-pink-300 rounded-lg px-5 py-2"
              >
                Increase Value
              </button>
              <br />

              <button
                className="p-3 mb-2 bg-white cursor-pointer hover:bg-yellow-300 rounded-lg px-5 py-2"
                onClick={remove}
              >
                Decrease Value
              </button>
              <br />

              <button
                className="rounded-lg px-5 py-2 cursor-pointer hover:bg-red-400 bg-white"
                onClick={handleNavigate}
              >
                Go to Form page
              </button>
            </div>
          }
        />
        <Route path="/form" element={<Form />} />{" "}
        {/* Route for the Form page */}
      </Routes>
    </>
  );
}

export default App;
