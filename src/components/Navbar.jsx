import { useState } from 'react';

const sections = [
  { id: 'home', label: 'Início' },
  { id: 'sobre', label: 'Sobre o Curso' },
  { id: 'receitas', label: 'Receitas' },
  { id: 'marketing', label: 'Dicas de Marketing' },
  { id: 'vendas', label: 'Como Vender' },
  { id: 'whatsapp', label: 'Grupo WhatsApp' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contato', label: 'Contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-rose-600 text-2xl">🥓</span>
          <span className="font-bold text-gray-900">Renda Extra com Salame</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="text-sm text-gray-700 hover:text-rose-600 transition-colors"
            >
              {s.label}
            </button>
          ))}
          <a
            href="#contato"
            onClick={(e)=>{e.preventDefault();handleScroll('contato')}}
            className="bg-rose-600 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-rose-700"
          >
            Fale Conosco
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 10.5a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zM3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15A.75.75 0 013.75 12z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScroll(s.id)}
                className="text-left text-sm text-gray-700 hover:text-rose-600"
              >
                {s.label}
              </button>
            ))}
            <button onClick={() => handleScroll('contato')} className="col-span-2 bg-rose-600 text-white text-sm px-4 py-2 rounded-md">
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
