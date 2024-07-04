//Text editor component
// takes in a setData function and a data string
// returns a text editor component with a toolbar, that can be used to edit the string data

interface Props {
  data: string;
  setData: (data: string) => void;
  title?: string;
  description?: string;
}

const TextEditor = ({ data, setData, title, description }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="p-4">
      {title && <h2>{title}</h2>}
      {description && <h3 className="mb-2">{description}</h3>}
      <textarea
        className="textarea textarea-primary my-2 w-full h-48"
        value={data}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextEditor;
