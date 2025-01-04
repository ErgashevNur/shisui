import { useSelector } from "react-redux";

function OnlineUsers() {
  const { user } = useSelector((store) => store.user);
  return (
    <>
      <div className="py-8 pl-6 pr-14 bg-slate-900">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img
              className="w-24 mx-auto rounded-full bg-red-800"
              src={user.photoURL}
              alt=""
            />
          </div>
        </div>

        <div className="avatar offline">
          <div className="w-24 rounded-full">
            <img
              className="w-24 mx-auto rounded-full bg-red-800"
              src={user.photoURL}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineUsers;
