import Image from "next/image";
import Hello from "./components/Hello"

export default function Home() {
  console.log("hello server")
  return (
    <>
      <h1 className="text-3xl">Hello World</h1>
      <Hello/>
    </>
  );
}
