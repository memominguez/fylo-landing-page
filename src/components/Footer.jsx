import iconPhone from "../assets/images/icon-phone.svg";
import iconEmail from "../assets/images/icon-email.svg";
import facebook from "/icons8-facebook-48.png";
import instagram from "/icons8-instagram-48.png";
import twitter from "/icons8-twitter-48.png";

const Footer = () => {
  return (
    <footer className="w-[375px] mx-auto pt-12 px-10 pb-10 bg-vd-blue 2xl:w-[1440px] 2xl:h-[390px] 2xl:-mt-6 2xl:pb-0">
      <div className="2xl:flex 2xl:flex-wrap 2xl:justify-between">
        <div className="2xl:w-1/4 2xl:pt-8">
          <svg
            className="w-[105px] h-[30px]"
            viewBox="0 0 166 49"
            //   width="166"
            //   height="49"
            xmlns="http://www.w3.org/2000/svg"          
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path id="a" d="M.014.03h93.96v48.29H.015z" />
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                d="M0 14.13v.123l27.95 13.13L56 14.209v-.033L27.95 1 0 14.13zm10.077.062L27.95 5.795l17.877 8.397-17.877 8.396-17.874-8.396zM27.95 32.483L0 19.55v4.784l27.95 12.964L56 24.289v-4.784L27.95 32.483zm0 9.703L0 29.25v4.783L27.95 47 56 33.99v-4.784l-28.05 12.98z"
                fill="#BDBAFA"
              />
              <g transform="translate(72)">
                <mask id="b" fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <path
                  d="M87.56 24.152a8.1 8.1 0 0 0-2.161-5.573 7.259 7.259 0 0 0-2.34-1.673 6.864 6.864 0 0 0-2.85-.601c-1.01 0-1.961.2-2.852.601a7.257 7.257 0 0 0-2.34 1.673 8.102 8.102 0 0 0-2.16 5.574 8.102 8.102 0 0 0 2.16 5.573 7.257 7.257 0 0 0 2.34 1.672 6.864 6.864 0 0 0 2.851.602c1.01 0 1.96-.2 2.852-.602a7.259 7.259 0 0 0 2.339-1.672 8.1 8.1 0 0 0 2.16-5.574zm6.415 0c0 1.932-.357 3.723-1.07 5.373a13.098 13.098 0 0 1-2.94 4.28c-1.247 1.205-2.71 2.156-4.388 2.854-1.678.699-3.468 1.048-5.369 1.048-1.9 0-3.683-.349-5.346-1.048a13.863 13.863 0 0 1-4.366-2.876 13.351 13.351 0 0 1-2.94-4.302c-.713-1.65-1.07-3.426-1.07-5.329 0-1.873.364-3.634 1.092-5.284a13.92 13.92 0 0 1 2.962-4.325 13.671 13.671 0 0 1 4.367-2.898 13.552 13.552 0 0 1 5.301-1.048c1.901 0 3.69.35 5.369 1.048 1.678.698 3.14 1.65 4.388 2.854 1.248 1.204 2.228 2.638 2.94 4.302.713 1.665 1.07 3.449 1.07 5.351zM64.258 36.905a8.6 8.6 0 0 1-1.715.58c-.638.148-1.3.222-1.982.222a9.84 9.84 0 0 1-2.74-.379 6.003 6.003 0 0 1-2.295-1.226c-.653-.565-1.173-1.3-1.56-2.207-.385-.907-.578-2-.578-3.277V.029h6.549v29.474c0 1.07.215 1.806.646 2.207.43.401.943.602 1.537.602.742 0 1.455-.223 2.138-.669v5.262zM50.492 11.22L38.908 41.854c-.861 2.289-1.99 3.939-3.386 4.95-1.396 1.01-3.06 1.515-4.99 1.515-.297 0-.623-.022-.98-.066a7.352 7.352 0 0 1-1.025-.201l-2.138-5.975a8.486 8.486 0 0 0 1.56.557c.534.134 1.039.201 1.514.201 1.01 0 1.93-.23 2.762-.691.832-.46 1.47-1.315 1.916-2.564l.891-2.586-9.935-25.773h6.995l5.925 16.588 5.57-16.588h6.905zM23.538 7.342H6.786v8.294h16.529v5.618H6.785v15.784H.015V1.412h23.524v5.93z"
                  fill="#fff"
                  mask="url(#b)"
                />
              </g>
            </g>
          </svg>
          <div className="flex gap-4 mt-8">
            <img src={iconPhone} alt="" />
            <p className="text-white font-opensans">Phone: +1-543-123-4567</p>
          </div>
          <div className="flex gap-4 mt-6">
            <img src={iconEmail} alt="" />
            <p className="text-white font-opensans">example@fylo.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6 2xl:w-1/4 2xl:pt-10 2xl:gap-4">
          <a href="#" className="text-white font-opensans hover:text-mod-cyan">
            About Us
          </a>
          <a href="#" className="text-white font-opensans hover:text-mod-cyan">
            Jobs
          </a>
          <a href="#" className="text-white font-opensans hover:text-mod-cyan">
            Press
          </a>
          <a href="#" className="text-white font-opensans hover:text-mod-cyan">
            Blog
          </a>
        </div>

        <div className="flex flex-col gap-3 mt-6 2xl:w-1/4 2xl:pt-10 2xl:gap-4" >
          <a href="#" className="text-white font-opensans hover:text-mod-cyan">
            Contact Us
          </a>
          <a href="#" className="text-white font-opensans hover:text-mod-cyan">
            Terms
          </a>
          <a href="#" className="text-white font-opensans hover:text-mod-cyan">
            Privacy
          </a>
        </div>

        <div className="flex flex-row justify-center gap-6 mt-8 2xl:w-1/4 2xl:justify-start 2xl:pt-10">
          <img src={facebook} alt="" className="w-[27px] h-[27px]" />
          <img src={twitter} alt="" className="w-[27px] h-[27px]" />
          <img src={instagram} alt="" className="w-[27px] h-[27px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
