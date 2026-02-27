'use client';

import { AddressModelInterface } from "@/models/address";
import AddressFormFields from "./address-form-fields";
import { Dispatch, SetStateAction, SubmitEvent, useState } from "react";
import { RiAddLine, RiDeleteBin7Line, RiLoaderLine } from "@remixicon/react";
import { ErrorType } from "@/types/error";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";
import { handleCatchBlock } from "@/functions/common";
import { UpdateAddressApiRequestData } from "@/app/api/ecommerce/address/update/route";
import { BackendApiAxio } from "@/config/axios";

const SingleAddressEditSection = ({
    address,
    refreshAddressList,
    isDefault,
}: {
    address: AddressModelInterface,
    refreshAddressList: Dispatch<SetStateAction<number>>,
    isDefault?: boolean,
}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const [deleteInProgress, setDeleteInProgress] = useState<boolean>(false);

    const [formData, setFormData] = useState<{
        line1: string,
        line2: string,
        city: string,
        pincode: string,
        state: string,
    }>({
        city: address.city,
        line1: address.line1,
        line2: address.line2 || "",
        pincode: address.pincode,
        state: address.state,
    });

    function handleChangeEvent(value: string, name: string) {
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleFormSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const requestData: UpdateAddressApiRequestData = {
                ...formData,
                addressId: address._id.toString(),
            }

            await BackendApiAxio.post(
                "/api/ecommerce/address/update",
                requestData,
            );

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    }

    async function handleDeleteAddress() {
        setDeleteInProgress(true);
        setError(null);
        try {

            const addressId = address._id.toString();

            if (!addressId) {
                throw new Error("Address Id is required.")
            }

            await BackendApiAxio.post(
                "/api/ecommerce/address/delete-one",
                { addressId }
            );

            refreshAddressList(prev => ++prev)

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setDeleteInProgress(false);
    }

    async function handleSetDefaultAddress () {
        setIsLoading(true);
        try {

            const requestData: {
                addressId: string,
            } = {
                addressId: address._id.toString(),
            }

            await BackendApiAxio.post(
                "/api/users/set-default-address",
                requestData,
            )

            refreshAddressList(prev => ++prev);

        } catch (err) {
            const message = handleCatchBlock(err);
            window.alert(message);
        }
    }

    return (
        <form
            onSubmit={handleFormSubmit}
        >

            <div
                className="flex justify-end"
            >
                <button
                    className="flex items-center cursor-pointer gap-2"
                    type="button"
                    onClick={handleSetDefaultAddress}
                >
                    <p>Default</p>
                    <div
                        className="w-3 h-3 border p-0.5 rounded-full"
                    >
                        {isDefault && (
                            <div
                                className="bg-[#BA131C] w-full h-full rounded-full"
                            />
                        )}
                    </div>
                </button>
            </div>

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
                className="flex items-center justify-end gap-3"
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
                    <p>{isLoading ? "Saving..." : "Save Changes"}</p>
                </button>

                <button
                    className="py-3 px-3 bg-[#BA131C] text-white rounded-lg cursor-pointer"
                    title="Delete Address"
                    type="button"
                    onClick={handleDeleteAddress}
                >
                    {deleteInProgress ? (
                        <RiLoaderLine
                            className="animate-spin"
                            size={20}
                        />
                    ) : (
                        <RiDeleteBin7Line
                            size={20}
                        />
                    )}
                </button>

            </div>

        </form>
    )
}

export default SingleAddressEditSection