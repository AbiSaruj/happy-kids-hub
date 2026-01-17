import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Shapes, Palette, Sparkles } from "lucide-react";
import gameDifference from "@/assets/game-difference.png";
import gameShapes from "@/assets/game-shapes.png";
import gameColoring from "@/assets/game-coloring.png";

const games = [
  {
    id: 1,
    title: "Find the Difference",
    icon: Search,
    image: gameDifference,
    instruction: "Can you find 3 differences between these two pictures? Look carefully at every detail!",
    tip: "💡 Tip: Look at the colors, shapes, and small details!",
    color: "gradient-sunny",
  },
  {
    id: 2,
    title: "Match the Shapes",
    icon: Shapes,
    image: gameShapes,
    instruction: "Look at all these colorful shapes! Can you find pairs of the same shape?",
    tip: "💡 Tip: Circles, triangles, squares, and stars - which ones match?",
    color: "gradient-sky",
  },
  {
    id: 3,
    title: "Color the Animal",
    icon: Palette,
    image: gameColoring,
    instruction: "Print this cute elephant and color it with your favorite colors!",
    tip: "💡 Tip: Ask a grown-up to help you print this picture!",
    color: "gradient-grass",
  },
];

const Games = () => {
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
              <span className="text-accent">🎮 Fun Games! 🎮</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground font-semibold">
              Play and have fun while learning!
            </p>
          </motion.div>

          {/* Games Grid */}
          <div className="grid gap-8 md:gap-12">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-card border-4 border-border overflow-hidden shadow-float hover:shadow-playful transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Game Header */}
                    <div className={`${game.color} p-6 flex items-center gap-4`}>
                      <motion.div
                        className="w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <game.icon className="w-8 h-8 text-foreground" />
                      </motion.div>
                      <h2 className="text-2xl md:text-3xl font-black text-primary-foreground">
                        {game.title}
                      </h2>
                      <motion.div
                        className="ml-auto"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Sparkles className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                    </div>

                    {/* Game Content */}
                    <div className="p-6 lg:p-8">
                      <motion.div
                        className="mb-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={game.image}
                          alt={game.title}
                          className="w-full max-w-2xl mx-auto rounded-2xl shadow-card border-4 border-border"
                        />
                      </motion.div>

                      <div className="max-w-2xl mx-auto space-y-4">
                        <motion.div
                          className="bg-muted rounded-2xl p-6"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-lg md:text-xl font-bold text-foreground text-center">
                            {game.instruction}
                          </p>
                        </motion.div>

                        <motion.p
                          className="text-center text-lg font-semibold text-muted-foreground"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {game.tip}
                        </motion.p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Games;
