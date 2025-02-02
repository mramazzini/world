import {
  ChooseSubclassOutput,
  ChooseSubclassParams,
} from '@/lib/types/protocols';
import { Choice } from '@prisma/client';
import ChoiceResolverButton from '../../ChoiceResolverButton';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Loading from '@/components/UI/Loading';
import { useAppSelector } from '@/store/hooks';
import { DBMetadata } from '@/lib/types/metadata';
import { getSubclassMetadataByClass } from '@/lib/actions/db/subclass/read.actions';
import Link from 'next/link';
import { linkCharacterToSubClass } from '@/lib/actions/db/character/update.actions';

const ChooseSubclassResolver = ({ choice }: { choice: Choice }) => {
  const classes = useAppSelector(
    (state) => state.sheet.rawCharacter?.CharacterToClass
  );
  const characterID = useAppSelector((state) => state.sheet.rawCharacter?.id);
  const [subClasses, setSubClasses] = useState<DBMetadata[]>([]);
  const [selectedSubclass, setSelectedSubclass] =
    useState<ChooseSubclassOutput>('');
  const [loading, setLoading] = useState(true);
  const classID = choice.fetchParams as ChooseSubclassParams;

  const classData = useMemo(() => {
    if (!classes) return null;
    return classes.find((c) => c.classId === classID)?.Class || null;
  }, [classes, classID]);

  useEffect(() => {
    const fetchSubclasses = async () => {
      setLoading(true);
      const res = await getSubclassMetadataByClass(classID);
      if (!res) {
        console.error('Class not found');
        return;
      }
      setSubClasses(res);
      setLoading(false);
    };
    fetchSubclasses();
  }, [classID]);

  const beforeSubmit = useCallback(async () => {
    //link subclass to character
    if (!characterID) return false;
    try {
      await linkCharacterToSubClass(characterID, selectedSubclass);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }, [characterID, selectedSubclass]);

  return loading || !classData ? (
    <Loading />
  ) : (
    <div>
      <h3>Choose your {classData?.subClassName}.</h3>
      <p>
        Choose your subclass for your {classData.name} class. This will grant
        you additional features and abilities at levels{' '}
        {classData.subClassFeatureLevels.slice(0, -1).join(', ')} and{' '}
        {classData.subClassFeatureLevels.slice(-1)}.
      </p>
      <div className="divider"></div>

      <ul className="flex flex-col gap-2">
        {subClasses.map((subclass) => (
          <li
            key={subclass.id}
            className="form-control flex flex-row w-full gap-4 "
          >
            <input
              type="radio"
              id={subclass.id}
              className="checkbox"
              name="subclass"
              onChange={() => setSelectedSubclass(subclass.id)}
              checked={selectedSubclass === subclass.id}
            />
            <label htmlFor={subclass.id}>
              <Link
                className="hover:link text-primary"
                target="_blank"
                href={`/subclass/${subclass.slug}`}
              >
                {subclass.name} -&gt;
              </Link>
            </label>
          </li>
        ))}
      </ul>
      <div className="divider"></div>

      <ChoiceResolverButton
        choiceId={choice.id}
        selected={selectedSubclass}
        disabled={!selectedSubclass}
        beforeSubmit={beforeSubmit}
      />
    </div>
  );
};

export default ChooseSubclassResolver;
