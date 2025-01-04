import { useState } from "react";
import { Form, Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  console.log(name);
  console.log(description);
  console.log(data);
  console.log(" ");

  const handleInputValue = (e) => {
    const newName = e.target.value;
    setName(newName);
  };
  const handleInputValue2 = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
  };
  const handleInputValue3 = (e) => {
    const newData = e.target.value;
    setData(newData);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Ma'lumotlarni to'ldiring");
    } else if (!description) {
      toast.error("Ma'lumotlarni to'ldiring");
    } else if (!data) {
      toast.error("Ma'lumotlarni to'ldiring");
    } else {
      toast.success("Tasdiqlandi...");
      navigate("/", { state: { name, description, data } });
    }
  };

  return (
    <div className="gap-3 flex flex-col w-[400px] px-4 py-6">
      <div className="text-lg flex items-end gap-2 btn-active w-14 px-2 py-1 rounded-md">
        <Link to="/" className=" btn-active flex">
          <img
            className="w-9 h-12"
            src="https://i.pinimg.com/originals/46/de/be/46debe6678132b5199d4566a65b45869.png"
            alt=""
          />
        </Link>
      </div>

      <h2 className="text-3xl mb-4 mt-10">Create a New Project</h2>

      <Form className="flex flex-col gap-2" onSubmit={handleButtonClick}>
        <label className="form-control w-full max-w-xs mb-5">
          <div className="label">
            <span className="label-text">Write your project !</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={handleInputValue}
          />
        </label>

        <label className="form-control w-full max-w-xs mb-5">
          <div className="label">
            <span className="label-text">Write your description !</span>
          </div>
          <textarea
            className="textarea textarea-bordered block"
            placeholder="Description"
            value={description}
            onChange={handleInputValue2}
          ></textarea>
        </label>

        <label className="input input-bordered flex items-center gap-2 mt-4">
          <input
            type="date"
            className="grow"
            placeholder="DD.MM.YY"
            value={data}
            onChange={handleInputValue3}
          />
        </label>

        <div>
          <button type="submit" className="btn btn-active w-full block mt-5">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Create;
