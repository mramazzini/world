//test page for messing around
import P from "@/app/components/Utility/FormatAndSanitize";
const str = "strength\ndexterity";
const Page = () => {
  return (
    <div>
      <P>{str}</P>
    </div>
  );
};

export default Page;
