import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl grid grid-cols-1  md:grid-cols-2 items-center gap-x-10 py-10  space-y-10">
      <div>
        <h4 className="text-yellow-800  ">HAKKIMIZDA</h4>
        <h2 className="text-2xl font-bold text-gray-700">
          Merhaba Kilis Sevdalıları !..
        </h2>
        <div className="text-gray-700 text-sm space-y-5 mt-10 text-justify">
          <p>
            Herşeyin bir öyküsü vardır, elbette bir de başlangıcı. Bizim de
            öykümüz henüz yazılmaya başlandı. Öykümüzün adı Saltuk Bey Konağı
            Saltuk Bey Konağı 10 odadan oluşmakta. Odalarımız Kilis’in taş
            mekanlarını yansıtan dış mimarisiyle nostalji esintileri getirirken
            iç şıklığıyla da kendinizi özel hissetmenizi sağlıyor.
          </p>
          <p>
            Aynı zamanda akşam sefası sevenler için havuz başını saran zeytin
            ağaçlarıyla kaplı bahçemiz olup Kilis çarşısına çok kısa mesafede
            olup, oradaki hareketliliğe ortak olabilirsiniz.
          </p>
          <p>
            {`
Gaziantep'den 60 km uzaklıkta olan Saltuk Bey Konağı ,
Hatay'dan ise Kilis’e 150 km uzaklıkta olan Saltuk Bey Konağı ulaşım ile çok kolay.Otelimize ulaştıktan sonraki her türlü
rahatlığınızın garantisi Saltuk Bey Konağı ’dir. Özel
araçlarınız için de otopark hizmeti veriyoruz.
`}
          </p>
        </div>
      </div>
      <div className="relative h-[500px]">
        <Image src="/images/4.webp" alt="" fill className=" object-cover ring-8 ring-zinc-100 rounded-md" />
      </div>
    </div>
  );
}
