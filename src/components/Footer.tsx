const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Rural IA</h3>
            <p className="text-sm text-muted-foreground">
              Rural Hackers ·Anceu Coliving · Ponte Caldelas, Galicia
            </p>
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
