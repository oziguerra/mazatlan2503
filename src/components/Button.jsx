
export default function Button({children, link}){

    return (
        <a href={link} target = "_blank" className="px-8 py-6 border-2 rounded mr-4 mb-4 border-primary hover:bg-primary hover:text-white transition"  >{children}</a>
    );
}