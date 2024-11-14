import SubClassDisplay from '@/components/ClassInfo/SubClassDisplay';

import CommentSection from '@/components/CommentSection/CommentSection';
import { AssociatedModel } from '@prisma/client';
import { SubClassInfo } from '@/lib/types/modelInfo';

const SubClassPage = ({ subclass }: { subclass: SubClassInfo }) => {
  return (
    <div className="p-4 md:p-8">
      <SubClassDisplay subClass={subclass} />{' '}
      <CommentSection id={subclass.id} model={AssociatedModel.SUBCLASS} />
    </div>
  );
};

export default SubClassPage;
