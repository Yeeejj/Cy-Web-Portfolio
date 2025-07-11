import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.href.substring(1),
        element: document.getElementById(section.href.substring(1))
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      setActiveSection(currentSection ? currentSection.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap gap-1">
        {sections.map((section) => (
          <NavigationMenuItem key={section.name}>
            <Link
              to={section.href}
              className={cn(
                "group inline-flex h-9 sm:h-10 w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:text-forest focus:text-forest focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                activeSection === section.href.substring(1) ? "text-forest font-bold" : "text-charcoal/70"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(section.href)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {section.name}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;