app/page.tsx
import React from 'react';

export default function SynlighedNu() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#002B5B] rounded-full flex items-center justify-center">
              <span className="text-white text-xl">👁</span>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tight">Synlighed.nu</div>
              <div className="text-[10px] text-[#002B5B]/60 -mt-1">Hurtigere. Bedre. Billigere.</div>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-sm">
            <a href="#deja-vu" className="hover:text-[#E30613] transition-colors">Déjà vu</a>
            <a href="#sundhed" className="hover:text-[#E30613] transition-colors">Sundhed</a>
            <a href="#kontakt" className="hover:text-[#E30613] transition-colors">Kontakt</a>
            <a 
              href="https://x.com/SynlighedNu" 
              target="_blank"
              className="px-5 py-2 bg-[#002B5B] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
            >
              Følg på X
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-20 pb-24 bg-[#002B5B] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center pt-16">
          <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8">
            <div className="text-[#002B5B] text-5xl">👁</div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Synlighed.nu
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-4">
            Fuldt synlighed over alle offentlige udgifter
          </p>
          
          <div className="text-[#E30613] text-2xl font-semibold mb-12">
            Hurtigere. Bedre. Billigere.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#deja-vu" 
              className="px-10 py-4 bg-white text-[#002B5B] rounded-full font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Se problemerne
            </a>
            <a 
              href="https://opencollective.com/synlighed-nu" 
              target="_blank"
              className="px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#002B5B] transition-all"
            >
              Støt projektet
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-3xl md:text-4xl font-semibold leading-tight mb-8">
          Vi bruger milliarder af skattekroner hver dag.<br />
          Alligevel ved de fleste ikke, hvor pengene præcist går hen.
        </div>
        
        <p className="text-xl text-[#002B5B]/70 max-w-2xl mx-auto">
          Synlighed.nu vil ændre det. Vi skaber en åben platform med fuld gennemsigtighed, 
          agil reasoning og klare grundprincipper – så vi kan få et bedre, mere effektivt og mere ærligt samfund.
        </p>
      </section>

      {/* DÉJÀ VU */}
      <section id="deja-vu" className="bg-[#F8F9FA] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-medium rounded-full mb-4">
              DÉJÀ VU
            </div>
            <h2 className="text-5xl font-bold tracking-tight">De evige løfter uden løsning</h2>
            <p className="mt-4 text-xl text-[#002B5B]/70 max-w-2xl mx-auto">
              Vi har hørt det før. Gang på gang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Billig strøm", desc: "Milliarder i subsidier – men elprisen stiger stadig." },
              { title: "Rent drikkevand", desc: "Pesticidrester i over halvdelen af boringerne." },
              { title: "Billige boliger", desc: "Boligstøtte holder priserne kunstigt høje." },
              { title: "Billig transport", desc: "DSB får milliarder – men priserne stiger." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#002B5B]/10">
                <div className="text-[#E30613] text-4xl mb-4">↻</div>
                <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                <p className="text-lg text-[#002B5B]/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-[#002B5B]/80">
              Det er ikke mangel på penge eller politisk vilje.<br />
              Det er mangel på <span className="font-semibold">agil reasoning</span> og <span className="font-semibold">klare grundprincipper</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SUNDHEDSVÆSENET */}
      <section id="sundhed" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="text-[#E30613] text-sm font-medium tracking-[2px] mb-3">SUNDHED</div>
            <h2 className="text-5xl font-bold tracking-tight leading-none mb-6">
              Behandling frem for forebyggelse
            </h2>
            <div className="text-2xl text-[#002B5B]/80 mb-8">
              Offentlige sundhedsudgifter: <span className="font-semibold text-[#002B5B]">ca. 280 milliarder kr. årligt</span>
            </div>
            
            <div className="space-y-6 text-lg text-[#002B5B]/80">
              <p>Systemet er ekstremt dygtigt til at reparere, operere og medicinere – men kun middelmådigt til at forhindre, at folk bliver syge.</p>
              <p>Forebyggelse, livsstil og tidlig opsporing får forholdsvis få ressourcer, mens medicinindustrien og behandlingsapparatet dominerer.</p>
            </div>
          </div>
          
          <div className="md:col-span-5 bg-[#002B5B] text-white p-10 rounded-3xl">
            <div className="text-6xl mb-6">💊</div>
            <div className="text-2xl font-semibold mb-4">Resultatet er en ond cirkel:</div>
            <ul className="space-y-3 text-lg">
              <li>• Flere kroniske sygdomme</li>
              <li>• Stigende udgifter til medicin</li>
              <li>• Mindre fokus på det, der faktisk virker</li>
            </ul>
            <div className="mt-8 text-sm opacity-70">Hurtigere. Bedre. Billigere. gælder også her.</div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#002B5B] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Vil du være med?</h2>
          <p className="text-2xl text-white/80 mb-10">
            Synlighed.nu er et borgerdrevet initiativ.<br />Vi har brug for støtte, frivillige og gode spørgsmål.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/SynlighedNu" 
              target="_blank"
              className="px-10 py-4 bg-white text-[#002B5B] rounded-full font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Følg på X @SynlighedNu
            </a>
            <a 
              href="https://opencollective.com/synlighed-nu" 
              target="_blank"
              className="px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#002B5B] transition-all"
            >
              Støt med fuld synlighed
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#002B5B] text-white/60 py-12 text-sm">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div>
            © 2026 Synlighed.nu<br />
            Et uafhængigt borgerinitiativ
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Om projektet</a>
            <a href="#" className="hover:text-white transition-colors">Aktindsigter</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
