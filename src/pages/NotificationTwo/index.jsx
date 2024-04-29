import React,{ useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { account,database } from "services/appwrite";

import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { Query } from "appwrite";
const NotificationTwoPage = () => {

    const navigate = useNavigate();
    const location=useLocation();
    const { email = "", emailsender = "" } = location.state || {};
    
    const sliderRef = React.useRef(null);
    const [sliderState, setsliderState] = React.useState(0);
    const [notifications, setNotifications] = useState([]);
    const [notifications1, setNotifications1] = useState([]);
    const [userEmail,setUserEmail]= useState('');
    const [email1,setEmail1]=useState('');
    const [emailsender1,setEmailSender1]=useState('');
    const [emailsender2,setEmailSender2]=useState('');
    const [acceptedNotificationIds, setAcceptedNotificationIds] = useState([]);

  
    useEffect(() => {
      const fetchNotifications = async () => {
        try {
          let res = await account.get("current");
          setUserEmail(res.email);
          setEmail1(res.email);
    
          // Fetch documents from collection seven
          const response2 = await database.listDocuments(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_SEVEN,[Query.limit(100)]
          );
          const documentsInCollectionSeven = response2.documents;
    
          // Fetch documents from collection six
          const response = await database.listDocuments(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_SIX,[Query.limit(100)]
          );
    
          // Fetch documents from collection nine
          const response1 = await database.listDocuments(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_NINE,[Query.limit(100)]
          );
    
          // Filter notifications based on email and emailsender
          const filteredNotifications = response.documents.filter(notification => (
            (notification.email === email && notification.emailsender === emailsender) ||
            (notification.email === userEmail && notification.emailsender !== null)
          ));
          console.log(filteredNotifications);
    
          const filteredNotifications1 = response1.documents.filter(notification => (
            (notification.email === email && notification.emailsender === emailsender) ||
            (notification.email === userEmail && notification.emailsender !== null)
          ));
          console.log(filteredNotifications);
          // Compare filtered notifications with documents in rentform and hireform
          filteredNotifications.forEach(notification => {
            if (!documentsInCollectionSeven.some(doc => doc.notificationId === notification.$id)) {
              // Add document ID to collection seven
              database.createDocument(
                process.env.REACT_APP_DB_ID,
                process.env.REACT_APP_COLLECTION_ID_SEVEN,
                uuidv4(),
                { email: userEmail, emailsender: notification.emailsender, notificationStatus: 'pending', notificationId: notification.$id }
              );
            }
          });
    
          filteredNotifications1.forEach(notification => {
            if (!documentsInCollectionSeven.some(doc => doc.notificationId === notification.$id)) {
              // Add document ID to collection seven
              database.createDocument(
                process.env.REACT_APP_DB_ID,
                process.env.REACT_APP_COLLECTION_ID_SEVEN,
                uuidv4(),
                { email: userEmail, emailsender: notification.emailsender, notificationStatus: 'pending', notificationId: notification.$id }
              );
            }
          });
          const response7 = await database.listDocuments(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_SEVEN,[Query.limit(100)]
          );
          const documentsInCollectionSeven1 = response7.documents.filter(doc => doc.notificationStatus === "pending");
          console.log(documentsInCollectionSeven1);
          console.log(filteredNotifications);
           // Filter documents from collection six based on presence in collection seven
        const filteredDocuments6 = filteredNotifications.filter(doc => documentsInCollectionSeven1.some(item => item.notificationId === doc.$id));
          console.log(filteredDocuments6);
        // Filter documents from collection nine based on presence in collection seven
        const filteredDocuments9 = filteredNotifications1.filter(doc => documentsInCollectionSeven1.some(item => item.notificationId === doc.$id));

        setNotifications(filteredDocuments6);
        setNotifications1(filteredDocuments9);
  
          
          // // Update state with filtered notifications
          // setNotifications(filteredNotifications);
          // setNotifications1(filteredNotifications1);
        } catch (error) { 
          console.error('Error fetching notifications:', error);
        }
      };
    
      fetchNotifications();
    }, [email, emailsender, userEmail]);
    
  
    const handleClick = async (id, status,emailsender1) => {
      try {
        console.log(id);
        if(status==='accepted')
        {

          const res1=await database.listDocuments(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_SEVEN,[Query.limit(100)]);
             // Find the document with the matching notificationId
          const notificationDocument = res1.documents.find(doc => doc.notificationId === id);
          if (!notificationDocument) {
            console.error('Notification document not found');
            return;
          }
          

          const res = await database.updateDocument(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_SEVEN,notificationDocument.$id,
            {notificationStatus: status}
          );
        console.log('Document updated successfully with ID:', res);
        navigate('/MessageOne',{state:{email:email1,emailsender:emailsender1,id:id}});
        // You can navigate or update state as needed
          
        }
        else if(status==='rejected')
        {
          
          try {
            const res=await database.deleteDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_SIX, id);
            console.log(res);
            console.log('Document deleted successfully from collection six');
               // Update notifications state after deletion
               const updatedNotifications = notifications.filter(notification => notification.$id !== id);
               setNotifications(updatedNotifications);
          } catch (error) {
            // If not found in collection six, try to delete from collection nine
            console.log('Document not found in collection six. Attempting to delete from collection nine...');
            await database.deleteDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_NINE, id);
            console.log('Document deleted successfully from collection nine');
            // Update notifications state after deletion
            const updatedNotifications = notifications.filter(notification => notification.$id !== id);
            setNotifications(updatedNotifications);
          }
        }
      } catch (error) {
        console.error('Error creating document:', error);
      }
    };
  



  return (
    <>
        <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[1343px] h-[900px] md:px-5 relative w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full -z-10 "
              src="images/img_aerialshoturb.png"
              alt="aerialshoturb"
            />
            <div className="absolute bg-gray-900_8e flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[241px] w-full">
              <Header className="flex md:flex-col font-quicksand md:gap-5 items-center justify-center w-full " />
              <Text
                className="mt-[282px] md:text-5xl text-[90px] text-white-A700"
                size="txtRamaraja90"
              >
                Get Your Work Done Smoothly
              </Text>
              <div className="flex flex-row font-quicksand gap-[11px] items-start justify-center mt-[35px] w-[10%] md:w-full">
                <button
                  className="text-gray-500 text-xl"
                  size="txtQuicksandMedium20" onClick={""}
                >
                  Swipe Down
                </button>
                  <Img
                    className="h-3.5 md:h-auto mt-[3px] object-cover w-3.5"
                    src="images/img_maskgroup_14x14.png"
                    alt="maskgroup"
                  />
                </div>
              </div>
            </div>
           </div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[280px] items-center justify-start p-[22px] sm:px-5 right-[17%]  top-[7.5%] w-[30%]  max-h-screen overflow-y-scroll"
            style={{ backgroundImage: "url('images/img_group11.svg')" }}
          >
            <div className="flex flex-col overflow-y-auto overflow-hidden  rounded-l-lg  items-start justify-start mb-[5px] mt-[30px] w-full">
              <div className="flex flex-row overflow-y-auto overflow-hidden  hover:text-white-A700 items-start justify-start w-[100%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                  size="txtRamaraja25"
                >
                  You have no new notification
                </Text>
                <div className="bg-red-900 h-1.5 mb-[26px] mt-2.5 rounded-[50%] w-1.5"></div>
              </div>
              <Line className="bg-gray-500 h-px mt-1 w-full" />
              <div className="flex md:flex-col flex-row font-quicksand md:gap-5 items-start justify-start mt-[15px] w-full">
              <div className="flex flex-col items-center gap-8">
                  {/* Render notifications dynamically */}
                  {notifications.map((notification, index) => (
                    
                    <div key={index} className="flex flex-col items-center justify-start">
                       {/* Only show notifications based on conditions */}
                       {((notification.email === userEmail) || (notification.email1===userEmail)) &&  (
                      <Text className="text-[22px] text-gray-900 sm:text-lg md:text-xl" size="txtQuicksandBold22">
                        <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                          <>
                            Email:{notification.emailsender}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-quicksand text-left text-lg font-medium">
                          <>
                            I need: {notification.youneeda}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-quicksand text-left text-lg font-medium">
                          <>
                            Mine Work: {notification.Icanprovidethis}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-quicksand text-left text-lg font-medium">
                          <>
                            {notification.Forhowlong} <br />
                            Pay scale : {notification.Payscale}
                          </>
                        </span>
                        <div className="border-b border-gray-900 border-solid flex items-center justify-start">
                              <Img
                    className="flex flex-col common-pointer h-[29px] md:h-auto border  ml-[180px] border-gray-900 border-solid  md:ml-[0] md:mt-0 mt-[0px] rounded-[14px] w-[29px]"
                    src="images/img_imageremovebgpreview.png"
                    alt="imageremovebgpr"
                    onClick={() => handleClick(notification.$id, 'accepted',notification.emailsender)}
                  />
               
                  <Img
                    className="flex flex-col common-pointer border border-gray-900 border-solid  h-[29px]  ml-3.5 md:ml-[0] md:mt-0 mt-[0px] rounded-[14px] w-[29px]"
                    src="images/img_group12.png"
                    alt="groupTwelve"
                    onClick={() => handleClick(notification.$id, 'rejected')}
                    />
                </div>
                      </Text>
                     
                      )}
                      
                      <Line className="bg-gray-500 h-px mt-1  w-full" />
                    </div>
                    
                  ))
                  
                  }
                  
                  {/* End of dynamic rendering */}
                  {/* Render notifications dynamically */}
                  {notifications1.map((notification, index) => (
                    <div key={index} className="flex flex-col items-center justify-start">
                       {/* Only show notifications based on conditions */}
                       {((notification.email === userEmail) || (notification.email===userEmail)) && (
                      <Text className="text-[22px] text-gray-900 sm:text-lg md:text-xl" size="txtQuicksandBold22">
                        <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                          <>
                            {notification.emailsender}
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-quicksand text-left text-lg font-light">
                          <>
                            {notification.youneeda}
                            <br />
                          </>
                        </span>
                        
                        <span className="text-gray-900 font-quicksand text-left text-lg font-medium">
                          <>
                            {notification.forhowlong} <br />
                            Pay scale : {notification.Payscale}
                          </>
                        </span>
                        <div className="border-b border-gray-900 border-solid flex items-center justify-start">
                              <Img
                    className="flex flex-col common-pointer h-[29px] md:h-auto border border-gray-900 border-solid ml-3.5 md:ml-[0] md:mt-0 mt-[0px] rounded-[14px] w-[29px]"
                    src="images/img_imageremovebgpreview.png"
                    alt="imageremovebgpr"
                    onClick={() => handleClick(notification.$id, 'accepted',notification.emailsender)}
                  />
               
                  <Img
                    className="flex flex-col common-pointer border border-gray-900 border-solid  h-[29px]  ml-3.5 md:ml-[0] md:mt-0 mt-[0px] rounded-[14px] w-[29px]"
                    src="images/img_group12.png"
                    alt="groupTwelve"
                    onClick={() => handleClick(notification.$id, 'rejected',notification.emailsender)}
                    />
                </div>
                      </Text>
                     
                      )}
                      
                      <Line className="bg-gray-500 h-px mt-1  w-full" />
                    </div>
                    
                  ))
                  
                  }
                  
                  {/* End of dynamic rendering */}
                  
                 
                </div>
                
              </div>
               
                
            
              <div className="flex flex-row font-quicksand gap-[7px] items-end justify-center md:ml-[0] ml-[258px] mt-[39px] w-[17%] md:w-full">
                {/* <a href="javascript:" className="text-gray-500 text-lg">
                  <Text size="txtQuicksandMedium18Gray500">See More</Text>
                </a> */}
                <Img
                  className="h-3.5 md:h-auto my-1 object-cover w-3.5"
                  src="images/img_maskgroup_14x14.png"
                  alt="maskgroup_Three"
                />
              </div>
            </div>
          </div>
        </div>
     
 
    </>
  );
};

export default NotificationTwoPage;