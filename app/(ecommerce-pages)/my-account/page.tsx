'use client';

import InnerPagesLayout from '@/layouts/inner-pages-layout'
import MyAccountLayout from '@/layouts/my-account-layout'
import EditPenIcon from "./assets/edit-pen.svg";
import Image from 'next/image';
import InputElement from '@/components/ui-elements/input-element';
import { SubmitEvent, useEffect, useState } from 'react';
import { handleCatchBlock } from '@/functions/common';
import { GetOneUserApiRequestData } from '@/app/api/users/get-one/route';
import { useSession } from 'next-auth/react';
import { BackendApiAxio } from '@/config/axios';
import { UsersModelInterface } from '@/models/user';
import EditAddressSection from './address-section';
import { UpdateUserApiRequestData } from '@/app/api/users/update/route';
import { RiLoaderLine } from '@remixicon/react';

const MyAccountPage = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const session = useSession();

    const [userInfo, setUserInfo] = useState<{
        name: string,
        email: string,
        phone: string,
        dob: string,
        gender: string,
    }>({
        dob: "",
        email: "",
        gender: "",
        name: "",
        phone: "",
    });

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {

                if (session.data?.user.id) {
                    const requestData: GetOneUserApiRequestData = {
                        userId: session.data.user.id,
                    }

                    const {
                        data: user,
                    } = await BackendApiAxio.post<UsersModelInterface>(
                        "/api/users/get-one",
                        requestData,
                    );

                    if (!user) {
                        throw new Error("User not found.")
                    }

                    setUserInfo({
                        dob: user.dob || "",
                        email: user.email,
                        gender: user.gender || "",
                        name: user.name,
                        phone: user.phone || "",
                    });

                }
            } catch (err) {
                const message = handleCatchBlock(err);
                window.alert(message);
            }
            setIsLoading(false);
        })();
    }, [session])

    async function saveUserInfo (event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        try {

            const requestData: UpdateUserApiRequestData = {
                email: userInfo.email,
                name: userInfo.name,
                dob: userInfo.dob,
                gender: userInfo.gender,
                phone: userInfo.phone,
            };

            await BackendApiAxio.post(
                "/api/users/update",
                requestData,
            );

        } catch (err) {
            const message = handleCatchBlock(err);
            window.alert(message);
        }
        setIsLoading(false);
    }

    return (
        <InnerPagesLayout>
            <MyAccountLayout
                page='personal-information'
            >
                <div
                    className='max-w-5xl mx-auto space-y-10'
                >
                    {
                        [
                            {
                                title: "Profile",
                                content: (
                                    <form
                                        className='space-y-15'
                                        onSubmit={saveUserInfo}
                                    >
                                        <div
                                            className='flex flex-col md:flex-row items-center gap-5'
                                        >
                                            <div>
                                                <Image
                                                    alt='Avatar'
                                                    src={"/images/placeholder-images/avatar.png"}
                                                    width={100}
                                                    height={100}
                                                    className='w-30 md:w-20'
                                                />
                                            </div>
                                            <div
                                                className='w-full max-w-lg'
                                            >
                                                <InputElement
                                                    label='Name:'
                                                    name='name'
                                                    value={userInfo.name}
                                                    onChange={(value) => {
                                                        setUserInfo(prev => ({
                                                            ...prev,
                                                            name: value,
                                                        }))
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div
                                            className='grid grid-cols-2 gap-10'
                                        >
                                            {
                                                [
                                                    {
                                                        label: "Email:",
                                                        value: userInfo.email,
                                                        name: "email",
                                                    },
                                                    {
                                                        label: "Phone Number:",
                                                        value: userInfo.phone,
                                                        name: "phone",
                                                    },
                                                    {
                                                        label: "Date of Birth:",
                                                        value: userInfo.dob,
                                                        name: "dob",
                                                        type: "date",
                                                    },
                                                    {
                                                        label: "Gender",
                                                        value: userInfo.gender,
                                                        name: "gender",
                                                    },
                                                ].map((col, index) => (
                                                    <div
                                                        className='w-full'
                                                        key={index}
                                                    >
                                                        <InputElement
                                                            label={col.label}
                                                            name={col.name}
                                                            value={col.value}
                                                            onChangeWithEvent={(event) => {
                                                                setUserInfo(prev => ({
                                                                    ...prev,
                                                                    [event.target.name]: event.target.value,
                                                                }))
                                                            }}
                                                            type={col.type}
                                                        />
                                                    </div>
                                                ))
                                            }

                                            <div>
                                                <button
                                                    className='py-3 px-5 bg-[#BA131C] text-white rounded-lg cursor-pointer flex items-center gap-3'
                                                >
                                                    {isLoading && (
                                                        <RiLoaderLine
                                                            size={20}
                                                            className='animate-spin'
                                                        />
                                                    )}
                                                    {isLoading ? "Saving..." : "Save"}
                                                </button>
                                            </div>

                                        </div>

                                    </form>
                                ),
                            },
                            {
                                title: "Address",
                                content: <EditAddressSection/>
                            },
                        ].map((section, index) => (
                            <div
                                key={index}
                                className='flex items-start'
                            >
                                <div
                                    className='hidden md:flex items-center gap-2 w-80'
                                >
                                    <Image
                                        alt='pen'
                                        src={EditPenIcon}
                                        className='w-4'
                                    />
                                    <h2
                                        className='font-semibold'
                                    >{section.title}</h2>
                                </div>
                                <div
                                    className='w-full'
                                >
                                    {section.content}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </MyAccountLayout>
        </InnerPagesLayout>
    )
}

export default MyAccountPage