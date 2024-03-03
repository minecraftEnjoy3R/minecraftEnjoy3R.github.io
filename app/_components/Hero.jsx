import React from 'react'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
        <div className="mx-auto max-w-md text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">О нас</h2>

            <p className="mt-4 text-gray-500">
                ЗАО "ВОЛНА" основано в 1998 году товариществом акционеров. В 2017 году было принято продать предприятие.
                Новыми владельцами стали Фролов Ю.А и Пуляев А.Н.
                Энтузиазм, многолетний опыт в фермерском деле и самоотдача позволило дать предприятию новую жизнь.
                На протяжении 5 лет мы поставляем продукцию на Воронежские рынки и радуем людей свежей рыбой.
            </p>
          </header>

          <a
            className="mt-8 inline-block rounded border border-gray-900 bg-gray-900
            px-12 py-3 text-sm font-medium text-white transition hover:shadow
            focus:outline-none focus:ring"
          >
            Контакты
          </a>

          <p className="mt-4 text-gray-500 text-left">
            Пуляев Александр Николаевич:
            </p>
            <p className="mt-4 text-gray-500 text-left">
            +7 (950) 769-97-07
            </p>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block">
              <img
                src="/carp.jpg"
                alt="carp"
                className="aspect-square rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Карп
                </h3>

              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <img
                src="/schuka.jpg"
                alt="schuka"
                className="aspect-square rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Щука
                </h3>

              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero