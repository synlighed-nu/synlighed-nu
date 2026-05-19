import React from 'react';

export default function SynlighedNu() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#002B5B] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">👁</span>
            </div>
            <div>
              <div className="font-bold text-xl">Synlighed.nu</div>
              <div className="text-xs text-gray-500 -mt-1">Hurtigere. Bedre. Billigere.</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://x.com/SynlighedNu" target="_blank" className="text-sm font-medium hover:underline">Følg på X</a>
            <a href="https://opencollective.com/synlighed-nu" target="_blank" 
               className="bg-[#002B5B] text-white px-5 py-2 rounded-xl text-sm font-semibold">
              Støt projektet
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* HERO */}
        <div className="max-w-4xl mx-auto px-6 text-center py-24">
          <div className="inline-flex items-center gap-2 bg-[#002B5B] text-white px-4 py-1 rounded-full text-sm mb-6">
            PROJEKT HAIL MARY
          </div>
          <h1 className="text-7xl font-bold tracking-tighter mb-6">
            Synlighed først.
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Vi bruger milliarder af skattekroner hver dag – men de fleste kan ikke se, hvor de går hen.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#deja-vu" className="bg-[#002B5B] text-white px-10 py-4 rounded-2xl font-semibold text-lg">
              Se problemerne
            </a>
            <a href="https://opencollective.com/synlighed-nu" target="_blank" 
               className="border-2 border-[#002B5B] px-10 py-4 rounded-2xl font-semibold text-lg">
              Støt nu
            </a>
          </div>
        </div>

        {/* DÉJÀ VU */}
        <div id="deja-vu" className="bg-gray-50 py-20 border-t">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-[#E30613] font-semibold tracking-[3px] text-sm">DÉJÀ VU</div>
              <h2 className="text-6xl font-bold tracking-tighter mt-2">Vi har hørt det før</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-md mx-auto">
                De samme løfter. De samme problemer. År efter år.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Billig strøm", desc: "Milliarder brugt på elkabler – stadig ingen billig el." },
                { title: "Rent drikkevand", desc: "Pesticider i over halvdelen af boringerne." },
                { title: "Billige boliger", desc: "592.000 husstande får boligstøtte – priserne stiger alligevel." },
                { title: "Billig transport", desc: "DSB skal producere egen strøm lokalt." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border">
                  <div className="text-4xl mb-4">⚠️</div>
                  <div className="font-semibold text-2xl mb-3">{item.title}</div>
                  <div className="text-gray-600 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SUNDHED */}
        <div className="max-w-4xl mx-auto px-6 py-20 border-t">
          <div className="max-w-2xl">
            <div className="text-[#E30613] font-semibold tracking-[3px] text-sm">SUNDHEDSVÆSENET</div>
            <h2 className="text-6xl font-bold tracking-tighter mt-2">280 mia. kr. om året</h2>
            <p className="text-xl text-gray-600 mt-6">
              Stort fokus på medicin og behandling – meget lidt på forebyggelse.
            </p>
            <p className="mt-4 text-gray-600">
              Vi behandler symptomer i stedet for at stoppe årsagerne.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#002B5B] text-white py-20 text-center">
          <div className="max-w-md mx-auto px-6">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-5xl font-bold tracking-tighter">Vil du ? være med?</h3>
            <p className="text-xl mt-4 text-white/80">
              Følg med på X og støt projektet økonomisk – fuld gennemsigtighed.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 max-w-xs mx-auto">
              <a href="https://x.com/SynlighedNu" target="_blank" 
                 className="bg-white text-[#002B5B] py-4 rounded-2xl font-semibold text-lg">
                Følg @SynlighedNu på X
              </a>
              <a href="https://opencollective.com/synlighed-nu" target="_blank"
                 className="border-2 border-white py-4 rounded-2xl font-semibold text-lg">
                Støt på Open Collective
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#002B5B] text-white/60 text-center py-8 text-sm">
        Synlighed.nu — et borgerdrevet initiativ for fuld offentlig gennemsigtighed
      </footer>
    </div>
  );
}
