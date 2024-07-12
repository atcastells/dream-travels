import { useTravels } from "@/features/travels/hooks";
import Image from "next/image";

export default function Home() {
  const {travels, isLoading} = useTravels()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {travels?.map((travel) => (
        <div key={travel.id} className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">{travel.title}</h1>
          </div>

      ))}
    </main>
  );
}
