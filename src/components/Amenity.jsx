import Image from "next/image";
export default function Amenity(props) {
    return(
        <div className="flex flex-col m-4 border border-black rounded justify-center">
            <Image
              className="w-full max-h-48"
              width={500}
              height={500}
              src={props.image}
              alt={props.image}
            />
            <h1 className="p-6 bg-sky-200 text-center h-full">{props.title}</h1>
        </div>
    );
}