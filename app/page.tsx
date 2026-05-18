export default function SynlighedNu() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      {/* NAV */}
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
          <a href="https://x.com/SynlighedNu" target="_blank" className="text-sm font-medium hover:underline">Følg på X</a>
        </div>
      </nav>

      <div className="pt-20 px-6 max-w-4xl mx-auto">
        {/* HERO */}
        <div className="text-center py-20">
          <div className="inline-flex items-center gap-2 bg-[#002B5B] text-white px-4 py-1 rounded-full text-sm mb-6">
            PROJEKT HAIL MARY
          </div>
          <h1 className="text-6xl font-bold tracking-tighter mb-6">
            Synlighed først.
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Vi bruger milliarder af skattekroner hver dag – men de fleste kan ikke se, hvor de går hen.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#deja-vu" className="bg-[#002B5B] text-white px-8 py-4 rounded-2xl font-semibold text-lg">Se problemerne</a>
            <a href="https://opencollective.com/synlighed-nu" target="_blank" className="border border-[#002B5B] px-8 py-4 rounded-2xl font-semibold text-lg">Støt projektet</a>
          </div>
        </div>

        {/* DÉJÀ VU */}
        <div id="deja
npx create-next-app@latest . --yes
