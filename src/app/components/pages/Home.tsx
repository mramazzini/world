import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="p-4 flex flex-col bg-base-100 ">
      <div className="flex flex-row justify-center">
        <div className=" w-1/2 flex flex-col items-start justify-center p-24 bg-base-200 rounded-l-xl">
          <h1 className="text-7xl font-bold text-center">
            Max&apos;s DnD Wiki
          </h1>
          <p className="text-center text-2xl">
            A wiki for all things Dungeons and Dragons
          </p>
          <div className="divider"></div>
          <p className="text-left text-xl">
            View all the classes, subclasses, spells, and more from Dungeons and
            Dragons 5th Edition, or login to add your own homebrew content!
          </p>
          <div className="divider"></div>
          <div className="btns flex flex-row  ">
            <Link href={"/class"} className="btn btn-primary  mr-2 my-2">
              View Classes
            </Link>
            <Link href={"/spells"} className="btn btn-primary mx-2 my-2">
              View Spells
            </Link>
            <Link href={"/login"} className="btn btn-primary mx-2 my-2">
              Login
            </Link>
          </div>
        </div>
        <Image
          src="/images/hero.jpg"
          alt={"Dragon fighter adventurers"}
          className="rounded-r-lg max-h-[90vh] w-1/2 object-cover"
          width={900}
          height={100}
        />
      </div>
    </div>
  );
};

export default HomePage;
