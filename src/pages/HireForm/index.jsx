import React,{useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { database,account } from 'services/appwrite';
import { Img } from 'components'; 
import { Blog } from 'Blog';
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs
const   HireForm= ({ userEmail }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const Email=location.state.email ;
  const [emailsender,setEmailSender]=useState('');
  const [id,setId]=useState('');
  
  const [filteredOptions, setFilteredOptions] = useState([]);
  userEmail=Email;
  console.log(location.state.email);
  console.log(Email);
  let [modelstatus, setmodelstatus] = useState(true);
  const [formData, setFormData] = useState({
    youneeda: '',
    forhowlong: '',
    Payscale: ''
  });
  const { TechnicalRoles } = Blog;
  useEffect(() => {
    const islogin = async () => {
      try {
        let res = await account.get("current");
        setEmailSender(res.email); // Set user email in state
        setId(res.$id);
      } catch (err) {
        navigate('/signup');
      }
    };

    islogin(); // Call the function when component mounts
  }, [navigate]);

      const onshow = () => {
        setmodelstatus(true);
      }

      const onHide = () => {
        setmodelstatus(false);
        navigate('/homepagetwo')
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'youneeda') {
          filterOptions(value);
          setFormData({ ...formData, [name]: value });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
      const filterOptions = (value) => {
        const filtered = TechnicalRoles.filter((role) => role.toLowerCase().includes(value.toLowerCase()));
        console.log(filtered);
        setFilteredOptions(filtered);
      };
       const renderRoleOptions = () => {
        return TechnicalRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ));
      };
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
          // Check if the entered value is in the filtered options
          if (filteredOptions.includes(formData.youneeda)) {
            // Create a document in the "rentform" collection using Appwrite database service   
            const response = await database.createDocument(
              process.env.REACT_APP_DB_ID, // Database ID
              process.env.REACT_APP_COLLECTION_ID_NINE, // Collection ID for rentform
              uuidv4(), // Let Appwrite generate the document ID
              { ...formData, email: userEmail, emailsender: emailsender } // Include user's email in document data
            );
            console.log('Document created successfully:', response);
            // Redirect or navigate to another page after successful form submission
            navigate('/homepagetwo'); // Navigate to the success page route
          } else {
            // Show an error message or handle invalid option
            console.error('Invalid option:', formData.youneeda);
          }
        } catch (error) {
          console.error('Error creating document:', error);
          // Handle error as needed (e.g., show error message to user)
        }
      };
    

  //     // Function to handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  //   try {
  //     // Create a document in the "rentform" collection using Appwrite database service
  //     const response = await database.createDocument(
  //       process.env.REACT_APP_DB_ID, // Database ID
  //       process.env.REACT_APP_COLLECTION_ID_NINE, // Collection ID for rentform
  //       uuidv4(), // Let Appwrite generate the document ID
  //       { ...formData, email: userEmail,emailsender:emailsender } // Include user's email in document data
  //     );
  //     console.log('Document created successfully:', response);
  //     // Redirect or navigate to another page after successful form submission
  //     navigate('/homepagetwo',{state:{email: userEmail,emailsender:emailsender}}); // Navigate to the success page route
  //   } catch (error) {
  //     console.error('Error creating document:', error);
  //     // Handle error as needed (e.g., show error message to user)
  //   }
  // };
      return (
        <div className="App">
          
        {modelstatus && (
          <div className='modeloverlay w-[100%] h-[100%] bg-gray-300
bg-opacity-50 fixed'>
<Img src= 'images/img_image1.png' className= "absolute -z-0  h-[100%]  "/>

<div className='w-[620px] h-[720px] rounded bg-black-900
fixed left-[32%] translate-[50%]
              translate-y-[1%] transition duration-300 ease-in-out bg-opacity-70'>

<form onSubmit={handleSubmit} className="flex justify-center">
                  <div className="w-full max-w-xl px-6 py-8">
                    <div className="flex flex-col items-center gap-8">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl font-medium
text-white-A700">You are Hiring  them </h3>
                        <button className=" text-white-A700"
onClick={onHide}>&times;</button>
                      </div>
                      <div className="flex flex-col items-center gap-4 w-[100%] ">
                        <div className="text-center text-white-A700 ">You
need a *</div>
<div className="rounded-full overflow-hidden w-[100%] ">
                        <input
                type="text"
                id="youneeda"
                name="youneeda"
                value={formData.youneeda}
                onChange={handleChange}
                className="w-full rounded-lg py-2 px-4"
                list="roleOptions"
                placeholder="Search for a role..."
              />
              <datalist id="roleOptions">
                <option value="" disabled hidden>
                  Select a role...
                </option>
                {renderRoleOptions()}
              </datalist>
                        </div>
                        <div className="text-center text-white-A700">For
how long *</div>
                        <div className="rounded-full overflow-hidden w-[100%] ">
                          <select className="w-[100%]  rounded-full py-2
px-4 pr-8" name="forhowlong" value={formData.forhowlong}
onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="1-15days">1-15days</option>
                            <option value="more then 15 days">more then 15 days</option>
                            <option value="more then a month">more then a month</option>
                          </select>
                        </div>
                        <div className="text-center text-white-A700">Payscale *</div>
                        <div className="rounded-full overflow-hidden w-[100%] ">
                          <select className="w-[100%]  py-2 px-4 pr-8
rounded-md border-white" name="Payscale" value={formData.Payscale}
onChange={handleChange} style={{ fontSize: "16px" }}>
                            <option value="">Select</option>
                            <option value="less then 1k">less then 1k</option>
                            <option value="1k-3k">1k-3k</option>
                            <option value="3k-10k">3k-10k</option>
                            <option value="more then 10k">more then 10k</option>
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="px-6 py-2
text-white bg-blue-500 rounded-xl">Send</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          )}
        </div>
      );
          }

export default HireForm;