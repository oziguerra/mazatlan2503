
export default function Section({children, id}){


    return(
        <section id={id} className="flex flex-col py-10 md:py-36 mx-12 w-full justify-center">
            {children}
        </section>
    );
}