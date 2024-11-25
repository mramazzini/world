'use client';
import Image from 'next/image';
import useInventory from '@/hooks/useInventory';
import ToolDisplay from './ToolDisplay';

const ToolList = () => {
  const { tools } = useInventory();

  return (
    <div className="h-full flex flex-col w-full">
      <div className="flex flex-row bg-base-300 rounded-xl p-4 h-full items-center justify-start gap-4 overflow-auto ">
        {tools.length > 0 ? (
          tools.map((tool, index) => {
            return <ToolDisplay key={index} tool={tool} />;
          })
        ) : (
          <div className="flex items-center justify-center flex-col w-full">
            <p className="font-bold m-2">No Tools Found..</p>
            <Image
              src="/images/alchemy.svg"
              alt="Empty"
              width={80}
              height={80}
              className="opacity-40 m-2"
            />
            <p className="m-2">
              Get some tools in your inventory to use them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolList;
