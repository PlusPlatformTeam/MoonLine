import "./floating-nav.css";

const Nav = ({ className, item }) => {
  return (
    <li data-to-scrollspy-id={item.link} className={`${className} }`}>
      <a className="active-scroll-spy" href={item.link}>
        {item.icon}
      </a>
    </li>
  );
};

export default Nav;
