import { motion } from "framer-motion"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"

function TeamCard({ name, imgUrl, linkedin, github }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-full md:w-[40%] bg-white flex mx-auto justify-between items-center rounded-xl p-4 mt-14 group"
    >
      <div className="w-36">
        <motion.figure
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-[50%] z-10"
        >
          <div className="w-32 h-32 relative group-hover:scale-110 duration-200 ">
            <Image
              className="w-full h-full bottom-24 rounded-xl object-cover"
              src={imgUrl}
              alt={name}
              fill
              priority
            />
          </div>
        </motion.figure>
      </div>
      <motion.div
        initial={{ x: -100, opacity: 0, zIndex: -10 }}
        whileInView={{ x: 0, opacity: 1, zIndex: 1 }}
        transition={{ duration: 0.6 }}
        className="flex gap-3 flex-1 flex-col "
      >
        <h3 className="text-xl font-bold ">{name}</h3>
        <div className="flex items-center gap-3">
          <Link href={linkedin} target="_blank">
            <BsGithub className="text-xl" />
          </Link>
          <Link href={github} target="_blank">
            <BsLinkedin className="text-xl" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TeamCard
