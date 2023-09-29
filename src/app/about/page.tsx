import AboutAncient from "@/assets/AboutAncient.webp";
import AboutStyle from "@/assets/AboutStyle.webp";
import AboutWhite from "@/assets/AboutWhite.webp";
import AboutCard from "./AboutCard";

export default function Page() {
  const AboutInfo = [
    {
      title: "How?",
      description: `In a corner of a quiet town, the idea for "Echoes of Literature" 
            was born over a cup of steaming coffee and a shared love for books. 
            Friends and fellow bookworms, Sarah and Mark, decided to turn their 
            shared dream into a reality. They envisioned a place where the echoes 
            of great literature could be heard by all. With dedication and a love for 
            stories, they opened their doors to the world, inviting you to explore the 
            endless echoes of literature that have shaped our lives.`,
      image: AboutAncient,
    },
    {
      title: "Why?",
      description: `In a burst of literary inspiration, Echoes of Literature emerged 
            as a dream shared by avid book enthusiasts who wanted to bring the magic of 
            books to life. We combined our passion for reading with a vision of a warm 
            and welcoming haven for book lovers. The result? A bookstore that resonates 
            with the echoes of countless stories, waiting to be discovered by you.`,
      image: AboutStyle,
    },
    {
      title: "Continuation",
      description: `Our shelves are a carefully curated collection of literary gems 
            from around the world. We handpick each book to ensure that every visit to our 
            store is an exploration of quality and diversity. From timeless classics to 
            contemporary bestsellers, we have something for every reader.`,
      image: AboutWhite,
    },
  ];

  return (
    <div className="min-h-screen py-[7rem] w-full dark:bg-gray-900">
      <div className="min-h-screen flex flex-col gap-[5rem] max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="dark:text-white mb-4 max-[380px]:text-2xl text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          About Our Bookstore
        </h1>
        <div className="flex gap-[5rem] flex-col">
          {AboutInfo.map((info, index) => (
            <AboutCard key={index} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
}
