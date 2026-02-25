import React, { useState } from 'react'

const CouponApplyForm = () => {

    const [couponCode, setCouponCode] = useState<string>("");

    return (
        <div
            className='space-y-3'
        >
            <p
                className='text-lg font-semibold'
            >Coupon Discount</p>

            <div
                className='flex items-center border py-3 px-5 border-[#BA131C50]'
            >
                <input
                    type="text"
                    placeholder='Enter coupon code'
                    value={couponCode}
                    onChange={(event) => {
                        setCouponCode(event.target.value);
                    }}
                    className='block w-full outline-none'
                />
                <button
                    className='min-w-max shrink-0 text-lg underline font-medium cursor-pointer'
                >
                    Apply
                </button>
            </div>

        </div>
    )
}

export default CouponApplyForm