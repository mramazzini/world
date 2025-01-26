import FeatureList from '@/components/UI/Features/FeatureList';
import { FeatureGroupInfo } from '@/lib/types/modelInfo';
import NewLineParse from '@/Utility/NewLineParse';

interface FeatureGroupProps {
  featureGroup: FeatureGroupInfo;
}

const FeatureGroupPage = ({ featureGroup }: FeatureGroupProps) => {
  return (
    <main className="md:p-4 p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>{featureGroup.name}</h1>
          <p className="italic pr-4">
            <NewLineParse>{featureGroup.description}</NewLineParse>
          </p>
        </div>
        {/* <div className="flex justify-start items-start md:items-end my-2 flex-col ">
          <Link
            className={'btn btn-ghost border border-gray-500 w-full'}
            href={`/feature-group`}
          >
            View all Species -&gt;
          </Link>
        </div> */}
      </div>
      <div className="divider"></div>
      <FeatureList features={featureGroup.FeaturesInGroup} />
      <div className="divider"></div>
    </main>
  );
};

export default FeatureGroupPage;
