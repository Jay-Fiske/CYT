import Categories from "../category/Categories";
import { Link } from "react-router-dom";

function SideBar() {

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <Categories />

      </ul>
    </div>
  );
}

export default SideBar;