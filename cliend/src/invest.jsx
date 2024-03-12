import React, { useState } from 'react';
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
// import './investPage.css'; // Import your CSS file for styling

function InvestPage() {
  // State for input field values
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  // Event handlers for input changes
  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setInput3(event.target.value);
  };

  // Event handler for button clicks
  const handleButtonClick = (inputValue) => {
    alert(`Button clicked with input value: ${inputValue}`);
  };

  return (
    <div className="invest-page-container" >
      <h2>Invest Page</h2>
      <ConnectWallet />

      <div className="input-section">
        <input
          type="text"
          placeholder="Naive Token Value For Invest"
          value={input1}
          onChange={handleInputChange1}
        />
        <br />
        <input
          type="text"
          placeholder="Naive Token Value For Mortgage"
          value={input2}
          onChange={handleInputChange2}
        />
        <br />
        <input
          type="text"
          placeholder="Amount To Pay EMI"
          value={input3}
          onChange={handleInputChange3}
        />
      </div>

      <div className="button-section">
        <Web3Button
          contractAddress="0xf3f04834128fA806AF03b19458A35fEf4Cfb580C"
          action={async(contra) => {
            await contra.call("payEMI", [input3]);
          }}
        >
          Invest
        </Web3Button>
        <Web3Button
          contractAddress="0xf3f04834128fA806AF03b19458A35fEf4Cfb580C"
          action={(contra) => {
            contra.call("payEMI", [input3]);
          }}
        >
          Mortgage Ether
        </Web3Button>
        <Web3Button
          contractAddress="0xf3f04834128fA806AF03b19458A35fEf4Cfb580C"
          action={(contra) => {
            contra.call("payEMI", [input3]);
          }}
        >
          PayEMI
        </Web3Button>
      </div>
    </div>
  );
}

export default InvestPage;
