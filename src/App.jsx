import { useEffect, useState } from 'react'
import './App.css'
import * as br from "bahtrext"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [score, setScore] = useState(0)
  const [qa, setQA] = useState({q:``,a:``})
  const [inputAns, setInputAns] = useState('')
  useEffect(() => {
    const randomNumber1 = Math.floor(Math.random() * 10000000).toString().split("");
    const randomNumber2 = randomNumber1.map(i => {
      return Math.random() > 0.5 ? i : `0`
    }).join("");
    const randomNumber = parseInt(randomNumber2);
    setQA({
      q: br.OB(randomNumber).txt,
      a: br.OB(randomNumber).val,
    })
  }, [score])
  
  return (
    <>
      <h1>BahtGame v1.0.0</h1>
      <h3>Score: {score}</h3>
      <div className="">
        <h2>{qa.q}</h2>
      </div>
      <div className="">
        <label htmlFor="ans">Answer</label>
        <input
          type="text"
          value={inputAns}
          onInput={(e) => {
            e.preventDefault();
            setInputAns(e.currentTarget.value);
          }}
        />
      </div>
      <div className="">
        <button type="submit" 
        style={{marginTop: `10px`, outline: `1px solid black`}}
        onClick={(e) => {
          e.preventDefault()
          if (br.OB(inputAns).txt == qa.q) {
            // alert(`true`)
            toast.success("Wow so easy!");
            setScore((s) => s + 1);
          } else {
            toast.error("Incorrect, Try Again!");
            // setScore((s) => s - 1);
            // alert(`false`)
          }
          setInputAns(``);
        }}>Submit</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App
