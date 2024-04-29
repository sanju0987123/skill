import Footer from "components/Footer";
import Header from "components/Header";
import React, { useState, useEffect } from "react";
import { database, storage } from "../../services/appwrite"; // Import Appwrite database and storage
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    DescribeYourProblem: "",
    ContactNumber: "",
    Images: [] // Updated attribute name to 'Images'
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      // Convert FileList to an array of files
      const selectedFiles = Array.from(files);
      setFormData((prevData) => ({
        ...prevData,
        Images: [...prevData.Images, ...selectedFiles]
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Review Sucess");

    try {
      // Upload images to the bucket and store their URLs
      const imageUrls = [];
      for (const file of formData.Images) {
        const imageUrl = await updateImageInStorage(file);
        imageUrls.push('https://example.com/storage/'+imageUrl);
      }
      console.log(imageUrls);

      // Store contact details in the collection along with image URLs
      const response = await database.createDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_THIRTEEN, uuidv4(), { ...formData, Images: imageUrls });

      console.log("Contact details stored successfully:", response);
      // Reset form data after submission
      setFormData({
        Name: "",
        Email: "",
        DescribeYourProblem: "",
        ContactNumber: "",
        Images: []
      });
    } catch (error) {
      console.error("Error storing contact details:", error);
    }
  };

  const updateImageInStorage = async (image) => {
    try {
      const blob = await fetch(URL.createObjectURL(image)).then((res) => res.blob());
      const file = new File([blob], image.name, { type: blob.type });
      console.log(file);
      const response = await storage.createFile(process.env.REACT_APP_BUCKET_ID_TWO,uuidv4(), file);
      console.log(response);
      return response.$id;
    } catch (error) {
      console.error('Error updating image in storage:', error);
      throw error;
    }
  };

  useEffect(() => {
    document.body.classList.add('bg-gray-900', 'transition-all', 'duration-1000');
    return () => {
      document.body.classList.remove('bg-gray-900');
    };
  }, []);

  return (
   
    <div className="text-white-A700 min-h-screen"> <ToastContainer/>
      <Header />
      <div className="container mx-auto p-8 flex justify-center items-center h-full">
        <div className="w-full max-w-lg border border-gray-300 rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-chocolate text-center">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="Name" className="block font-quicksand text-sm font-medium ">
                Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full border text-black-900 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="Email" className="block font-quicksand text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="w-full border text-black-900 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="DescribeYourProblem" className="block font-quicksand text-sm font-medium">
                Describe Your Problem
              </label>
              <textarea
                id="DescribeYourProblem"
                name="DescribeYourProblem"
                value={formData.DescribeYourProblem}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 text-black-900 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="ContactNumber" className="block font-quicksand text-sm font-medium">
                Contact Number
              </label>
              <input
                type="text"
                id="ContactNumber"
                name="ContactNumber"
                value={formData.ContactNumber}
                onChange={handleChange}
                className="w-full border text-black-900 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="file" className="block text-sm font-quicksand font-medium">
                Add More Proof (Images)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                multiple // Allow multiple file selection
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            {/* Display selected files */}
            {formData.Images.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500">Selected Files:</p>
                <ul className="list-disc list-inside">
                  {formData.Images.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              type="submit"
              className="bg-chocolate hover:bg-orange-600 text-white-A700 py-2 px-4 rounded-md transition-colors duration-200 ease-in-out w-full mt-4"
            >
              Submit
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm font-quicksand">
              For further assistance, please contact us via email:{" "}
              <a href="mailto:skillspherein.ac.in" className="text-blue-400 font-medium">
                skillspherein.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer className="bg-gray-900 flex items-center justify-center mt-11 md:px-5 w-full" />
    </div>
  );
};

export default ContactUs;