import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostForm = ({ onSubmit, onClose }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [visible, setVisible] = useState(true);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (onSubmit && (text.trim() || image)) {
      onSubmit({ text, image });
      setText('');
      setImage(null);
      setVisible(false);
      toast.success('Successfully posted!');
    }
  };

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      {/* <Button label="Create Post" icon="pi pi-plus" onClick={showDialog} className="p-button-success mt-[350px] ml-[670px] text-black-900" /> */}
      <Dialog className=" font-bold" visible={visible} style={{ width: '50vw' }} onHide={hideDialog}>
      <div className="max-w-md mx-auto bg-gray-900 mt-10 rounded-lg overflow-hidden shadow-lg p-8 relative transform transition duration-300 ease-in-out hover:scale-105">
  {/* <button
    className="absolute top-0 right-0 p-2 rounded-full bg-gray-100 text-white"
    onClick={hideDialog}
  >
    X
  </button> */}
  <h2 className="text-3xl font-quicksand text-chocolate  mb-6">Create a Post</h2>
  <textarea
    className="w-full border text-gray-800 border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring focus:border-chocolate duration-300 ease-in-out transform   hover hover:scale-105 hover:shadow-md"
    placeholder="Write something... for the caption"
    value={text}
    onChange={handleTextChange}
    rows={4}
  />
  <label className="block mb-6">
    <span className="text-gray-300 cursor-pointer">Upload Image</span>
    <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1 hidden" />
  </label>
  <div className="bg-gray-200 rounded-lg overflow-hidden mb-6">
    {image && (
      <img src={image} alt="Uploaded" className="w-full transition  duration-300 ease-in-out transform hover:scale-105" />
    )}
  </div>
  <button
    className="bg-chocolate  font-quicksand hover:bg-orange-600 text-white-A700 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
    onClick={handleSubmit}
  >
    Post
  </button>
</div>


      </Dialog>
    </div>
  );
};

export default PostForm;
