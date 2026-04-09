/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, ChevronRight, Play, Users, Trophy, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const LandingSST = () => {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-[#f5f0e8] font-sans selection:bg-[#FF5C00] selection:text-white overflow-x-hidden">
      
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-[#0D1B2A]/80 border-b border-[#FF5C00]/20 shadow-lg transition-all">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF5C00] rounded-lg flex items-center justify-center font-black text-white text-xl shadow-lg shadow-[#FF5C00]/20">C</div>
          <span className="font-extrabold text-lg text-[#FFD000] tracking-tight">CISGEIN <span className="text-white/40 font-light mx-1">|</span> SST</span>
        </div>
        <a 
          href="https://forms.gle/dVD4QLkWE6R9CQq1A" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#FF5C00] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#FF5C00]/20 hover:scale-105 hover:shadow-[#FF5C00]/40 active:scale-95 transition-all duration-300"
        >
          ¡Inscribirme ahora!
        </a>
      </nav>

      {/* HERO */}
      <header className="relative pt-24 pb-20 px-6 max-w-6xl mx-auto text-center overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF5C00]/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0A7E8C]/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#FFD000] text-sm font-black tracking-[0.4em] uppercase mb-4 opacity-80">
            Transforma la forma de enseñar
          </p>
          <span className="inline-flex items-center gap-2 bg-[#FF5C00]/10 border border-[#FF5C00]/30 text-[#FF5C00] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C00]"></span>
            </span>
            Certificación Presencial · Trujillo
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
            Conviértete en<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD000] to-[#FF5C00]">Entrenador Lúdico</span><br/>
            en SST
          </h1>
          
          <p className="text-[#f5f0e8]/80 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Deja de dictar capacitaciones aburridas. Transforma la Seguridad y Salud en el Trabajo en una experiencia que tu equipo <span className="text-white border-b-2 border-[#FFD000]">realmente recordará</span>.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[
              { icon: <Calendar className="w-4 h-4" />, text: 'Full Day' },
              { icon: <MapPin className="w-4 h-4" />, text: 'Trujillo' },
              { icon: <Users className="w-4 h-4" />, text: '100% Presencial' },
              { icon: <Trophy className="w-4 h-4" />, text: 'Certificación' }
            ].map((pill, i) => (
              <span key={i} className="flex items-center gap-2 border border-white/10 text-white/90 px-5 py-2 rounded-full text-sm font-semibold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                {pill.icon}
                {pill.text}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://forms.gle/dVD4QLkWE6R9CQq1A" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF5C00] text-white px-10 py-4 rounded-full font-extrabold text-lg shadow-2xl shadow-[#FF5C00]/30 hover:-translate-y-1 hover:shadow-[#FF5C00]/50 active:scale-95 transition-all duration-300"
            >
              Quiero mi cupo <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#programa" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-[#FFD000] text-[#FFD000] px-10 py-4 rounded-full font-extrabold text-lg hover:bg-[#FFD000] hover:text-[#0D1B2A] active:scale-95 transition-all duration-300"
            >
              Ver programa <Play className="w-4 h-4 fill-current" />
            </a>
          </div>
          
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="w-10 h-10 rounded-full border-2 border-[#0D1B2A] bg-gray-600 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${n}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-[#FFD000] font-bold text-lg leading-none">S/ 1,000</div>
              <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Inversión total</div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-[#FF5C00] to-[#e65300] text-center shadow-2xl relative z-10">
        {[
          { n: '8', l: 'Horas académicas', i: '⏱️' },
          { n: '+2×', l: 'Más retención', i: '🧠' },
          { n: '7', l: 'Juegos de SST', i: '🎲' },
          { n: '100%', l: 'Hands-on', i: '🛠️' }
        ].map((stat, i) => (
          <div key={i} className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors group">
            <div className="text-2xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{stat.i}</div>
            <div className="text-5xl md:text-6xl font-black text-[#FFD000] mb-2 drop-shadow-lg">{stat.n}</div>
            <div className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em]">{stat.l}</div>
          </div>
        ))}
      </div>

      {/* POR QUÉ */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <p className="text-[#FF5C00] text-sm font-black tracking-[0.3em] uppercase mb-4">¿Por qué este programa?</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">La metodología que <span className="text-[#FFD000]">cambia las reglas</span></h2>
          <p className="text-[#f5f0e8]/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Tener conocimientos técnicos en SST no es suficiente para capacitar con éxito. Aquí aprendes <span className="text-white font-bold">cómo enseñar</span>, no solo qué enseñar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { i: '🎮', t: 'Gamificación aplicada', d: 'Técnicas lúdicas que convierten a cada participante en protagonista activo del aprendizaje.' },
            { i: '🧠', t: 'Andragogía real', d: 'Metodología basada en cómo aprenden los adultos, con evidencia internacional comprobada.' },
            { i: '📈', t: 'Impacto medible', d: 'La retención al mes supera en más del doble al método tradicional. Eso se siente en la productividad.' },
            { i: '⚡', t: 'Cumplimiento divertido', d: 'Transforma la Ley N° 29783 y sus reglamentos en experiencias memorables que se aplican de verdad.' }
          ].map((c, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="group bg-[#162233] p-10 rounded-3xl border border-white/5 hover:border-[#FF5C00]/30 transition-all duration-500 shadow-xl"
            >
              <div className="text-4xl bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF5C00]/10 group-hover:scale-110 transition-all duration-500 shadow-inner">
                {c.i}
              </div>
              <h3 className="text-2xl font-black text-[#FFD000] mb-4 tracking-tight">{c.t}</h3>
              <p className="text-[#f5f0e8]/70 text-lg leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APRENDERÁS */}
      <section id="programa" className="bg-[#080f18] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[#FF5C00] text-sm font-black tracking-[0.3em] uppercase mb-4">¿Qué aprenderás?</p>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Tres habilidades que <span className="text-[#FFD000]">te harán destacar</span></h2>
              <ul className="space-y-6">
                {[
                  { i: '🎲', t: 'DICTAR con técnicas lúdicas', d: 'Facilita sesiones con participación real. Juegos, dinámicas y storytelling al servicio de la SST.' },
                  { i: '🗺', t: 'PLANIFICAR para impactar', d: 'Transforma el cumplimiento normativo en experiencias de aprendizaje bien diseñadas.' },
                  { i: '📊', t: 'EVALUAR el conocimiento real', d: 'Mide si tu equipo realmente aprendió con herramientas concretas de retención e impacto.' }
                ].map((l, i) => (
                  <li key={i} className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#FF5C00]/20 hover:bg-white/10 transition-all duration-300 group">
                    <div className="text-3xl bg-[#FF5C00]/10 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {l.i}
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2 text-white tracking-tight">{l.t}</h4>
                      <p className="text-[#f5f0e8]/60 leading-relaxed">{l.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FF5C00]/30 to-transparent blur-3xl rounded-full opacity-50"></div>
              <div className="relative bg-gradient-to-br from-[#162233] to-[#0D1B2A] rounded-[40px] p-10 md:p-16 shadow-2xl border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Trophy className="w-32 h-32 text-white" />
                </div>
                <div className="text-xs font-black tracking-[0.2em] uppercase text-[#FF5C00] mb-8 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#FF5C00] animate-pulse"></span> 
                  Dato de impacto
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold leading-snug text-white mb-12 italic">
                  "Al mes de la capacitación con LudoPrevención, la retención supera en <span className="text-[#FFD000] underline decoration-[#FF5C00] decoration-4 underline-offset-8">más del doble</span> al método tradicional."
                </blockquote>
                <div className="flex items-end gap-4">
                  <div className="text-7xl md:text-8xl font-black text-[#FFD000] tracking-tighter">+100%</div>
                  <div className="text-white/60 font-bold text-lg mb-3 leading-tight">más retención<br/>vs. tradicional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <p className="text-[#FF5C00] text-sm font-black tracking-[0.3em] uppercase mb-4">Temáticas</p>
        <h2 className="text-4xl md:text-5xl font-black mb-16">Un enfoque de <span className="text-[#FFD000]">clase mundial</span></h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            '🧑‍🏫 Andragogía', '🎮 Gamificación', '🎲 Serious Games', 
            '📣 Marketing para SST', '💡 Aprendizaje Significativo', 
            '🚀 Creatividad e Innovación', '📖 Storytelling'
          ].map((topic, i) => (
            <motion.span 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="bg-[#FFD000]/5 border border-[#FFD000]/20 text-[#FFD000] px-8 py-4 rounded-2xl text-lg font-black hover:bg-[#FFD000] hover:text-[#0D1B2A] transition-all cursor-default shadow-lg"
            >
              {topic}
            </motion.span>
          ))}
        </div>
      </section>

      {/* INCLUYE */}
      <section className="bg-[#162233]/50 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#FF5C00] text-sm font-black tracking-[0.3em] uppercase mb-4">Todo incluido</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Tu inversión cubre <span className="text-[#FFD000]">cada detalle</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { i: '🎓', t: 'Certificación oficial', d: 'Respaldada por Cisgein y Ludoprevención' },
              { i: '🎲', t: '7 Juegos de SST', d: 'En PDF, listos para usar en tus capacitaciones' },
              { i: '📊', t: '5 Infografías', d: 'Material de referencia digital permanente' },
              { i: '📑', t: 'Diapositivas', d: 'Todo el material del programa en digital' },
              { i: '☕', t: '2 Coffee Breaks', d: 'Pausas activas para mantener la energía al máximo' },
              { i: '🍽', t: 'Almuerzo incluido', d: 'Nada de salir a buscar dónde comer' }
            ].map((c, i) => (
              <div key={i} className="group bg-[#0D1B2A] p-10 rounded-[32px] border border-white/5 hover:border-[#FFD000]/30 hover:bg-[#111f30] transition-all duration-500 shadow-xl">
                <div className="text-4xl bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FFD000]/10 transition-all duration-500">
                  {c.i}
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{c.t}</h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA & INFO */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <p className="text-[#FF5C00] text-sm font-black tracking-[0.3em] uppercase mb-4">Agenda del día</p>
            <h2 className="text-4xl md:text-5xl font-black mb-12">Un día de <span className="text-[#FFD000]">transformación</span></h2>
            
            <div className="space-y-6 relative">
              <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-white/5"></div>
              {[
                { time: '08:30', t: 'Bienvenida y warm-up lúdico', d: 'Rompe el hielo desde el primer minuto.', c: 'bg-[#FF5C00]' },
                { time: '09:30', t: 'Andragogía + Aprendizaje', d: 'Bases teóricas con aplicación práctica.', c: 'bg-[#FF5C00]' },
                { time: '11:00', t: '☕ Coffee Break + Almuerzo', d: 'Recarga energías con almuerzo incluido.', c: 'bg-[#FF5C00]' },
                { time: '13:00', t: '🤝 Networking · Ronda 1', d: 'Intercambia experiencias y contactos.', c: 'bg-[#0A7E8C]' },
                { time: '14:30', t: 'Gamificación & Serious Games', d: 'Taller práctico: diseñas tu propio juego.', c: 'bg-[#FF5C00]' },
                { time: '16:00', t: '☕ Coffee Break de la tarde', d: 'Segunda pausa activa de concentración.', c: 'bg-[#FF5C00]' },
                { time: '17:00', t: '🤝 Networking · Ronda 2', d: 'Consolida alianzas y amplía tu red.', c: 'bg-[#0A7E8C]' },
                { time: '18:30', t: 'Storytelling + Marketing SST', d: 'Entrega de certificados y brindis final.', c: 'bg-[#FF5C00]' },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-20 text-right pt-4 text-xs font-black text-[#FF5C00] uppercase tracking-widest shrink-0">{item.time}</div>
                  <div className="relative flex-1 bg-[#162233] p-6 rounded-3xl border border-white/5 group-hover:translate-x-2 group-hover:border-[#FFD000]/20 transition-all duration-300 shadow-lg">
                    <div className={`absolute -left-[41px] top-7 w-4 h-4 rounded-full border-4 border-[#0D1B2A] ${item.c}`}></div>
                    <h4 className="font-black text-lg text-white mb-1 tracking-tight">{item.t}</h4>
                    <p className="text-sm text-[#f5f0e8]/60 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 lg:sticky lg:top-32 h-fit">
            <div className="bg-[#162233] p-10 rounded-[40px] border border-[#FF5C00]/20 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#FF5C00]/10 blur-3xl rounded-full"></div>
              <h4 className="text-2xl font-black text-[#FFD000] mb-8 flex items-center gap-3">
                <MapPin className="w-6 h-6" /> Datos del evento
              </h4>
              <div className="space-y-6">
                {[
                  { i: '🏛️', l: 'Sede', v: 'La Libertad, Trujillo' },
                  { i: '⏱️', l: 'Duración', v: '8 horas (Full Day)' },
                  { i: '🎓', l: 'Modalidad', v: '100% Presencial' },
                  { i: '💰', l: 'Inversión', v: 'S/ 1,000 (Todo incluido)' },
                  { i: '✅', l: 'Incluye', v: '2 Breaks + Almuerzo + Material' }
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="text-2xl w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">{row.i}</div>
                    <div>
                      <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{row.l}</div>
                      <div className="text-white font-bold text-lg">{row.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0A7E8C] to-[#065a66] p-10 rounded-[40px] shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <CheckCircle2 className="w-40 h-40" />
              </div>
              <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6" /> Datos de pago · Interbank
              </h4>
              <div className="bg-black/20 backdrop-blur-md p-6 rounded-3xl font-mono text-sm space-y-4 border border-white/10">
                <p className="font-sans font-black text-lg">V&N Multiservicios y Asesoría SAC</p>
                <div className="space-y-1">
                  <p className="text-white/60 uppercase text-[10px] font-bold tracking-widest">Número de Cuenta S/</p>
                  <p className="text-white font-black text-xl tracking-wider">200-300-2641249</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white/60 uppercase text-[10px] font-bold tracking-widest">CCI</p>
                  <p className="text-white font-black text-lg tracking-wider">003-200-003002641249-31</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://forms.gle/dVD4QLkWE6R9CQq1A" 
              target="_blank" 
              rel="noreferrer" 
              className="block w-full text-center bg-[#FF5C00] text-white py-6 rounded-full font-black text-xl shadow-2xl shadow-[#FF5C00]/30 hover:-translate-y-2 hover:shadow-[#FF5C00]/50 active:scale-95 transition-all duration-300"
            >
              🎟 Reservar mi lugar ahora
            </a>
          </div>
        </div>
      </section>

      {/* NETWORKING */}
      <section className="bg-gradient-to-b from-[#0D1B2A] to-[#080f18] py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0A7E8C]/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#FF5C00] text-sm font-black tracking-[0.3em] uppercase mb-4">🤝 Networking de alto nivel</p>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">No solo aprendes.<br/><span className="text-[#FFD000]">Construyes alianzas.</span></h2>
          <p className="text-[#f5f0e8]/80 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Este full day en Trujillo reúne a los mejores profesionales de SST de la región. El aprendizaje real ocurre en las conversaciones estratégicas.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { i: '👥', t: 'Conecta con líderes regionales' },
              { i: '🤲', t: 'Comparte buenas prácticas' },
              { i: '🚀', t: 'Genera alianzas estratégicas' },
              { i: '🗣', t: 'Aprende de la experiencia real' }
            ].map((n, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[32px] border border-[#0A7E8C]/20 hover:bg-[#0A7E8C]/10 hover:border-[#0A7E8C]/40 transition-all duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{n.i}</div>
                <p className="text-base text-white font-bold leading-snug tracking-tight">{n.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKER */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3 relative group">
            <div className="absolute -inset-4 bg-[#FF5C00]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-square rounded-[40px] bg-gradient-to-br from-[#FF5C00] to-[#0A7E8C] p-1 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[38px] bg-[#162233] flex items-center justify-center text-8xl border-4 border-[#FFD000]/20">
                👨‍🏫
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <div className="text-white font-black text-2xl tracking-tight">Luigi Prado</div>
                <div className="text-[#FFD000] font-bold text-sm uppercase tracking-widest">Instructor Principal</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <p className="text-[#FF5C00] text-sm font-black tracking-[0.3em] uppercase mb-4">Tu instructor</p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Luigi Prado, creador de <span className="text-[#FFD000]">LudoPrevención</span></h2>
            <p className="text-[#f5f0e8]/70 text-xl leading-relaxed mb-10">
              Ingeniero Ambiental con Maestría Internacional en SST. Auditor registrado por el MINTRA. Implementador de Sistemas Integrados de Gestión bajo ISO 9001, 14001, 45001 y Ley 29783. Creador de la metodología que está revolucionando la capacitación en Perú.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ISO 9001', 'ISO 14001', 'ISO 45001', 'Ley 29783', 'Auditor MINTRA', 'LudoPrevención'].map((cred, i) => (
                <span key={i} className="bg-white/5 border border-white/10 text-white/80 px-5 py-2 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors">
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZAN */}
      <section className="max-w-6xl mx-auto px-6 pb-32 text-center">
        <p className="text-white/30 text-xs font-black tracking-[0.4em] uppercase mb-12">Organizan & Respaldan</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-black text-white tracking-tighter mb-1">CISGEIN</div>
            <div className="text-[10px] text-[#FF5C00] font-black uppercase tracking-[0.3em]">Organizador</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-black text-white tracking-tighter mb-1">SIGUE TU NORTE</div>
            <div className="text-[10px] text-[#FF5C00] font-black uppercase tracking-[0.3em]">Organizador</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-black text-[#FFD000] tracking-tighter mb-1">LUDOPREVENCIÓN</div>
            <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em]">Respaldo Académico</div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-[#FF5C00] via-[#e65300] to-[#b34100] py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
            ¿Listo para dominar la SST?
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 font-medium leading-relaxed">
            Únete a miles que ya están aprendiendo y transforma para siempre la forma en que capacitas a tu equipo.
          </p>
          
          <a 
            href="https://forms.gle/dVD4QLkWE6R9CQq1A" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-3 bg-white text-[#FF5C00] px-12 py-6 rounded-full font-black text-xl md:text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 hover:shadow-white/20 active:scale-95 transition-all duration-300"
          >
            Suscribirse a nuestro canal <ChevronRight className="w-6 h-6" />
          </a>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-3 bg-black/20 px-6 py-3 rounded-2xl border border-white/10">
              <MessageCircle className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">WhatsApp Laura</div>
                <div className="font-black text-lg">949 041 204</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/20 px-6 py-3 rounded-2xl border border-white/10">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Email Directo</div>
                <div className="font-black text-lg">l.nunez@cisgein.com</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050a11] py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="text-center md:text-left">
              <div className="text-4xl font-black text-[#FFD000] tracking-tighter mb-2">CISGEIN</div>
              <div className="text-[#FF5C00] font-black text-sm uppercase tracking-[0.4em]">
                Cursos para profesionales
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10">
              <a href="https://www.facebook.com/Cisgein" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 text-white/40 hover:text-[#FFD000] transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#FFD000]/10 group-hover:scale-110 transition-all">
                  <Facebook className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">@Cisgein</span>
              </a>
              <a href="https://www.instagram.com/cisgein" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 text-white/40 hover:text-[#FFD000] transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#FFD000]/10 group-hover:scale-110 transition-all">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">@cisgein</span>
              </a>
              <a href="mailto:l.nunez@cisgein.com" className="flex flex-col items-center gap-3 text-white/40 hover:text-[#FFD000] transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#FFD000]/10 group-hover:scale-110 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">Contacto</span>
              </a>
            </div>
          </div>
          
          <div className="h-px w-full bg-white/5 mb-12"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
            <div>© {new Date().getFullYear()} CISGEIN · Todos los derechos reservados</div>
            <div className="flex gap-6">
              <span>La Libertad, Trujillo · Perú</span>
              <span className="text-white/40">Respaldo por LudoPrevención</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href="https://wa.me/51949041204?text=Hola,%20quiero%20mas%20informaci%C3%B3n%20de%20la%20Certificaci%C3%B3n%20de%20entrenador%20l%C3%BAdico%20en%20SST" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-2xl shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_25px_50px_rgba(37,211,102,0.6)] active:scale-95 transition-all duration-300 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#0D1B2A] px-4 py-2 rounded-xl text-sm font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
          ¿Dudas? Escríbenos 💬
        </span>
      </motion.a>
      
    </div>
  );
};

export default function App() {
  return <LandingSST />;
}
