import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import LogoImg from '../img/render0001.png'
import { Character } from "./CharacterList";

export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
}


function Logo() {
  return <img src={LogoImg} className="navbar__logo" />;
}

export function Search({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      className="text-field"
      placeholder="search..."
    />
  );
}

export function SearchResult({ numOfResult }) {
  return <div className="navbar__result">Found {numOfResult} characters</div>;
}

export function Favourites({ favourites, onDeleteFavourite }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal onOpen={setIsOpen} open={isOpen} title="List of Favourites">
        {favourites.length === 0 ? <div className="flex flex-center text-field">Empty</div> : favourites.map((item) => (
          <Character key={item.id} item={item}>
            <button
              className="icon red"
              onClick={() => onDeleteFavourite(item.id)}
            >
              <TrashIcon />
            </button>
          </Character>
        ))}
      </Modal>
      <button className="heart" onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon className="icon" />
        <span className="badge">{favourites.length}</span>
      </button>
    </>
  );
}

// App => Navbar => SearchResult
