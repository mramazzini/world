import HomebrewClassSearchPage from "@/app/components/SearchPages/Homebrew/H-ClassSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getClasses } from "@/lib/actions/db/class/read.actions";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Class Homebrew - Max's DND Wiki",
  description: "User submitted homebrew classes for your DND campaign.",
};

const Page = async () => {
  const classes = await getClasses(true);
  return (
    <Suspense fallback={<Loading />}>
      <HomebrewClassSearchPage classes={classes} />
    </Suspense>
  );
};

export default Page;
