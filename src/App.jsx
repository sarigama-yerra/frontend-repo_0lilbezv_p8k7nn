import Navbar from './components/Navbar.jsx'
import { useState } from 'react'

function Section({ id, title, subtitle, children, ctaText, ctaHref }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          {title && <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>}
          {subtitle && <p className="mt-4 text-gray-600 text-lg">{subtitle}</p>}
        </div>
        <div className="mt-8">
          {children}
        </div>
        {ctaText && (
          <div className="mt-8">
            <a href={ctaHref || '#contato'} className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-md shadow">
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Transforme Seu Amor por Salames em Renda Extra!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Aprenda a fazer salames artesanais deliciosos e descubra como vender com sucesso.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contato" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md shadow">Comece Agora - Acesse o Curso Completo</a>
            <a href="#sobre" className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:border-rose-300">Saiba Mais</a>
          </div>
          <p className="mt-6 text-gray-600 max-w-xl">
            Nosso curso prático mostra o passo a passo das receitas, dicas de marketing e estratégias de vendas para transformar sua paixão por salames em um negócio lucrativo.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200 bg-gray-100">
            <img src="https://images.unsplash.com/photo-1584269903061-53bdd098512b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWxhbWVzJTIwYXJ0ZXNhbmFpc3xlbnwwfDB8fHwxNzYzMjQ2NDQ1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Salames artesanais" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur p-4 rounded-lg shadow ring-1 ring-gray-200">
            <p className="text-sm text-gray-700">Receitas testadas + técnicas profissionais</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sobre() {
  const bullets = [
    'Receitas exclusivas de salames artesanais',
    'Ingredientes de qualidade e técnicas profissionais',
    'Estratégias eficazes de precificação e vendas',
    'Como criar uma marca e atrair clientes',
  ]
  return (
    <Section id="sobre" title="O Que Você Vai Aprender" subtitle="Do preparo ao marketing: tudo para tirar seu projeto do papel e vender com confiança." ctaText="Garanta Seu Acesso ao Curso">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          {bullets.map((b,i)=> (
            <div key={i} className="flex items-start gap-3">
              <span className="text-rose-600 mt-1">✔</span>
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">Como o curso funciona</h3>
          <p className="text-gray-600">Aulas objetivas, materiais de apoio e uma comunidade ativa para tirar dúvidas. Ideal para iniciantes e para quem já produz e quer vender mais.</p>
        </div>
      </div>
    </Section>
  )
}

function Receitas() {
  const recipes = [
    { title: 'Salame de Carne de Sol', desc: 'Sabor marcante com técnica simples e segura.', slug: 'carne-de-sol' },
    { title: 'Salame Tradicional Italiano', desc: 'Equilíbrio perfeito de especiarias e cura.', slug: 'italiano' },
    { title: 'Salame Picante', desc: 'Toque apimentado para conquistar clientes.', slug: 'picante' },
  ]
  return (
    <Section id="receitas" title="Receitas Exclusivas de Salame Artesanal" subtitle="Fórmulas simples, acessíveis e com resultado profissional." ctaText="Veja Todas as Receitas">
      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map((r)=> (
          <div key={r.slug} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="h-36 rounded-lg bg-gradient-to-br from-rose-100 to-amber-100 mb-4 flex items-center justify-center text-4xl">🥓</div>
            <h3 className="font-semibold text-gray-900">{r.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{r.desc}</p>
            <button className="mt-4 text-rose-600 font-medium">Ver detalhes</button>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Marketing() {
  const tips = [
    { title: 'Como Criar uma Marca', desc: 'Nome, identidade visual e posicionamento que ficam na mente.' },
    { title: 'Usando as Redes Sociais', desc: 'Conteúdo simples e consistente no Instagram, Facebook e WhatsApp.' },
    { title: 'Vendas Online', desc: 'Plataformas e opções para vender com baixo custo.' },
    { title: 'Parcerias Locais', desc: 'Lojas e restaurantes como aliados para girar estoque.' },
  ]
  return (
    <Section id="marketing" title="Como Vender Seus Salames" subtitle="Marketing descomplicado para divulgar com eficiência." ctaText="Acesse o Guia Completo de Marketing">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((t, i)=> (
          <div key={i} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            <h3 className="font-semibold text-gray-900">{t.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{t.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Vendas() {
  const tabs = [
    { title: 'Precificação', content: 'Aprenda a calcular custos, margens e um preço competitivo que valoriza seu trabalho.' },
    { title: 'Abordagem ao Cliente', content: 'Técnicas práticas de abordagem que geram confiança e aumentam conversões.' },
    { title: 'Como Fechar a Venda', content: 'Processos e gatilhos para fidelizar e gerar recompra.' },
  ]
  const [active, setActive] = useState(0)
  return (
    <Section id="vendas" title="Torne-se um Expert em Vendas!" subtitle="Estratégias para vender com segurança e constância." ctaText="Aprenda a Vender Como um Profissional">
      <div className="rounded-xl border border-gray-200 bg-white p-2 md:p-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t,i)=> (
            <button key={i} onClick={()=>setActive(i)} className={`px-4 py-2 rounded-md text-sm border ${active===i ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-700 border-gray-200 hover:border-rose-300'}`}>
              {t.title}
            </button>
          ))}
        </div>
        <div className="mt-4 text-gray-700">
          {tabs[active].content}
        </div>
      </div>
    </Section>
  )
}

function WhatsApp() {
  return (
    <Section id="whatsapp" title="Grupo Exclusivo no WhatsApp" subtitle="Receba dicas rápidas, tire dúvidas e troque experiências com outros participantes." ctaText="Acesse o Grupo Agora" ctaHref="https://wa.me/">
      <div className="rounded-xl border border-green-200 bg-green-50 p-6">
        <p className="text-gray-700">Vagas limitadas! Entre agora e aproveite essa oportunidade.</p>
      </div>
    </Section>
  )
}

function Depoimentos() {
  const items = [
    { name: 'Carlos A.', text: 'Comecei a produzir no fim de semana e já fechei meus primeiros pedidos! O curso é direto ao ponto.' },
    { name: 'Mariana R.', text: 'As receitas são incríveis e as dicas de marketing fizeram toda a diferença nas vendas.' },
    { name: 'João P.', text: 'Consegui padronizar meus salames e aumentar a margem com as estratégias de precificação.' },
  ]
  return (
    <Section id="depoimentos" title="Histórias de Sucesso" subtitle="Resultados reais de quem colocou a mão na massa.">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i, idx)=> (
          <div key={idx} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="text-3xl">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="mt-3 text-gray-700">“{i.text}”</p>
            <p className="mt-2 text-sm text-gray-500">— {i.name}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Preciso de experiência prévia?', a: 'Não! O curso é para iniciantes e também para quem já produz e quer profissionalizar.' },
    { q: 'Quanto posso ganhar com isso?', a: 'Depende da sua escala e posicionamento, mas mostramos cenários e margens para você planejar.' },
    { q: 'Onde posso vender meus salames?', a: 'Redes sociais, marketplaces, vendas diretas e parcerias locais.' },
  ]
  return (
    <Section id="faq" title="Dúvidas Frequentes">
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
        {faqs.map((f, i)=> (
          <details key={i} className="p-4 group">
            <summary className="cursor-pointer list-none select-none flex items-center justify-between">
              <span className="font-medium text-gray-900">{f.q}</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
            </summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

function Contato() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Erro ao enviar')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch(e) {
      setStatus('error')
    }
  }

  return (
    <Section id="contato" title="Fale Conosco" subtitle="Envie sua dúvida ou peça mais informações sobre o curso.">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Nome</label>
            <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-rose-400 focus:ring-rose-400" />
          </div>
          <div>
            <label className="text-sm text-gray-700">E-mail</label>
            <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-rose-400 focus:ring-rose-400" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Mensagem</label>
            <textarea rows="4" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-rose-400 focus:ring-rose-400" />
          </div>
          <button disabled={status==='loading'} className="bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white px-6 py-3 rounded-md">Enviar</button>
          {status==='success' && <p className="text-green-600">Mensagem enviada com sucesso!</p>}
          {status==='error' && <p className="text-red-600">Não foi possível enviar. Tente novamente.</p>}
        </div>
        <div className="space-y-3 text-gray-700">
          <p>Entre em contato para receber o link de inscrição e condições especiais.</p>
          <p>Prefer preferir, fale com a gente pelo WhatsApp.</p>
          <a href="#whatsapp" className="inline-block text-rose-600 font-medium">Ir para o grupo</a>
        </div>
      </form>
    </Section>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Sobre />
      <Receitas />
      <Marketing />
      <Vendas />
      <WhatsApp />
      <Depoimentos />
      <FAQ />
      <Contato />
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Renda Extra com Salame Artesanal</footer>
    </div>
  )
}
