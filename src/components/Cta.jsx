const Cta = () => {
  return (
    <section className="w-[375px] mx-auto pt-12 px-10 pb-14 bg-desat-blue 2xl:-mt-20 2xl:w-[1440px] 2xl:h-[350px]">
      <div className="2xl:grid 2xl:grid-cols-2">

        <article  className="2xl:w-[720px] 2xl:pl-8 2xl:pr-44 2xl:pt-12">
          <h2 className="text-lg text-white text-center font-raleway font-bold 2xl:text-[32px] 2xl:text-left">
            Get early access today
          </h2>
          <p className="text-sm font-opensans text-center text-white mt-4 leading-relaxed 2xl:text-base 2xl:text-left 2xl:leading-7">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </article>

        <div className="2xl:w-[720px] 2xl:pt-14">
          <form className="w-[240px] mx-auto mt-8 2xl:mt-0 2xl:w-[480px]">
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full h-[32px] px-2 2xl:h-[48px]"
            />
            <button className="w-full h-[32px] bg-br-blue hover:bg-blue-500 text-white text-[10px] font-raleway font-bold mt-2 2xl:w-[200px] 2xl:h-[48px] 2xl:text-[14px] 2xl:mt-4">
              Get Started For Free
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Cta;
