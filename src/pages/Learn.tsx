import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const alphabet = [
  { letter: "A", word: "Apple", emoji: "🍎" },
  { letter: "B", word: "Ball", emoji: "⚽" },
  { letter: "C", word: "Cat", emoji: "🐱" },
  { letter: "D", word: "Dog", emoji: "🐕" },
  { letter: "E", word: "Elephant", emoji: "🐘" },
  { letter: "F", word: "Fish", emoji: "🐟" },
  { letter: "G", word: "Grapes", emoji: "🍇" },
  { letter: "H", word: "House", emoji: "🏠" },
  { letter: "I", word: "Ice cream", emoji: "🍦" },
  { letter: "J", word: "Juice", emoji: "🧃" },
  { letter: "K", word: "Kite", emoji: "🪁" },
  { letter: "L", word: "Lion", emoji: "🦁" },
  { letter: "M", word: "Moon", emoji: "🌙" },
  { letter: "N", word: "Nest", emoji: "🪺" },
  { letter: "O", word: "Orange", emoji: "🍊" },
  { letter: "P", word: "Penguin", emoji: "🐧" },
  { letter: "Q", word: "Queen", emoji: "👑" },
  { letter: "R", word: "Rainbow", emoji: "🌈" },
  { letter: "S", word: "Sun", emoji: "☀️" },
  { letter: "T", word: "Tree", emoji: "🌳" },
  { letter: "U", word: "Umbrella", emoji: "☂️" },
  { letter: "V", word: "Violin", emoji: "🎻" },
  { letter: "W", word: "Whale", emoji: "🐋" },
  { letter: "X", word: "X-ray", emoji: "🩻" },
  { letter: "Y", word: "Yo-yo", emoji: "🪀" },
  { letter: "Z", word: "Zebra", emoji: "🦓" },
];

const numbers = [
  { number: 1, word: "One", emoji: "1️⃣", visual: "🌟" },
  { number: 2, word: "Two", emoji: "2️⃣", visual: "🌟🌟" },
  { number: 3, word: "Three", emoji: "3️⃣", visual: "🌟🌟🌟" },
  { number: 4, word: "Four", emoji: "4️⃣", visual: "🌟🌟🌟🌟" },
  { number: 5, word: "Five", emoji: "5️⃣", visual: "🌟🌟🌟🌟🌟" },
  { number: 6, word: "Six", emoji: "6️⃣", visual: "🌟🌟🌟🌟🌟🌟" },
  { number: 7, word: "Seven", emoji: "7️⃣", visual: "🌟🌟🌟🌟🌟🌟🌟" },
  { number: 8, word: "Eight", emoji: "8️⃣", visual: "🌟🌟🌟🌟🌟🌟🌟🌟" },
  { number: 9, word: "Nine", emoji: "9️⃣", visual: "🌟🌟🌟🌟🌟🌟🌟🌟🌟" },
  { number: 10, word: "Ten", emoji: "🔟", visual: "🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟" },
];

const colors = [
  { name: "Red", hex: "#EF4444", emoji: "🔴" },
  { name: "Orange", hex: "#F97316", emoji: "🟠" },
  { name: "Yellow", hex: "#EAB308", emoji: "🟡" },
  { name: "Green", hex: "#22C55E", emoji: "🟢" },
  { name: "Blue", hex: "#3B82F6", emoji: "🔵" },
  { name: "Purple", hex: "#A855F7", emoji: "🟣" },
  { name: "Pink", hex: "#EC4899", emoji: "💗" },
  { name: "Brown", hex: "#A16207", emoji: "🟤" },
];

const shapes = [
  { name: "Circle", emoji: "⭕", description: "Round like a ball!" },
  { name: "Square", emoji: "⬜", description: "Four equal sides!" },
  { name: "Triangle", emoji: "🔺", description: "Three sides and corners!" },
  { name: "Star", emoji: "⭐", description: "Shiny and pointy!" },
  { name: "Heart", emoji: "❤️", description: "Full of love!" },
  { name: "Diamond", emoji: "💎", description: "Sparkly and special!" },
];

const Learn = () => {
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
              <span className="text-success">📖 Let's Learn! 📖</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground font-semibold">
              Learning is fun and easy!
            </p>
          </motion.div>

          {/* Learning Tabs */}
          <Tabs defaultValue="alphabet" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8 bg-transparent h-auto p-0">
              {[
                { value: "alphabet", label: "🔤 Alphabet", color: "gradient-sunny" },
                { value: "numbers", label: "🔢 Numbers", color: "gradient-sky" },
                { value: "colors", label: "🎨 Colors", color: "gradient-candy" },
                { value: "shapes", label: "🔷 Shapes", color: "gradient-grass" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`px-6 py-3 rounded-full text-lg font-bold data-[state=active]:${tab.color} data-[state=active]:text-primary-foreground data-[state=active]:shadow-playful transition-all duration-300 hover:scale-105`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Alphabet Tab */}
            <TabsContent value="alphabet">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4"
              >
                {alphabet.map((item, index) => (
                  <motion.div
                    key={item.letter}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  >
                    <Card className="bg-card border-4 border-primary hover:border-secondary shadow-card hover:shadow-float transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <p className="text-4xl md:text-5xl font-black text-primary mb-2">
                          {item.letter}
                        </p>
                        <p className="text-3xl mb-1">{item.emoji}</p>
                        <p className="text-sm font-bold text-foreground">{item.word}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Numbers Tab */}
            <TabsContent value="numbers">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {numbers.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="bg-card border-4 border-accent hover:border-success shadow-card hover:shadow-float transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <p className="text-5xl md:text-6xl font-black text-accent mb-2">
                          {item.number}
                        </p>
                        <p className="text-xl font-bold text-foreground mb-2">{item.word}</p>
                        <p className="text-lg">{item.visual}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Colors Tab */}
            <TabsContent value="colors">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              >
                {colors.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Card
                      className="border-4 border-card shadow-card hover:shadow-float transition-all duration-300 overflow-hidden"
                      style={{ backgroundColor: item.hex }}
                    >
                      <CardContent className="p-6 text-center">
                        <p className="text-5xl mb-3">{item.emoji}</p>
                        <div className="bg-card/90 rounded-xl py-2 px-4">
                          <p className="text-xl font-black text-foreground">{item.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Shapes Tab */}
            <TabsContent value="shapes">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {shapes.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Card className="bg-card border-4 border-success hover:border-primary shadow-card hover:shadow-float transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <motion.p
                          className="text-6xl mb-3"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {item.emoji}
                        </motion.p>
                        <p className="text-2xl font-black text-foreground mb-1">{item.name}</p>
                        <p className="text-sm font-semibold text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Learn;
