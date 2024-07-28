interface Props {
  name: string;
  description: string;
  children: React.ReactNode;
  active?: boolean;
}
const Module = ({ name, description, children, active = true }: Props) => {
  if (!active) return null;
  return (
    <div>
      <h1>{name}</h1>
      <p className="">{description}</p>
      <div className="divider" />
      {children}
    </div>
  );
};

export default Module;
