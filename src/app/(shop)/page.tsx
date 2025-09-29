import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <main className="">
      <h1>HOLA MUNDO</h1>
      <h1 className={`${titleFont.className}`}>Hola Mundo</h1>
    </main>
  );
}
