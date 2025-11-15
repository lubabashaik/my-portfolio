import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.svg";
export const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full my-20">
        <div className="w-full h-[1px] bg-white/20"></div>
        <div className="nav-items w-full flex justify-center gap-5 text-white text-center text-xs font-light uppercase mt-5">
          <a href="#Home" className="nav-option cursor-pointer">
            Home
          </a>
          <a href="#Projects" className="nav-option cursor-pointer">
            Projects
          </a>
          <a href="#About" className="nav-option cursor-pointer">
            About Us
          </a>
          <a
            onClick={() => alert("Page is Under Development")}
            className="nav-option cursor-pointer"
          >
            Blog
          </a>
        </div>
        <div className="icons w-full flex justify-center mt-5 items-center gap-5">
          <div className="icon">
            <a
              className=""
              href="https://github.com/lubabashaik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer hover:scale-105 w-[30px] h-[30px] object-contain"
                src={github}
                alt="GitHub"
              />
            </a>
          </div>
          <div className="icon">
            <a
              className=""
              href="https://www.linkedin.com/in/shaiklubaba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer hover:scale-105 w-[30px] h-[30px] object-contain"
                src={linkedin}
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://instagram.com/bl.a_.k_.e_v_l_06"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img
                className="cursor-pointer hover:scale-105 w-[30px] h-[30px] object-contain"
                src={instagram}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        <div className="text-white font-extralight text-xs text-center my-5">
          <div className="title">Shaik Lubaba.</div>
          <div className="title">Bringing ideas to life with code.</div>
          <div className="title">Thanks for visiting!.</div>
        </div>
      </div>
    </>
  );
};
