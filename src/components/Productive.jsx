import illustration2 from "../assets/images/illustration-2.svg";
import curveMobile from "../assets/images/bg-curve-mobile.svg";
import curveDesktop from "../assets/images/bg-curve-desktop.svg";
import iconArrow from "../assets/images/icon-arrow.svg";
import iconQuotes from "../assets/images/icon-quotes.svg";
import avatarTestimonial from "../assets/images/avatar-testimonial.jpg";

const Productive = () => {
  return (
    <section className="w-[375px] mx-auto mt-20 2xl:w-[1440px]">
      <img src={curveMobile} alt="" className="object-cover 2xl:hidden" />
      <img
        src={curveDesktop}
        alt=""
        className="object-cover hidden 2xl:block"
      />
      <div className="w-full bg-[#f8f8fe] flex flex-col pb-16 2xl:flex-row-reverse 2xl:h-[650px] 2xl:w-[1440px]">
        <figure className="w-[320px] mx-auto 2xl:mx-0 2xl:h-[430px] 2xl:w-[720px] 2xl:flex 2xl:flex-row 2xl:justify-end 2xl:pr-10 2xl:pt-6">
          <img
            src={illustration2}
            alt=""
            className="object-cover 2xl:w-[542px] 2xl:h-[409px]"
          />
        </figure>

        <div className="2xl:w-[720px] 2xl:pl-14">
          <article>
            <h2 className="text-center font-raleway font-bold mt-16 2xl:text-[40px] 2xl:text-left 2xl:mt-0">
              Stay productive, wherever you are
            </h2>
            <p className="w-[320px] mx-auto pt-5 text-center text-sm font-opensans 2xl:mx-0 2xl:w-[529px] 2xl:text-left 2xl:text-base">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="w-[320px] m-auto pt-5 text-center text-sm font-opensans 2xl:mx-0 2xl:w-[529px] 2xl:text-left 2xl:text-base">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </article>

          <figure className="w-[130px] h-[23px] mx-auto pt-6 2xl:w-[176px] 2xl:h-[27px] 2xl:mx-0">
            <a
              href="#"
              className="flex flex-row gap-2 bg-white text-br-blue hover:opacity-50 text-xs 2xl:text-base"
            >
              See how Fylo works
              <img
                src={iconArrow}
                alt=""
                className="2xl:w-[20px] 2xl:h-[20px]"
              />
            </a>
            <div className="w-[130px] h-[1px] mx-auto mt-1 bg-br-blue 2xl:w-[166px]"></div>
          </figure>

          <div className="w-[280px] h-[170px] mx-auto bg-white mt-12 p-6 text-left shadow-sm 2xl:mx-0 2xl:w-[356px] 2xl:h-[215px] 2xl:mt-16">
            <img src={iconQuotes} alt="" />
            <article>
              <p className="text-[10px] font-opensans leading-relaxed mt-2 2xl:text-[13px]">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
            </article>

            <div className="grid grid-cols-2 w-[30%] mt-4">
              <figure className="w-[28px] flex justify-center">
                <img
                  src={avatarTestimonial}
                  alt="avatar"
                  className="w-[24px] h-[24px] object-cover rounded-full 2xl:w-[32px] 2xl:h-[32px]"
                />
              </figure>
              <figure className="w-[80px] 2xl:w-[110px]">
                <h3 className="text-[9px] font-opensans font-bold 2xl:text-[11px]">
                  Kyle Burton
                </h3>
                <p className="text-[6px] font-opensans 2xl:text-[8px]">
                  Founder & CEO, Huddle
                </p>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
