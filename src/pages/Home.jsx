import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation(); // Router state'dan ma'lumotni oling
  const { name, description, data } = location.state || {}; // Default qiymat qo'shing
  const { user } = useSelector((store) => store.user);

  return (
    <div className="p-4">
      <h1 className="mb-16 mt-4 ml-4  text-2xl">Your Projects`s</h1>
      {name && (
        <div className="card card-compact bg-blue-400 text-black w-56 shadow-xl">
          <figure>
            <img
              src={user.photoURL}
              className="w-20 rounded-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="bg-slate-500 py-2 flex justify-center rounded-md items-center">
              {data}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
