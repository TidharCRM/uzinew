// app.jsx — Liat Dagan landing page
// Renders the hero (variant-switchable) and final CTA (style-switchable) + Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "split",
  "ctaStyle": "solid",
  "showWhatsappIcon": true,
  "ctaLabel": "לשיחת וואטסאפ ראשונית"
}/*EDITMODE-END*/;

const WHATSAPP_URL = "https://wa.me/972500000000?text=" + encodeURIComponent("היי ליאת, ראיתי את האתר ואני מתעניין/ת בתהליך הפסקת עישון");

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.97.58 3.86 1.6 5.46L2 22l4.78-1.25a9.92 9.92 0 0 0 5.26 1.5h.01c5.46 0 9.91-4.45 9.91-9.91s-4.46-9.34-9.92-9.34Zm5.84 14.16c-.25.7-1.21 1.34-1.86 1.4-.51.04-1.15.06-3.78-.83-3.18-1.08-5.19-4.39-5.34-4.6-.16-.21-1.26-1.68-1.26-3.2 0-1.51.79-2.26 1.08-2.57.28-.31.6-.39.81-.39h.58c.18 0 .43-.07.67.51.25.6.86 2.11.93 2.27.07.16.13.34.02.55-.1.21-.16.34-.32.52-.16.18-.34.41-.49.55-.16.16-.33.34-.14.66.18.32.83 1.37 1.78 2.22 1.22 1.09 2.25 1.42 2.57 1.59.32.16.5.13.69-.08.18-.21.79-.93.99-1.25.21-.32.42-.27.7-.16.28.11 1.79.84 2.1 1 .32.16.53.23.6.36.07.13.07.75-.18 1.45Z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5"/><path d="m12 5-7 7 7 7"/>
  </svg>
);

function Cta({ style, label, icon, large=false }) {
  const cls = `cta cta--${style}`;
  return (
    <a className={cls} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
      {icon && <span className="ico">{icon === 'whatsapp' ? <WhatsAppIcon/> : <ArrowIcon/>}</span>}
      <span>{label}</span>
    </a>
  );
}

function Portrait() {
  return (
    <React.Fragment>
      <span className="halo a" aria-hidden="true"></span>
      <span className="halo b" aria-hidden="true"></span>
      <img className="photo" src="assets/liat-portrait.png" alt="ליאת דגן" />
    </React.Fragment>
  );
}

function HeroSplit({ t, setTweak }) {
  return (
    <section className="hero hero--split">
      <span className="hero-orn" aria-hidden="true"></span>
      <div className="wrap">
        <div>
          <div className="eyebrow">ליווי אישי וקבוצתי להפסקת עישון</div>
          <h1>פשוט להפסיק לעשן.<br/><em>בלי כוח רצון. בלי הבטחות שווא.</em></h1>
          <p className="lead">תהליך עומק שמתחיל במה שמחזיק אותך מעשן — ומסתיים בלהיות, באמת, אדם לא־מעשן. בלי קיצורי דרך, בלי הבטחות אגרסיביות. רק עבודה תודעתית נכונה.</p>
          <div className="ctas">
            <Cta style={t.ctaStyle} label={t.ctaLabel} icon={t.showWhatsappIcon ? 'whatsapp' : 'arrow'} />
            <span className="meta">חינם · ללא התחייבות</span>
          </div>
        </div>
        <div className="portrait"><Portrait /></div>
      </div>
    </section>
  );
}

function HeroCenter({ t }) {
  return (
    <section className="hero hero--center">
      <span className="hero-orn" aria-hidden="true"></span>
      <div className="wrap">
        <div className="eyebrow">ליווי אישי וקבוצתי להפסקת עישון</div>
        <h1>פשוט להפסיק לעשן —<br/><em>פעם אחת ובאמת.</em></h1>
        <p className="lead">תהליך תודעתי שמתחיל בלהבין למה את או אתה מעשנים, ומסתיים בלפתח אדישות אמיתית לסיגריה. אני לא אבטיח לך תוצאה — אני אובילה אותך לשם.</p>
        <div className="ctas">
          <Cta style={t.ctaStyle} label={t.ctaLabel} icon={t.showWhatsappIcon ? 'whatsapp' : 'arrow'} />
        </div>
        <div className="portrait"><Portrait /></div>
      </div>
    </section>
  );
}

function HeroEditorial({ t }) {
  return (
    <section className="hero hero--editorial">
      <span className="hero-orn" aria-hidden="true"></span>
      <div className="wrap">
        <div className="col-text">
          <span className="marker">ליאת דגן — מאמנת לשינוי תודעתי</span>
          <h1>להפסיק לעשן זה לא העניין.<br/><em>להפסיק להיות מעשן — זה כן.</em></h1>
          <p className="lead">לא עוד תהליך של "להחזיק מעמד". עבודת שורש שמשנה את איך שאת או אתה חושבים על סיגריות — וההרגל פשוט נפרד מכם בעצמו.</p>
          <div className="ctas">
            <Cta style={t.ctaStyle} label={t.ctaLabel} icon={t.showWhatsappIcon ? 'whatsapp' : 'arrow'} />
            <span className="meta">או — <a href="#about" style={{color:'var(--teal)',textDecoration:'underline',textUnderlineOffset:'3px'}}>קראו עוד עליי</a></span>
          </div>
        </div>
        <div className="portrait"><Portrait /></div>
      </div>
    </section>
  );
}

function HeroSwitch({ t, setTweak }) {
  switch(t.heroVariant){
    case 'center':    return <HeroCenter t={t} />;
    case 'editorial': return <HeroEditorial t={t} />;
    case 'split':
    default:          return <HeroSplit t={t} setTweak={setTweak} />;
  }
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // mount both hero & final cta
  return (
    <React.Fragment>
      <HeroSwitch t={t} setTweak={setTweak} />

      {/* final CTA portal target — render here, then move via portal */}
      <FinalCtaPortal t={t} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero" />
        <TweakRadio label="פריסה"
          value={t.heroVariant}
          options={[
            {value:'split',     label:'פיצול'},
            {value:'center',    label:'ממורכז'},
            {value:'editorial', label:'מערכתי'},
          ]}
          onChange={(v)=>setTweak('heroVariant', v)}
        />

        <TweakSection label="כפתור CTA" />
        <TweakRadio label="סגנון"
          value={t.ctaStyle}
          options={[
            {value:'solid',   label:'מלא'},
            {value:'outline', label:'מתאר'},
            {value:'soft',    label:'רך'},
            {value:'link',    label:'קישור'},
          ]}
          onChange={(v)=>setTweak('ctaStyle', v)}
        />
        <TweakToggle label="הצג אייקון וואטסאפ"
          value={t.showWhatsappIcon}
          onChange={(v)=>setTweak('showWhatsappIcon', v)}
        />
        <TweakText label="טקסט הכפתור"
          value={t.ctaLabel}
          onChange={(v)=>setTweak('ctaLabel', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

// portal: render final CTA into #final-cta inside the existing section
function FinalCtaPortal({ t }) {
  const [target, setTarget] = React.useState(null);
  React.useEffect(()=>{ setTarget(document.getElementById('final-cta')); }, []);
  if(!target) return null;
  return ReactDOM.createPortal(
    <Cta style={t.ctaStyle} label={t.ctaLabel} icon={t.showWhatsappIcon ? 'whatsapp' : 'arrow'} />,
    target
  );
}

// mount: hero
const heroRoot = ReactDOM.createRoot(document.getElementById('hero-mount'));
heroRoot.render(<App />);
