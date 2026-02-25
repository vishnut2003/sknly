import RadioElement from '@/components/ui-elements/radio-element';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { changeCodStatus } from '@/store/slices/cart';
import RazorpayLogo from "./assets/razorpay-logo.png";
import Image from 'next/image';
import { getCODFee, getStoreCurrency } from '@/functions/eCommerce-store';

const PaymentMethodSection = () => {

    const isCod = useAppSelector(s => s.cart.items.codFee);
    const storeDispatch = useAppDispatch();

    const COD_FEE = getCODFee();
    const currency = getStoreCurrency();

    return (
        <div
            className='space-y-5'
        >
            <RadioElement
                isChecked={isCod ? false : true}
                onChange={() => {
                    storeDispatch(
                        changeCodStatus({
                            value: false,
                        })
                    );
                }}
                name='razorpay'
            >
                <Image
                    alt='Razorpay'
                    src={RazorpayLogo}
                    className='w-30'
                />
            </RadioElement>

            <p
                className='text-sm'
            >We accept Razorpay. Upon placing your order, you will be directed to another page to complete your purchase. Please do not close the browser until instructed to ensure payment is successful.</p>

            <RadioElement
                isChecked={isCod ? true : false}
                onChange={() => {
                    storeDispatch(
                        changeCodStatus({ value: true })
                    )
                }}
                name='COD'
            >
                <div
                    className="flex items-center justify-between text-sm"
                >
                    <div>Cash on delivery</div>
                    <div>
                        +{currency + COD_FEE}
                    </div>
                </div>
            </RadioElement>

        </div>
    )
}

export default PaymentMethodSection