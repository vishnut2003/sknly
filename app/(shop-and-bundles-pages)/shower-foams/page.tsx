import { ProductCardInterface } from '@/types/product';
import ShopCustomLayout from '../custom-layout'
import featuredImage from "./assets/featured-image.png";
import ProductCardSecondary from '@/components/ecommerce-elements/product-card-secondary';
import DefaultSection from '@/layouts/default-section';
import Image from 'next/image';
import LoveLetterImage from "./assets/love-letter-image.png";
import { productsList } from '@/app/(products-page)/products-data';
import MobileFeaturedImage from "./assets/mobile-featured-image.png";

const ShowerFoamsPage = () => {

  const products: ProductCardInterface[] = [
    {
      featuredImage: "/images/dummy-products-images/product-1.png",
      productData: {
        name: "Espresso Mousse",
        category: "Whipped Body Wash",
        price: 799,
      },
      productId: productsList[2].productId,
      slug: productsList[2].slug,
    },
    {
      featuredImage: "/images/dummy-products-images/product-2.png",
      productData: {
        name: "Strawberry Whipcake",
        category: "Whipped Body Wash",
        price: 799,
      },
      productId: productsList[0].productId,
      slug: productsList[0].slug,
    },
    {
      featuredImage: "/images/dummy-products-images/product-3.png",
      productData: {
        name: "Vanilla Melt",
        category: "Whipped Body Wash",
        price: 799,
      },
      productId: productsList[1].productId,
      slug: productsList[1].slug,
    },
  ]

  return (
    <ShopCustomLayout
      featuredImage={featuredImage}
      mobileFeaturedImage={MobileFeaturedImage}
      heading='Whipped Shower Foam'
      subContent={(
        <div
          className='space-y-4'
        >
          <p
            className='font-semibold'
          >Meet the new way to bodycare!</p>
          <p>Sknly’s fruit-powered Whipped Shower Foams bring together skin-loving care and a dessert-inspired texture that instantly upgrades your shower. The foam comes out light and airy, spreads like whipped cream, and creates a smooth, satisfying lather that feels gentle, refreshing, and just a little indulgent.</p>
          <p>Designed for everyday use, it’s bodycare that makes every shower feel like a moment.</p>
        </div >
      )}
      pageName='shower-foams'
      mobileSubContent
    >
      <DefaultSection
        className='flex items-center justify-center gap-3 py-15'
      >
        <div
          className='max-w-220 grid grid-cols-2 md:flex items-center gap-10'
        >
          {
            products.map((product, index) => (
              <ProductCardSecondary
                product={product}
                key={index}
              />
            ))
          }
        </div>
      </DefaultSection>

      <DefaultSection
        className='flex flex-col md:flex-row gap-6 items-center md:gap-3 py-15 max-w-280!'
      >
        <div
          className='w-full md:w-[80%] aspect-6/5 rounded-xl overflow-hidden'
        >
          <Image
            alt='Love letter image'
            src={LoveLetterImage}
            className='w-full h-full object-cover'
          />
        </div>
        <div
          className='w-full space-y-8 px-10 flex flex-col items-center text-center text-[#BA131C]'
        >
          <h2
            className='text-4xl max-w-85 font-bold'
          >A LOVE LETTER TO YOUR SKIN!</h2>
          <p>Treat yourself or someone you love. Sknly gift boxes come ready to give, with the option to add a sweet little note. A moment of indulgence, waiting inside</p>
          <button
            className='outline-button'
          >Shop Bundles</button>
        </div>
      </DefaultSection>

    </ShopCustomLayout>
  )
}

export default ShowerFoamsPage