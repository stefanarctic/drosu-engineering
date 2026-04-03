import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-chrome-white mb-4">404</h1>
        <p className="text-xl text-steel-gray mb-4">Pagina nu a fost găsită</p>
        <a href="/" className="text-performance-red hover:text-chrome-white underline transition-colors">
          Înapoi la Pagina Principală
        </a>
      </div>
    </div>
  );
};

export default NotFound;
