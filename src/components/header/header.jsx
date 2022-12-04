import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [displayMenu, setDisplayMenuState] = useState(false);

  return (
    <div className="header">
      <div className="header-text"> JDK Contracting </div>
      <div className="menu">
        <MenuIcon
          onClick={() => setDisplayMenuState((prevState) => !prevState)}
        />
        {displayMenu ? <div> displaying menu </div> : <> </>}
      </div>
    </div>
  );
};

export default Header;
