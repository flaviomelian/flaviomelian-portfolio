import './Footer.css'
import linkedin from '../../assets/Linkedin.png'
import github from '../../assets/logo-github.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <div>@flaviomelian &copy;</div>
      <div className='social-icons'>
        <a href='https://www.linkedin.com/in/flavio-melian-973308273/'><img src={linkedin}/></a>
        <a href='https://github.com/flaviomelian'><img src={github}/></a>
      </div>
    </div>
  )
}

export default Footer
