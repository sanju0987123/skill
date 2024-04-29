import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { account, database, storage } from 'services/appwrite'; // assuming you have a storage instance
import jsPDF from 'jspdf';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs
import { Query } from 'appwrite';

const ContractRent = ({ clientName, skillHolderName, payScale, timeDuration }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const amount = parseFloat(searchParams.get('amount'));
    const paymentIntent = searchParams.get('payment_intent');
    const navigate = useNavigate();
    console.log("ID from URL:", id);
    console.log("amount from URL:", amount);
    console.log("paymentIntent from URL:", paymentIntent);


    const [userEmail, setUserEmail] = useState('');
    const [email, setEmail] = useState('');
    const [emailSender, setEmailSender] = useState('');
    const [email1, setEmail1] = useState('');
    const [emailSender1, setEmailSender1] = useState('');
    const [date, setDate] = useState('');
    const [futuredate, setFututeDate] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [day, setDay] = useState('');
    const [abbrevation, setAbbrevation] = useState('');
    const [pdfURL, setPdfURL] = useState('');
    const [emailjob,setEmailJob]=useState('');
    const [emailsenderjob,setEmailSenderJob]=useState('');

    const [userStatus, setUserStatus] = useState('');
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res=await account.get("current");
                console.log(res.email);
                setUserEmail(res.email);
                console.log(userEmail);


                const rentFormData = await fetchFormDataFromCollection(process.env.REACT_APP_COLLECTION_ID_SIX, id);
        
                    if (rentFormData) {
                        setEmail(rentFormData.email);
                        setEmailSender(rentFormData.emailsender);
                        setUserStatus("rent");
                    } else {
                        console.log('Document not found in hireform or rentform');
                    }
                
            } catch (error) {
                console.error('Error fetching document:', error);
                toast.error('Error fetching document:', error)
            }
        };

        fetchData();
    }, [id]);

    const fetchFormDataFromCollection = async (collectionId, id) => {
        try {
            const response = await database.getDocument(process.env.REACT_APP_DB_ID, collectionId, id);
            console.log(response);
            return response;
        } catch (error) {
            toast.error('Error fetching document:', error);
            return null;
        }
    };

    useEffect(() => {
        const storePaymentData1 = async () => {
            try {
                    const response = await database.createDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ELEVEN, id, {
                        notificataionId: id,
                        email: email,
                        emailSender: emailSender,
                        amount:amount
                    });
                    console.log(response);
                    
                    
            } catch (error) {
                console.log(error);
                const response1 = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ELEVEN,[Query.limit(100)]);
                console.log(response1);
                const filteredResponse = response1.documents.filter((user) => {
                    return user.$id === id;
                });
                const response2 = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_SIX,[Query.limit(100)]);
                console.log(response2);
                const filteredResponse2 = response2.documents.filter((user) => {
                    return user.$id === id;
                });
                console.log(filteredResponse2);
                // If documents found
                if (userEmail === email) {
                    // If userEmail matches email and dateforemail and paymentIntentEmail are null, update document
                    if (!filteredResponse[0].dateforemail && !filteredResponse[0].paymentIntentEmail) {
                        const currentDateTime = new Date().toISOString();
                        const response1 = await database.updateDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ELEVEN, id, { dateforemail: currentDateTime, paymentIntentEmail: paymentIntent });
                        console.log(response1);
                    }
                } else if (userEmail === emailSender) {
                    // If userEmail matches emailSender and dateforemailSender and paymentIntentEmailSender are null, update document
                    if (!filteredResponse[0].dateforemailSender && !filteredResponse[0].paymentIntentEmailSender) {
                        const currentDateTime = new Date().toISOString();
                        const response1 = await database.updateDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ELEVEN, id, { dateforemailSender: currentDateTime, paymentIntentEmailSender: paymentIntent })
                        console.log(response1);
                    }
                }
        
                console.log(filteredResponse[0].email);
                setEmail1(filteredResponse[0].email);
                setEmailSender1(filteredResponse[0].emailSender);
                setEmailJob(filteredResponse2[0].youneeda);
                setEmailSenderJob(filteredResponse2[0].Icanprovidethis);
                const date1 = new Date(filteredResponse[0].dateforemail);
                console.log(date1);
                const date = date1.getDate();
                console.log(date);
                const day = date1.toDateString();
                console.log(day);
                const hours = date1.getHours();
                console.log(hours);
                const minute = date1.getMinutes();
                // Create a new date object by adding 14 days to the current date
                const futuredate1 = date1;
                futuredate1.setDate(futuredate1.getDate() + 14);
                const futuredate2 = futuredate1.toLocaleDateString();
                setFututeDate(futuredate2);
                if (hours >= 12) {
                    setAbbrevation("PM");
                }
                else {
                    setAbbrevation("AM");
                }
                setDate(date);
                setDay(day);
                setHour(hours);
                setMinute(minute);
                if (minute < 10) {
                    setMinute(`0${minute}`);
                }

                console.log(response1);

                console.error('Error storing payment data:', error);
            }
        };
        const fetchstoreddata=async ()=>{
            const response1 = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ELEVEN,[Query.limit(100)]);
                    console.log(response1);
            const filteredResponse = response1.documents.filter((user) => {
                return user.$id === id;
            });
            console.log(filteredResponse);
            

        
    
            // If documents found
            if (userEmail === email) {
                // If userEmail matches email and dateforemail and paymentIntentEmail are null, update document
                if (!filteredResponse[0].dateforemail && !filteredResponse[0].paymentIntentEmail) {
                    const currentDateTime = new Date().toISOString();
                    console.log(currentDateTime);
                    const response1 = await database.updateDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ELEVEN, id, { dateforemail: currentDateTime, paymentIntentEmail: paymentIntent });
                    console.log(response1);
                }
            } else if (userEmail === emailSender) {
                // If userEmail matches emailSender and dateforemailSender and paymentIntentEmailSender are null, update document
                if (!filteredResponse[0].dateforemailSender && !filteredResponse[0].paymentIntentEmailSender) {
                    const currentDateTime = new Date().toISOString();
                    const response1 = await database.updateDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ELEVEN, id, { dateforemailSender: currentDateTime, paymentIntentEmailSender: paymentIntent })
                    console.log(response1);
                }
            }
        }
        const call=async ()=>{
            if(email && emailSender)
            {
            await storePaymentData1();
            await fetchstoreddata();
            }
        }

        call();
        
    }, [email, emailSender, id]);

    const generatePDF = async () => {
        const doc = new jsPDF('p', 'pt', 'a4'); // Set document size to A4

        // Fetch and convert images to blobs
        const img1 = await fetch('images/Mask group.png');
        const imgData1 = await img1.blob();

        const img2 = await fetch('images/Footer Design.png');
        const imgData2 = await img2.blob();

        const img3 = await fetch('images/new.jpeg');
        const imgData3 = await img3.blob();

        // Add images to document
        doc.addImage(await createObjectURL(imgData1), 'PNG', -2.18, -9.52, 600, 460, '', 'FAST'); // Adjust dimensions and positions accordingly
        doc.addImage(await createObjectURL(imgData2), 'PNG', 420, 400, 200, 450, '', 'FAST'); // Adjust dimensions and positions accordingly
        doc.addImage(await createObjectURL(imgData3), 'JPEG', 490, 72, 200, 200, '', 'FAST'); // Adjust dimensions and positions accordingly

        // Set font and text color
        doc.setFont('quicksand', 'bold');
        doc.setFontSize(24);
        doc.setTextColor('#FFA500');
        doc.text('SKILLSPHERE', 50, 40); // Adjust position accordingly

        // Set font and text color for Contract Agreement
        doc.setFont('quicksand', 'medium');
        doc.setTextColor('black');
        doc.setFontSize(35);
        doc.text('Contract Agreement', 300, 220, { align: 'center', maxWidth: 500 }); // Adjust position and maxWidth accordingly

        // Draw the black line
        doc.setDrawColor(0); // Set border color to black
        doc.setLineWidth(2); // Set border width
        doc.rect(95, 240, 430, 0); // Draw a black line at y-coordinate 240


        // Center content horizontally and vertically
        const contentWidth = 430; // Width of the content area
        const contentHeight = 595; // Height of the content area
        const textWidth = 0; // Width of the text (empty here, adjust if needed)
        const textHeight = 0; // Height of the text (empty here, adjust if needed)
        const xPosition = (contentWidth - textWidth) / 2 + 135; // Center horizontally
        const yPosition = (contentHeight - textHeight) / 2; // Center vertically

        doc.text('', xPosition, yPosition); // Empty text at centered position

        doc.setFontSize(20);
        doc.text('between Client and Employee', 300, 270, { align: 'center', maxWidth: 500 }); // Adjust position and maxWidth accordingly

        doc.setFont('ramaraja', 'normal');
        doc.setFontSize(20);
        doc.text(`Date:${date}`, 50, 350);
        doc.text(`${day}`, 50, 370);
        doc.text(`${hour}:${minute} ${abbrevation}`, 50, 390);

        doc.setFont('quicksand', 'medium');
        doc.setFontSize(14);
        doc.setTextColor('#000000');

        const text = `This Contract Agreement, effective as of ${futuredate}, establishes the professional 
engagement between ${email1}, designated as ${emailjob}, will provide the service of ${emailsenderjob} to ${emailSender1}. and ${emailSender1} appointed as the ${emailsenderjob} will provide the service of ${emailsenderjob} to ${email}. The project duration spans${date}-${futuredate} days, during which both parties will collaborate to fulfill their respective roles. The agreed-upon compensation stands at ${amount}, with payments facilitated through Stripe.

The parties affirm the receipt of payment in full and commit to delivering the services as outlined within the scope of work. Both parties acknowledge their respective responsibilities and agree to maintain confidentiality regarding any proprietary or sensitive information exchanged during the course of the engagement. This Agreement remains subject to termination by either party with prior written notice. Both parties confirm their understanding and acceptance of the terms set forth herein.`;

        const textLines = doc.splitTextToSize(text, 500); // Split text into lines to fit in the document width
        doc.text(textLines, 50, 450); // Start text at 50px from left, 450px from top

        // Save PDF
        doc.save('contract_agreement.pdf');

        // Generate data URI of the PDF
        const pdfDataUri = doc.output('datauristring');

        const response1 = await uploadPDFToStorage(pdfDataUri);
        console.log(response1);
        if (response1) {
            const URL = 'https://example.com/storage/' + response1;
            console.log(URL);

            const res = await database.updateDocument(
                process.env.REACT_APP_DB_ID,
                process.env.REACT_APP_COLLECTION_ID_ELEVEN,
                id,
                { pdfURL: URL }
            );
            console.log(res);
            navigate("/contractlistpage");
        }

    };

    const createObjectURL = async (blob) => {
        return URL.createObjectURL(blob);
    };





    const uploadPDFToStorage = async (pdfDataUri) => {
        try {
            const blob = dataURItoBlob(pdfDataUri);
            const file = new File([blob], 'contract-agreement.pdf', { type: 'application/pdf' });
            let newid = uuidv4();
            const response = await storage.createFile(process.env.REACT_APP_BUCKET_ID_TWO, newid, file);
            console.log('PDF uploaded successfully:', response);

            console.log(response.$id);

            return newid;
        } catch (error) {
            console.error('Error uploading PDF:', error);
        }
    };

    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    };

    // Function to convert image to base64 data URL
    const getImageBase64 = (imageName) => {
        const images = {
            "Mask group.png": "data:image/png;base64, <BASE64_ENCODED_IMAGE_DATA>",
            "Footer Design.png": "data:image/png;base64, <BASE64_ENCODED_IMAGE_DATA>"
        };
        return images[imageName];
    };

    return (
        <> 
        <div className='box-border   flex justify-center item-center'>{pdfURL && <p>PDF URL: {pdfURL}</p>}
        <Button onClick={generatePDF} className=' text-center font-extrabold hover  text-3xl hover:underline hover:text-blue-600'>Download Contract </Button> </div>
        
        <div className='flex justify-center items-center'>
             <div className="  contract-page relative scale-75 w-[50%] h-842 bg-white-A700 p-8">
      <img src='images/Mask group.png' className=' absolute    left-[-2.18px] top-[-9.52px] transform rotate-6.36 '></img>
 
      {/* SKILLsphere */} 
      <h1 className=" absolute text-orange-500 font-quicksand font-bold text-2xl mb-4">SKILLSPHERE</h1>
      
      {/* Contract Agreement */}
      <h2 className="  font-ramaraja font-medium  mt-52  text-center text-5xl mb-3">Contract Agreement</h2>
      <div className=' w-[430px] border-2 border-black-900 ml-[135px] flex justify-center items-center'>
  {/* Content goes here */}
</div>

      {/* Between Client and Employee */}
      <h3 className="font-ramaraja font-normal mt-4 text-center text-2xl mb-6">between Client and Employee</h3>
      
      {/* Date */}
      <div className="font-quicksand font-semibold text-base mb-4">
        <p>Date:{date}</p>
        <p>{day}</p>
        <p>{hour}:{minute} {abbrevation}</p>
      </div>
      <img src='images/Footer Design.png' className=' absolute w-[220px] ml-[480px] mt-[130px]'></img>
      <img src='images/new.png' className=' absolute w-[200px] mr-[490px] mt-72'></img>
      {/* Contract Content */}
      <p className="font-quicksand font-medium text-sm text-black mb-4">
        This Contract Agreement, effective as of {futuredate}, establishes the
        professional engagement between {email1}, designated as {emailjob}, will
        provide the service of {emailjob} to {emailSender1}, and {emailSender} appointed as the {emailsenderjob} will provide the service of {emailsenderjob} to {email}. The project duration spans{' '}
        {date}-{futuredate} days, during which both parties will collaborate to fulfill their respective
        roles. The agreed-upon compensation stands at {amount}, with payments facilitated through
        Stripe.
      </p>
     
      {/* Additional Terms */}
      <p className="font-quicksand font-medium text-sm text-black mb-4">
        The parties affirm the receipt of payment in full and commit to delivering the services as
        outlined within the scope of work. Both parties acknowledge their respective
        responsibilities and agree to maintain confidentiality regarding any proprietary or sensitive
        information exchanged during the course of the engagement. This Agreement remains subject to
        termination by either party with prior written notice. Both parties confirm their
        understanding and acceptance of the terms set forth herein.
      </p>
    </div></div>

          
    
        </>
    );
};

export default ContractRent;