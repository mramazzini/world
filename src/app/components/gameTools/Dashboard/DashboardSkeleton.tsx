const DashboardSkeleton = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-4 bg-base-200 p-4 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="skeleton h-24 w-24 shrink-0 rounded-xl"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 bg-base-200 p-4 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="skeleton h-24 w-24 shrink-0 rounded-xl"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 bg-base-200 p-4 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="skeleton h-24 w-24 shrink-0 rounded-xl"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 bg-base-200 p-4 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="skeleton h-24 w-24 shrink-0 rounded-xl"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSkeleton;
