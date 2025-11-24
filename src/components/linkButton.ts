export default function linkButton(btnText: string, link: string): string {

    return `
<a class="
p-3
rounded-full
bg-gray-600
text-white
hover:bg-blue-100
hover:text-gray-800
text-lg
transition-all
shadow-lg"
href="${link}">
${btnText}
</a>
`
}
