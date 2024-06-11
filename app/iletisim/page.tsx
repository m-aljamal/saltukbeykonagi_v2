import { Hotel, Mail, Phone } from "lucide-react";
import ContactForm from "../_components/contact-form";
import PageSheet from "../_components/page-sheet";

export default function page() {
  return (
    <PageSheet>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-900">
            İletişime geçin
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Saltuk Bey Konağı Otel
          </p>
        </div>
        <div className="mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.282230656617!2d37.118084215752226!3d36.7157824799661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fcf7cc9946851%3A0x7ba3fb408e5e6b16!2sSaltuk%20Bey%20Kona%C4%9F%C4%B1%20Butik%20Otel!5e0!3m2!1sen!2str!4v1634661388753!5m2!1sen!2str"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 gap-10">
            <ContactForm />
            <div className="space-y-4">
              <div className="flex gap-x-2">
                <Hotel className="size-5 text-yellow-800" />
                <p className="text-zinc-700">
                  İslambey Mahallesi Hilal Salonu Sokak No 13 Merkez/Kilis
                </p>
              </div>
              <div className="flex gap-x-2">
                <Phone className="size-5 text-yellow-800" />
                <p className="text-zinc-700">0 (552) 707 79 00</p>
              </div>
              <div className="flex gap-x-2">
                <Phone className="size-5 text-yellow-800" />
                <p className="text-zinc-700">0 (348) 813 42 42</p>
              </div>
              <div className="flex gap-x-2">
                <Mail className="size-5 text-yellow-800" />
                <p className="text-zinc-700">
                  saltukbeykonagibutikotel@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSheet>
  );
}
