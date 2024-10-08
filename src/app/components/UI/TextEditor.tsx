//Text editor component
// takes in a setData function and a data string
// returns a text editor component with a toolbar, that can be used to edit the string data

interface Props {
  data: string;
  setData: (data: string) => void;
  title?: string;
  description?: string;
  placeholder?: string;
}

const TextEditor = ({
  data,
  setData,
  title,
  description,
  placeholder,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="p-4">
      {title && <h2>{title}</h2>}
      {description && <p className="mb-2">{description}</p>}
      <textarea
        className="textarea textarea-primary my-2 w-full h-48"
        value={data}
        onChange={handleChange}
        placeholder={placeholder || "Enter text"}
      />
    </div>
  );
};

export default TextEditor;
