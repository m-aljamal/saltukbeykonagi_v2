import Image from "next/image";

export default function KnowUs() {
  return (
    <div className="relative isolate overflow-hidden sm:py-32 ">
      <Image
        src="/images/7.webp"
        alt=""
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
      />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-8">
        <div className="mx-auto max-w-5xl lg:mx-0">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
            SALTUK BEY KONAĞI BUTİK OTEL
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
            Beklentilerinizin siz söylemeden karşılık bulduğu, ayrıcalıkların ve
            farklılıkların Kilis teki yeni adresi. Sunduğumuz farklı konaklama
            alternatifleriyle, alışılagelmiş çizgilerin ötesinde, gelişimci ve
            yenilikçi hizmet anlayışımızla, dolayısıyla duyarlı ve estetik
            yaklaşımlarımızla, değer kattığımız mekânlarımızda her detay sizin
            konfor ve memnuniyetinizi sağlamak için tasarlanmıştır.
            Misafirlerimizin memnuniyeti için benimsediğimiz temel ve etik
            ilkelerimiz, hizmetlerimizdeki kaliteyi sürekli geliştiren
            anlayışımız ve sunduğumuz olanaklar ile hizmetinizdeyiz. Saltuk Bey
            Konağı Otel prestijli bir otelinden daha fazlası.
          </p>
        </div>
      </div>
    </div>
  );
}
