import { NavLink } from "react-router-dom";
import { transliterate } from "../utils/transliterate";

export default function TabsNav({ tabs }) {
  return (
    <nav className="nav nav-tabs nav-justified mt-5 mb-3">
      {tabs.map((item, key) => (
        <NavLink
          className="nav-link text-uppercase"
          key={key}
          to={key > 0 ? `/${transliterate(item.toLowerCase())}` : `/`}
        >
          {item} лиценци
        </NavLink>
      ))}
    </nav>
  );
}
