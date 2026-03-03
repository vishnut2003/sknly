'use client';

import { Dispatch, SetStateAction, SubmitEvent, useState } from "react";
import AddressFormFields from "./address-form-fields";
import { ErrorType } from "@/types/error";
import { handleCatchBlock } from "@/functions/common";
import { AddAddressApiRequestData } from "@/app/api/ecommerce/address/add/route";
import { BackendApiAxio } from "@/config/axios";
import { motion } from "framer-motion";
import { RiAddLine, RiLoaderLine } from "@remixicon/react";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";

const AddAddressForm = ({
    refreshAddress,
}: {
    refreshAddress: Dispatch<SetStateAction<number>>,
}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const [formData, setFormData] = useState<{
        line1: string,
        line2: string,
        city: string,
        pincode: string,
        state: string,
    }>({
        city: "",
        line1: "",
        line2: "",
        pincode: "",
        state: "",
    });

    function handleChangeEvent(value: string, name: string) {
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmitForm(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {

            const requestData: AddAddressApiRequestData = {
                ...formData,
            }

            await BackendApiAxio.post(
                "/api/ecommerce/address/add",
                requestData,
            );

            setFormData({
                city: "",
                line1: "",
                line2: "",
                pincode: "",
                state: "",
            })

            refreshAddress(prev => ++prev);

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    }

    return (
        <motion.form
            onSubmit={handleSubmitForm}
            className="space-y-5"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <AddressFormFields
                value={formData}
                onChange={{
                    line1: (value) => handleChangeEvent(value, "line1"),
                    line2: (value) => handleChangeEvent(value, "line2"),
                    city: (value) => handleChangeEvent(value, "city"),
                    pincode: (value) => handleChangeEvent(value, "pincode"),
                    state: (value) => handleChangeEvent(value, "state"),
                }}
            />

            {error && (
                <ErrorMessageElement
                    text={error}
                />
            )}

            <div
                className="flex items-center justify-end"
            >
                <button
                    className="bg-[#BA131C] py-2 px-5 rounded-lg text-white flex items-center gap-3 cursor-pointer"
                >
                    {isLoading ? (
                        <RiLoaderLine
                            size={20}
                            className="animate-spin"
                        />
                    ) : (
                        <RiAddLine
                            size={20}
                        />
                    )}
                    <p>{isLoading ? "Adding..." : "Add Address"}</p>
                </button>
            </div>
        </motion.form>
    )
}

export default AddAddressForm