import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Gamepad2, GraduationCap, Sparkles, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import mascots from "@/assets/mascots.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Floating decorations */}
        <motion.div
          className="absolute top-10 left-10 text-primary"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Star className="w-12 h-12 fill-primary" />
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-secondary"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-accent"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        >
          <Star className="w-8 h-8 fill-accent" />
        </motion.div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-gradient-rainbow">Welcome to</span>
                <br />
                <motion.span
                  className="text-foreground"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Happy Kids World!
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                🌟 Learn, play, and have fun with us! 🌟
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/stories">
                  <Button variant="secondary" size="lg">
                    <BookOpen className="w-6 h-6" />
                    Read Stories
                  </Button>
                </Link>
                <Link to="/games">
                  <Button variant="accent" size="lg">
                    <Gamepad2 className="w-6 h-6" />
                    Play Games
                  </Button>
                </Link>
                <Link to="/learn">
                  <Button variant="success" size="lg">
                    <GraduationCap className="w-6 h-6" />
                    Start Learning
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Mascots image */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src={mascots}
                alt="Happy Kids World mascots - a friendly lion, bunny, and bird"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Can You Do Here? 🎉
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Read Stories",
                description: "Discover magical tales with cute animals and important lessons!",
                icon: BookOpen,
                color: "gradient-candy",
                link: "/stories",
              },
              {
                title: "Play Games",
                description: "Fun activities to make you think and smile!",
                icon: Gamepad2,
                color: "gradient-sky",
                link: "/games",
              },
              {
                title: "Learn New Things",
                description: "ABCs, numbers, colors, and shapes - learning is fun!",
                icon: GraduationCap,
                color: "gradient-grass",
                link: "/learn",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={feature.link}>
                  <motion.div
                    className={`${feature.color} rounded-3xl p-8 text-center shadow-card hover:shadow-float transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-card rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <feature.icon className="w-10 h-10 text-foreground" />
                    </motion.div>
                    <h3 className="text-2xl font-black mb-3 text-primary-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-primary-foreground/80 font-semibold">
                      {feature.description}
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
