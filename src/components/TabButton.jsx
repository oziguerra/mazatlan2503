export default function TabButton({children, onSelect, isSelected}){
    let coreClasses = "p-2 text-xs md:p-4 w-full text-left hover:bg-primary hover:text-white transition border-l-4 border-primary";
    if(isSelected) {
        coreClasses += " bg-primary text-white";
    } else {
        coreClasses += "";
    }
    return (
        <li>
            <button className={coreClasses} onClick={onSelect}>{children}</button>
        </li>
    );
}