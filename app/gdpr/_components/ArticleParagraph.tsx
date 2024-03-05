interface ArticleParagraphParams {
  title: string,
  content: string,
  index: number
}

export default function ArticleParagraph({title, content, index}: ArticleParagraphParams) {
  return <div className="mb-10 w-full" 
           key={index}>
    <h2 className="text-xl lg:text-2xl xl:text-4xl font-extrabold mb-6">
      {title}
    </h2>
    <p className="text-[#5B5B5B] font-medium">
      {content}
    </p>
  </div>
}