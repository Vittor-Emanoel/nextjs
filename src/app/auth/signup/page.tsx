"use client";

import Link from "next/link";

export default function Signup() {
  return (
    <div>
      Signup
      <Link href="/auth/signin">Ir para o Signin</Link>
      <Link href="/vehicles" target="_blank">
        Ir para o Signin
      </Link>
    </div>
  );
}
