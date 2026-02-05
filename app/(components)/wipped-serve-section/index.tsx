import DefaultSection from '@/layouts/default-section'
import BGImage from "./bg-image.png";
import Image, { StaticImageData } from 'next/image';
import Blog1Image from "./assets/blogs-images/blog-1.png";
import Blog2Image from "./assets/blogs-images/blog-2.png";
import { RiCalendar2Line, RiTimeLine } from '@remixicon/react';
import { Fragment } from 'react/jsx-runtime';

const WippedServeSection = () => {

    const blogsData: {
        image: string | StaticImageData,
        title: string,
        description: string,
        href: string,
        createdAt: string,
        readTime: string,
        tags: string[],
    }[] = [
            {
                title: "Your Shower Just Got an Upgrade: Meet Sknly's Whipped Shower Foam",
                createdAt: "July 21, 2025",
                description: `This is what happens when body care decides to have a little fun ;) Think fluffy swirls that lather like whipped cream, juicy fruit-powered formulas that hydrate and brighten, and scents so delicious they might make you skip dessert altogether. Every pump feels light, airy, and skin-loving, melting into your skin like a treat you’ll keep coming back for. Showers?... read more`,
                href: "#",
                image: Blog1Image,
                readTime: "2 mins read",
                tags: [
                    "Travel",
                    "Lifestyle",
                    "Skincare",
                ],
            },
            {
                title: "Sknly’s Secret Recipe: The Fruit-Powered Blend Behind the Glow",
                createdAt: "July 21, 2025",
                description: `This is what happens when body care decides to have a little fun ;) Think fluffy swirls that lather like whipped cream, juicy fruit-powered formulas that hydrate and brighten, and scents so delicious they might make you skip dessert altogether. Every pump feels light, airy, and skin-loving, melting into your skin like a treat you’ll keep coming back for. Showers?... read more`,
                href: "#",
                image: Blog2Image,
                readTime: "2 mins read",
                tags: [
                    "Travel",
                    "Lifestyle",
                    "Skincare",
                ],
            }
        ]

    return (
        <div
            style={{
                backgroundImage: `url(${BGImage.src})`,
            }}
            className='bg-cover bg-fixed'
        >
            <DefaultSection
                className='text-white max-w-250! space-y-6'
                outerClassName='py-10'
            >
                <h2
                    className='text-4xl font-glamour text-center'
                >Your Whipped Serve</h2>

                <div
                    className='space-y-5'
                >
                    {blogsData.map((blog, index) => (
                        <div
                            key={index}
                            className='flex items-stretch gap-6 backdrop-blur-md'
                        >
                            <div
                                className='w-50 h-50 shrink-0'
                            >
                                <Image
                                    alt={blog.title}
                                    src={typeof blog.image === "string" ? blog.image : blog.image.src}
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div
                                className='flex flex-col justify-evenly'
                            >
                                <h3
                                    className='text-lg font-bold line-clamp-1'
                                >{blog.title}</h3>
                                <p>{blog.description}</p>

                                <div
                                    className='flex items-center justify-between'
                                >
                                    <div
                                        className='flex items-center gap-4'
                                    >
                                        {
                                            [
                                                {
                                                    label: blog.createdAt,
                                                    icon: RiCalendar2Line,
                                                },
                                                {
                                                    label: blog.readTime,
                                                    icon: RiTimeLine,
                                                }
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className='flex items-center gap-2'
                                                >
                                                    <item.icon
                                                        size={15}
                                                    />
                                                    <p>{item.label}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div
                                        className='flex items-center justify-end gap-3'
                                    >
                                        {blog.tags.map((tag, idx) => (
                                            <Fragment
                                                key={idx}
                                            >
                                                {idx !== 0 && (
                                                    <span
                                                        className='block w-2 h-2 bg-white rounded-full'
                                                    />
                                                )}

                                                <span>{tag}</span>
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className='flex items-center justify-center'
                >
                    <button
                        className='secondary-button'
                    >
                        More Blogs
                    </button>
                </div>

            </DefaultSection>
        </div>
    )
}

export default WippedServeSection