import { signOut } from 'next-auth/react';
import Image from 'next/image'
import SignoutIcon from "./assets/log-out.svg";

const AdminDashboardActions = () => {
    return (
        <div
            className='flex items-center gap-2 md:gap-4'
        >
            <button
                className="font-semibold flex items-center gap-2 cursor-pointer"
                onClick={() => {
                    signOut();
                }}
            >
                <Image
                    alt="Signout Icon"
                    src={SignoutIcon}
                    className="w-5"
                />
                <p
                    className='min-w-max'
                >Log Out</p>
            </button>
        </div>
    )
}

export default AdminDashboardActions