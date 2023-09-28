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
    <div className="overflow-hidden relative text-white">
      <Slider {...settings}>
        {bannerData.map((banner) => (
          <div key={banner.id} className="w-full h-[560px] relative">
            <Image
              src={banner.imageUrl}
              alt="bannerone"
              className="w-full h-full relative object-cover"
              fill
              priority
            />
            <BannerText title={banner.title} subtitle={banner.description} />
          </div>
        ))}
        {/* <div className="w-full h-[560px] relative">
          <Image
            src={banner_1}
            alt="bannerone"
            className="w-full h-full relative object-cover"
            priority
            fill
          />
          <BannerText
            title="Outware Picks"
            subtitle="dsajdlasjdlasjd djasldjalsd"
          />
        </div> */}
        {/* <div className="w-full h-[560px] relative">
          <Image
            src={banner_2}
            alt="bannertwo"
            className="w-full h-full relative object-cover"
            fill
          />
          <BannerText title="Seasonal Offers" />
        </div>
        <div className="w-full h-[560px] relative">
          <Image
            src={banner_3}
            alt="bannerthree"
            className="w-full h-full relative object-cover"
            fill
          />
          <BannerText title="Best for all" />
        </div> */}
      </Slider>
    </div>
  )
}

export default Banner
