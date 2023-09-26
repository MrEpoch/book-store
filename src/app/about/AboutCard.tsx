import Image from "next/image";

export default function AboutCard({ info }: { info: { title: string, image: any, description: string } }) {
    return (
        <div className="flex flex-col w-full gap-[2rem]">

            <h2 className="text-4xl font-extrabold bg-gradient-to-br 
        from-green-400 to-cyan-400 bg-clip-text text-transparent box-decoration-clone">
                {info.title}
            </h2>
            <Image src={info.image} className="aspect-video max-h-[30rem] rounded-lg object-cover" alt="books" />
            <p className="dark:text-gray-300 text-gray-600">
                {info.description}
            </p>
        </div>
    )
}
