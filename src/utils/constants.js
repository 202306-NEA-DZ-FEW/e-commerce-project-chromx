import banner_1 from "public/images/banner_1.jpg"
import banner_2 from "public/images/banner_2.jpg"
import banner_3 from "public/images/banner_3.jpg"
import banner_4 from "public/images/banner_4.jpg"
import banner_5 from "public/images/banner_5.jpg"
import banner_6 from "public/images/banner_6.jpg"
import banner_7 from "public/images/banner_7.jpg"
import banner_8 from "public/images/banner_8.jpg"
import banner_9 from "public/images/banner_9.jpg"
import banner_10 from "public/images/banner_10.jpg"

export const bannerData = [
  {
    id: 1,
    title: "Ultimate Performance Sports Jacket",
    description:
      "Elevate your running game with our high-performance sports jacket. Crafted for comfort and style, this jacket pairs perfectly with blue denim jeans for a sporty yet fashionable look.",
    imageUrl: banner_1,
  },
  {
    id: 2,
    title: "Chic Denim Vest Combo for Mother and Daughter",
    description:
      "Embrace the bond with your little one in style! Our trendy denim vest for women and adorable matching vest for your daughter will make heads turn wherever you go.",
    imageUrl: banner_2,
  },
  {
    id: 3,
    title: "Effortless Elegance in an Oversized T-shirt",
    description:
      "Step into comfort and fashion with our white oversized season t-shirt featuring a convenient pocket. It's the perfect blend of style and practicality for your daily adventures.",
    imageUrl: banner_3,
  },
  {
    id: 4,
    title: "Immerse in Sound with Our Premium Headsets",
    description:
      "Dive into a world of crystal-clear audio with our top-notch headsets. Designed for music lovers and gamers alike, these headsets deliver an immersive experience like no other.",
    imageUrl: banner_4,
  },
  {
    id: 5,
    title: "Cozy Up in Style with Our Sweater Collection",
    description:
      "Stay warm and stylish with our cozy sweater collection. This girl's sweater combines warmth with fashion, making it a must-have for your winter wardrobe.",
    imageUrl: banner_5,
  },
  {
    id: 6,
    title: "Redefine Your Look with Modern Red Glasses",
    description:
      "Unleash your inner trendsetter with our modern red glasses for women. These glasses are the perfect accessory to elevate any outfit and add a touch of sophistication to your style.",
    imageUrl: banner_6,
  },
  {
    id: 7,
    title: "Classic Comfort: Crewneck Sweatshirt for Men",
    description:
      "Experience classic comfort with our crewneck sweatshirt for men. Perfect for casual outings or lounging at home, this sweatshirt is a versatile addition to your wardrobe.",
    imageUrl: banner_7,
  },
  {
    id: 8,
    title: "Oversized Sweatshirt & Season Glasses Combo",
    description:
      "Make a fashion statement with our oversized sweatshirt paired with season glasses for girls. This trendy combination exudes style and confidence, ensuring you stand out in the crowd.",
    imageUrl: banner_8,
  },
  {
    id: 9,
    title: "Radiate Sunshine in a Yellow Sweater",
    description:
      "Brighten up your day and your wardrobe with our yellow sweater for girls. Complement your look with rounded glasses for that extra touch of charm and personality.",
    imageUrl: banner_9,
  },
  {
    id: 10,
    title: "Effortlessly Cool in Denim & White T-shirt",
    description:
      "Achieve an effortlessly cool look with our denim shirt and white t-shirt combo for men. Whether you're going for a casual or semi-formal vibe, this combination has you covered.",
    imageUrl: banner_10,
  },
]

export const menSection = {
  id: 1,
  heading: "Fashion for All",
  imageUrl:
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
  title: "Men's Fashion",
  description:
    "Discover the latest trends in men's fashion. From classic suits to casual streetwear, we have everything you need to upgrade your wardrobe.",
  buttonLabel: "Shop Now",
  lft: false,
  link: "/products?category=mens-shoes",
}
export const womenSection = {
  id: 2,
  heading: "Elevate Your Style",
  imageUrl:
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
  title: "Women's Fashion",
  description:
    "Elevate your style with our stunning collection of women's fashion. Whether it's elegant dresses or everyday essentials, we've got you covered.",
  buttonLabel: "Shop Now",
  lft: true,
  link: "/products?category=womens-dresses",
}
export const electronicsSection = {
  id: 3,
  heading: "Explore the Future",
  imageUrl:
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80",
  title: "Electronics",
  description:
    "Explore our cutting-edge electronics selection. From smartphones to smart home devices, we offer the latest in technology for your needs.",
  buttonLabel: "Shop Now",
  lft: false,
  link: "/products?category=laptops",
}
