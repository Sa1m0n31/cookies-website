import Image from 'next/image';

interface GridItemProps {
  image: string,
  title: string,
  content: string
}

export default function GridItem({image, title, content}: GridItemProps) {
  return <div className="w-full p-8 bg-white">
    <Image src={image}
      width={32}
      height={32}
      alt={title} />

    <h4 className="font-bold mt-2 mb-4 text-2xl">
      {title}
    </h4>

    <p className="text-[#5B5B5B] text-lg">
      {content}
    </p>
  </div>
}