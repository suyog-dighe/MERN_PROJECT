
import './App.css'

function App() {
  // const [color,setColor] = useState("")
  const red = () => {
    document.body.style.backgroundColor = "red";
  }
  const yellow = () => {
    document.body.style.backgroundColor = "yellow";
  };
  const blue = () => {
    document.body.style.backgroundColor = "blue";
  }
  const pink = () => {
    document.body.style.backgroundColor = "pink";
  }
  const orange = () => {
    document.body.style.backgroundColor = "orange";
  }
  const white = () => {
    document.body.style.backgroundColor = "white";
  }
  const black = () => {
    document.body.style.backgroundColor = "black";
  }

  return (
    <>
      <h2 className="bg-yellow-300">Good Morning Suyog Ji...</h2>
      <div className="bg-violet-500 p-2 mt-2 rounded-lg w-150 mx-auto">
        <button
          onClick={red}
          className="p-2 bg-red-500 text-white rounded-lg mt-3 mr-2 hover:bg-red-300 cursor-pointer"
        >
          Red
        </button>
        <button
          onClick={yellow}
          className="p-2 bg-yellow-500 text-white rounded-lg mt-3 mr-2 hover:bg-yellow-300 cursor-pointer"
        >
          yellow
        </button>
        <button
          onClick={blue}
          className="p-2 bg-blue-500 text-white rounded-lg mt-3 mr-2 hover:bg-blue-300 cursor-pointer"
        >
          blue
        </button>
        <button
          onClick={pink}
          className="p-2 bg-pink-500 text-white rounded-lg mt-3 mr-2 hover:bg-pink-300 cursor-pointer"
        >
          pink
        </button>
        <button
          onClick={orange}
          className="p-2 bg-orange-500 text-white rounded-lg mt-3 mr-2 hover:bg-orange-300 cursor-pointer"
        >
          orange
        </button>
        <button
          onClick={white}
          className="p-2 bg-white-100 text-black rounded-lg mt-3 mr-2 border-2 hover:bg-red-300 cursor-pointer"
        >
          white
        </button>
        <button
          onClick={black}
          className="p-2 bg-black text-white rounded-lg mt-3 mr-2 hover:bg-yellow-300 cursor-pointer"
        >
          black
        </button>
      </div>
    </>
  );
}

export default App
