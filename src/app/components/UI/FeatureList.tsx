import Feature from "./Feature";

interface Props {
  features: PrismaJson.Feature[];
}
const FeatureList = ({ features }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-1">
      {features.map((feature, index) => (
        <Feature key={index} feature={feature} />
      ))}
    </div>
  );
};

export default FeatureList;
