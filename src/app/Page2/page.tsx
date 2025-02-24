"use client";
import Menu from "../Navegar/menu";
import { useState } from "react";

export default function P1() {
    const [color, setColor] = useState("bg-gray-500");

    return (
        <div>
            <Menu />
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
                <div className={`w-64 h-40 ${color} rounded-lg shadow-lg`} />

                
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <button onClick={() => setColor("bg-red-500")} className="bg-red-500 text-white px-6 py-2 rounded shadow w-32">Rojo</button>
                    <button onClick={() => setColor("bg-blue-500")} className="bg-blue-500 text-white px-6 py-2 rounded shadow w-32">Azul</button>
                    <button onClick={() => setColor("bg-green-500")} className="bg-green-500 text-white px-6 py-2 rounded shadow w-32">Verde</button>
                    <button onClick={() => setColor("bg-yellow-500")} className="bg-yellow-500 text-black px-6 py-2 rounded shadow w-32">Amarillo</button>
                </div>
            </div>
        </div>
    );
}
