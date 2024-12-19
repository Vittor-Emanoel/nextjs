import Link from "next/link";

export default function Signin() {
  return (
    <div>
      Signin
      <Link href="/auth/signup">Ir para o Signup</Link>
    </div>
  );
}
