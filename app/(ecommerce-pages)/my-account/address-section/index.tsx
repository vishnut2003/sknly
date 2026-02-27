'use client';

import LoadingElement from "@/components/ui-elements/loading-element";
import ErrorMessageElement from "@/components/ui-elements/message-elements/error-message";
import { BackendApiAxio } from "@/config/axios";
import { handleCatchBlock } from "@/functions/common";
import { AddressModelInterface } from "@/models/address";
import { ErrorType } from "@/types/error";
import { Fragment, useEffect, useState } from "react";
import SingleAddressEditSection from "./single-address";
import AddAddressForm from "./add-address-form";
import { RiAddCircleFill } from "@remixicon/react";

const EditAddressSection = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<ErrorType>(null);

    const [refreshAddress, setRefreshAddress] = useState<number>(0);

    const [addressFormOpen, setAddressFormOpen] = useState<boolean>(false);

    const [addressList, setAddressList] = useState<AddressModelInterface[]>([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setError(null);
            try {
                const {
                    data
                } = await BackendApiAxio.get<AddressModelInterface[]>(
                    "/api/ecommerce/address/get-user-address-list",
                );

                setAddressList(data);

            } catch (err) {
                const message = handleCatchBlock(err);
                setError(message);
            }
            setIsLoading(false);
            setAddressFormOpen(false);
        })();
    }, [refreshAddress])

    if (error) {
        return (
            <ErrorMessageElement
                text={error}
            />
        )
    }

    if (isLoading) {
        return (
            <LoadingElement />
        )
    }

    return (
        <div
            className="space-y-10"
        >
            <div
                className="space-y-5"
            >
                {addressList.map((address, index) => (
                    <Fragment
                        key={index}
                    >
                        <SingleAddressEditSection
                            address={address}
                            refreshAddressList={setRefreshAddress}
                        />
                    </Fragment>
                ))}
            </div>

            {addressFormOpen && (
                <AddAddressForm
                    refreshAddress={setRefreshAddress}
                />
            )}

            {
                !addressFormOpen && (
                    <div
                        className="flex items-center justify-center"
                    >
                        <button
                            className="flex items-center gap-3 cursor-pointer"
                            type="button"
                            onClick={() => {
                                setAddressFormOpen(prev => !prev)
                            }}
                        >
                            <RiAddCircleFill
                                size={20}
                            />
                            <p>Add new address</p>
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default EditAddressSection