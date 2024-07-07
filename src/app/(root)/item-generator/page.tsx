import ItemGeneratorForm from "@/app/components/ItemGenerator/ItemGeneratorForm";

const page = () => {
  return (
    <div className="p-4">
      <h1>Magic Item Generator</h1>
      <p>
        Generate Magic Items for your D&amp;D campaign. Select the type of item
        you want to generate and the rarity of the item.
      </p>
      <ItemGeneratorForm />
    </div>
  );
};

export default page;
