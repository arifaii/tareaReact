import React from 'react'

const CustomFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="footer">
      <p>&copy; {currentYear} Catálogo Geek. Todos los derechos reservados.</p>
    </div>
  )
}

export default CustomFooter
