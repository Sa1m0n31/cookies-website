import Image from 'next/image';

interface ThemeObject {
  primary: string,
  secondary: string,
  textPrimary: string,
  textSecondary: string,
  button: string,
  textButton: string,
  checkIcon: string,
  buttonIcon: string,
}

interface PlanItemProps {
  index: number,
  title: string,
  subtitle: string,
  price: string,
  points: string[],
  link: string,
  theme: ThemeObject
}

export default function PlanItem({index, title, subtitle, price, points, link, theme}: PlanItemProps) {
  return <div key={index}
           style={{background: theme.primary}}
           className={`grid__item p-8 rounded-2xl w-full lg:w-1/2 max-w-[336px] lg:translate-y-[40px]`}>
    <h5 className={`text-2xl font-extrabold`} style={{color: theme.textPrimary}}>
      {title}
    </h5>
    <p className={`mt-2 mb-2 min-h-[52px]`} style={{color: theme.textSecondary}}>
      {subtitle}
    </p>

    <p className={`text-3xl flex justify-start items-end font-extrabold`} style={{color: theme.textPrimary}}>
      {price}

      <span className={`pl-1 text-base font-normal`} style={{color: theme.textSecondary}}>
        / month
      </span>
    </p>

    <div className="my-8 flex flex-col gap-2">
      {points.map((item, index) => {
        return <span key={index} 
                 style={{background: theme.secondary, color: theme.textPrimary}}
                 className={`py-2 px-4 flex justify-center items-center gap-2 font-medium text-sm rounded-lg`}>
          <Image src={theme.checkIcon}
              width={16}
              height={16}
              alt={item} />
          {item}
          </span>
      })}
    </div>

    <a href={link} 
      style={{
        background: theme.button,
        color: theme.textButton
      }}
      className={`btn flex gap-3 justify-center items-center w-full h-[52px] rounded-full font-bold`}>
      Get started
      
      <Image src={theme.buttonIcon}
        width={20}
        height={20}
        alt={'get-started'} />
    </a>
  </div>
}