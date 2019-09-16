import React from 'react'
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
 
export default Header;