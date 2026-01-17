import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Gamepad2, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import mascots from "@/assets/mascots.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 min-h-[85vh] flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Text content */}
            <motion.div
              className="flex-1 text-center lg:text-left w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 border-2 border-primary/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
               
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  className="text-gradient-rainbow block mb-2 drop-shadow-lg"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Welcome to
                </motion.span>
                <motion.span
                  className="text-foreground block relative"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Happy Kids World!
                  <motion.span
                    className="absolute -right-4 top-0 text-4xl"
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    🎈
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 font-semibold max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="inline-block animate-bounce">🌟</span> Learn, play, and have fun with us!{" "}
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
                  🌟
                </span>
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/stories">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="text-base md:text-lg px-6 md:px-8 py-6 md:py-7 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-secondary/20 hover:border-secondary/40 group"
                    >
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:rotate-12 transition-transform" />
                      Read Stories
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/games">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="accent"
                      size="lg"
                      className="text-base md:text-lg px-6 md:px-8 py-6 md:py-7 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-accent/20 hover:border-accent/40 group"
                    >
                      <Gamepad2 className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:rotate-12 transition-transform" />
                      Play Games
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/learn">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="success"
                      size="lg"
                      className="text-base md:text-lg px-6 md:px-8 py-6 md:py-7 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-success/20 hover:border-success/40 group"
                    >
                      <GraduationCap className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:rotate-12 transition-transform" />
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Mascots image */}
            <motion.div
              className="flex-1 w-full lg:w-auto relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src={mascots}
                alt="Happy Kids World mascots - a friendly lion, bunny, and bird"
                className="w-full max-w-md lg:max-w-lg mx-auto drop-shadow-2xl relative z-10"
                animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-primary/5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block text-4xl md:text-5xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Can You Do Here?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Explore amazing adventures and learn something new every day!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Read Stories",
                description: "Discover magical tales with cute animals and important lessons!",
                icon: BookOpen,
                color: "gradient-candy",
                link: "/stories",
                emoji: "📚",
              },
              {
                title: "Play Games",
                description: "Fun activities to make you think and smile!",
                icon: Gamepad2,
                color: "gradient-sky",
                link: "/games",
                emoji: "🎮",
              },
              {
                title: "Learn New Things",
                description: "ABCs, numbers, colors, and shapes - learning is fun!",
                icon: GraduationCap,
                color: "gradient-grass",
                link: "/learn",
                emoji: "🎓",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="h-full"
              >
                <Link to={feature.link} className="block h-full group">
                  <motion.div
                    className={`${feature.color} rounded-3xl p-6 md:p-8 text-center shadow-card hover:shadow-float transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden border-4 border-transparent hover:border-white/30`}
                    whileHover={{ scale: 1.05, y: -8, rotate: [0, 1, -1, 0] }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20 blur-xl" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/20 blur-xl" />
                    </div>
                    
                    {/* Emoji decoration */}
                    <motion.div
                      className="absolute top-4 right-4 text-3xl"
                      animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {feature.emoji}
                    </motion.div>

                    <motion.div
                      className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-xl relative z-10 border-4 border-white/50"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                    >
                      <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
                    </motion.div>
                    
                    <h3 className="text-2xl md:text-3xl font-black mb-4 text-white drop-shadow-lg relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/95 font-semibold leading-relaxed relative z-10">
                      {feature.description}
                    </p>
                    
                    {/* Hover arrow */}
                    <motion.div
                      className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Start Your Adventure?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of kids who are learning and having fun every day!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/stories">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
