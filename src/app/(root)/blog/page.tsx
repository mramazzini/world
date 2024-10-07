"use client";
import BlogsPage from "@/app/components/pages/blog/Blogs.page";
import HomePage from "@/app/components/pages/home/Home";
import Loading from "@/app/components/UI/Loading";
// import { Metadata } from "next";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { useEffect } from "react";
// if (process.env.DOMAIN_NAME === undefined) {
//   throw new Error("DOMAIN_NAME is not defined");
// }
// export const metadata: Metadata = {
//   title: "Max's DND Blog",
//   description: "Read about the latest updates and news from Max's DND Wiki.",
//   metadataBase: new URL(process.env.DOMAIN_NAME),
//   openGraph: {
//     type: "website",

//     title: "Max's DND Blog",
//     description: "Read about the latest updates and news from Max's DND Wiki.",
//     images: [
//       {
//         url: "https://www.maxdnd.com/images/hero.jpg",
//         width: 1440,
//         height: 1920,
//         alt: "Dungeons and Dragons Fire Dragon Attack",
//       },
//     ],
//   },
// };
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page
    router.push("/");
  }, [router]);
  return <Loading />;
}
