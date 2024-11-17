const Skeleton = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <div
      className={`skeleton flex grow`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
    ></div>
  );
};

export default Skeleton;
