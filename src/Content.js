import { useState } from "react";

export const Content = ({ characters, isDark }) => {
  const [character, setCharacter] = useState([]);

  const getDetail = async (id) => {
    const req = await fetch(`https://api.disneyapi.dev/characters/${id}`);
    const res = await req.json();
    setCharacter(res);
  };

  return (
    <>
      {characters.map((chars, i) => (
        <div
          className={`card w-96 shadow-xl m-10 ${
            isDark ? "bg-[#ddd] text-white" : "bg-base-900 text-black"
          }`}
          key={i}
        >
          <figure>
            <img src={chars.imageUrl} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">{chars.name}</h2>
            <div className="card-actions justify-end">
              <label
                htmlFor="my-modal-4"
                onClick={() => getDetail(chars._id)}
                className="btn modal-button"
              >
                See Detail
              </label>
            </div>
          </div>
        </div>
      ))}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative w-11/12 max-w-2xl" htmlFor="">
          <h3 className="text-lg font-bold">
            {character && (
              <div className="flex justify-center items-center">
                <figure>
                  <img src={character.imageUrl} alt="Shoes" width={400} />
                </figure>
                <div className="card-actions flex-col ml-5 text-black">
                  <h2>Name: {character.name}</h2>
                  <p>TV Shows : {character.tvShows}</p>
                  {character && (
                    <>
                      <p>Films:</p>
                      <ul>
                        {character.films?.map((film, i) => (
                          <li key={i}>{i + 1 + ". " + film}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            )}
          </h3>
        </label>
      </label>
    </>
  );
};
