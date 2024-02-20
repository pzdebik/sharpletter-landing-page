import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Stworzyłem newsletter, który...">
    <VerticalFeatureRow
      title="Szanuje Twoją skrzynkę odbiorczą."
      description="Cotygodniowy e-mail wysyłany w każdy piątek o 12:00. Dostaniesz go wyłącznie w ten dzień i w żaden inny."
      image="/assets/images/designer-working.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Szanuje Twój czas."
      description="Każdego maila przeczytasz w 5 minut. Krótka forma. Samo mięso. Bez konieczności długiego szukania materiałów po sieci."
      image="/assets/images/digital-nomad-working-near-beach.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Szanuje Twoją inteligencję."
      description="Żadnych gratisów, które nie są bezpłatne. Żadnych ukrytych celów. Jeśli mogę coś dla Ciebie zrobić, lub Ty masz jakąś propozycję w kwestii newslettera, napisz do mnie (zawsze odpisuję)."
      image="/assets/images/smart-people.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Jest starannie opracowywany przy kubku dobrej kawy."
      description="Ważne jest dla mnie, aby każde wydanie było dopracowane i przygotowane bez pośpiechu. Chcę, aby czytelnik był częścią profesjonalnego i przyjemnego doświadczenia."
      image="/assets/images/work-call.svg"
      imageAlt="Fourth feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Posiada archiwum wszystkich maili dostępnych dla każdego "
      description="Możesz czytać moje newslettery jak artykuły blogowe (bez konieczności podawania swojego maila). Sprawdź archiwum poprzednich numerów i zobacz, czy ten newsletter jest dla Ciebie!"
      image="/assets/images/archive.svg"
      imageAlt="Fourth feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
