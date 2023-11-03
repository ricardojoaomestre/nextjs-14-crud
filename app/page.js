import Image from "next/image";
import hero from "../public/hero.png";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image src={hero} alt="explorer character" />
          <h1 className="text-5xl font-bold">Hello explorer!</h1>
          <p className="py-6">
            Welcome to my nextJS 14 playground. I created this space to play
            around with nextJS most recent features as well as connecting to
            database and perform crud actions.
          </p>
        </div>
      </div>
    </div>
  );
}
