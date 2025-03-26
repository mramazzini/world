import SidebarMetaSelector from '@/components/Dashboard/SidebarMetaSelector';
import { getSpellMetadata } from '@/lib/actions/db/spell/read.actions';
import { DBMetadata } from '@/lib/types/metadata';
import P from '@/Utility/FormatAndSanitize';
import ModelDisplay from '@/Utility/ModelDisplay';
import { useEffect, useState } from 'react';

interface SpellSearchProps {
  setSelectedSpellId: (spellId: string) => void;
  selectedSpellId: string;
}

const SpellSearch = ({
  setSelectedSpellId,
  selectedSpellId,
}: SpellSearchProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [metadata, setMetadata] = useState<DBMetadata[]>();

  const fetchMeta = async () => {
    const res = await getSpellMetadata();
    setMetadata(res);
  };

  useEffect(() => {
    fetchMeta();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center gap-2">
      <h3 className="text-center">Spell Search</h3>
      <p className="text-center">
        <P>Search for and prepare spells</P>
      </p>

      <button
        onClick={() => setShow(!show)}
        className="btn border border-gray-500"
      >
        Select Spell
      </button>
      <p className="text-center">
        Currentely selected:{' '}
        <span className="font-bold">
          {selectedSpellId ? (
            <ModelDisplay model={'Spell'} id={selectedSpellId} />
          ) : (
            'Select Spell'
          )}
        </span>
      </p>
      {metadata && (
        <SidebarMetaSelector
          refresh={fetchMeta}
          model={'Spell'}
          loading={!metadata}
          metadata={metadata}
          show={show}
          setSelected={function (selected: DBMetadata | null): void {
            if (!selected) {
              setShow(false);
              return;
            }
            setSelectedSpellId(selected.id);
            setShow(false);
          }}
        />
      )}
    </div>
  );
};

export default SpellSearch;
