import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";
import storyLion from "@/assets/story-lion.png";
import storyRabbit from "@/assets/story-rabbit.png";
import storyCrow from "@/assets/story-crow.png";

const stories = [
  {
    id: 1,
    title: "The Kind Lion",
    image: storyLion,
    content: `Once upon a time, there was a big lion named Leo. Leo was the king of the jungle, but he was very kind.

One day, Leo found a little mouse stuck under a rock. The other animals said, "Leave it, you are a lion!"

But Leo carefully lifted the rock and freed the mouse. The mouse was so happy!

Later, when Leo was caught in a hunter's net, the same little mouse came and chewed through the ropes to set Leo free.`,
    moral: "🌟 Kindness always comes back to you! 🌟",
    color: "gradient-sunny",
  },
  {
    id: 2,
    title: "The Honest Rabbit",
    image: storyRabbit,
    content: `Ruby the rabbit found a beautiful carrot in the forest. It was the biggest carrot she had ever seen!

She was about to eat it when she saw another rabbit looking sad. "I lost my carrot," said the other rabbit.

Ruby thought for a moment. It would be easy to keep the carrot. But she knew it wasn't hers.

"Is this your carrot?" Ruby asked. The other rabbit smiled and said, "Yes! Thank you so much!"`,
    moral: "🌟 Being honest makes everyone happy! 🌟",
    color: "gradient-candy",
  },
  {
    id: 3,
    title: "The Smart Crow",
    image: storyCrow,
    content: `On a hot summer day, a thirsty crow flew around looking for water. He found a pitcher with water at the bottom.

His beak couldn't reach the water! What could he do?

The clever crow had an idea. He picked up pebbles one by one and dropped them into the pitcher.

Slowly, the water rose higher and higher. Soon he could drink the cool water!`,
    moral: "🌟 When you think hard, you can solve any problem! 🌟",
    color: "gradient-sky",
  },
];

const Stories = () => {
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
              <span className="text-secondary">📚 Story Time! 📚</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground font-semibold">
              Read fun stories and learn important lessons!
            </p>
          </motion.div>

          {/* Stories */}
          <div className="space-y-12">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className={`${story.color} border-4 border-card overflow-hidden shadow-float`}>
                  <CardContent className="p-0">
                    <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                      {/* Image */}
                      <motion.div
                        className="lg:w-2/5 p-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                        <motion.h2
                          className="text-3xl md:text-4xl font-black mb-4 text-primary-foreground flex items-center gap-3"
                          whileHover={{ x: 5 }}
                        >
                          <Star className="w-8 h-8 fill-current" />
                          {story.title}
                        </motion.h2>

                        <div className="bg-card/90 backdrop-blur rounded-2xl p-6 mb-4">
                          <p className="text-foreground text-lg leading-relaxed whitespace-pre-line font-medium">
                            {story.content}
                          </p>
                        </div>

                        <motion.div
                          className="bg-card rounded-xl p-4 flex items-center gap-3"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Heart className="w-8 h-8 text-secondary fill-secondary" />
                          <p className="text-xl font-black text-foreground">
                            {story.moral}
                          </p>
                        </motion.div>
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

export default Stories;
