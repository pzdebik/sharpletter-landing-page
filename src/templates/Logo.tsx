import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '60' : '50';
  const fontStyle = props.xl
    ? 'font-semibold text-4xl'
    : 'font-semibold text-3xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/shrpltr.png"
        alt="Logo Sharpletter przedstawiające otwartą, fioletową kopertę."
        height={size}
        width={size}
      />
      <div className="ml-2">{AppConfig.site_name}</div>
    </span>
  );
};

export { Logo };
