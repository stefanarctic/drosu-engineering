import { Link } from "react-router-dom";

const blogPosts = [
  {
    num: "01",
    title: "Top 5 Modificări Performanță",
    description:
      "Cele mai eficiente upgrade-uri pentru mașina ta — de la kit admisie la optimizare aerodinamică, cu prețuri și beneficii.",
    link: "/blog/top-5-modificari-performanta",
    date: "15 ian 2025",
  },
  {
    num: "02",
    title: "Ce Modificări Pot Face la Mașina Mea?",
    description:
      "Ghid complet despre modificările de performanță pentru stradă și curse — ce merită, ce e legal și cum alegi.",
    link: "/blog/ce-modificari-pot-face",
    date: "15 ian 2024",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-[110px]"
    >
      <div className="font-mono text-[12px] tracking-[0.28em] text-demo-accent uppercase mb-4">
        Blog & Ghiduri
      </div>
      <h2 className="font-display font-bold text-[36px] md:text-[52px] uppercase leading-[1.05] max-w-[640px]">
        Ghiduri tuning auto
      </h2>
      <p className="max-w-[620px] mt-[22px] text-lg leading-relaxed text-demo-muted">
        Informații clare despre modificări de performanță — ce merită, în ce
        ordine și ce se potrivește mașinii tale.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        {blogPosts.map((post) => (
          <Link
            key={post.link}
            to={post.link}
            className="group border border-white/10 bg-demo-surface p-8 md:p-[38px_34px] flex flex-col transition-colors duration-200 hover:border-demo-accent/50"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-[13px] text-demo-accent">
                {post.num}
              </span>
              <span className="font-mono text-[11px] tracking-[0.12em] text-demo-dim uppercase">
                {post.date}
              </span>
            </div>
            <h3 className="font-display font-semibold text-[24px] uppercase mb-3 group-hover:text-white transition-colors">
              {post.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-demo-dim flex-grow">
              {post.description}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[14px] text-white">
              Citește articolul
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
