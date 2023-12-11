
export default function SkillCard(props) {

    return(
        <div className="m-2 p-4 border-x border-y border-primary rounded transition hover:shadow-2xl flex flex-row justify-between">
            <img className="w-5 h-5 mr-1 md:w-6 md:h-6" src={props.icon} alt="Confluence icon" />
            <p className="text-xs md:text-sm lg:whitespace-nowrap">{props.title}</p>
        </div>
    );
}