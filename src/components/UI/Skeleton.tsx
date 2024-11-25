const Skeleton = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <div
      className={`skeleton flex grow h-full w-full`}
      style={{
        minWidth: width ? `${width}px` : '100%',
        minHeight: height ? `${height}px` : '100%',
      }}
    ></div>
  );
};

export default Skeleton;
