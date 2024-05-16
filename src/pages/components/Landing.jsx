const Landing = () => {
  return (
    <div
      className={`h-[60vh] flex items-center justify-around relative mx-auto max-w-5xl`}
    >
      <div className="text-start">
        <h1 className="text-primary text-4xl font-semibold">Your sales</h1>
        <p className="text-primary text-4xl my-2"> 106,975 egp</p>
        <button className="bg-primary outline-none py-[6px] px-10 text-white mt-3">
          Withdraw
        </button>
      </div>
      <div className="w-[28rem] h-[28rem] md:block hidden p-8 box-content -z-10 translate-y-24 bg-primary rounded-full">
        <img src="/images/card.png" alt="" className="-translate-y-8" />
      </div>
    </div>
  );
};

export default Landing;
