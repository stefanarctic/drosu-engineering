import { ArrowRight, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 5 Modificări Performanță",
      description: "Descoperă cele mai eficiente 5 modificări de performanță pentru mașina ta. De la kit admisie la optimizare aerodinamică, găsește modificările perfecte.",
      link: "/blog/top-5-modificari-performanta",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Ce Modificări Pot Face la Mașina Mea?",
      description: "Ghid complet despre modificările de performanță disponibile pentru mașinile de strada și curse. Află ce modificări sunt potrivite pentru automobilul tău.",
      link: "/blog/ce-modificari-pot-face",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-carbon-gray">
      <div className="container mx-auto px-6 xl:max-w-[1320px] 2xl:max-w-[1500px]">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
            Blog & Ghiduri
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
            Ghiduri & Informații
            <span className="text-performance-red"> Tuning Auto</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Află tot ce trebuie să știi despre modificările de performanță pentru mașinile tale. 
            Ghiduri complete și informații utile despre tuning auto.
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-card border-carbon-gray hover:border-performance-red transition-all duration-300 hover:shadow-performance group w-full max-w-[420px] md:max-w-none flex flex-col h-full">
              <CardHeader className="text-center md:text-left">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow mx-auto md:mx-0">
                  {post.icon}
                </div>
                <CardTitle className="text-xl font-bold text-chrome-white mb-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full text-center md:text-left">
                <p className="text-steel-gray mb-6 flex-grow">
                  {post.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-performance-red hover:text-chrome-white group mt-auto"
                  asChild
                >
                  <Link to={post.link}>
                    Citește articolul
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
