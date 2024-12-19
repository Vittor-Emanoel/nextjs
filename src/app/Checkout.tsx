"use client";

import { JSX } from "react";

export function Checkout({ list }: { list: JSX.Element }) {
  return (
    <div className="border border-red-500">
      {list}
      <button onClick={() => alert("oi")}>Clique aqui</button>;
    </div>
  );
}
