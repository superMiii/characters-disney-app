import { useEffect, useState } from "react";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./styles.css";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getCharacters = async () => {
      const req = await fetch(
        `https://api.disneyapi.dev/characters?page=${page}`
      );
      const res = await req.json();
      setCharacters((characters) => [...characters, ...res.data]);
    };
    getCharacters();
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <div
      className={`App ${
        isDark ? "bg-[#333] text-white" : "bg-base-100 text-black"
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="flex flex-wrap justify-center items-center">
        <Content characters={characters} isDark={isDark} />
      </div>
      <div>
        <button onClick={loadMore} className="btn btn-primary mb-4">
          Load More
        </button>
      </div>
      <Footer />
    </div>
  );
}
