//Text editor component
// takes in a setData function and a data string
// returns a text editor component with a toolbar, that can be used to edit the string data

interface Props {
  data: string;
  setData: (data: string) => void;
  title?: string;
}

const TextEditor = ({ data, setData, title }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="p-4">
      {title && <h2>{title}</h2>}
      <textarea
        className="textarea textarea-primary my-2 w-full h-48"
        value={data}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextEditor;
