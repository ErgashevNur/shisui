function Avatar({ user }) {
  return (
    <>
      <div>
        <img className="w-24 h-24 rounded-full" src={user.photoURL} alt="" />
        <p className="text-black">Hello {user.dislpayName}</p>
      </div>
    </>
  );
}

export default Avatar;
