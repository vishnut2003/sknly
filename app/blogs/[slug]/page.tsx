import { getOneWordpressBlog } from "@/functions/blogs/get-one-wordpress-blog";
import { FormateDateObject } from "@/functions/formatte-date";
import DefaultSection from "@/layouts/default-section";
import InnerPagesLayout from "@/layouts/inner-pages-layout";
import { RiFacebookCircleFill, RiInstagramFill, RiPinterestFill, RiSpotifyFill, RiThreadsLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import VanillaImage from "./assets/vanilla.jpg"
import StrawberryImage from "./assets/strawberry-whipcake.jpg"
import { getStoreCurrency } from "@/functions/eCommerce-store";

type Props = {
    params: Promise<{
        slug: string,
    }>
}

const SingleBlogsPage = async ({ params }: Props) => {

    const slug = (await params).slug;
    const blog = await getOneWordpressBlog(slug);

    const currency = getStoreCurrency();

    if (!blog) {
        notFound();
    }

    return (
        <InnerPagesLayout>
            <DefaultSection
                className="py-10 max-w-230! space-y-10 text-[#451F0F]"
            >
                <h1
                    className="text-3xl font-glamour"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                ></h1>

                <div
                    className="flex items-center justify-between"
                >
                    <p>{FormateDateObject({
                        timeStamp: new Date(blog.date || "").getTime(),
                    })}&nbsp; | &nbsp;Sknly.</p>

                    <div
                        className="flex items-center gap-3"
                    >
                        {
                            [
                                {
                                    icon: RiInstagramFill,
                                    href: "#",
                                },
                                {
                                    icon: RiFacebookCircleFill,
                                    href: "#",
                                },
                                {
                                    icon: RiPinterestFill,
                                    href: "#",
                                },
                                {
                                    icon: RiThreadsLine,
                                    href: "#",
                                },
                                {
                                    icon: RiSpotifyFill,
                                    href: "#",
                                },
                            ].map((icon, index) => (
                                <Link
                                    href={icon.href}
                                    key={index}
                                    className="flex items-center"
                                >
                                    <icon.icon
                                        size={20}
                                    />
                                </Link>
                            ))
                        }
                    </div>

                </div>

                <div
                    className="aspect-3/2 w-full"
                >
                    <Image
                        alt={blog.title.rendered}
                        src={blog.featured_media_src_url}
                        width={1000}
                        height={500}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                <div>
                    <div
                        dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
                        className="space-y-5 blog-content"
                    ></div>
                </div>

            </DefaultSection>

            <DefaultSection
                outerClassName="py-10"
                className="max-w-160! text-[#451F0F] space-y-5"
            >
                <h2
                    className="text-2xl font-semibold text-center"
                >Featured Products</h2>
                <div
                    className="grid grid-cols-2 md:grid-cols-2 gap-10"
                >
                    {
                        [
                            {
                                image: VanillaImage,
                                title: "Vanilla Melt",
                                description: "Whipped Body Wash",
                                price: 899,
                                slug: "vanilla-melt",
                            },
                            {
                                image: StrawberryImage,
                                title: "Strawberry Whipcake",
                                description: "Whipped Shower Foam",
                                price: 899,
                                slug: "strawberry-whipcake"
                            },
                            // {
                            //     image: EspressoImage,
                            //     title: "Espresso Mousse",
                            //     description: "Whipped Body Wash",
                            //     price: 899,
                            //     slug: "espresso-mousse",
                            // },
                        ].map((product, index) => (
                            <Link
                                href={`/products/${product.slug}`}
                                key={index}
                                className="space-y-3 block cursor-pointer"
                            >
                                <div
                                    className="aspect-square"
                                >
                                    <Image
                                        alt={product.title}
                                        src={product.image}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div
                                    className="flex items-center justify-between gap-3"
                                >
                                    <div
                                        className="text-sm"
                                    >
                                        <p className="font-semibold line-clamp-1">{product.title}</p>
                                        <p
                                            className="line-clamp-1"
                                        >{product.description}</p>
                                    </div>
                                    <div>
                                        <p
                                            className="font-semibold"
                                        >{currency}{product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </DefaultSection>

        </InnerPagesLayout>
    )
}

export default SingleBlogsPage