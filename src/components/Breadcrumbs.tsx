import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    path?: string;
  }[];
  onNavigate: (path: string) => void;
}

const navLinkClass = 'hover:text-[#183D32] transition truncate max-w-[150px]';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const handleHome = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs text-[#78847D] flex-wrap gap-1.5">
      <a href="/" onClick={handleHome} className="hover:text-[#183D32] flex items-center gap-1 transition">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </a>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-[#CBD5CD] shrink-0" />
            {isLast || !item.path ? (
              <span aria-current={isLast ? 'page' : undefined} className="font-bold text-[#183D32] truncate max-w-[200px] sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path!);
                }}
                className={navLinkClass}
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
