import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import ProductList from "./ProductList";
import Tips from "./Tips";
import "./styles.css";
import Footer from "./Footer";
import { ShoppingCart, User, Home } from "lucide-react";

function JobBoard() {
    const [activeSection, setActiveSection] = useState("jobs");
    return(
        <div className="job-board">
         <div className="txt-username">
              <h1 className="txt-head" >
                Tocon Youth Job & Advertisement Hub
              </h1>
         </div>
      
      
      <nav className="navbar">
        <button onClick={() => setActiveSection("jobs")}>Job Listings</button>
        <button onClick={() => setActiveSection("products")}>Advertisements</button>
        <button onClick={() => setActiveSection("tips")}>Job Interview & Resume Tips</button>
      </nav>
      
      {activeSection === "jobs" && <JobList />}
      {activeSection === "products" && <ProductList />}
      {activeSection === "tips" && <Tips />}
      <Footer/>
    </div>

    );
    
}

export default JobBoard