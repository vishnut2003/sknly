'use client';

import { getStoreCurrency } from "@/functions/eCommerce-store"
import Image, { StaticImageData } from "next/image"
import StrawberryWhipcakeImage from "./assets/product-1.png";
import VanillaMeltImage from "./assets/product-2.png";
import EspressoMousseImage from "./assets/product-3.png";
import { useRouter } from "next/navigation";
import { productsList } from "@/app/(products-page)/products-data";
import ProductCardSecondary from "@/components/ecommerce-elements/product-card-secondary";

const YouMightAlsoLikeSection = ({ productId }: {
  productId?: string,
}) => {

  return (
    <div
      className="flex flex-col md:flex-row items-end gap-5"
    >
      <div
        className="w-full"
      >
        <div
          className="flex flex-col items-center gap-5"
        >
          <p
            className="text-3xl text-center md:text-left md:text-6xl max-w-100 w-full leading-20 font-bold text-[#A46E54]"
          >
            <span
              className="text-left md:block"
            >you might</span>
            <span
              className="text-right md:block"
            >also like:</span>
          </p>

          <div
            className="hidden md:flex items-center gap-5"
          >
            {
              [
                {
                  title: "Strawberry Whipcake",
                  image: StrawberryWhipcakeImage,
                  price: 799,
                  href: "/products/strawberry-whipcake",
                },
                {
                  title: "Vanilla Melt",
                  image: VanillaMeltImage,
                  price: 799,
                  href: "/products/vanilla-melt",
                }
              ].map((product, idx) => (
                <ProductColumn
                  {...product}
                  key={idx}
                />
              ))
            }
          </div>

        </div>
      </div>
      <div
        className="w-full md:w-[66%]"
      >
        <div
          className="w-full hidden md:block"
        >
          <ProductColumn
            href="/products/espresso-mousse"
            image={EspressoMousseImage}
            title="Espresso Mousse"
            price={799}
          />
        </div>

        {/* Mobile Version */}
        <div
          className="md:hidden grid grid-cols-2 gap-3"
        >
            {productsList.filter(p => {
              if (p.productId !== productId) {
                return p;
              }
            }).map((product, index) => (
              <ProductCardSecondary
                key={index}
                product={{
                  featuredImage: typeof product.images.featuredImage === "string" ? product.images.featuredImage : product.images.featuredImage.src,
                  productData: {
                    category: "Whipped Body Wash",
                    name: product.productData.title,
                    price: product.productData.price.sale || product.productData.price.regular,
                  },
                  productId: product.productId,
                  slug: product.slug,
                }}
              />
            ))}
        </div>

      </div>
    </div>
  )
}

function ProductColumn(props: {
  image: StaticImageData,
  title: string,
  price: number,
  href: string,
}) {

  const router = useRouter();

  return (
    <div
      className="w-full text-[#A46E54] font-semibold space-y-3 cursor-pointer"
      onClick={() => {
        router.push(props.href);
      }}
    >
      <Image
        alt={props.title}
        src={props.image}
        className="w-full object-cover aspect-5/6 rounded-xl"
      />
      <div
        className="flex items-center justify-between"
      >
        <p>{props.title}</p>
        <p>{getStoreCurrency()}{props.price}</p>
      </div>
    </div>
  )
}

export default YouMightAlsoLikeSection