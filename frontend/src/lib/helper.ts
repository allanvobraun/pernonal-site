import MarkdownIt from 'markdown-it';
import prism from 'markdown-it-prism';
import "prismjs/components/prism-json";
const md = new MarkdownIt({
    html: true
});
md.use(prism);



export function renderMd(markdown: string): string {
    return md.render(markdown);
}