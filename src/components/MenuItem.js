import React, { useMemo } from "react";
import PropTypes from "prop-types";

import SubMenu from "./SubMenu";
import "./MenuItem.css";

function MenuItem({ label, children, openItem }) {
  const isOpenMenu = useMemo(() => openItem === label, [label, openItem]);
  return (
    <div className="menu-container">
      <div
        className={`${
          isOpenMenu ? "menu-item-container open" : "menu-item-container"
        }`}
      >
        <p className="label">{label}</p>
        {children && children.length > 0 && <p className="arrow">&#x3e;</p>}
      </div>
      {isOpenMenu &&
        children.map(({ label }, index) => (
          <SubMenu key={index} label={label} />
        ))}
    </div>
  );
}

MenuItem.propTypes = {
	label: PropTypes.string.isRequired, 
	children: PropTypes.arrayOf( PropTypes.shape({
		label: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		children: PropTypes.arrayOf(PropTypes.shape({
			label: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired
		}))
	})),
	openItem: PropTypes.string.isRequired
}

MenuItem.defaultProps = {
	children: []
}

export default MenuItem;
