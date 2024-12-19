import { Metadata } from "next";

interface IMakeProps {
  params: {
    makeId: string;
  };
}

export async function generateMetadata({
  params,
}: IMakeProps): Promise<Metadata> {
  return {
    title: `Veiculos da marca | ${params.makeId}`,
  };
}

export default async function Make({ params }: IMakeProps) {
  return (
    <div>
      <h1 className="text-xl mb-10">Makes</h1>

      <p>Todos os veiculos de: {params.makeId}</p>
    </div>
  );
}
