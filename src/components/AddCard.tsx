import React, { useState } from "react";

const InboxPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle the inbox */}
      

      <button onClick={toggleInbox} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-9 px-12 py-2 flex-1 bg-[#B88E2F] hover:bg-[#A67B1F] text-white">
                Add To Cart
              </button>
      {/* Inbox panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-350px",
          width: "350px",
          height: "40%",
          backgroundColor: "#f8f9fa",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          transition: "right 0.3s ease",
          padding: "20px",
        }}
      >


  
      {/* Header */}
      <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>Shopping Cart</h2>

      {/* Item Section */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img
          src="/home/AsgaardSofa.png"
          alt="Asgaard Sofa"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "8px",
            marginRight: "15px",
           background:" #FBEBB5"
          }}
        />
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: "16px", margin: "0" }}>Asgaard Sofa</h4>
          <p style={{ margin: "5px 0", color: "#888", fontSize: "14px" }}>
            1 x <span style={{ color: "#000" }}>Rs. 250,000.00</span>
          </p>
        </div>
        <button
          style={{
            background: "transparent",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            color: "#888",
          }}
        >
          ×
        </button>
      </div>

      {/* Subtotal */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          fontSize: "16px",

        }}
      >
        <span>Subtotal</span>
        <span style={{ fontWeight: "bold", color: "#d4a200" }}>Rs. 250,000.00</span>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "15px" }}>
      <button className="font-Poppins text-black border-2 border-black px-8 rounded-full bg-white py-1">View cart</button>
 <button className="font-Poppins text-black border-2 border-black px-8 rounded-full bg-white py-1"> Check Out</button>

      </div>
    </div>
        
      </div>
  
  );
};

export default InboxPanel;





// <div className="flex">
        
// <h1 className="left-0">Shopping Cart</h1>



// <img className="right-0" src="/heart/exitlogo.png" alt="logo" />

// </div>
// <div></div>
// <div></div>
// <div className="flex gap-2">
// <button className="font-Poppins text-black border-2 border-black px-8 rounded-full bg-white py-1">View cart</button>
// <button className="font-Poppins text-black border-2 border-black px-8 rounded-full bg-white py-1"> Check Out</button>

// </div>
// </div>