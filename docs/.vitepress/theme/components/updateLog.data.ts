import {createContentLoader} from "vitepress";

export interface Data {
    description: string
    dateUrl: string
}

declare const data: Record<string, Data>
export { data }

export default createContentLoader('updatelog/**/*.md', {
    transform(raw) {
        return raw.reduce<Record<string, Data>>((prev, { frontmatter, url }) => {
            if (!url.endsWith(".html")) return prev

            const dateUrl = url.split("/").pop().replace(".html", "")
            prev[url] = {
                description: frontmatter.description ?? "无描述",
                dateUrl
            }
            return prev
        }, {})
    }
})