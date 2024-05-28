
// /* global BigInt */
// import React, { useState } from 'react';
// import {create} from 'ipfs-http-client';
// import Web3 from 'web3';
// import MedicalRecordContract from './MedicalRecord.json';

// const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' });
// const web3 = new Web3('http://localhost:7545');

// function App() {
//   const [ipfsHash, setIpfsHash] = useState('');
//   const [buffer, setBuffer] = useState(null);

//   const handleChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new window.FileReader();
  
//     reader.onloadend = () => {
//       const binaryString = reader.result; // Get the binary string
//       const buffer = new Uint8Array(binaryString.length); // Create a Uint8Array buffer
//       for (let i = 0; i < binaryString.length; i++) {
//         buffer[i] = binaryString.charCodeAt(i); // Populate the buffer with the binary string
//       }
//       setBuffer(buffer); // Set the buffer state
//     };
  
//     reader.readAsBinaryString(file); // Read the file as a binary string
//   };

  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const ipfsResult = await ipfs.add(buffer);
//     const ipfsHash = ipfsResult.path;
  
//     const accounts = await web3.eth.getAccounts();
//     const networkId = await web3.eth.net.getId();
//     const deployedNetwork = MedicalRecordContract.networks[networkId];
//     const contractInstance = new web3.eth.Contract(
//       MedicalRecordContract.abi,
//       deployedNetwork && deployedNetwork.address
//     );
  
//     const gas = await contractInstance.methods.addRecord(ipfsHash).estimateGas({ from: accounts[0] });
//     console.log('Estimated gas:', gas);
  
//     const gasLimit = BigInt(gas) + BigInt(100000); // Convert gas to BigInt and add buffer
  
//     await contractInstance.methods.addRecord(ipfsHash).send({ from: accounts[0], gas: gasLimit.toString() });
//     setIpfsHash(ipfsHash);
//   };
  

//   return (
//     <div className="App">
//       <h1>Medical Record DApp</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleChange} />
//         <button type="submit">Upload</button>
//       </form>
//       {ipfsHash && (
//         <div>
//           <p>IPFS Hash: {ipfsHash}</p>
//           <a href={`https://ipfs.io/ipfs/${ipfsHash}`} target="_blank" rel="noopener noreferrer">View on IPFS</a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// /* global BigInt */
// import React, { useState } from 'react';
// import { create } from 'ipfs-http-client';
// import Web3 from 'web3';
// import MedicalRecordContract from './MedicalRecord.json';



// const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' });
// const web3 = new Web3('http://localhost:7545');

// function App() {
//   const [ipfsHash, setIpfsHash] = useState('');
//   const [buffer, setBuffer] = useState(null);
//   const [uploadSuccess, setUploadSuccess] = useState(false);
//   const [documentRetrieved, setDocumentRetrieved] = useState(false);
//   const [documentUrl, setDocumentUrl] = useState('');

//   const handleChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new window.FileReader();
  
//     reader.onloadend = () => {
//       const binaryString = reader.result; // Get the binary string
//       const buffer = new Uint8Array(binaryString.length); // Create a Uint8Array buffer
//       for (let i = 0; i < binaryString.length; i++) {
//         buffer[i] = binaryString.charCodeAt(i); // Populate the buffer with the binary string
//       }
//       setBuffer(buffer); // Set the buffer state
//     };
  
//     reader.readAsBinaryString(file); // Read the file as a binary string
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const ipfsResult = await ipfs.add(buffer);
//     const ipfsHash = ipfsResult.path;
  
//     const accounts = await web3.eth.getAccounts();
//     const networkId = await web3.eth.net.getId();
//     const deployedNetwork = MedicalRecordContract.networks[networkId];
//     const contractInstance = new web3.eth.Contract(
//       MedicalRecordContract.abi,
//       deployedNetwork && deployedNetwork.address
//     );
  
//     const gas = await contractInstance.methods.addRecord(ipfsHash).estimateGas({ from: accounts[0] });
//     console.log('Estimated gas:', gas);
  
//     const gasLimit = BigInt(gas) + BigInt(100000); // Convert gas to BigInt and add buffer
  
//     await contractInstance.methods.addRecord(ipfsHash).send({ from: accounts[0], gas: gasLimit.toString() });
//     setIpfsHash(ipfsHash);
//     setUploadSuccess(true);
//   };

//   const retrieveDocument = async () => {
//     const response = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
//     const blob = await response.blob();
//     const url = URL.createObjectURL(blob);
//     setDocumentUrl(url);
//     setDocumentRetrieved(true);
//   };

//   return (
//     <div className="App">
//       <h1>Medical Record DApp</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleChange} />
//         <button type="submit">Upload</button>
//       </form>
//       {uploadSuccess && (
//         <p>Document uploaded successfully! <button onClick={retrieveDocument}>Retrieve Document</button></p>
//       )}
//       {documentRetrieved && (
//         <div>
//           <p>Document retrieved from IPFS</p>
//           <iframe src={documentUrl} title="Document" width="100%" height="500px"></iframe>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
/* global BigInt */
// import React, { useState } from 'react';
// import { create } from 'ipfs-http-client';
// import Web3 from 'web3';
// import MedicalRecordContract from './MedicalRecord.json';
// import './App.css';


// const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' });
// const web3 = new Web3('http://localhost:7545');

// function App() {
//   const [ipfsHash, setIpfsHash] = useState('');
//   const [buffer, setBuffer] = useState(null);
//   const [uploadSuccess, setUploadSuccess] = useState(false);
//   const [documentRetrieved, setDocumentRetrieved] = useState(false);
//   const [documentUrl, setDocumentUrl] = useState('');

//   const handleChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new window.FileReader();
  
//     reader.onloadend = () => {
//       const binaryString = reader.result; // Get the binary string
//       const buffer = new Uint8Array(binaryString.length); // Create a Uint8Array buffer
//       for (let i = 0; i < binaryString.length; i++) {
//         buffer[i] = binaryString.charCodeAt(i); // Populate the buffer with the binary string
//       }
//       setBuffer(buffer); // Set the buffer state
//     };
  
//     reader.readAsBinaryString(file); // Read the file as a binary string
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const ipfsResult = await ipfs.add(buffer);
//     const ipfsHash = ipfsResult.path;
  
//     const accounts = await web3.eth.getAccounts();
//     const networkId = await web3.eth.net.getId();
//     const deployedNetwork = MedicalRecordContract.networks[networkId];
//     const contractInstance = new web3.eth.Contract(
//       MedicalRecordContract.abi,
//       deployedNetwork && deployedNetwork.address
//     );
  
//     const gas = await contractInstance.methods.addRecord(ipfsHash).estimateGas({ from: accounts[0] });
//     console.log('Estimated gas:', gas);
  
//     const gasLimit = BigInt(gas) + BigInt(100000); // Convert gas to BigInt and add buffer
  
//     await contractInstance.methods.addRecord(ipfsHash).send({ from: accounts[0], gas: gasLimit.toString() });
//     setIpfsHash(ipfsHash);
//     setUploadSuccess(true);
//   };

//   const retrieveDocument = async () => {
//     const response = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
//     const blob = await response.blob();
//     const url = URL.createObjectURL(blob);
//     setDocumentUrl(url);
//     setDocumentRetrieved(true);
//   };

//   return (
//     <div className="App">
//       <h1>Document Record DApp</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleChange} id='input'/>
//         <button type="submit">Upload</button>
//       </form>
//       {uploadSuccess && (
//         <p>
//           Document uploaded successfully! <br></br> IPFS Hash: {ipfsHash} <br></br>
//           <button onClick={retrieveDocument}>Retrieve Document</button>
//         </p>
//       )}
//       {documentRetrieved && (
//         <div>
//           <p>Document retrieved from IPFS</p>
//           <iframe src={documentUrl} title="Document" width="100%" height="500px"></iframe>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { create } from 'ipfs-http-client';
import Web3 from 'web3';
import MedicalRecordContract from './MedicalRecord.json';

import './App.css'; // Import the CSS file

const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' });
const web3 = new Web3('http://localhost:7545');

function App() {
  const [ipfsHash, setIpfsHash] = useState('');
  const [buffer, setBuffer] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [documentRetrieved, setDocumentRetrieved] = useState(false);
  const [documentUrl, setDocumentUrl] = useState('');

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new window.FileReader();
  
    reader.onloadend = () => {
      const binaryString = reader.result; // Get the binary string
      const buffer = new Uint8Array(binaryString.length); // Create a Uint8Array buffer
      for (let i = 0; i < binaryString.length; i++) {
        buffer[i] = binaryString.charCodeAt(i); // Populate the buffer with the binary string
      }
      setBuffer(buffer); // Set the buffer state
    };
  
    reader.readAsBinaryString(file); // Read the file as a binary string
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const ipfsResult = await ipfs.add(buffer);
    const ipfsHash = ipfsResult.path;
  
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = MedicalRecordContract.networks[networkId];
    const contractInstance = new web3.eth.Contract(
      MedicalRecordContract.abi,
      deployedNetwork && deployedNetwork.address
    );
  
    const gas = await contractInstance.methods.addRecord(ipfsHash).estimateGas({ from: accounts[0] });
    console.log('Estimated gas:', gas);
  
    const gasLimit = BigInt(gas) + BigInt(100000); // Convert gas to BigInt and add buffer
  
    await contractInstance.methods.addRecord(ipfsHash).send({ from: accounts[0], gas: gasLimit.toString() });
    setIpfsHash(ipfsHash);
    setUploadSuccess(true);
  };

  const retrieveDocument = async () => {
    const response = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDocumentUrl(url);
    setDocumentRetrieved(true);
  };

  return (
    <div className="container">
      <img src= "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-Pic.png" alt="Left Logo" className="logo-left" />
      <div className="App">
        <h1>Document Record DApp</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleChange} />
          <button type="submit">Upload</button>
        </form>
        {uploadSuccess && (
          <p>
            <strong>Document uploaded successfully!</strong> <br /> IPFS Hash: {ipfsHash} <br />
            <br></br>
            <button onClick={retrieveDocument}>Retrieve Document</button>
          </p>
        )}
        {documentRetrieved && (
          <div>
            <p>
              <strong>Document retrieved from IPFS</strong>
            </p>
            <iframe src={documentUrl} title="Document" width="100%" height="500px"></iframe>
          </div>
        )}
      </div>
      <img src="https://seeklogo.com/images/I/ipfs-logo-986C769021-seeklogo.com.png" alt="Right Logo" className="logo-right" />
    </div>
  );
}

export default App;












// /* global BigInt */
// import React, { useState } from 'react';
// import { create } from 'ipfs-http-client';
// import Web3 from 'web3';
// import MedicalRecordContract from './MedicalRecord.json';

// const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' });
// const web3 = new Web3('http://localhost:7545');

// function App() {
//   const [ipfsHash, setIpfsHash] = useState('');
//   const [buffer, setBuffer] = useState(null);
//   const [uploaded, setUploaded] = useState(false);
//   const [retrievedData, setRetrievedData] = useState('');
//   const [retrieveHash, setRetrieveHash] = useState('');
//   const [retrieving, setRetrieving] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new window.FileReader();
  
//     reader.onloadend = () => {
//       const binaryString = reader.result; // Get the binary string
//       const buffer = new Uint8Array(binaryString.length); // Create a Uint8Array buffer
//       for (let i = 0; i < binaryString.length; i++) {
//         buffer[i] = binaryString.charCodeAt(i); // Populate the buffer with the binary string
//       }
//       setBuffer(buffer); // Set the buffer state
//     };
  
//     reader.readAsBinaryString(file); // Read the file as a binary string
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const ipfsResult = await ipfs.add(buffer);
//     const ipfsHash = ipfsResult.path;
  
//     const accounts = await web3.eth.getAccounts();
//     const networkId = await web3.eth.net.getId();
//     const deployedNetwork = MedicalRecordContract.networks[networkId];
//     const contractInstance = new web3.eth.Contract(
//       MedicalRecordContract.abi,
//       deployedNetwork && deployedNetwork.address
//     );
  
//     const gas = await contractInstance.methods.addRecord(ipfsHash).estimateGas({ from: accounts[0] });
//     console.log('Estimated gas:', gas);
  
//     const gasLimit = BigInt(gas) + BigInt(100000); // Convert gas to BigInt and add buffer
  
//     await contractInstance.methods.addRecord(ipfsHash).send({ from: accounts[0], gas: gasLimit.toString() });
//     setIpfsHash(ipfsHash);
//     setUploaded(true);
//     setError('');
//   };

//   const handleRetrieve = async (event) => {
//     event.preventDefault();
//     setRetrieving(true);
//     try {
//       const retrievedResult = await ipfs.get(retrieveHash);
//       const retrievedData = retrievedResult.toString('utf-8');
//       setRetrievedData(retrievedData);
//       setError('');
//     } catch (err) {
//       setError('Error retrieving data from IPFS');
//       console.error(err);
//     } finally {
//       setRetrieving(false);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Medical Record DApp</h1>
      
//       {/* Upload Medical Data Section */}
//       <section>
//         <h2>Upload Medical Data</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="file" onChange={handleChange} />
//           <button type="submit">Upload</button>
//         </form>
//         {uploaded && (
//           <div>
//             <p>IPFS Hash: {ipfsHash}</p>
//             <p>Confirmation: Medical data uploaded successfully!</p>
//             <a href={`https://ipfs.io/ipfs/${ipfsHash}`} target="_blank" rel="noopener noreferrer">View on IPFS</a>
//           </div>
//         )}
//       </section>
      
//       {/* Retrieve Medical Data Section */}
//       <section>
//         <h2>Retrieve Medical Data</h2>
//         <form onSubmit={handleRetrieve}>
//           <input
//             type="text"
//             placeholder="Enter IPFS hash"
//             value={retrieveHash}
//             onChange={(e) => setRetrieveHash(e.target.value)}
//           />
//           <button type="submit" disabled={retrieving}>Retrieve</button>
//         </form>
//         {retrieving && <p>Retrieving data...</p>}
//         {retrievedData && (
//           <div>
//             <p>Document retrieved from IPFS:</p>
//             {/* Display the retrieved data here, e.g., using an iframe for documents */}
//             <iframe src={`data:text/plain;base64,${btoa(retrievedData)}`} width="100%" height="300px"></iframe>
//           </div>
//         )}
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </section>
      
//     </div>
//   );
// }

// export default App;



