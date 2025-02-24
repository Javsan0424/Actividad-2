"use client";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <img
        src="https://i.pinimg.com/originals/ee/83/7b/ee837b30f5cc5d0f4eafccbf0a29c16d.png"
        alt="Tec logo"
        width={100}
        className="text-left"
      />
      <table className="border-separate border-spacing-4 mx-auto">
        <thead>
          <tr>
            <th><Link href="/"> <span className="text-blue-500 hover:underline">Home</span></Link></th>
            <th><Link href="/Page2"> <span className="text-blue-500 hover:underline">Page 2</span></Link></th>
            

          </tr>
        </thead>
      </table>
    </div>
  );
}
