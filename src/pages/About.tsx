import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sparkles, BookOpen, Gamepad2, GraduationCap } from "lucide-react";
import aboutKids from "@/assets/about-kids.png";

const features = [
  {
    icon: BookOpen,
    title: "Fun Stories",
    description: "Wonderful tales that teach good values",
    color: "bg-secondary",
  },
  {
    icon: Gamepad2,
    title: "Cool Games",
    description: "Activities that make learning fun",
    color: "bg-accent",
  },
  {
    icon: GraduationCap,
    title: "Easy Learning",
    description: "ABCs, numbers, colors, and more!",
    color: "bg-success",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-gradient-rainbow">About Us</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground font-semibold">
              Welcome to our happy world! 🌈
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="gradient-rainbow border-0 overflow-hidden shadow-float mb-12">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Image */}
                  <motion.div
                    className="lg:w-1/2 p-6 lg:p-8"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={aboutKids}
                      alt="Happy children learning together"
                      className="w-full rounded-3xl shadow-lg"
                    />
                  </motion.div>

                  {/* Text */}
                  <div className="lg:w-1/2 p-6 lg:p-8">
                    <div className="bg-card/95 backdrop-blur rounded-3xl p-6 lg:p-8">
                      <motion.div
                        className="flex items-center gap-3 mb-6"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-10 h-10 text-primary" />
                        <h2 className="text-3xl md:text-4xl font-black text-foreground">
                          Happy Kids World
                        </h2>
                      </motion.div>

                      <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
                        <Star className="inline w-6 h-6 text-primary mr-2" />
                        Happy Kids World is a <strong>fun learning website</strong> made just for children like you!
                      </p>

                      <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
                        <Heart className="inline w-6 h-6 text-secondary mr-2" />
                        Our goal is to help kids <strong>learn happily</strong> through stories, games, and activities.
                      </p>

                      <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                        <Sparkles className="inline w-6 h-6 text-accent mr-2" />
                        We believe that <strong>learning should be fun</strong>, colorful, and exciting for everyone!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.h2
            className="text-3xl md:text-4xl font-black text-center mb-8 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We Offer 🎁
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-card border-4 border-border hover:border-primary shadow-card hover:shadow-float transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-20 h-20 ${feature.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-10 h-10 text-card" />
                    </motion.div>
                    <h3 className="text-xl font-black text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-semibold">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Thank You Message */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-card rounded-3xl px-8 py-6 shadow-float border-4 border-primary"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-2xl md:text-3xl font-black text-foreground flex items-center justify-center gap-3">
                Thank you for visiting!
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  💖
                </motion.span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
