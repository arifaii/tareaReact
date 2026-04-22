function CustomFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Catálogo — React + TypeScript</p>
    </footer>
  );
}

export default CustomFooter;
