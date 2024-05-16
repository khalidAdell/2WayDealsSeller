function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-center py-4 text-lg font-medium text-white mt-8">
      <p>All rights reserved © in {currentYear}</p>
    </footer>
  );
}

export default Footer;
