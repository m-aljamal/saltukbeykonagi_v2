import { CheckCircle, Info } from "lucide-react";
import PageSheet from "../_components/page-sheet";
import Video from "../_components/video";
import Image from "next/image";

const data = [
  {
    title: "Tarihi ve Kültürel Zenginlik",
    description:
      "Kilis, pek çok medeniyete ev sahipliği yapmış köklü bir geçmişe sahiptir. Şehirdeki tarihi camiler, kiliseler, hanlar ve hamamlar ziyaretçilerine tarih boyunca farklı kültürlerin izlerini görme fırsatı sunar.",
    images: [
      "/images/d6.jpeg",
      "/images/d7.jpeg",
      "/images/d8.jpeg",
      "/images/d10.jpeg",
    ],
    videos: [],
  },
  {
    title: "Gastronomi",
    description:
      "Kilis, zengin mutfağıyla da ünlüdür. Özellikle Kilis tava, oruk (içli köfte), cennet çamuru (tatlısı) gibi yerel lezzetler tadılmaya değerdir. Ayrıca Kilis zeytinyağı ve üzüm ürünleri de oldukça meşhurdur.",
    images: [],
    videos: ["/videos/v1.mp4", "/videos/v2.mp4", "/videos/v4.mp4"],
  },
  {
    title: "Doğal Güzellikler",
    description:
      "Kilis’in doğal güzellikleri ve yeşil alanları, doğa severler için çekici bir destinasyon haline gelmektedir. Şehrin çevresindeki bağlar ve zeytinlikler huzur verici bir atmosfer sunar.",
    images: ["/images/d5.jpeg", "/images/d9.jpeg"],
    videos: [],
  },
  {
    title: "Misafirperverlik",
    description:
      "Kilis halkı, misafirperverliği ve sıcak kanlılığıyla bilinir. Burada samimi ve dostça karşılanırsınız, yerel halkın kültürünü ve yaşam tarzını yakından tanıma fırsatınız olur.",
    images: [],
    videos: ["/videos/v3.mp4"],
  },
  {
    title: "El Sanatları ve Hediyelik Eşyalar",
    description:
      "Kilis'te geleneksel el sanatları oldukça gelişmiştir. El yapımı halılar, kilimler, bakır eşyalar ve diğer el sanatı ürünleri, hem hediyelik olarak hem de ev dekorasyonu için tercih edilebilir.",
    images: ["/images/d12.jpeg"],
    videos: [],
  },
  {
    title: "Etkinlikler ve Festivaller",
    description:
      "Kilis, çeşitli kültürel etkinlikler ve festivallere de ev sahipliği yapmaktadır. Özellikle üzüm ve zeytin festivalleri, yerel kültürü yakından tanıma fırsatı sunar.",
    images: ["/images/d4.jpeg", "/images/d11.jpeg"],
    videos: [],
  },
  {
    title: "Sakin ve Huzurlu Atmosfer",
    description:
      "Kilis, büyük şehirlerin kalabalık ve gürültüsünden uzak, daha sakin ve huzurlu bir ortam sunar. Tarihi sokaklarda yürüyüş yaparken veya bir kafede oturup çay içerken huzuru hissedebilirsiniz.",
    images: [],
    videos: [],
  },
];

export default function page() {
  return (
    <PageSheet>
      <div>
        <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-900">
              Neden Kilis ?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Saltuk Bey Konağı Otel
            </p>
          </div>

          <p className="mt-6 text-xl leading-8">
           {` Kilis, Türkiye'nin güneydoğusunda yer alan tarihi ve kültürel
            zenginlikleriyle öne çıkan bir şehirdir. Kilis'e gitmek için birçok
            sebep bulunmaktadır:`}
          </p>
          <div className="mt-10  ">
            <ul role="list" className="mt-8  space-y-8 text-gray-600">
              {data.map((item) => (
                <li key={item.title} className="space-y-5">
                  <div className="flex gap-x-3 max-w-xl">
                    <CheckCircle
                      className="mt-1 h-5 w-5 flex-none text-yellow-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {item.title}
                      </strong>{" "}
                      {item.description}
                    </span>
                  </div>
                  {item.images.length > 0 && (
                    <div className="grid grid-cols-1  md:grid-cols-4 gap-5 ml-8  md:h-[300px] h-[800px]">
                      {item.images?.map((image) => (
                        <div className="relative" key={image}>
                          <Image
                            src={image}
                            alt="Image"
                            className="rounded-md h-full w-full object-cover md:object-fill object-center"
                            fill
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {item.videos.length > 0 && (
                    <div className="ml-8 grid grid-cols-1 md:grid-cols-4 gap-5">
                      {item.videos?.map((video) => (
                        <Video
                          key={video}
                          src={video}
                          type="video/mp4"
                           
                        />
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <figure className="mt-10 border-l border-yellow-600 pl-9">
              <blockquote className="font-semibold text-gray-900">
                <p>
                  {`Kilis'e yapacağınız bir gezi, hem tarihi ve kültürel
                  zenginlikleri keşfetmek hem de yöresel lezzetlerin tadına
                  bakmak için harika bir fırsat olacaktır.`}
                </p>
              </blockquote>
            </figure>
            <div className="relative mt-10 ">
              <Image
                src="/images/d2.jpeg"
                width={600}
                height={400}
                alt="Kilis"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </PageSheet>
  );
}
