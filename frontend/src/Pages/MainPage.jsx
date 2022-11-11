import { Link } from "react-router-dom";
import "../Styles/mainpage.css";

function MainPage() {
  return (
    <div>
      <ul>
        <h2 className="trollpresentation">THE MAIN PAGE</h2>
      </ul>
      <Link to="/news">
        <button type="button">News</button>
      </Link>
    </div>
  );
}

export default MainPage;
