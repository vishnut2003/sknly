import { AxiosError } from "axios";
import { NextResponse } from "next/server";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// eslint-disable-next-line
export function handleCatchBlock(err: any) {
    let message = '';

    if (err instanceof AxiosError) {
        if (err.response?.data) {
            message = err.response.data;
        } else {
            message = err.message;
        }
    } else if (err instanceof Error) {
        message = err.message;
    } else if (typeof err === "string") {
        message = err;
    } else {
        message = "Something went wrong!";
    }

    return message;
}

export function handleFormInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    // eslint-disable-next-line
    setFormData: Dispatch<SetStateAction<any>>
) {
    // eslint-disable-next-line
    setFormData((prev: any) => {
        const nameNest = event.target.name.split('.');
        if (nameNest.length <= 1) {
            return ({
                ...prev,
                [event.target.name]: event.target.value,
            })
        } else if (nameNest.length === 2) {
            return ({
                ...prev,
                [nameNest[0]]: {
                    ...prev[nameNest[0]],
                    [nameNest[1]]: event.target.value,
                }
            })
        } else {
            console.error("handleFormInputChange is not configured to handle more that 2 nested name (by .)")
        }
    })
}

export function generateErrorResponse(message: string) {
    return NextResponse.json(message, { status: 500 });
}

export async function imageUrlToFile(
    imageUrl: string,
    fileName = "image"
): Promise<File> {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    return new File([blob], fileName, {
        type: blob.type,
        lastModified: Date.now(),
    });
}