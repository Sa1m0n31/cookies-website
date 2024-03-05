import { heroListItems } from '../_static/content';

export default function HeroChecklist() {
  return <ul className="flex gap-7 justify-between items-center pt-10 pb-6 mx-auto max-w-[90%]">
    {heroListItems.map((item, index) => {
      return <li key={index} 
               className={`hero__checklist__item items-center font-medium relative pl-6 ${index > 2 ? 'hidden md:flex' : 'flex'}`}>
        {item}
    </li>
    })}
  </ul>
}
