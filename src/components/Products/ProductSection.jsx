import Image from "next/image"
import Container from "../layouts/Container"
import Link from "next/link"
import { motion } from "framer-motion"

function ProductSection({
  heading,
  title,
  description,
  link,
  imageUrl,
  buttonLabel,
  lft,
}) {
  return (
    <Container>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-3xl font-bold mb-10"
      >
        {heading}
      </motion.h1>
      <div
        className={`w-full mx-auto items-center md:flex-row  flex flex-col ${
          lft ? "md:flex-row-reverse" : " "
        } `}
      >
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="xl:h-[520px] lg:h-[580px] h-80 lg:w-[40%] w-full relative z-20"
        >
          <Image
            className="w-full h-full object-cover rounded-2xl"
            src={imageUrl}
            alt={title}
            fill
            priority
          />
        </motion.figure>
        <motion.div
          initial={
            lft
              ? { x: 400, opacity: 0, zIndex: -10 }
              : { x: -400, opacity: 0, zIndex: -10 }
          }
          whileInView={{ x: 0, opacity: 1, zIndex: 1 }}
          transition={{ duration: 0.8 }}
          className="card-body lg:w-[50%] justify-center"
        >
          <h3 className="card-title flex justify-between text-4xl font-bold ">
            {title}
          </h3>
          <span className="text-xl ">{description}</span>
          <Link href={link} className="btn btn-sm btn-neutral self-start">
            {buttonLabel}
          </Link>
        </motion.div>
      </div>
    </Container>
  )
}

export default ProductSection
