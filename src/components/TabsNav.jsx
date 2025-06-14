import { NavLink } from "react-router-dom";

export default function TabsNav() {
  return (
    <nav className="nav nav-tabs nav-justified mt-5 mb-3">
      <NavLink className="nav-link text-uppercase" to={"/"}>
        Издадени лиценци
      </NavLink>
      <NavLink className="nav-link text-uppercase" to={"/odbieni"}>
        Одбиени лиценци
      </NavLink>
      <NavLink className="nav-link text-uppercase" to={"/odzemeni"}>
        Одземени лиценци
      </NavLink>
    </nav>
  );
}
