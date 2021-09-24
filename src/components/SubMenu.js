import React from 'react'
import PropTypes from 'prop-types'

import "./SubMenu.css"

function SubMenu({label}) {
	return (
		<div className="submenu-container">
			{label}
		</div>
	)
}

SubMenu.propTypes = {
	label: PropTypes.string.isRequired
}

export default SubMenu
