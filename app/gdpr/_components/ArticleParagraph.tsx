interface ArticleParagraphParams {
  title: string,
  content: string
}

export default function ArticleParagraph({title, content}: ArticleParagraphParams) {
  return <div className="mb-10 w-full">
    <h2 className="text-xl lg:text-2xl xl:text-4xl font-extrabold mb-6">
      {title}
    </h2>
    <p className="text-[#5B5B5B] font-medium">
      {content}
    </p>
  </div>
}
