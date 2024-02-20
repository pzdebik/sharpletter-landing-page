import { Link as ScrollLink } from 'react-scroll';

type IScrollDownProps = {
  img: string;
  altText: string;
  to: any;
};

const ScrollDown = (props: IScrollDownProps) => {
  return (
    <ScrollLink
      to={props.to}
      smooth={true}
      duration={500}
      className="absolute bottom-8 left-auto flex h-10 w-10 cursor-pointer rounded-full bg-zinc-300 hover:animate-pulse "
    >
      <img src={props.img} alt={props.altText} />
    </ScrollLink>
  );
};

export { ScrollDown };
