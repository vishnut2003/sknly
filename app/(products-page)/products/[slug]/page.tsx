import { notFound } from "next/navigation";
import { productsList } from "../../products-data";
import Header from "@/layouts/headers";
import Image from "next/image";
import DefaultSection from "@/layouts/default-section";
import ProductsImagesSection from "./(components)/images-section";
import { getStoreCurrency } from "@/functions/eCommerce-store";
import SingleProductAddToCartForm from "./(components)/add-to-cart-form";
import ProductContentsTabs from "./(components)/product-content-tabs";
import SaveUptoImage from "./assets/save-upto-image.png";
import KeyIngredientsSection from "./(components)/key-ingredients";
import YouMightAlsoLikeSection from "./(components)/you-might-also-like";
import Footer from "@/layouts/footer";

type Props = {
    params: Promise<{
        slug: string,
    }>
}

const SingleProductsPage = async ({ params }: Props) => {

    const slug = (await params).slug;

    if (!slug) {
        notFound();
    }

    const product = productsList.find((product) => product.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div>
            <Header
                isHome={false}
                customBgColor={product.colorSchema.light}
                customFgColor={product.colorSchema.dark}
            />
            <div
                className="py-5 hidden md:block"
                style={{
                    backgroundColor: product.colorSchema.light
                }}
            >
                <Image
                    alt="Product Banner Image"
                    src={product.bannerImage}
                />
            </div>

            <DefaultSection
                outerClassName="min-h-100 md:py-10 px-0! md:px-5!"
                style={{
                    backgroundColor: product.colorSchema.light
                }}
            >
                <div
                    className="flex flex-col md:flex-row items-start gap-10"
                >
                    <div
                        className="w-full md:w-[60%]"
                    >
                        <ProductsImagesSection
                            product={product}
                        />
                    </div>
                    <div
                        className="w-full px-6"
                        style={{
                            color: product.colorSchema.dark,
                        }}
                    >
                        <div
                            className="w-full space-y-5"
                        >
                            {product.limitedEdition && (
                                <p
                                    className="font-sloops text-4xl"
                                >Limited Edition</p>
                            )}
                            <h1
                                className="text-4xl font-extrabold"
                            >{product.productData.title}</h1>

                            <div
                                className="flex items-start w-full justify-between"
                            >
                                <div>
                                    <p>{product.productData.category}</p>
                                    <p>{product.productData.weight}</p>
                                </div>
                                <div>
                                    <p
                                        className="font-extrabold text-xl"
                                    >
                                        {getStoreCurrency()}
                                        &nbsp; {
                                            product.productData.price.sale ||
                                            product.productData.price.regular
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div
                                className="flex flex-wrap gap-2 md:gap-5"
                            >
                                {product.content.tags.map((tag, idx) => (
                                    <p
                                        key={idx}
                                        className="inline-flex py-1 text-xs md:text-sm px-4 rounded-md"
                                        style={{
                                            backgroundColor: product.colorSchema.dark,
                                            color: "white",
                                        }}
                                    >{tag}</p>
                                ))}
                            </div>

                            <div
                                className="space-y-3"
                            >
                                {product.content.description}
                            </div>

                            <div>
                                <SingleProductAddToCartForm
                                    product={product}
                                />
                            </div>

                            <div
                                className="space-y-1 border rounded-xl py-3 px-4"
                            >
                                {
                                    product.content.tagPoints.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3"
                                        >
                                            <Image
                                                alt="Items"
                                                src={item.image}
                                                width={200}
                                                height={200}
                                                className="w-8 h-8 object-contain"
                                            />
                                            <p
                                                className="font-semibold"
                                            >{item.text}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <div
                                className="mb-15"
                            >
                                <ProductContentsTabs
                                    product={product}
                                />
                            </div>

                            <div
                                className="space-y-5"
                            >
                                <h2
                                    className="text-2xl font-bold"
                                >What Real Skin Noticed</h2>
                                <div
                                    className="flex flex-col md:flex-row items-stretch border rounded-xl"
                                >
                                    {
                                        [
                                            {
                                                number: 100,
                                                suffix: "%",
                                                text: "agreed the formula felt gentle and non-irritating on skin",
                                            },
                                            {
                                                number: 94,
                                                suffix: "%",
                                                text: "noticed softer, more hydrated skin after showering"
                                            },
                                            {
                                                number: 92,
                                                suffix: "%",
                                                text: "agreed their skin felt balanced and comfortable with regular use",
                                            },
                                            {
                                                number: 100,
                                                suffix: "%",
                                                text: "said the whipped texture made showering more enjoyable",
                                            },
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className={
                                                    "w-full flex md:flex-col justify-between items-center text-center gap-6 md:gap-20 p-5"
                                                    + ` ${idx !== 0 ? "border-t md:border-t-0 md:border-l" : ""}`
                                                }
                                            >
                                                <p
                                                    className="text-3xl font-semibold min-w-25 text-left md:text-center"
                                                >{item.number} {item.suffix}</p>
                                                <p
                                                    className="md:min-h-25 text-left md:text-center"
                                                >{item.text}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div
                                className="flex flex-col md:flex-row items-center gap-5 p-7 border rounded-xl"
                            >
                                <div
                                    className="w-75"
                                >
                                    <Image
                                        alt="Save Upto"
                                        src={SaveUptoImage}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className="w-full text-center"
                                >
                                    <div
                                        className="mx-auto max-w-100 flex flex-col items-center gap-5"
                                    >
                                        <h2
                                            className="text-xl md:text-3xl font-semibold"
                                        >Want to save up to 15%?</h2>
                                        <p>Pick your favourites, bundle them up, and enjoy the savings. More fragrances, more fun!</p>
                                        <button
                                            className="py-3 px-7 text-white font-semibold text-sm rounded-lg"
                                            style={{
                                                backgroundColor: product.colorSchema.dark,
                                            }}
                                        >Shop Bundles</button>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="space-y-5"
                            >
                                <h2
                                    className="text-4xl font-bold"
                                >How to use?</h2>

                                <div
                                    className="pb-10"
                                >
                                    <ol
                                        className="list-decimal ml-5 max-w-150"
                                    >
                                        {
                                            [
                                                "Get wet, obviously",
                                                "Give your Sknly bottle a good shake, turn it upside down, and swirl a fluffy dollop into your palm.",
                                                "Step out of the water and lather up - this is where things get seriously smooth.",
                                                "Let the fruit-powered formula take a moment to cleanse, brighten, hydrate, and gently exfoliate.",
                                                "Hop back under, rinse off, and enjoy that soft, glowing skin.",
                                            ].map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="text-lg"
                                                >{item}</li>
                                            ))
                                        }
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </DefaultSection>

            <KeyIngredientsSection />

            <DefaultSection
                style={{
                    backgroundColor: product.colorSchema.light,
                }}
                outerClassName="py-10"
            >
                <YouMightAlsoLikeSection
                    productId={product.productId}
                />
            </DefaultSection>

            <Footer />

        </div>
    )
}

export default SingleProductsPage