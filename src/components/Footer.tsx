const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border text-[#014a9b]">
      <div className="container mx-auto px-6">
        {/* Partner Logos Section */}
        <div className="mb-8 pb-8 border-b border-border">
          <h3 className="text-center text-lg font-semibold mb-6">
            Co apoio de
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Column 1: Rural IA logo */}
            <div className="flex justify-center">
              <img 
                src="/ruralia.png" 
                alt="Rural IA" 
                className="h-32 md:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            
            {/* Columns 2-3: Partners logos combined */}
            <div className="md:col-span-2 flex justify-center items-center">
              <img 
                src="/partners-combined.jpeg" 
                alt="Partners" 
                className="w-full max-w-3xl h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Existing Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="https://ruralhackers.com" target="_blank" rel="noopener noreferrer">
              <img src="/rh-logo.svg" alt="Rural Hackers" className="h-16 w-auto" />
            </a>
            <div>
              <h3 className="text-2xl font-bold mb-2">Rural IA</h3>
              <p className="text-sm ">
                Rural Hackers · Anceu Coliving · Ponte Caldelas, Galicia
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm  mb-2">
              28 Novembro - 1 Decembro
            </p>
            <p className="text-sm ">
              © {new Date().getFullYear()} Rural IA. Feito con ❤️ por <a href="https://ruralhackers.com" target="_blank" rel="noopener noreferrer" className=" hover:underline">Rural Hackers</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
