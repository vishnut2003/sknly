'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchOrdersOption() {

    const searchParams = useSearchParams();
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        const search = searchParams.get("search");
        if (search) {
            setSearchText(search);
        }
    }, [searchParams])

    return (
        <form
            className="flex items-center gap-3"
        >
            <input
                className="w-full py-3 px-5 bg-gray-100 border-gray-200 rounded-lg outline-none"
                placeholder="Search Orders..."
                name="search"
                value={searchText}
                onChange={(event) => {
                    setSearchText(event.target.value)
                }}
            />
            <button
                className="py-3 px-6 bg-[#BA131C] text-white  rounded-lg"
            >
                Search
            </button>
        </form>
    )
}