import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input placeholder="Search for Artists,Songs and Albums" type="text" />
      </div>
      <div className="header_right">
        <Avatar src="" alt="I" />
        <h4>Indhu</h4>
      </div>
    </div>
  );
};

export default Header;
