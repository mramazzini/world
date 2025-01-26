import { useState } from 'react';

const TraitEditor = ({
  data,
  setData,
  buttonText,
  title,
  tooltip,
}: {
  data: string[];
  setData: (data: string[]) => void;
  buttonText: string;
  title: string;
  tooltip?: JSX.Element;
}) => {
  const [editing, setEditing] = useState(false);
  const [listText, setListText] = useState(data.join('\n'));
  const handleDelete = (index: number) => {
    const newList = data.filter((_, i) => i !== index);
    setData(newList);
  };
  const handleCreate = () => {
    const newList = [...data, ''];
    setData(newList);
  };
  return (
    <div className="bg-base-300 p-4 rounded-xl flex flex-col min-h-96 w-full">
      <h2 className="font-bold flex items-center">
        {title} <span className="ml-2 ">{tooltip}</span>
      </h2>
      <div className="divider m-0"></div>
      {editing ? (
        data.map((item, index) => (
          <div className="join" key={index}>
            <input
              className="input input-bordered w-full mb-2 join-item"
              key={index}
              defaultValue={item}
              onChange={(e) => {
                const newListText = listText.split('\n');
                newListText[index] = e.target.value;
                setListText(newListText.join('\n'));
              }}
            ></input>
            <button
              className="btn btn-error  join-item"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <ul className="list-disc ml-4">
          {data.length > 0 ? (
            data.map((item, index) => (
              <li key={index}>
                {item.length > 0
                  ? item
                  : `Empty ${buttonText} - Edit this to display your ${buttonText}`}
              </li>
            ))
          ) : (
            <li>
              No {buttonText} - Edit this to display your {buttonText}
            </li>
          )}
        </ul>
      )}
      {editing && (
        <button
          onClick={() => handleCreate()}
          className="btn btn-success btn-sm mt-2"
        >
          + Add +
        </button>
      )}
      <div className="divider m-0"></div>

      <div className="flex justify-between mt-2 w-full mt-auto">
        <div></div>
        <button
          onClick={() => {
            if (editing) {
              setData(listText.split('\n'));
            }
            setEditing(!editing);
          }}
          className="btn btn-ghost border-gray-500 btn-sm  w-full "
        >
          {editing ? 'Save ' + buttonText : 'Edit ' + buttonText}
        </button>
      </div>
    </div>
  );
};

export default TraitEditor;
