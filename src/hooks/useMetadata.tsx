import { getBackgroundsMetadata } from '@/lib/actions/db/background/read.actions';
import { getClassMetadata } from '@/lib/actions/db/class/read.actions';
import { getCreaturesMetadata } from '@/lib/actions/db/creature/read.actions';
import { getFeatsMetadata } from '@/lib/actions/db/feat/read.actions';
import { getItemsMetadata } from '@/lib/actions/db/item/read.actions';
import { getSpeciesMetadata } from '@/lib/actions/db/species/get.actions';
import { getSubclassMetadata } from '@/lib/actions/db/subclass/read.actions';
import { DBMetadata } from '@/lib/types/metadata';
import { useEffect, useMemo, useState } from 'react';

type Model =
  | 'class'
  | 'subclass'
  | 'item'
  | 'creature'
  | 'background'
  | 'species'
  | 'feat';

const useMetadata = (model: Model) => {
  const [loading, setLoading] = useState(true);
  const [metadata, setMetadata] = useState<DBMetadata[]>([]);

  const fetchFn = useMemo(() => {
    switch (model) {
      case 'class':
        return getClassMetadata;
      case 'subclass':
        return getSubclassMetadata;
      case 'item':
        return getItemsMetadata;
      case 'creature':
        return getCreaturesMetadata;
      case 'background':
        return getBackgroundsMetadata;
      case 'species':
        return getSpeciesMetadata;
      case 'feat':
        return getFeatsMetadata;
    }
  }, [model]);

  useEffect(() => {
    fetchFn().then((data) => {
      setMetadata(data);
      setLoading(false);
    });
  }, [fetchFn]);

  return { metadata, loading };
};

export default useMetadata;
