import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header className='sticky top-0 z-50 backdrop-blur'>
			<div className='container d-flex justify-content-between'>
				<div>
					<NavLink 
						to={'/'}
						className={'no-underline'}
					>
						<h1 className='text-2xl font-bold mt-1 p-0 text-green-500'>SkyTronics</h1>
					</NavLink>
				</div>
				<div className='nav_holder d-flex'>
					<div className='m-2'>
						<ul className='d-flex list-none'>
							<li className='navlink'>
								<NavLink className='navlink m-3 no-underline' to={'/about'}>About</NavLink>
							</li>
							<li className='navlink'>
								<NavLink className='navlink m-3 no-underline' to={'/services'}>Services</NavLink>
							</li>
							{/* <li className='navlink'>
								<NavLink className='navlink m-3 no-underline' to={'/contact'}>Contact Us</NavLink>
							</li> */}
						</ul>
					</div>
					<div className='m-2'>
						<ul className='d-flex list-none'>
							{/* <li className='navlink'>
								{token_exists || signedIn ? <NavLink to={'/signin'} className='navlink m-3 no-underline' onClick={handleLogOut}>Logout</NavLink> : <NavLink to={'/signin'} className='navlink m-3 no-underline'>Login</NavLink>}
							</li> */}
							{/* <li className='navlink'>
								<NavLink to={'/register'} className='navlink m-3 no-underline'>Signup</NavLink>
							</li> */}
							<li className='navlink'>
								<NavLink to={'/customer_dashboard'} className='navlink m-3 no-underline'>Account</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;