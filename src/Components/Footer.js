import React from "react";

// Footer component
function Footer({ year }) {
    return (
      <div className="footer">
        <p>&copy; {year} My Blog</p>
      </div>
    );
  }

  export default Footer