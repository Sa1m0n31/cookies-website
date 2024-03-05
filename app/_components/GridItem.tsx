import Image from 'next/image';

interface GridItemProps {
  icon: string,
  title: string,
  content: string,
  extraClass: string,
  index: number
}

export default function GridItem({icon, title, content, extraClass, index}: GridItemProps) {
  return <div className={`w-full p-8 ${extraClass}`} 
           key={index}>
    <Image className="h-7 w-auto" 
      src={icon}
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