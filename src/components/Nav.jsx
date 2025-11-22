import Logo from '../assets/MarmoHead.png'

export default function Nav(){
    return(
        <div className="nav-bar-container">
            <img 
                src={Logo}
                className='nav-logo'
                alt='logo'
            />
            <ul className='nav-items'>
                <a href='#about'>
                    <li className='nav-item'>About</li>
                </a>

                <hr className='nav-divider'/>
                <a href='#about'>
                    <li className='nav-item'>Privacy</li>
                </a>
                <hr className='nav-divider'/>
                <a href='#about'>
                    <li className='nav-item'>Discord</li>
                </a>
            </ul>
        </div>
    )
}