import UpcomingChangesPage from "@/app/components/pages/UpcomingChangesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Changes - Max's Dnd Wiki",
  description: "A list of planned changes to the wiki",
};

export default function Page() {
  return <UpcomingChangesPage />;
}
