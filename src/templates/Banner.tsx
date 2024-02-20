import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      img="/assets/about-our-team.svg"
      altText="Ilustracja przedstawiająca trzech zadowolonych ludzi z ręcami skrzyżowanymi na piersi."
      title="Dołącz do grona innych programistów i poszerzaj swoją wiedzę."
      subtitle="Nowe wydanie w każdy piątek."
      form={
        <iframe
          className="h-25 w-[450px] xl:w-[500px]"
          src="https://embeds.beehiiv.com/d3a04c87-94fc-4e7b-a61b-839340efc5a5?slim=true"
          data-test-id="beehiiv-embed"
        ></iframe>
      }
    />
  </Section>
);

export { Banner };
