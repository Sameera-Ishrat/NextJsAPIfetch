import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="text-center mt-20">
      <h1 className="text-3xl text-bold">Home</h1>

      <Link href="/users">Go to users</Link>
     
    </main>
  );
}
