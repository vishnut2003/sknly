'use client';

import { ProductsDataInterface, productsList } from "@/app/(products-page)/products-data";
import ProductCardSecondary from "@/components/ecommerce-elements/product-card-secondary";
import DefaultSection from "@/layouts/default-section";
import { useAppSelector } from "@/store/hooks";

const WishlistPageClient = () => {

  const products = useAppSelector(s => {
    const productIdList: string[] = s.wishlist.items.map(p => p.productId);
    const products: ProductsDataInterface[] =
      productIdList.map(id => {
        const product = productsList.find(p => p.productId === id);
        return product!;
      });

    return products;
  })

  return (
    <DefaultSection
      className="max-w-220! text-[#451F0F] py-10"
    >
      <div
        className="grid grid-cols-3 gap-7"
      >
        {products.map((product, index) => (
          <ProductCardSecondary
            key={index}
            product={{
              slug: product.slug,
              featuredImage: (
                typeof product.images.featuredImage === "string" ?
                  product.images.featuredImage
                  : product.images.featuredImage.src
              ),
              productData: {
                name: product.productData.title,
                category: product.productData.category,
                price: product.productData.price.regular,
                salePrice: product.productData.price.sale,
              },
              productId: product.productId,
            }}
          />
        ))}
      </div>
    </DefaultSection>
  )
}

export default WishlistPageClient