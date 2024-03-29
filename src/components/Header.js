import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
  return ( 
    <header className = "uk-margin" uk-margin = "true">
      <nav>
				<div >
					<h1 className ="uk-text-center">{props.title}</h1>
				</div>
      </nav>
    </header>
   );
}
Header.propTypes ={
  title : PropTypes.string.isRequired
}
 
export default Header;