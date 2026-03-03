import { getWordpressAxios } from "@/config/axios";
import WordpressBlogInterface from "@/types/wordpress";

export async function getOneWordpressBlog (slug: string) {
    return new Promise<WordpressBlogInterface | null>(async (resolve, reject) => {
        try {
            const wordpress_api = getWordpressAxios();

            const ENDPOINT = `/wp-json/wp/v2/posts?slug=${slug}`;

            const {
                data: blogs,
            } = await wordpress_api.get(ENDPOINT);

            const blog = blogs[0];

            return resolve(blog);

        } catch (err) {
            return reject(err);
        }
    })
}