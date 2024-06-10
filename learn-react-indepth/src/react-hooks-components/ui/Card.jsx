/* eslint-disable react/prop-types */
const Card = ({ student }) => {
  return (
    <div className="flex font-sans flex-nowrap">
      <div className="flex flex-nowrap gap-5">
        {student.map((std, index) => (
          <div
            key={index}
            className="border-2 border-gray-950 p-2 rounded-md cursor-pointer hover:bg-slate-800 hover:text-white"
          >
            <h1 className="text-xl font-medium">Name: {std.name}</h1>
            <h3 className="text-md font-medium">Age: {std.age}</h3>
            <p className="text-sm font-medium">
              Description: {std.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
