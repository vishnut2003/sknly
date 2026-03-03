import { getWordpressAxios } from "@/config/axios";
import WordpressBlogInterface from "@/types/wordpress";

export async function getWordpressBlogs({
    page,
    category,
}: {
    page: number,
    category?: number,
}) {
    return new Promise<WordpressBlogInterface[]>(async (resolve, reject) => {
        try {

            const query: {
                [key: string]: string,
            } = {
                page: page.toString(),
            }

            if (category) {
                query["categories"] = category.toString();
            }

            const POSTS_ENDPOINT = `/wp-json/wp/v2/posts`;
            const wordpress_api = getWordpressAxios();

            const {
                data: posts,
            } = await wordpress_api.get<WordpressBlogInterface[]>(
                POSTS_ENDPOINT,
                { params: query }
            );

            return resolve(posts);

        } catch (err) {
            return reject(err);
        }
    })
}