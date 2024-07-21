import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full h-[100px] ">
        <div>
          <h1 className="text-4xl font-bold text-white pl-10">RnPsoft</h1>
        </div>
        <div className="flex-grow ml-[65%]">
          <div className="">
            <ul className="flex flex-row items-center space-x-10 pr-10">
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold text-white hover:text-gray-700"
                >
                  WhyAI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold text-white hover:text-gray-700"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold text-white hover:text-gray-700"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center pr-10 ml-auto w-[20%] h-[100%]">
          <Button
            onSubmit={() => {
              console.log("Hello");
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
