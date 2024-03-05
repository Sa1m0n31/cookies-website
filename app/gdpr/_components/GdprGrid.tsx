import { gdprGridItems } from '../../_static/content.ts';
import GridItem from '../../_components/GridItem.tsx';

export default function GdprGrid() {
  return <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-12 mb-12 bg-[#FBFBFB] rounded-2xl py-10 relative z-20">
    {gdprGridItems.map((item, index) => {
        const { icon, title, content } = item;
    
      return <GridItem icon={icon}
               title={title} 
               content={content}
               extraClass={'bg-transparent'}
               index={index} />
    })}
  </div>
}