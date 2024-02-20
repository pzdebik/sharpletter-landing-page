import React, { useState } from 'react';

const AboutFeatures = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const FrontSide = () => {
    return (
      <div className="flex flex-col items-center text-center">
        <img
          src="/assets/speed-go-fast.svg"
          alt="Ilustracja samochodu lecącego w powietrzu z pełną szybkością."
          className="mb-4 h-[150px]"
        />
        <h2 className="mb-8 text-lg font-bold sm:text-xl md:text-2xl xl:text-3xl">
          Dostarczam tylko konkretne informacje, które pomogą przyspieszyć Twój
          rozwój zawodowy.
        </h2>
        <p className="mb-2 text-base font-semibold sm:text-lg md:text-xl xl:text-2xl">
          Pomyśl o tym w ten sposób:
        </p>
        <p className="mb-10 text-base sm:text-lg md:text-xl xl:text-2xl">
          Dostęp do regularnych opracowań materiałów na temat C#. Bezpłatnie.
          Prosto na Twój e-mail!
        </p>
        <p className="sm:text-md mb-4 text-sm font-bold">
          Kliknij na broszurę, aby dowiedzieć się więcej.
        </p>
        <img
          src="/assets/arrow.svg"
          alt="Strzałka w prawo wpisana w fioletowe koło."
          className="h-[40px] hover:animate-pulse"
        />
      </div>
    );
  };

  const BackSide = () => {
    return (
      <div className="flex flex-col items-center text-left">
        <img
          src="/assets/newsletter.svg"
          alt="Ilustracja mężczyzny siedzącego w fotelu, który czyta gazetę popijając swoją kawę."
          className="mb-4 h-[150px]"
        />
        <h2 className="mb-4 text-lg font-bold sm:text-xl md:text-2xl xl:text-3xl">
          Każde wydanie Sharplettera zawiera:
        </h2>
        <ul className="mb-10 ml-16 list-disc text-base sm:text-lg md:text-xl xl:text-2xl">
          <li>
            <strong className="text-[#662579]">Cytat</strong> na dobry początek
          </li>
          <li>
            <strong className="text-[#662579]">3 linki</strong> z solidnym
            streszczeniem
          </li>
          <li>
            „Czy wiesz, że...”, czyli{' '}
            <strong className="text-[#662579]">ciekawostka</strong> z branży IT
          </li>
          <li>
            Pigułka praktycznej wiedzy na temat{' '}
            <strong className="text-[#662579]">umiejętności miękkich</strong>
          </li>
          <li>
            Łamigłówka/
            <strong className="text-[#662579]">zadanie do rozwiązania</strong>
          </li>
          <li>
            <strong className="text-[#662579]">Aplikacja</strong> lub narzędzie,
            które może przydać Ci się w pracy
          </li>
          <li>
            <strong className="text-[#662579]">Playlista</strong> do kodowania
            na dobry tydzień
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8 text-gray-900">
      <div
        className={`
          mx-auto flex min-h-[320px] max-w-full
          cursor-pointer flex-col items-center justify-center
          rounded-md bg-white p-8 shadow-md transition-all hover:scale-[102%]
          sm:min-h-[480px] sm:max-w-md md:min-h-[640px]
          lg:max-w-xl xl:min-h-[720px] xl:max-w-2xl
          xl:p-12 ${isFlipped}
        `}
        onClick={handleCardClick}
      >
        <div className="flex w-full flex-col min-h-[540px] sm:min-h-[550px] md:min-h-[660px] xl:min-h-[590px]">
          {!isFlipped ? <FrontSide /> : <BackSide />}
        </div>
      </div>
    </div>
  );
};

export { AboutFeatures };
