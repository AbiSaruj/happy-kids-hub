import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="bg-card border-t-4 border-primary py-6 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p
          className="text-lg md:text-xl font-bold text-foreground flex items-center justify-center gap-2"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Made for Kids with
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-secondary fill-secondary" />
          </motion.span>
        </motion.p>
        <p className="text-muted-foreground mt-2">
          © 2024 Happy Kids World
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
