import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          // backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${footerphoto})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="bg-gray-800 text-white"
      >
        <div className="container mx-auto p-4 ">
          <div className="md:flex justify-between flex-wrap gap-5 pb-16 border-b-2 border-gray-400 border-opacity-70">
            <div className="mt-8 ">
              <h1 className="text-4xl font-bold font-play">Shop Sport</h1>
            </div>
            <div className="mt-8">
              <h1 className="text-2xl font-semibold">Address</h1>
              <h6 className="font-semibold opacity-80">
                Germany-785 15h Street.
              </h6>
              <h6 className="font-semibold opacity-80">Office 478</h6>
              <h6 className="font-semibold opacity-80">Berlin.Be 81566</h6>
            </div>
            <div className="mt-8">
              <h1 className="text-2xl font-semibold">Contact Us</h1>
              <h6 className="font-semibold opacity-80">info@email.com</h6>
              <h6 className="font-semibold opacity-80">+18400000000</h6>
            </div>
          </div>
          <div className=" md:flex justify-between text-center mt-12 pb-6">
            <div>
              <p>©2024 Shop Sport all right reserved.</p>
            </div>
            <div className="flex gap-3 lg:gap-6 text-center justify-center mt-3 md:mt-0">
              <div className="lg:text-3xl text-xl hover:cursor-pointer">
                <FaFacebook />
              </div>
              <div className="lg:text-3xl text-xl hover:cursor-pointer">
                <FaTwitter />
              </div>
              <div className="lg:text-3xl text-xl hover:cursor-pointer">
                <FaInstagram />
              </div>
              <div className="lg:text-3xl text-xl hover:cursor-pointer">
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
