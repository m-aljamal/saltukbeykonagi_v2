import Image from "next/image";

export default function Example() {
  return (
    <div>
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl   lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8  ">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              width={500}
              height={500}
              src="/images/n2.jpeg"
              alt="room"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                width={500}
                height={500}
                src="/images/n5.jpeg"
                alt="room"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                width={500}
                height={500}
                src="/images/21.webp"
                alt="room"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Image
              width={500}
              height={500}
              src="/images/26.webp"
              alt="room"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mt-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Saltuk Bey Konağı Otel
            </h1>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  Otelimiz Kilis’te, şehir merkezinde ve bir o kadar da Kilis’in
                  kokusunu en iyi şekilde duyabileceğiniz bir yerdedir. Eski
                  mimari ve tarihi dokusuyla dizayn edilmiş olan otelimizde aile
                  odası, suit oda ve standart oda seçenekleriyle beraber
                  konaklama imkânlarını sizlere sunuyoruz. Her odamızda bulunan
                  merkezi klima sistemi, 82 ekran LED TV, kasa, fön makinesi,
                  yöresel kahvaltı toplantı salonu, mini bar ve ultra konforlu
                  yataklarımızla sizlere hizmet veriyoruz.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <ul
                role="list"
                className="list-disc space-y-2 pl-4 text-sm md:flex gap-16 items-center"
              >
                <li className="text-gray-400">
                  <span className="text-gray-600">Wifi</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Çift Kişi</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Banyo</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Max</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">TV</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
