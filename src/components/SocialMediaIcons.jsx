const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/sneha-singh-a139091b3/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="./assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/SnehaSinggh"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="gitHub-link" src="./assets/facebook.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/mini_illustration_/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={require("./assets/instagram.png")} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons; 