"use client";
import Menu from "./Navegar/menu";
import { useState, useEffect  } from "react";


export default function Home() {
  const [counter,setCounter] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e:React.FormEvent) => {e.preventDefault();
      setCounter(counter+1)
  }

  const handleSubmit_substract = (e:React.FormEvent) => {e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setErrorMessage("No puedes bajar de 0");
    }
  }

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <div>
      <main>
        <Menu/>

        <div className="flex flex-col items-center mt-10">
          
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-4xl font-bold text-gray-400">Clicker:</h1>
            <h1 className="text-4xl font-bold text-gray-400">{counter}</h1>
          </div>


          <div className="flex gap-4">
            <form onSubmit={handleSubmit} className="border border-gray-500 max-w-md w-full">
              <button type="submit" className="bg-blue-500 text-white px-20 py-2 rounded cursor-pointer">Augment</button>
            </form>

            <form onSubmit={handleSubmit_substract} className="border border-gray-500 max-w-md w-full">
              <button type="submit" className="bg-red-500 text-white px-20 py-2 rounded cursor-pointer">Decrease</button>
            </form>
          </div>
        </div>
        
        {errorMessage && (
          <div className="fixed bottom-5 left-5 bg-red-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
            {errorMessage}
          </div>
        )}

      </main>
    </div>
  );
}
