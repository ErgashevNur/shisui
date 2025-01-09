function Avatar({ user }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-24 mx-auto rounded-full bg-red-800"
          src={user.photoURL}
          alt=""
        />
        <p className="text-black text-xl text-center">Hi {user.displayName}</p>
      </div>
    </>
  );
}

export default Avatar;
