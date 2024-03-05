import ArticleParagraph from './ArticleParagraph.tsx';
import { gdprParagraphs } from '../../_static/content.ts';
import Image from 'next/image';

export default function Article() {
  return <div className="w-full relative">
    <Image className="background background--7" 
      src="/gdpr-bg-2.svg" 
      width={2000} 
      height={2000} 
      alt="background" />
    
    <article className="mx-auto w-11/12 max-w-[870px]">
      {gdprParagraphs.map((item, index) => {
        const { title, content } = item;

        return <ArticleParagraph title={title}
                 content={content}
                 index={index} />
      })}
    </article>
  </div>
}