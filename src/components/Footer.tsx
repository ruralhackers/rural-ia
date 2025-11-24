const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Partner Logos Section */}
        <div className="mb-8 pb-8 border-b border-border">
          <h3 className="text-center text-lg font-semibold mb-6 text-muted-foreground">
            Con el apoyo de
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
            
            {/* Columns 2-3: Partners logos */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex justify-center">
                <img 
                  src="/logo-partners.jpeg" 
                  alt="Partners" 
                  className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/logo-partners-2.jpeg" 
                  alt="Partners" 
                  className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
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
              <p className="text-sm text-muted-foreground">
                Rural Hackers · Anceu Coliving · Ponte Caldelas, Galicia
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">
              28 Novembro - 1 Decembro
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rural IA. Feito con ❤️ por <a href="https://ruralhackers.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Rural Hackers</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
