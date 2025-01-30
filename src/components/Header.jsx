import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      Header
      <NavLink to="/">
        <h1>10-kompisar</h1>
      </NavLink>
      <div className="flex flex-col items-center tablet:flex-row my-4 justify-evenly font-poppins">
        <p>Chill mode</p>
        <p>Time Attack</p>
        <p>Chill mode</p>
      </div>
    </div>
  );
};
