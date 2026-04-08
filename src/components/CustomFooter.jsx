import React from "react";

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Catálogo Geek. Todos los derechos reservados.</p>
    </footer>
  );
};

export default CustomFooter;
