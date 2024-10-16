import { useNavigate } from "react-router-dom";
import Data from "../../components/MyDataHome";
import Button from "../../ui/Button";
import Button2 from "../../ui/Button2";
import Card from "../../ui/Card";
import MyAccordion from "../../ui/Accordion";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/variants";
import ScrollAnimation from "../../utils/ScrollAnimation";
import { useMode } from "../../Context";



function HomePage() {
  let pathname = useNavigate();
  const {darkMode} = useMode()
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`w-full py-5 ${darkMode?"bg-black text-white":"bg-white text-black"}`}
      >
        <section className={`container mx-auto flex justify-around `}>
          <ScrollAnimation>
            <div className={`md:w-[30vw]  lg:w-full xs:w-full xs:px-5 flex flex-col gap-7`}>
              <p className="text-orange font-bold text-[1.4rem]">
                3D game Dev{" "}
              </p>
              <p className=" md:text-[2.7rem] xs:text-[1.3rem] font-bold lg:text-[3.4rem] lg:w-[40vw] md:w-[31vw] ">
                Müştərilərimiz üçün hansı işləri görürük ?
              </p>
              <p className="font-costum lg:w-[30vw] lg:text-[1.4rem] md:w-[40vw]">
                Yeni , maraqlı və yüksək keyfiyyətli PC , PS4 oyunlarının satışı
                və yeni oyunların hazırlanmasında bizim komandaya güvənə
                bilərsiniz.{" "}
              </p>
              <Button
                onClick={() => pathname("/about")}
                txt1="Ətraflı"
                txt2={<i className="fa-solid fa-caret-right"></i>}
                still="rounded-[10px] md:w-[15vw] hover:text-orange xs:w-[30vw] xs:py-1 md:py-3 text-[1.4rem] hover:bg-transparent"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="">
              <div className="lg:h-[85vh] md:w-[40vw]  md:h-[40vh] md:object-contain md:flex xs:hidden ">
                <img
                  className="w-[100%] h-[100%] xs:absolute xs:left-[0%] md:left-[10%] object-contain"
                  src={`${darkMode?"/home/bg-excample.png":"/home/bgImageforLight.png"}`}
                  alt="console page"
                />
              </div>
            </div>
          </ScrollAnimation>
        </section>
        <ScrollAnimation>
          <section className="">
            <div className={`flex justify-between items-center ${darkMode?"bg-black text-white":"bg-white text-white"}  lg:h-[20vh] xs:h-[15vh]`}>
              <p className={`md:text-[1.8rem] xs:text-[1.4rem] font-bold ${darkMode?"text-white":"text-black"} ml-[5vw]`}>
                Hazırda trend olan oyunlarımız
              </p>
              <Button2 />
            </div>

            <div className= {`px-5 grid lg:grid-cols-4 gap-5 md:grid-cols-2 xs:grid-cols-1 place-items-center ${darkMode?"bg-black":"bg-white"} xs:h-fit xs:py-5 md:h-fit`}>
              <Data />
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className={`"bg-black flex flex-col gap-4 `}>
            <div className={`${darkMode?"text-white":"text-black"} flex justify-center`}>
              <p className="md:text-[2rem] font-bold md:w-[70vw] lg:w-[50vw] py-3 xs:full xs:text-[1.5rem] xs:px-4">
                Köhnə oyunlardan yoruldunuz? Elə isə doğru məkandasınız.
              </p>
            </div>

            <div className="md:w-full xs-full  flex flex-col md:items-center xs:items-center justify-evenly ">
              <p className="lg:text-[1.3rem] md:text-[1.5rem] xs:text-[1.6rem] font-bold md:w-[48vw] xs-full xs:py-3">
                Console Game
              </p>
              <p
                className={`text-wstone}
           md:w-[50vw] xs:w-full md:text-[1.6rem] lg:text-[1.4rem] xs:text-[1.2rem] xs:p-3`}
              >
                Yeni,effektiv oyunlarımızı sizin istifadənizə verdiyimiz üçün şadıq.{" "}
              </p>
            </div>

            <div className="flex justify-center md:h-[80vh]  items-center  md:w-full  xs:h-fit p-5">
              <iframe
                autoFocus
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v-vqi0UaUdE?si=DjvQtmxCwwYgNefd"
                title="YouTube video player"
                className=" rounded-[20px] md:w-[60vw] md:h-[60vh] xs:w-full xs:h-[40vh]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
        <section className=" relative bg-[url('/home/bg-image.png')] bg-no-repeat bg-cover md:h-[100vh] xs:h-fit text-white text-center">
          <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0"></div>
          <article className="flex flex-col  place-items-center">
            <div className="flex flex-col justify-center place-items-center gap-7 h-[60vh]  md:w-[50vw] xs:w-[70vw]">
              <h2 className="relative z-30 md:text-[1.8rem] font-poppins font-bold xs:text-[1.4rem] ">
                Siz də zövqünüzə uyğun oyunları bizimlə dizayn edə bilərsiniz.
              </h2>
              <p className="relative z-30 font-semibold  text-[1.4rem]">
                Bu günə qədər 100+ müştəriyə xidmət göstərmiş, bir çox yeni
                oyunların diyaznında iştirak etmişik.
              </p>
            </div>
            <div className="grid md:grid-cols-4 md:py-3  xs:grid-cols-1 xs:gap-7 xs:py-5   relative z-30 md:w-[60vw] xs:w-[80vw]">
              <Card txt="Mobile Game Development">
                {
                  <i className="fa-solid fa-mobile-screen rounded-full p-5 text-orange bg-white text-[2rem]"></i>
                }
              </Card>
              <Card txt="PC Game Development">
                {
                  <i className="fa-solid fa-laptop rounded-full p-5 text-orange bg-white text-[2rem]"></i>
                }
              </Card>
              <Card txt="PS4 Game Development">
                {
                  <i className="fa-brands fa-playstation rounded-full p-5 text-orange bg-white text-[2rem]"></i>
                }
              </Card>
              <Card txt="3D Grafic Design">
                {
                  <i className="fa-solid fa-palette rounded-full p-5 text-orange bg-white text-[2rem] w-fit"></i>
                }{" "}
              </Card>
            </div>
          </article>
        </section>
        </ScrollAnimation>


        <ScrollAnimation>
        <section className={`${darkMode}`}>
          <p className=" text-white text-[1.5rem] font-bold py-3 text-center">
            Ən çox verilən suallar
          </p>
          <MyAccordion />
        </section>
        </ScrollAnimation>

        <ScrollAnimation>
        <section className={`${darkMode?"bg-black":"text-black"} flex flex-col place-items-center justify-evenly xs:py-4 xs:gap-5 md:h-[90vh] lg:h-[110vh] xs:h-fit`}>
          <div className="flex flex-col gap-5 xs:p-3">
            <p className="md:text-[2rem] xs:text-[1.7rem] font-bold ">
              Hazırladığımız oyunlar
            </p>
            <p className="text-[1.4rem]">
              Oyunlarımız yüksək funksiyonallıqla daha əlçatandır.
            </p>
          </div>

          <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-5 w-[80vw] ">
            <img
              src="/home/Rectangle 15.png"
              className="md:w-[25vw] xs:w-full h-[30vh]  rounded-[15px] object-cover"
              alt=""
            />
            <img
              src="/home/Rectangle 16.png"
              className="md:w-[25vw] xs:w-full h-[30vh]  rounded-[15px] object-cover"
              alt=""
            />
            <img
              src="/home/Rectangle 17.png"
              className="md:w-[25vw] xs:w-full h-[30vh]  rounded-[15px] object-cover"
              alt=""
            />
            <img
              src="/home/Rectangle 18.png"
              className="md:w-[25vw] xs:w-full h-[30vh]  rounded-[15px] object-cover"
              alt=""
            />
            <img
              src="/home/Rectangle 19.png"
              className="md:w-[25vw] xs:w-full h-[30vh]  rounded-[15px] object-cover"
              alt=""
            />
            <img
              src="/home/Rectangle 20.png"
              className="md:w-[25vw] xs:w-full h-[30vh]  rounded-[15px] object-cover"
              alt=""
            />
          </div>
          <Button2 />
        </section>
        </ScrollAnimation>
      </motion.div>
    </>
  );
}

export default HomePage;
