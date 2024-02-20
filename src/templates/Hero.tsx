import Link from 'next/link';

import { ScrollDown } from '@/scroll/ScrollDown';

import { Background } from '../background/Background';
import { HeroForm } from '../hero/HeroForm';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://sharpletter.beehiiv.com/" target="_blank">
            Archiwum
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <div className="flex flex-col justify-between">
        <HeroForm
          title={<>{'Darmowy, cotygodniowy newsletter o C#'}</>}
          description="Najciekawsze podsumowania materiałów z linkami. Wszystko przeczytasz w 5 minut (razem z dodatkami)."
          form={
            <iframe
              className="h-30 w-[450px] xl:w-[500px]"
              src="https://embeds.beehiiv.com/d3a04c87-94fc-4e7b-a61b-839340efc5a5?slim=true"
              data-test-id="beehiiv-embed"
            ></iframe>
          }
        />
        <ScrollDown
          img="scroll-down.svg"
          altText="Strzałka w dół wpisana w fioletowe koło."
          to="section"
        ></ScrollDown>
      </div>
    </Section>
    <section id="section"></section>
  </Background>
);

export { Hero };
