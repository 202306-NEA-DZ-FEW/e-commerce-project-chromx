import { motion } from "framer-motion"
import Link from "next/link"

const BannerText = ({ title, subtitle }) => {
  return (
    <div className="lg:inline-block absolute top-0 left-0 px-10 w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black opacity-40"></div>
      <div className="flex h-full flex-col gap-y-6 justify-center md:ml-10 md:max-w-3xl relative z-20">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-6xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-md lg:text-lg text-slate-100"
        >
          {subtitle}
        </motion.p>
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-4 mt-2"
        >
          <Link href="/products" className="btn btn-neutral">
            Find out more
          </Link>
          <Link href="/products" className="btn btn-success">
            Shop Now
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default BannerText
