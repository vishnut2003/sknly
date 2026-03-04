import DefaultSection from '@/layouts/default-section'
import InnerPagesLayout from '@/layouts/inner-pages-layout'
import BgImage from "./assets/bg-image.png";
import SpotifyPlayerImage from "./assets/spotify-player.png";
import FashionTextImage from "./assets/fashion-text.png";
import Image from 'next/image';

const SknlyMusicPage = () => {
    return (
        <InnerPagesLayout>
            <DefaultSection
                style={{ backgroundImage: `url(${BgImage.src})` }}
                outerClassName='bg-cover bg-center'
                className='min-h-200 flex flex-col justify-center items-center gap-10'
            >
                <Image
                    alt='Fashion Text'
                    src={FashionTextImage}
                    className='w-150'
                />

                <p
                    className='text-white font-semibold'
                >Listen on Spotify</p>

                <Image
                    alt='Spotify Player'
                    src={SpotifyPlayerImage}
                    className='w-80'
                />

            </DefaultSection>
        </InnerPagesLayout>
    )
}

export default SknlyMusicPage