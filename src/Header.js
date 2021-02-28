import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input placeholder="Search for Artists,Songs and Albums" type="text" />
      </div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
