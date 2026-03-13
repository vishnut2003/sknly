'use client';

import { RiCheckLine, RiFileCopyLine } from '@remixicon/react'
import { useState } from 'react';

const CopyTextElement = ({
    text,
}: {
    text: string,
}) => {

    const [success, setSuccess] = useState<boolean>(false);

    return (
        <button
            onClick={async () => {
                await navigator.clipboard.writeText(text);
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000)
            }}
            className='p-1 bg-gray-200 rounded-md cursor-pointer'
        >
            {success ? (
                <RiCheckLine
                    size={20}
                />
            ) : (
                <RiFileCopyLine
                    size={20}
                />
            )}
        </button>
    )
}

export default CopyTextElement