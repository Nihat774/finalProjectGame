import { Link } from "react-router-dom";
import CountUp from "react-countup";

import Button2 from "../../ui/Button2";
import Swipper from "../../ui/SwipperToServices";
// import Swipper from "../../ui/SwipperToServices";
function ServicesPage() {
  return (
    <>
      <div className=" bg-black ">
        <section className=" flex flex-col container mx-auto items-center md:h-[70vh] xs:h-fit justify-center gap-7">
          <div className="flex flex-col  items-center gap-5 py-5 text-white">
            <p className="flex items-center gap-2">
              <Link to={"/"} className="text-[1.3rem]">
                Home{" "}
              </Link>
              <i className="fa-solid fa-chevron-right"></i>
              <p className="text-orange text-[1.3rem]">Services</p>
            </p>
            <p className="text-[1.5rem] px-7">
            Oyun Dünyasının Sərhədsiz Macəraları

            </p>
            <p> İstər yeni çıxan oyunlar, istərsə də klassik əsərlər - hamısı bir arada, hər kəsin zövqünə uyğun bir şey var.
 İstər yeni çıxan oyunlar, istərsə də klassik əsərlər - hamısı bir arada, hər kəsin zövqünə uyğun bir şey var.
            </p>
          </div>

          <div className="flex md:flex-row xs:flex-col justify-evenly py-5 bg-gray items-center border rounded-[15px] md:h-[30vh] w-[70vw] xs:h-fit xs:gap-7 xs:py-5">
            <div className="flex h-full  gap-5  items-center">
              <p>
                <i className=" rounded-full p-5 fa-solid fa-user text-orange bg-white"></i>
              </p>
              <div className=" text-white">
                <CountUp
                  className="text-[1.7rem] font-bold"
                  end={20}
                  duration={2}
                />
                <span className="text-[1.7rem] font-bold">+</span>
                <p className="md:text-[1.6rem] lg:text-[1.1rem]">Clients</p>
              </div>
            </div>

            <div className="md:h-[20vh] md:w-[2px] xs:h-[2px] xs:w-[20vh] bg-zinc-400"></div>

            <div className="flex h-full gap-3 items-center">
              <p>
                <i className="border rounded-full p-5 fa-solid fa-location-dot text-orange bg-white "></i>
              </p>
              <div className=" text-white">
                <CountUp
                  className="text-[1.7rem] font-bold"
                  end={15}
                  duration={2}
                />
                <span className="text-[1.7rem] font-bold">+</span>
                <p className="md:text-[1.6rem] lg:text-[1.1rem]">Countries</p>
              </div>
            </div>

          
            <div className="md:h-[20vh] md:w-[2px] xs:h-[2px] xs:w-[20vh] bg-zinc-400"></div>
            <div className="flex  h-full  gap-3 items-center">
              <p>
                <i className="border rounded-full p-5 fa-solid fa-bars-progress text-orange bg-white"></i>
              </p>
              <div className=" text-white">
                <CountUp
                  className="text-[1.7rem] font-bold"
                  end={40}
                  duration={2}
                />
                <span className="text-[1.7rem] font-bold">+</span>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex md:flex-row xs:flex-col xs:py-5 xs:gap-5 justify-center lg:gap-7 items-center md:h-[70vh]   xs:h-fit bg-black">
          <div >
            <iframe
              src="https://www.youtube.com/embed/y6vWl-8_0QI?si=DtcBOX_0IjNZyrSZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-[20px] md:w-[40vw] md:h-[50vh] xs:w-[80vw] xs:h-[40vh] "
            ></iframe>
          </div>

          <div className="flex flex-col  xs:h-fit gap-5  text-white">
            <p className="xs:text-[1.8rem] font-bold">
            Platformamız əyləncə üçün yaradılıb.
            </p>
            <p className="xs:text-[1.6rem] font-semibold">
            Oyunçular dostluq qururlar.
            </p>
            <div>
              <p className="flex gap-2 items-center">
                <i className="rounded-full bg-green fa-regular fa-circle-check h-fit  w-fit"></i>
               
                <span  className="text-[1.4rem]"> Daimi Texniki Dəstək Xidməti
                </span>
              </p>

              <p className="flex gap-2 items-center">
                <i className="rounded-full bg-green fa-regular fa-circle-check h-fit  w-fit"></i>
                
                <span className="text-[1.4rem]">Hər zaman operativ dəstək
                </span>
              </p>

              <p className="flex gap-2 items-center">
                <i className="rounded-full bg-green fa-regular fa-circle-check h-fit  w-fit"></i>
                
                <span className="text-[1.4rem]">Peşəkar və təcrübəli komanda
                </span>
              </p>

              <p className="flex gap-2 items-center">
                <i className="rounded-full bg-green fa-regular fa-circle-check h-fit  w-fit"></i>
                
                <span className="text-[1.4rem]">Texniki problemlərin sürətli həlli
                </span>
              </p>

              <p className="flex gap-2 items-center">
                <i className="rounded-full bg-green fa-regular fa-circle-check h-fit  w-fit"></i>
                
                <span  className="text-[1.4rem]">Yeniliklər və təkmilləşdirmələr barədə məlumat
                </span>
              </p>

              <p className="flex gap-2 items-center">
                <i className="rounded-full bg-green fa-regular fa-circle-check h-fit  w-fit"></i>
                
                <span  className="text-[1.4rem]">Yarışlar hər kəsi birləşdirir.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="flex md:flex-row xs:flex-col justify-evenly  items-center bg-black md:h-[70vh] xs:h-fit">
          <div className="flex flex-col gap-5 md:w-[35vw] xs:w-full xs:p-5  text-white">
            <p className="text-[1.2rem]  xs:w-full ">
            Müasir texnologiyalarla təchiz olunmuş serverlərimiz, sürətli yüklənmə və fasiləsiz oyun axışı təmin edərək, oyunçulara optimal təcrübə təqdim edir.

            </p>
            <p className="w-inherit">
            Oyunlarınızı problemsiz və sürətli şəkildə oynamaq üçün hər zaman yanınızdayıq. Mütəxəssis komandamız 24/7 sizə texniki dəstək və xidmət göstərir.

            </p>
            <p className="w-inherit ">
            Bundan əlavə, platformamızda oyunçular arasında əlaqə qurmaq üçün imkanlar mövcuddur. İstifadəçilər oyunlar haqqında fikirlərini paylaşa, dostları ilə rəqabət edə və yeni dostlar qazana bilərlər. 
            </p>
            <Button2 />
          </div>
          <div className=" items-center justify-center flex ">
            <img
              className="object-cover md:w-[30vw] md:h-[50vh] xs:h-[40vh] xs:w-[80%]  border-white"
              src="/games/game4.webp"
              alt="game"
            />
          </div>
        </section>

        <section className="flex md:flex-row xs:flex-col justify-evenly items-center xs:py-5 md:h-[70vh] xs:h-fit bg-black">
          <div className="flex items-center justify-center">
            <img
              className="object-cover md:w-[30vw] md:h-[50vh] xs:h-[40vh] xs:w-[90%]"
              src="/games/game2.webp"
              alt="game"
            />
          </div>

          <div className="flex flex-col gap-5 md:w-[30vw] xs:w-full lg:w-[50vw] xs:p-3  text-white ">
            <p className="text-[1.4rem] font-semibold ">
            Həmçinin, mütəmadi olaraq yenilənən oyun kolleksiyamız sayəsində daim yeni macəralara atılmaq imkanınız olacaq.
            </p>
            <p className="w-inherit">
            Oyun Dünyası, oyunsevərlər üçün yaradılmış bir platformadır. Burada müxtəlif janrlarda və yaş qruplarına uyğun oyunlar tapa bilərsiniz. Hər bir oyun, əyləncə və yaradıcılıq dolu bir təcrübə təqdim edir.
            </p>
            <p className="w-inherit">
            İndi qatılın, yeni dostlar əldə edin, digər oyunçularla yarışın və macəraya başlayın! Oyun dünyasının sonsuz imkanları sizi gözləyir!"
            </p>
            <Button2 />
          </div>
        </section>

        <section>
          <Swipper />
        </section>
      </div>
    </>
  );
}

export default ServicesPage;
