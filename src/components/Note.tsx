type PropsType = {
  id: number;
  name: string;
  thoughts: string;
  date: string; // ✅ now matches
};

const Note = ({ id, name, thoughts, date }: PropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{thoughts}</p>
      <small className="text-gray-400">
        ID: {id} | Updated: {date}
      </small>
    </div>
  );
};

export default Note;
