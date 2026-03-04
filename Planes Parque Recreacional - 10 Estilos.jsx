const plans = [
  {
    name: "Bronze",
    price: "$15",
    color: "#cd7f32",
    icon: "🥉",
    features: ["Acceso básico al parque", "1 atracción incluida", "Horario: 9am - 3pm", "Estacionamiento estándar", "Mapa del parque"],
  },
  {
    name: "Silver",
    price: "$30",
    color: "#A8A9AD",
    icon: "🥈",
    features: ["Acceso completo al parque", "3 atracciones incluidas", "Horario: 8am - 6pm", "Estacionamiento preferencial", "Guía turístico", "Descuento en restaurantes 10%"],
  },
  {
    name: "Gold",
    price: "$55",
    color: "#FFD700",
    icon: "🥇",
    features: ["Acceso VIP al parque", "Atracciones ilimitadas", "Horario: 7am - 8pm", "Estacionamiento VIP", "Guía personal", "Descuento en restaurantes 25%", "Acceso a zona exclusiva"],
  },
  {
    name: "Platinum",
    price: "$90",
    color: "#b5a9c9",
    icon: "💎",
    features: ["Acceso ULTRA VIP", "Todo ilimitado", "Acceso 24 horas", "Limusina de bienvenida", "Chef privado", "Descuento 50% en tiendas", "Zona exclusiva Platinum", "Recuerdo personalizado"],
  },
];

// ══════════════════════════════════════════════
// 1. GLASSMORPHISM
// ══════════════════════════════════════════════
function GlassSection() {
  return (
    <section className="relative py-16 px-6 overflow-hidden" style={{background:"linear-gradient(135deg,#1a1a2e,#16213e,#0f3460,#533483)"}}>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_,i)=>(
          <div key={i} className="absolute rounded-full opacity-20" style={{
            width:`${120+i*60}px`,height:`${120+i*60}px`,
            background:`radial-gradient(circle,${["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#ffeaa7","#dda0dd"][i]},transparent)`,
            top:`${[10,60,20,70,5,50][i]}%`,left:`${[5,70,40,15,80,55][i]}%`,filter:"blur(40px)"
          }}/>
        ))}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-2">✨ Glassmorphism</h2>
        <p className="text-center text-blue-200 mb-10 text-xs tracking-widest uppercase">Transparencia y profundidad</p>
        <div className="grid gap-6" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map(plan=>(
            <div key={plan.name} className="rounded-2xl p-6 flex flex-col" style={{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.18)",boxShadow:"0 8px 32px rgba(0,0,0,0.3)"}}>
              <div className="text-4xl mb-3 text-center">{plan.icon}</div>
              <h3 className="text-xl font-bold text-white text-center mb-1">{plan.name}</h3>
              <div className="text-3xl font-extrabold text-center mb-4" style={{color:plan.color}}>{plan.price}<span className="text-sm font-normal text-gray-300">/día</span></div>
              <ul className="flex-1 space-y-2 mb-6">
                {plan.features.map((f,i)=>(
                  <li key={i} className="text-gray-200 text-xs flex items-start gap-2"><span style={{color:plan.color}}>◆</span>{f}</li>
                ))}
              </ul>
              <button className="w-full py-2 rounded-xl font-semibold text-sm text-white" style={{background:`linear-gradient(135deg,${plan.color}44,${plan.color}22)`,border:`1px solid ${plan.color}88`}}>Comprar Pase</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 2. FLAT DESIGN
// ══════════════════════════════════════════════
const flatColors = {
  Bronze:{bg:"#e8d5b7",accent:"#a0522d",text:"#5c3317"},
  Silver:{bg:"#dde8f0",accent:"#4a90d9",text:"#1a3a5c"},
  Gold:{bg:"#fff3cd",accent:"#f0a500",text:"#7a5200"},
  Platinum:{bg:"#e8e0f0",accent:"#7b5ea7",text:"#3d1f6e"},
};
function FlatSection() {
  return (
    <section className="py-16 px-6" style={{background:"#f5f5f0"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2" style={{color:"#2d2d2d"}}>🎨 Flat Design</h2>
        <p className="text-center text-gray-500 mb-10 text-xs tracking-widest uppercase">Simple. Limpio. Efectivo.</p>
        <div className="grid gap-6" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map(plan=>{
            const c=flatColors[plan.name];
            return(
              <div key={plan.name} className="rounded-2xl p-6 flex flex-col" style={{background:c.bg,border:`3px solid ${c.accent}`}}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-3" style={{background:c.accent}}>{plan.icon}</div>
                <h3 className="text-xl font-bold text-center mb-1" style={{color:c.text}}>{plan.name}</h3>
                <div className="text-3xl font-extrabold text-center mb-4" style={{color:c.accent}}>{plan.price}<span className="text-sm font-normal" style={{color:c.text}}>/día</span></div>
                <ul className="flex-1 space-y-2 mb-6">
                  {plan.features.map((f,i)=>(
                    <li key={i} className="text-xs flex items-start gap-2" style={{color:c.text}}>
                      <span className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs" style={{background:c.accent}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 rounded-xl font-bold text-sm text-white" style={{background:c.accent}}>Comprar Pase</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 3. BRUTALISM
// ══════════════════════════════════════════════
const brutalColors={Bronze:{bg:"#ff6b35"},Silver:{bg:"#00d4ff"},Gold:{bg:"#ffee00"},Platinum:{bg:"#ff00aa"}};
function BrutalSection() {
  return (
    <section className="py-16 px-6" style={{background:"#f0f0e8",backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 39px,#ccc 39px,#ccc 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#ccc 39px,#ccc 40px)"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-5xl font-black mb-2 uppercase" style={{color:"#000",textShadow:"4px 4px 0 #ff6b35"}}>💥 Brutalism</h2>
        <p className="text-center font-bold mb-10 text-xs uppercase tracking-widest">RAW. BOLD. UNAPOLOGETIC.</p>
        <div className="grid gap-6" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map(plan=>{
            const c=brutalColors[plan.name];
            return(
              <div key={plan.name} className="p-5 flex flex-col" style={{background:c.bg,border:"4px solid #000",boxShadow:"8px 8px 0 #000",transform:"rotate(-0.5deg)"}}>
                <div className="text-3xl mb-2">{plan.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-1" style={{letterSpacing:"-1px"}}>{plan.name}</h3>
                <div className="text-4xl font-black mb-3" style={{letterSpacing:"-2px"}}>{plan.price}<span className="text-base font-bold">/DÍA</span></div>
                <div style={{borderTop:"3px solid #000",marginBottom:"12px"}}/>
                <ul className="flex-1 space-y-1 mb-4">
                  {plan.features.map((f,i)=>(
                    <li key={i} className="text-xs font-bold flex items-start gap-1"><span className="font-black">→</span>{f}</li>
                  ))}
                </ul>
                <button className="w-full py-2 font-black text-sm uppercase" style={{background:"#000",color:c.bg,border:"3px solid #000",boxShadow:"4px 4px 0 #555",letterSpacing:"1px"}}>¡COMPRAR!</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 4. TYPOGRAPHY
// ══════════════════════════════════════════════
const typoAccents={Bronze:"#8B4513",Silver:"#2c3e50",Gold:"#b8860b",Platinum:"#4a0e8f"};
function TypographySection() {
  return (
    <section className="py-16 px-6" style={{background:"#faf8f3",fontFamily:"Georgia,serif"}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase mb-1" style={{color:"#999",fontFamily:"monospace"}}>— Diseño Editorial —</p>
          <h2 className="text-5xl font-black mb-1" style={{color:"#1a1a1a",letterSpacing:"-2px"}}>📖 Typography</h2>
          <div style={{width:"80px",height:"3px",background:"#1a1a1a",margin:"8px auto"}}/>
        </div>
        <div className="grid gap-6" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map((plan,idx)=>{
            const accent=typoAccents[plan.name];
            return(
              <div key={plan.name} className="p-6 flex flex-col" style={{background:idx%2===0?"#fff":"#1a1a1a",borderTop:`6px solid ${accent}`}}>
                <p className="text-xs tracking-widest uppercase mb-1" style={{color:accent,fontFamily:"monospace"}}>Plan N°{idx+1}</p>
                <h3 className="font-black mb-0" style={{fontSize:"2rem",color:idx%2===0?"#1a1a1a":"#fff",letterSpacing:"-2px",lineHeight:1}}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3 mt-1">
                  <span className="text-4xl font-black" style={{color:accent,letterSpacing:"-2px"}}>{plan.price}</span>
                  <span className="text-xs" style={{color:idx%2===0?"#999":"#aaa",fontFamily:"monospace"}}>/día</span>
                </div>
                <div style={{borderTop:`1px solid ${idx%2===0?"#e0e0e0":"#333"}`,marginBottom:"12px"}}/>
                <ul className="flex-1 space-y-2 mb-6">
                  {plan.features.map((f,i)=>(
                    <li key={i} className="text-xs flex items-start gap-2" style={{color:idx%2===0?"#444":"#ccc",lineHeight:1.5}}>
                      <span style={{color:accent,fontWeight:"bold",fontSize:"10px",marginTop:"3px"}}>■</span>{f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 text-xs font-bold uppercase tracking-widest" style={{background:"transparent",border:`2px solid ${accent}`,color:accent,fontFamily:"monospace",letterSpacing:"3px"}}>Adquirir →</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 5. NEUMORPHISM
// ══════════════════════════════════════════════
function NeumorphismSection() {
  return (
    <section className="py-16 px-6" style={{background:"#e0e5ec"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2" style={{color:"#444"}}>🔘 Neumorphism</h2>
        <p className="text-center text-gray-500 mb-10 text-xs tracking-widest uppercase">Sombras suaves y extrusión</p>
        <div className="grid gap-8" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map(plan=>(
            <div key={plan.name} className="p-6 rounded-3xl flex flex-col" style={{background:"#e0e5ec",boxShadow:"9px 9px 16px rgba(163,177,198,0.6),-9px -9px 16px rgba(255,255,255,0.5)"}}>
              <div className="text-3xl mb-3 text-center">{plan.icon}</div>
              <h3 className="text-xl font-bold text-center mb-1" style={{color:"#444"}}>{plan.name}</h3>
              <div className="text-3xl font-black text-center mb-4" style={{color:plan.color}}>{plan.price}</div>
              <ul className="flex-1 space-y-2 mb-6">
                {plan.features.map((f,i)=>(
                  <li key={i} className="text-gray-600 text-xs flex items-start gap-2"><span style={{color:plan.color}}>•</span>{f}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-wider" style={{background:"#e0e5ec",color:"#444",boxShadow:"6px 6px 12px #b8b9be,-6px -6px 12px #ffffff"}}>Seleccionar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 6. RETRO 8-BIT
// ══════════════════════════════════════════════
function RetroSection() {
  return (
    <section className="py-16 px-6" style={{background:"#000",fontFamily:"'Courier New',Courier,monospace"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2 text-green-500 uppercase">👾 Retro 8-Bit Arcade</h2>
        <p className="text-center text-white mb-10 text-xs tracking-widest uppercase">Insert Coin to Start</p>
        <div className="grid gap-6" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map(plan=>(
            <div key={plan.name} className="p-4 border-4 border-white flex flex-col" style={{boxShadow:"8px 8px 0px #555"}}>
              <div className="text-4xl mb-2 text-center">{plan.icon}</div>
              <h3 className="text-xl font-bold text-center mb-1 text-yellow-400 uppercase">{plan.name}</h3>
              <div className="text-2xl font-bold text-center mb-4 text-white">{plan.price}</div>
              <div className="border-b-2 border-dashed border-white mb-4"/>
              <ul className="flex-1 space-y-2 mb-6">
                {plan.features.map((f,i)=>(
                  <li key={i} className="text-white text-xs uppercase leading-tight">> {f}</li>
                ))}
              </ul>
              <button className="w-full py-2 bg-green-600 text-white font-bold text-xs uppercase border-b-4 border-green-900">Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 7. MINIMALIST DARK
// ══════════════════════════════════════════════
function MinimalDarkSection() {
  return (
    <section className="py-16 px-6" style={{background:"#0a0a0a"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-light text-white mb-2 tracking-tighter">🌑 Minimalist Dark</h2>
        <p className="text-center text-gray-600 mb-12 text-xs uppercase tracking-widest">Menos es más</p>
        <div className="grid gap-4" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map(plan=>(
            <div key={plan.name} className="p-8 border border-gray-800 flex flex-col">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-1">{plan.name}</h3>
              <div className="text-4xl font-light text-white mb-8">{plan.price}</div>
              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((f,i)=>(
                  <li key={i} className="text-gray-400 text-xs uppercase tracking-wider leading-relaxed">{f}</li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Adquirir</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 8. CLAYMORPHISM
// ══════════════════════════════════════════════
function ClaySection() {
  return (
    <section className="py-16 px-6" style={{background:"#f0f7ff"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold mb-2" style={{color:"#2d3436"}}>☁️ Claymorphism</h2>
        <p className="text-center text-blue-400 mb-10 text-xs font-bold uppercase">Estilo 3D Amigable</p>
        <div className="grid gap-8" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map(plan=>(
            <div key={plan.name} className="p-8 flex flex-col text-center" style={{background:"#ffffff",borderRadius:"40px",boxShadow:"inset -8px -8px 12px rgba(0,0,0,0.1),inset 8px 8px 12px rgba(255,255,255,0.8),20px 20px 40px rgba(0,0,0,0.05)",border:"2px solid #fff"}}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style={{boxShadow:"inset -4px -4px 6px rgba(0,0,0,0.05),inset 4px 4px 6px rgba(255,255,255,0.8),0 8px 16px rgba(0,0,0,0.1)"}}>{plan.icon}</div>
              <h3 className="text-2xl font-black mb-1" style={{color:"#2d3436"}}>{plan.name}</h3>
              <div className="text-3xl font-black mb-6" style={{color:plan.color}}>{plan.price}</div>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.slice(0,5).map((f,i)=>(
                  <li key={i} className="text-gray-500 text-xs font-bold">{f}</li>
                ))}
              </ul>
              <button className="py-3 px-6 rounded-full font-black text-white text-sm" style={{background:plan.color,boxShadow:`inset -4px -4px 8px rgba(0,0,0,0.2),inset 4px 4px 8px rgba(255,255,255,0.3)`}}>¡LO QUIERO!</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 9. MATERIAL DESIGN
// ══════════════════════════════════════════════
const matColors={Bronze:{primary:"#795548",light:"#a1887f",surface:"#efebe9"},Silver:{primary:"#546e7a",light:"#78909c",surface:"#eceff1"},Gold:{primary:"#f57f17",light:"#ffb300",surface:"#fff8e1"},Platinum:{primary:"#4527a0",light:"#7e57c2",surface:"#ede7f6"}};
function MaterialSection() {
  return (
    <section className="py-16 px-6" style={{background:"#fafafa"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-medium mb-1" style={{color:"#212121",fontFamily:"Roboto,sans-serif"}}>📐 Material Design</h2>
        <p className="text-center mb-10 text-xs tracking-widest uppercase" style={{color:"#757575"}}>Elevación · Movimiento · Significado</p>
        <div className="grid gap-6" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {plans.map(plan=>{
            const c=matColors[plan.name];
            return(
              <div key={plan.name} className="flex flex-col overflow-hidden" style={{background:"#fff",borderRadius:"4px",boxShadow:"0 2px 4px rgba(0,0,0,0.14),0 4px 5px rgba(0,0,0,0.12),0 1px 10px rgba(0,0,0,0.2)"}}>
                <div className="p-6 pb-4" style={{background:c.primary}}>
                  <div className="text-4xl mb-2">{plan.icon}</div>
                  <h3 className="text-2xl font-medium text-white" style={{fontFamily:"Roboto,sans-serif"}}>{plan.name}</h3>
                  <div className="text-4xl font-light text-white mt-1">{plan.price}<span className="text-sm opacity-70">/día</span></div>
                </div>
                <div className="p-5 flex-1 flex flex-col" style={{background:c.surface}}>
                  <ul className="flex-1 space-y-3 mb-6">
                    {plan.features.map((f,i)=>(
                      <li key={i} className="text-xs flex items-center gap-3" style={{color:"#424242",fontFamily:"Roboto,sans-serif"}}>
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{background:c.primary}}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded font-medium text-sm uppercase tracking-wider text-white transition-all" style={{background:c.primary,boxShadow:"0 2px 4px rgba(0,0,0,0.3)",fontFamily:"Roboto,sans-serif",letterSpacing:"1.25px"}}>Seleccionar Plan</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// 10. SWISS / INTERNATIONAL STYLE
// ══════════════════════════════════════════════
const swissAccents={Bronze:"#E63946",Silver:"#E63946",Gold:"#E63946",Platinum:"#E63946"};
function SwissSection() {
  return (
    <section className="py-16 px-6" style={{background:"#ffffff",fontFamily:"'Helvetica Neue',Helvetica,Arial,sans-serif"}}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 border-b-4 border-black pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-1">Diseño Internacional</p>
            <h2 className="text-5xl font-black leading-none" style={{color:"#000",letterSpacing:"-3px"}}>Swiss Design</h2>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Grid · Orden · Claridad</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Helvetica · 1950s</p>
          </div>
        </div>
        <div className="grid gap-0" style={{gridTemplateColumns:"repeat(4,1fr)",border:"2px solid #000"}}>
          {plans.map((plan,idx)=>(
            <div key={plan.name} className="p-6 flex flex-col" style={{borderRight:idx<3?"2px solid #000":"none",background:idx===2?"#E63946":"#fff"}}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest" style={{color:idx===2?"rgba(255,255,255,0.7)":"#999"}}>0{idx+1}</span>
                <span className="text-2xl">{plan.icon}</span>
              </div>
              <div style={{borderTop:`3px solid ${idx===2?"rgba(255,255,255,0.5)":"#000"}`,marginBottom:"16px"}}/>
              <h3 className="text-3xl font-black mb-1 leading-none" style={{color:idx===2?"#fff":"#000",letterSpacing:"-2px"}}>{plan.name.toUpperCase()}</h3>
              <div className="text-5xl font-black mb-6 leading-none" style={{color:idx===2?"#fff":"#E63946",letterSpacing:"-3px"}}>{plan.price}</div>
              <ul className="flex-1 space-y-2 mb-8">
                {plan.features.map((f,i)=>(
                  <li key={i} className="text-xs leading-relaxed flex items-start gap-2" style={{color:idx===2?"rgba(255,255,255,0.85)":"#333"}}>
                    <span className="font-black mt-0.5" style={{color:idx===2?"rgba(255,255,255,0.6)":"#E63946"}}>—</span>{f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 font-black text-xs uppercase tracking-widest transition-all" style={{
                background:idx===2?"#fff":"#000",
                color:idx===2?"#E63946":"#fff",
                letterSpacing:"3px"
              }}>Contratar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
// APP PRINCIPAL
// ══════════════════════════════════════════════
const tabs = [
  {id:"glass",  label:"✨ Glass"},
  {id:"flat",   label:"🎨 Flat"},
  {id:"brutal", label:"💥 Brutal"},
  {id:"typo",   label:"📖 Typo"},
  {id:"neumo",  label:"🔘 Neumo"},
  {id:"retro",  label:"👾 Retro"},
  {id:"minimal",label:"🌑 Minimal"},
  {id:"clay",   label:"☁️ Clay"},
  {id:"material",label:"📐 Material"},
  {id:"swiss",  label:"🇨🇭 Swiss"},
];

function App() {
  const [active, setActive] = React.useState("glass");
  return (
    <div style={{fontFamily:"system-ui,sans-serif"}}>
      <div className="sticky top-0 z-50 py-2 px-3 flex flex-wrap justify-center gap-1" style={{background:"#111",borderBottom:"2px solid #333"}}>
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>setActive(t.id)}
            className="px-3 py-1 rounded-full text-xs font-semibold transition-all"
            style={{background:active===t.id?"#fff":"transparent",color:active===t.id?"#111":"#aaa",border:active===t.id?"none":"1px solid #444"}}>
            {t.label}
          </button>
        ))}
      </div>
      {active==="glass"    && <GlassSection/>}
      {active==="flat"     && <FlatSection/>}
      {active==="brutal"   && <BrutalSection/>}
      {active==="typo"     && <TypographySection/>}
      {active==="neumo"    && <NeumorphismSection/>}
      {active==="retro"    && <RetroSection/>}
      {active==="minimal"  && <MinimalDarkSection/>}
      {active==="clay"     && <ClaySection/>}
      {active==="material" && <MaterialSection/>}
      {active==="swiss"    && <SwissSection/>}
    </div>
  );
}