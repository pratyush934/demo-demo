const HeroSection = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-center mt-2">
        <span className="font-extrabold text-white font-sans text-8xl mr-2">
          Why
        </span>
        <span className="font-extrabold text-blue-800 font-sans text-8xl ml-3">
          AI
        </span>
      </div>
      <div className="flex flex-row w-full justify-center mt-10">
        <div className="flex flex-col items-center justify-center w-3/4">
          <span className="font-extrabold text-blue-600 font-sans text-4xl ml-10 mt-5">
            AI anchors can offer interactive experiences,
          </span>
          <span className="font-extrabold text-blue-600 font-sans text-4xl ml-10 mt-5">
            Such as personalized news delivery and real-time interaction with
          </span>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mt-2">
        <div className="flex flex-col w-3/4 items-center justify-center">
          <span className="text-white text-2xl  mt-10">
            Ms. Kalinga can deliver news in multiple languages breaking down
            language barriers and allowing you to reach a broader, more diverse
            audience.
          </span>
          <span className="text-white text-2xl">
            This multilingual capability is a key feature of Ms. Kalinga, and it
            can help you reach a global audience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
