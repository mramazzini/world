import { SubClassInfo } from '@/lib/types/modelInfo';
import '@/lib/string.extensions';

import Link from 'next/link';
import SubClassTable from './SubClassTable';
import Info from '../UI/Info';

import NewLineParse from '../../Utility/NewLineParse';
import FeatureList from '../UI/FeatureList';
interface Props {
  subClass: SubClassInfo;
}

const SubClassDisplay = ({ subClass }: Props) => {
  if (!subClass.Class) return null;
  const classObj = subClass.Class;
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1 className="px-4">
            {classObj.name} - {subClass.name}
          </h1>
          <p className="px-4 italic">
            <NewLineParse>{subClass.description}</NewLineParse>
          </p>

          <p className="px-4 pt-4">
            Source: <span className="font-bold italic">{subClass.source}</span>
          </p>
        </div>
        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          {/* go back */}
          <Link
            className={'btn btn-ghost border border-gray-500 w-full'}
            href={`/class/${classObj.slug}`}
          >
            View {classObj.name} Class -&gt;
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="px-4">
        {/* Subclass table only required if they are a spellcaster */}
        {subClass.spellCastingInfo && (
          <>
            <div className="bg-base-300 p-4 rounded-xl ">
              <h2>{subClass.name} Spellcasting </h2>
              <div className="divider m-0"></div>
              <SubClassTable subClass={subClass} />
            </div>

            <div className="divider"></div>
          </>
        )}

        <h2 className="px-4">
          Subclass Features{' '}
          <Info tooltip="Subclasses provide additional features that make your character more powerful as they level up." />
        </h2>
        <div className="divider"></div>
        <FeatureList features={subClass.Features} />
      </div>
    </>
  );
};

export default SubClassDisplay;
