import React, { useState, useEffect } from 'react';
import { account,database,storage } from 'services/appwrite';
import { useNavigate } from 'react-router-dom';
import { Query } from 'appwrite';
const ContractListPage = () => {
    const [contracts, setContracts] = useState([]);
    
  const [userEmail, setUserEmail] = useState('');
  const [isEmailLoaded, setIsEmailLoaded] = useState(false); // Track email loaded state
 const navigate= useNavigate();
    useEffect(() => {
        const fetchUser= async ()=>{
        // Initialize Appwrite SDK
        let res = await account.get("current");
        setUserEmail(res.email);
        console.log(res.email);
        setIsEmailLoaded(true); // Set email loaded state to true
        };
        // Fetch contracts based on the current user when the component mounts
        fetchUser();
        fetchContracts();
    }, [userEmail, isEmailLoaded]);

    // Function to fetch contracts from Appwrite
    const fetchContracts = async () => {
        try {
            const response = await database.listDocuments(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_TEN,[Query.limit(100)]); // Assuming 'contracts' is your collection name
            let filteredUsers = response.documents.filter((user) => {
                return user.email === userEmail || user.emailsender === userEmail;
              });
              console.log(filteredUsers);
            setContracts(filteredUsers); // Assuming the response contains an array of contracts
            const response1 = await database.listDocuments(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_ELEVEN,[Query.limit(100)]); // Assuming 'contracts' is your collection name
            let filteredUsers1 = response1.documents.filter((user) => {
                return user.email === userEmail || user.emailsender === userEmail;
            });
            console.log(filteredUsers1);
            let filteredUsersR=filteredUsers.concat(filteredUsers1);
            console.log(filteredUsersR);
              
            setContracts(filteredUsersR); // Assuming the response contains an array of contracts
            console.log(contracts);

        } catch (error) {
            const response = await database.listDocuments(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_ELEVEN,[Query.limit(100)]); // Assuming 'contracts' is your collection name
            let filteredUsers = response.documents.filter((user) => {
                return user.email === userEmail || user.emailsender === userEmail;
              });
              console.log(filteredUsers);
            setContracts(filteredUsers); // Assuming the response contains an array of contracts
            console.error('Error fetching contracts:', error);
        }
    };

    // Function to download a contract
    const downloadContract = async (contractId) => {
        try {
            console.log(contractId);
            const response = await storage.getFileDownload(process.env.REACT_APP_BUCKET_ID_TWO,contractId.substring(contractId.lastIndexOf("/") + 1)); // Assuming contractId is the file ID
            console.log(response);
            // Create a download link
            console.log(response.href);
            const url = response.href;
            console.log(url);
            
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `contract_${contractId}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading contract:', error);
        }
    };

    return (
      <div className="container mx-auto bg-gray-900 min-h-screen justify-center items-center box-border p-8">
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-5xl font-semibold font-quicksand text-chocolate">Contract List</h1>
    <button 
      className="flex items-center text-white-A700 font-semibold hover:text-gray-300 transition duration-300 ease-in-out"
      onClick={() => navigate('/homepagetwo')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </button>
  </div>
  <table className="min-w-full mt-5 bg-gray-800 rounded-lg overflow-hidden">
    <thead>
      <tr className="border-b border-gray-300">
        <th className="text-left font-quicksand text-white-A700 px-4 py-2">Email</th>
        <th className="text-left font-quicksand text-white-A700 px-4 py-2">Email Sender</th>
        <th className="text-left font-quicksand text-white-A700 px-4 py-2">Notification ID</th>
        <th className="text-left font-quicksand text-white-A700 px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {contracts.map((contract) => (
        <tr 
          key={contract.$id} 
          className="border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          <td className="py-4 px-4 text-gray-300">{contract.email}</td>
          <td className="py-4 px-4 text-gray-300">{contract.emailSender}</td>
          <td className="py-4 px-4 text-gray-300">{contract.notificationId}</td>
          <td className="py-4 px-4">
            <button 
              className="bg-chocolate hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              onClick={() => downloadContract(contract.pdfURL)}
            >
              Download
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    );
};

export default ContractListPage;