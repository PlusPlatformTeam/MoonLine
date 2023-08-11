import data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import "./floating-nav.css";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-500}
        className="scrollspy"
        items={["home", "services", "webapp", "about", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
