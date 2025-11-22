import Logo from '../assets/MarmoLogo.png'

export default function Header(){
    return(
        <div className="header-container">
            <img
                src={Logo}
                className='header-logo'
            />
        </div>
    )
}