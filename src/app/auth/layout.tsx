"use client";

import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Seja bem vindo </h1>

      <button onClick={() => setCount(count + 1)}>Contador {count}</button>
      {children}
    </div>
  );
}
