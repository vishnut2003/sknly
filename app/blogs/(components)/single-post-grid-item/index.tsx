import WordpressBlogInterface from '@/types/wordpress'
import Image from 'next/image'
import CalenderIcon from "./assets/calender.png";
import ClockIcon from "./assets/clock.png";
import { FormateDateObject } from '@/functions/formatte-date';
import Link from 'next/link';

const SinglePostGridItem = ({
    post,
}: {
    post: WordpressBlogInterface,
}) => {
    return (
        <div
            className='w-full'
        >
            <div
                className='space-y-3'
            >
                <div
                    className=' aspect-3/2'
                >
                    <Link
                        href={`/blogs/${post.slug}`}
                    >
                        <Image
                            alt={post.title.rendered}
                            src={post.featured_media_src_url}
                            width={1000}
                            height={500}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    </Link>
                </div>

                <div
                    className='text-[#451F0F] space-y-5'
                >
                    <Link
                        href={`/blogs/${post.slug}`}
                        className='block'
                    >
                        <h2
                            className='text-xl font-bold line-clamp-2'
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        ></h2>
                    </Link>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                        }}
                        className='text-sm line-clamp-1'
                    ></div>

                    <div
                        className='flex items-center gap-5'
                    >
                        {
                            [
                                {
                                    icon: CalenderIcon,
                                    text: FormateDateObject({
                                        timeStamp: new Date(post.date || "").getTime(),
                                    }),
                                },
                                {
                                    icon: ClockIcon,
                                    text: "2 mins read",
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className='flex items-center gap-2'
                                >
                                    <Image
                                        alt='Icon'
                                        src={item.icon}
                                        className='w-3'
                                    />
                                    <p
                                        className='text-xs'
                                    >{item.text}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SinglePostGridItem