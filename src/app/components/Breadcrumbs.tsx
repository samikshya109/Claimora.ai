import { useLocation, Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/upload": "Upload evidence",
  "/analyze": "Analysis",
  "/results": "Results",
  "/heatmap": "Evidence heatmap",
  "/gaps": "Evidence gaps",
  "/memo": "Case memo",
};

const routeOrder = ["/", "/upload", "/analyze", "/results", "/heatmap", "/gaps", "/memo"];

export function Breadcrumbs() {
  const location = useLocation();
  const currentPath = location.pathname;

  const currentIndex = routeOrder.indexOf(currentPath);
  const breadcrumbRoutes = routeOrder.slice(0, currentIndex + 1);

  if (currentPath === "/" || currentPath === "/upload") {
    return null;
  }

  return (
    <nav className="bg-white border-b border-[#e5e7eb] px-4 sm:px-6 py-2 sm:py-3" aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 sm:gap-2 text-sm max-w-6xl mx-auto overflow-x-auto scrollbar-none">
        {breadcrumbRoutes.map((route, index) => {
          const isLast = index === breadcrumbRoutes.length - 1;
          const label = routeLabels[route];

          return (
            <li key={route} className="flex items-center gap-2 whitespace-nowrap">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-[#9ca3af]" />
              )}
              {isLast ? (
                <span className="text-[#0d9488] font-semibold">
                  {label}
                </span>
              ) : (
                <Link
                  to={route}
                  className="text-[#6b7280] hover:text-[#0d9488] transition-colors font-medium"
                >
                  {route === "/" ? <Home className="w-4 h-4" /> : label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
