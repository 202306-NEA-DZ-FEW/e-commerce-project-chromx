import Slider from "react-slick"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi"
import Image from "next/image"
import BannerText from "./BannerText"
import { bannerData } from "@/utils/constants"

const Banner = () => {
  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        className="btn btn-circle btn-ghost text-2xl z-30 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </button>
    )
  }
  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        className="btn btn-circle btn-ghost text-2xl z-30 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </button>
    )
  }
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
  }
  return (
    <div className="relative lg:h-[100vh] h-[560px]">
      <section className="absolute top-0 w-full">
        <div className="overflow-hidden relative text-white">
          <Slider {...settings}>
            {bannerData.map((banner) => (
              <div
                key={banner.id}
                className="w-full lg:h-[100vh] h-[560px] relative"
              >
                <Image
                  src={banner.imageUrl}
                  alt="bannerone"
                  className="w-full h-full relative object-cover"
                  fill
                  priority
                />
                <BannerText
                  title={banner.title}
                  subtitle={banner.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default Banner
