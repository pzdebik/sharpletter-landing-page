import type { ReactNode } from 'react';

type ICTABannerProps = {
  img: string;
  altText: string;
  title: string;
  subtitle: string;
  form: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-3xl text-center sm:items-center sm:justify-between">
    <img src={props.img} alt={props.altText} className="h-[150px]" />
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-[#662579]">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-8">{props.form}</div>
  </div>
);

export { CTABanner };
