import type { ReactNode } from 'react';

type IHeroFormProps = {
  title: ReactNode;
  description: string;
  form: ReactNode;
  marketing?: string;
};

const HeroForm = (props: IHeroFormProps) => (
  <header className="flex flex-col items-center justify-center text-center">
    <h1 className="max-w-2xl whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-6 mt-4 max-w-lg text-wrap text-xl">
      {props.description}
    </div>

    <div>{props.form}</div>
    <div className="max-w-lg">{props.marketing}</div>
  </header>
);

export { HeroForm };
