import CommentSection from '@/components/CommentSection/CommentSection';
import FeatureList from '@/components/UI/Features/FeatureList';
import Info from '@/components/UI/Info';
import { FeatInfo } from '@/lib/types/modelInfo';
import NewLineParse from '@/Utility/NewLineParse';
import { AssociatedModel } from '@prisma/client';
import Link from 'next/link';

interface Props {
  feat: FeatInfo;
}
const FeatPage = ({ feat }: Props) => {
  return (
    <main className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>{feat.name}</h1>
          <p className="italic pr-4">
            <NewLineParse>{feat.flavorText}</NewLineParse>
          </p>
          <p className="pt-4">
            Source:
            <span className="font-bold italic"> {feat.source}</span>
          </p>
          <p className="pt-4">
            Prerequisite:
            <span className="font-bold italic"> {feat.prereqDescription}</span>
          </p>
        </div>
        <div className="flex justify-start items-start md:items-end my-2 flex-col ">
          {/* go back */}
          <Link
            className={'btn btn-ghost border border-gray-500 w-full'}
            href={`/feats`}
          >
            View all Feats -&gt;
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <h2 className="px-4">
        Features <Info tooltip="Your Feat provides the following abilities." />
      </h2>
      <div className="divider"></div>
      <FeatureList features={feat.Features} />
      <div className="divider"></div>
      <CommentSection id={feat.id} model={AssociatedModel.FEAT} />
    </main>
  );
};

export default FeatPage;
