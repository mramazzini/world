import HomePage from "@/app/components/pages/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Max's DND Wiki",
  description: "A collection of DND resources",
};

export default function Home() {
  return <HomePage />;
}
