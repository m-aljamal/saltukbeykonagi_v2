import Image from "next/image";
import Room from "../_components/Room";
import PageSheet from "../_components/page-sheet";

export default function page() {
  return (
    <section className="bg-zinc-100">
      <PageSheet>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-900">
            Odalar
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Saltuk Bey Konağı Otel
          </p>
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center my-8">
            <p className="mt-3  text leading-8 text-gray-700 text-justify">
              Otelimiz Kadim Medeniyetler Diyarı Kilis’te bulunan konukseverlik
              anıtıdır. Saltuk Bey Konağı Otel mimari yapısı restore edilerek ve
              yüksek konfor teknolojileriyle donatılarak eski görkemini günümüze
              taşımaktadır. Konukların ihtiyaçları en ince detaylarına göre
              düşünülerek tasarlanan Saltuk Bey Konağı, muhteşem odalarıyla
              misafirlerine konforlu ve kaliteli konaklama hizmeti veriyor.
              Saltuk Bey Konağı Otel ışık saçan mimarisi ve huzur veren
              motifleri ile geçmişin dokusunu yansıtmaktadır. Geçmişin pek çok
              dönemine tanıklık etmiş Saltuk Bey Konağı Otel değişen çağlara
              meydan okurcasına dimdik ayakta. Saltuk Bey Konağı Otel, taş
              işçiliğinin tüm görkemini yansıtan karakteristik binası, Kilis
              şehrine hakim konumu, önemli tarihi eserlere yakınlığıyla,
              ziyaretçilerine büyülü bir zaman yolculuğu sunuyor. Restoran &
              Cafe bölümümüz ise konuklarını Kilis mutfağına özgü mükemmel
              lezzetlerle ağırlıyor.
            </p>
          </div>
          <Room />
        </div>
      </PageSheet>
    </section>
  );
}
