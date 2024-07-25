import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import Aside from "./Aside";
import AsideL from "./AsideL";
import Post from "./Post";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className="container">
      <div className="flex  flex-row h-64 justify-center w-full">
      <NavBar />
      <Aside />
      <Post />
      <AsideL />
      </div>
    </div>
    </>
  );
}
