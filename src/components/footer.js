const Footer = () => {
    const links = [
        {
            icon: 'fab fa-linkedin', 
            link: 'https://www.linkedin.com/in/matthew-morales-176581200'
        }, 
        {
            icon: 'fab fa-github', 
            link: 'https://github.com/mtthwm'
        }
    ]

    return (
        <div className="footer">
            <div className="footer-icon-container">
                {links.map((element) => <a href={element.link} target='_blank'><i className={element.icon}></i></a>)}
            </div>
        </div>
    )
}

export default Footer;