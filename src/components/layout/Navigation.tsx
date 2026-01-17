import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, BookOpen, Gamepad2, GraduationCap, Users } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home, color: "bg-primary" },
  { to: "/stories", label: "Stories", icon: BookOpen, color: "bg-secondary" },
  { to: "/games", label: "Games", icon: Gamepad2, color: "bg-accent" },
  { to: "/learn", label: "Learn", icon: GraduationCap, color: "bg-success" },
  { to: "/about", label: "About Us", icon: Users, color: "bg-muted" },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md shadow-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.to}>
                  <motion.div
                    className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-lg transition-all duration-300 ${
                      isActive
                        ? `${item.color} text-primary-foreground shadow-playful scale-105`
                        : "bg-background text-foreground hover:scale-105 border-2 border-border hover:border-primary"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
