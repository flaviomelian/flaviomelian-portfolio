import './Footer.css'
import linkedin from '../../assets/Linkedin.png'
import github from '../../assets/logo-github.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <div>@flaviomelian &copy;</div>
      <div className='social-icons'>
        <img src={linkedin}/>
        <img src={github}/>
      </div>
    </div>
  )
}

export default Footer
