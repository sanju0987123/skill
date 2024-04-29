import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img , Input, Text } from "components";
import { account,database } from "services/appwrite";
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from "react-bootstrap";

const SignUp21 = () => {
  const navigate = useNavigate();
  const handlesigin=()=>{
    navigate('/signin')
  }
  // const [email, setEmail] = useState("");
  // const [employeementstatus, setEmployeementstatus] = useState("");
  // const [country, setCountry] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    country: "",
    employmentStatus: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = { ...errors };

    switch (fieldName) {
      case "fullName":
        fieldErrors.fullName = value.trim() ? "" : "Full Name is required";
        break;
      case "username":
        fieldErrors.username = value.trim() ? "" : "Username is required";
        break;
      case "email":
        fieldErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format";
        break;
      case "password":
        fieldErrors.password = value.trim().length >= 6 ? "" : "Password must be at least 6 characters long";
        break;
      case "country":
        fieldErrors.country = value.trim() ? "" : "Country is required";
        break;
      case "employmentStatus":
        fieldErrors.employmentStatus = value.trim() ? "" : "Employment status is required";
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
  };

  const handleSaveContinue = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (Object.values(errors).every((val) => val === "")) {
      try {
        // const usernameExists = await checkUsernameExists(formData.username);
        // if (username) {
        //   setErrors((prevErrors) => ({
        //     ...prevErrors,
        //     username: "Username is already taken",
        //   }));
        //   return;
        // }
        await account.create(formData.username, formData.email, formData.password, formData.fullName, {
          country: formData.country,
          employmentStatus: formData.employmentStatus,
        }
        
        );
        toast.success("Signup successful!"); 
        // setCountry(formData.country);
        const documentId = uuidv4(); 
        // Store the user ID in the state management system, or pass it to the next page
        const createDocumentResponse = await database.createDocument(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_TWO,documentId,
          {Country:formData.country,
            employeementstatus:formData.employmentStatus,
             email:formData.email
        
        }
        );
        toast.success("User data stored in collection:", createDocumentResponse);
  
        // const response = await account.createSession(formData.username,)
        // console.log(response); // Handle successful authentication
        navigate("/signuptwo",{ state: { username: formData.username,email:formData.email } });
      } catch (error) {
        toast.error('Error registering user:', error);
      }
    }
  };
  // const checkUsernameExists = async (username) => {
  //   try {
  //     const searchResult = await account.listUsers(username, 1, 0);
  //     return searchResult.users.length > 0;
  //   } catch (error) {
  //     console.error('Error checking username:', error);
  //     return false;
  //   }
  // };

  return (
    <>
    <ToastContainer/>
      <div className="bg-cover bg-gray-900 bg-no-repeat font-quicksand h-[900px] sm:px-5  w-[100%] "  style={{ backgroundImage: "url('images/img_signin.png')" }}>
        <div className="flex flex-col gap-[13px] items-center  h-full justify-center ml-[7px] md:px-5 w-[88%]">
          <div className="flex md:h-[1139px] h-[653px] md:ml-[0] ml-[97px] relative w-[93%] md:w-full">
            <div className="bg-white-A700 h-[621px] m-auto rounded-[18px] w-[98%]"></div>
            <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[18px] w-full" style={{ paddingLeft: "1rem" }}>
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between w-[98%] md:w-full">
                <div className="flex flex-col justify-start mr-8 w-[85%]">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="w-[48%]">
                      <Text className="text-gray-500 text-lg" size="txtQuicksandRegular18">Full Name *</Text>
                      <Input name="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} className="p-0 w-full rounded-lg" wrapClassName="flex h-12 mt-1 w-full" shape="round" />
                      {errors.fullName && <div className="text-red-500">{errors.fullName}</div>}
                    </div>
                    <div className="w-[48%]">
                      <Text className="text-gray-500 text-lg" size="txtQuicksandRegular18">Username *</Text>
                      <Input name="username" type="text" placeholder="Enter username" value={formData.username} onChange={handleChange} className="p-0 w-full rounded-lg" wrapClassName="flex h-12 mt-1 w-full" shape="round" />
                      {errors.username && <div className="text-red-500">{errors.username}</div>}
                    </div>
                  </div>
                  <Text className="mt-4 text-gray-500 text-lg" size="txtQuicksandRegular18">Email ID *</Text>
                  <Input name="email" type="text" placeholder="Enter email" value={formData.email} onChange={handleChange} className="p-0 rounded-lg w-full" wrapClassName="flex h-12 mt-1 w-full" shape="round" />
                  {errors.email && <div className="text-red-500">{errors.email}</div>}
                  <Text className="mt-4 text-gray-500 text-lg" size="txtQuicksandRegular18">Password *</Text>
                  <Input name="password" type="password" placeholder="Enter password" value={formData.password} onChange={handleChange} className="p-0 w-full rounded-lg" wrapClassName="flex h-12 mt-1 w-full" shape="round" />
                  {errors.password && <div className="text-red-500">{errors.password}</div>}
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="w-[48%]">
                      <Text className="mt-4 text-gray-500 text-lg" size="txtQuicksandRegular18">Country *</Text>
                      <Input name="country" type="text" placeholder="Select country" value={formData.country} onChange={handleChange} className="p-0 w-full rounded-lg" wrapClassName="flex h-12 mt-1 w-full" shape="round" />
                      {errors.country && <div className="text-red-500">{errors.country}</div>}
                    </div>
                    <div className="w-[48%]">
                      <Text className="mt-4 text-gray-500 text-lg" size="txtQuicksandRegular18">Employment Status *</Text>
                      <select
    name="employmentStatus"
    value={formData.employmentStatus}
    onChange={handleChange}
    className="p-0 w-full h-12 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
  >
    <option value="">Select</option>
    <option value="Hired">Hired</option>
    <option value="Rent">Rent</option>
  </select>
                      {errors.employmentStatus && <div className="text-red-500">{errors.employmentStatus}</div>}
                    </div>
                  </div>
                  <Button className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[169px] mt-9 mx-auto rounded-[22px] text-center text-lg 
                  hover hover:bg-black-900 hover:text-white-A700 " onClick={handleSaveContinue} color="gray_500" size="md" variant="fill">Save & Continue</Button>
                  <a href="javascript:" className="md:ml-[0] ml-[114px] mt-[9px] text-lg text-red-900">
                    <Text size="txtQuicksandMedium18">
                      <span className="text-gray-900 font-quicksand text-center font-medium">Already have an account?</span>
                      <span className="text-red-900 font-quicksand text-center font-medium">{" "} </span>
                      <span className="text-deep_orange-A200 font-quicksand text-center font-semibold " onClick={handlesigin}>Sign In</span>
                    </Text>
                  </a>
                </div>
                <Img className="h-[621px] md:h-auto object-cover rounded-br-[18px] rounded-tr-[18px]  md:mt-0" src="images/img_30847931.png" alt="30847931" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp21;
