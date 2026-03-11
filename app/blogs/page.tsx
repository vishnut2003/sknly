'use client';

import DefaultSection from '@/layouts/default-section'
import InnerPagesLayout from '@/layouts/inner-pages-layout'
import FeaturedImage from "./assets/featured-image.png";
import { useEffect, useState } from 'react';
import { ErrorType } from '@/types/error';
import WordpressBlogInterface from '@/types/wordpress';
import { handleCatchBlock } from '@/functions/common';
import { GetBlogsApiRequestData } from '../api/wordpress/get-blogs/route';
import axios from 'axios';
import LoadingElement from '@/components/ui-elements/loading-element';
import SinglePostGridItem from './(components)/single-post-grid-item';
import { notFound } from 'next/navigation';

const BlogsPage = () => {

    notFound();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);
    console.log(error);

    const [currentCategory, setCurrentCategory] = useState<number>(0);

    const [page] = useState<number>(1);
    const [category, setCategory] = useState<number | null>(null);

    const [blogs, setBlogs] = useState<WordpressBlogInterface[]>([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const requestData: GetBlogsApiRequestData = {
                    page,
                    category: category || undefined,
                }

                const {
                    data,
                } = await axios.post<WordpressBlogInterface[]>(
                    "/api/wordpress/get-blogs",
                    requestData,
                );

                if (!data) {
                    throw new Error("Blogs not found.")
                }

                if (Array.isArray(data)) {
                    setBlogs(data);
                } else {
                    window.alert("Response data is not an array.")
                }

            } catch (err) {
                const message = handleCatchBlock(err);
                setError(message);
            }
            setIsLoading(false);
        })();
    }, [page, category])

    return (
        <InnerPagesLayout>
            <div
                className='text-[#B5383C]'
            >
                <DefaultSection
                    outerClassName='py-10'
                >
                    <h1
                        className='max-w-xl mx-auto font-semibold text-3xl md:text-5xl md:leading-16'
                    >
                        <span
                            className='block w-full text-left'
                        >Your Whipped Serve:</span>
                        <span
                            className='block w-full text-right'
                        >Tips, Trends & Glow</span>
                    </h1>
                </DefaultSection>

                <DefaultSection
                    style={{
                        backgroundImage: `url(${FeaturedImage.src})`,
                    }}
                    outerClassName='bg-cover bg-center'
                    className='flex items-center justify-center min-h-100'
                >
                    <h1
                        className='text-center text-white text-4xl font-bold'
                    >Blogs</h1>
                </DefaultSection>

                <DefaultSection
                    outerClassName='py-10'
                    className='max-w-205! space-y-10'
                >
                    <div
                        className='flex items-center justify-center gap-4 md:gap-10'
                    >
                        {
                            [
                                {
                                    label: "All",
                                    value: null,
                                },
                                {
                                    label: "Inside Sknly",
                                    value: 3,
                                },
                                {
                                    label: "Our Ingredients",
                                    value: 4,
                                },
                                {
                                    label: "Lifestyle",
                                    value: 6,
                                },
                            ].map((action, index) => (
                                <button
                                    key={index}
                                    className={'block cursor-pointer' + ` ${index === currentCategory && "font-bold"}`}
                                    onClick={() => {
                                        setCurrentCategory(index);
                                        setCategory(action.value);
                                    }}
                                >{action.label}</button>
                            ))
                        }
                    </div>

                    <div>

                        {isLoading && (
                            <LoadingElement />
                        )}

                        {/* {error && (
                            <ErrorMessageElement
                                text={error}
                            />
                        )} */}

                        <div
                            className='flex flex-col md:grid grid-cols-2 gap-10'
                        >
                            {blogs.map((blog, index) => (
                                <SinglePostGridItem
                                    post={blog}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>

                </DefaultSection>

            </div>
        </InnerPagesLayout>
    )
}

export default BlogsPage