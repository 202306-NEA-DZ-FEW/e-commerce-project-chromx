import Container from "@/components/layouts/Container"
import imageCard from "/public/images/banner_3.jpg"
import Image from "next/image"
import FormattedPrice from "@/components/FormattedPrice"
import { Rating } from "react-simple-star-rating"
import { BiCartAdd } from "react-icons/bi"

function ProductDetails(props) {
  console.log(props.productId)
  return (
    <Container>
      <div className="card lg:card-side bg-white shadow-xl w-[800px] mx-auto">
        <figure className="lg:h-[420px] h-80 w-[528px] relative ">
          <Image
            className="w-full h-full object-cover lg:rounded-2xl"
            src={imageCard}
            alt="image"
            fill
            priority
          />
          <div className="flex gap-4 justify-center w-20	width: 5rem flex-row pt-80">
            <div className="grid h-16 card bg-red-500 rounded-box place-items-center">
              content
            </div>
            <div className="grid h-16 card bg-red-500 rounded-box place-items-center">
              content
            </div>
            <div className="grid h-16 card bg-red-500 rounded-box place-items-center">
              content
            </div>
          </div>
        </figure>

        <div className="card-body flex flex-col">
          <h1 className="card-title flex justify-between w-467 text-4xl	font-weight: 750 font-Inter text-black">
            Fjallraven - Foldsack No. 1 Backpack
          </h1>
          <Rating
            initialValue={4}
            allowFraction
            readonly
            SVGstyle={{ display: "inline-block", width: "25px" }}
          />
          <p>
            Attractive Design Metallic material Four key hooks Reliable &
            Durable Premium Quality
          </p>
          <p className="text-lg line-through inline text-error"></p>
          <div className="badge badge-outline badge-sm border-red-700 bg-red-200 ">
            {" "}
            mens wear{" "}
          </div>
          {/* <p>Quantity: {item.quantity}</p> */}

          <div className="card-actions flex flex-col">
            <h3 className="text-3xl font-bold text-success">
              <FormattedPrice amount={20} />
            </h3>
            <button className="btn btn-sm bg-neutral-800 text-white">
              Add to cart <BiCartAdd className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetails

export async function getServerSideProps(context) {
  const { productId } = context.query
  return {
    props: {
      productId,
    },
  }
}
