import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import github from '../assets/git.png'



const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/bulbul-rahman-38420b237"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedin} />
      </a>
      <a
        className="hover:opacity-50 w-[30px] transition duration-500"
        href="https://github.com/Bulbul11859?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={github} />
      </a>
      <a
        className="hover:opacity-50  transition duration-500"
        href="https://www.facebook.com/swiftness.BB"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebook}/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
