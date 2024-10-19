const NewLineParse = ({ children }: { children: string }) => {
  const text = children as string;
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  lines.forEach((line, index) => {
    elements.push(line);
    if (index < lines.length - 1) {
      elements.push(<br key={index} />);
    }
  });
  return <>{elements}</>;
};

export default NewLineParse;
