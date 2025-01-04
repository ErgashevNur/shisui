function Avatar({ user }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-24 mx-auto rounded-full bg-red-800"
          src={user.photoURL}
          alt=""
        />
        <p className="text-black text-xl">Hi {user.displayName}</p>
      </div>
    </>
  );
}

export default Avatar;
