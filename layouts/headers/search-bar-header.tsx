'use client';

import { RiSearchLine } from "@remixicon/react";
import Header from ".";
import DefaultSection from "../default-section";
import { motion } from "framer-motion";
import { useState } from "react";
import { productsList } from "@/app/(products-page)/products-data";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SearchBarHeader = () => {

    const router = useRouter();
    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
                type: "spring",
                bounce: 0,
            }}
            className="absolute top-0 left-0 w-full bg-[#FCDFE2] z-50"
        >
            <Header
                customBgColor="#FCDFE2"
                customFgColor="#BA131C"
                isHome={false}
                hideSearchBar
            />

            <DefaultSection
                className="pt-3 pb-10 max-w-xl!"
                outerClassName="text-[#BA131C]"
            >
                <div
                    className="space-y-5"
                >
                    <div
                        className="flex items-center border-b"
                    >
                        <RiSearchLine />
                        <input
                            type="text"
                            placeholder="Search for your next shower crush..."
                            className="outline-none py-2 px-4 w-full"
                            value={searchValue}
                            onChange={(event) => {
                                setSearchValue(event.target.value);
                            }}
                        />
                    </div>

                    <div
                        className="min-h-40"
                    >
                        <div
                            className="grid grid-cols-3 gap-3"
                        >
                            {
                                productsList.filter(p => {

                                    if (searchValue) {
                                        if (p.productData.title.toLowerCase().includes(searchValue.toLowerCase())) {
                                            return p;
                                        }
                                    }

                                }).map(p => (
                                    <button
                                        key={p.productId}
                                        className="py-2 px-4 rounded-lg border text-sm text-center font-semibold cursor-pointer"
                                        onClick={() => {
                                            router.push(`/products/${p.slug}`)
                                        }}
                                    >
                                        <p>{p.productData.title}</p>
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <Link
                            href={"/blogs"}
                            className="block text-center underline font-medium"
                        >Read relevant blogs</Link>
                    </div>

                </div>
            </DefaultSection>

        </motion.div>
    )
}

export default SearchBarHeader