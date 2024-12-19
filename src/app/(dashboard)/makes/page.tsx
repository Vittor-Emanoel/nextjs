import { Metadata } from "next";
import Link from "next/link";

async function getMakes() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return ["HONDA", "BWM", "MASERATI", "AUDI"];
}

export const metadata: Metadata = {
  title: "vCar | todos",
};

export default async function Makes() {
  const makes = await getMakes();

  return (
    <div>
      <h1 className="text-xl mb-10">Makes</h1>
      <div className="grid grid-cols-4 gap-4">
        {makes.map((make) => (
          <Link href={`/makes/${make}`} key={make}>
            <div className="bg-zinc-900 rounded-lg border-zinc-700 border grid place-items-center h-56">
              {make}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
