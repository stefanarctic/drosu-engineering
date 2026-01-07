import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems = [
    { name: "Acasă", url: "/" },
    ...items
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-steel-gray">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {index === 0 ? (
                <Link 
                  to={item.url} 
                  className="flex items-center hover:text-chrome-white transition-colors"
                  aria-label="Acasă"
                >
                  <Home className="w-4 h-4" />
                </Link>
              ) : (
                <>
                  <ChevronRight className="w-4 h-4 mx-2 text-carbon-gray" />
                  {isLast ? (
                    <span className="text-chrome-white font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link 
                      to={item.url} 
                      className="hover:text-chrome-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
