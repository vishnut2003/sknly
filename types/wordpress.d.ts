
export default interface WordpressBlogInterface {
    date: string | null,
    date_gmt: string | null,
    guid: {
        rendered: string
    },
    id: number,
    modified: string,
    modified_gmt: string,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: {
        rendered: string
    },
    content: {
        rendered: string
    },
    excerpt: {
        rendered: string,
        protected: boolean
    },
    author: number,
    featured_media: number,
    comment_status: string,
    ping_status: string,
    sticky: boolean,
    template: string,
    format: string,
    meta: {
        footnotes: string
    },
    categories: string[],
    tags: string[],
    class_list: string[],
    featured_media_src_url: string,
    yoast_head_json: {
        title: string,
        description: string
    }
}