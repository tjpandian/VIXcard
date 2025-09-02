import React, { useMemo, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Globe,
  Calendar,
  Download,
  Share2,
  CreditCard,
  Smartphone,
  Wallet,
  Sun,
  Moon,
  FileText,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

// ---------------------------
// NFC Digital Profile Page
// ---------------------------
// TailwindCSS required. All links are placeholders — change to your real links.
// You can drop this component anywhere (e.g., pages/Home.jsx) and it will render a complete profile page.

export default function Details() {

  
  // ====== Editable Profile Data ======
  const profile = {
    name: "Arun Kumar",
    title: "Founder & Product Designer",
    company: "TapLink Studio",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=256&h=256&fit=crop&auto=format",
    brandColor: "#6d28d9", // Tailwind: purple-700

    phone: "+91 98765 43210",
    email: "hello@taplink.studio",
    website: "https://yourwebsite.com",
    address: "Chennai, Tamil Nadu, India",

    // Fast actions
    whatsapp: "https://wa.me/919876543210",
    maps: "https://maps.google.com/?q=Chennai,TN,India",
    calendar: "https://calendly.com/yourname/30min",

    // Socials
    socials: {
      linkedin: "https://www.linkedin.com/in/yourprofile",
      instagram: "https://instagram.com/yourbrand",
      facebook: "https://facebook.com/yourbrand",
      youtube: "https://youtube.com/@yourbrand",
    },

    // Payments
    upi: {
      id: "arun@upi",
      deepLink: "upi://pay?pa=arun@upi&pn=Arun%20Kumar&cu=INR",
    },
    stripe: "https://buy.stripe.com/test_123456",
    paypal: "https://paypal.me/yourname",

    // Docs
    brochureUrl:
      "https://example.com/brochure.pdf", // replace with your PDF/catelog link

    // Services
    services: [
      { title: "NFC Business Cards", desc: "Tap-to-share smart visiting cards." },
      { title: "Brand Websites", desc: "Fast, responsive, SEO-friendly sites." },
      { title: "E‑commerce Setup", desc: "Payment, catalog, and order flow." },
    ],

    // Testimonials
    testimonials: [
      {
        name: "Priya S.",
        text: "Seamless experience. One tap and clients save all my details!",
      },
      {
        name: "Rahul M.",
        text: "Loved the custom design and quick sharing options.",
      },
    ],
  };

  const [light, setLight] = useState(true);

  // Build vCard text
  const vcard = useMemo(() => {
    return `BEGIN:VCARD\nVERSION:3.0\nN:${profile.name}\\n${profile.company}\nFN:${profile.name}\nTITLE:${profile.title}\nTEL;TYPE=CELL:${profile.phone}\nEMAIL;TYPE=INTERNET:${profile.email}\nORG:${profile.company}\nURL:${profile.website}\nADR;TYPE=WORK:;;;${profile.address};;;;\nEND:VCARD`;
  }, [profile]);

  function downloadVCard() {
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${profile.name.replace(/\s+/g, "_")}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const bg = light ? "bg-white text-gray-900" : "bg-gray-950 text-gray-100";
  const cardBg = light ? "bg-white/80" : "bg-gray-900/70";
  const subText = light ? "text-gray-600" : "text-gray-300";

  return (


        
    <div className={`${bg} min-h-screen w-full transition-colors duration-500`}>   

        



      {/* Top banner / brand gradient */}
      <div
        className="relative h-44 w-full"
        style={{
          background:
            "radial-gradient(1200px 300px at 50% -50px, rgba(109,40,217,0.35), transparent)",
        }}
      >
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setLight((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/20 backdrop-blur-md"
            aria-label="Toggle theme"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="text-sm">{light ? "Night" : "Day"}</span>
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="-mt-20 mx-auto max-w-3xl px-4 pb-16">
        <div className={`rounded-2xl shadow-xl ${cardBg} backdrop-blur p-6 sm:p-8 border border-white/10`}>          
          <header className="flex flex-col sm:flex-row items-center sm:items-end gap-5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-28 w-28 rounded-2xl object-cover ring-4"
              style={{ ringColor: profile.brandColor }}
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {profile.name}
              </h1>
              <p className={`${subText} mt-1`}>
                {profile.title} • <span className="font-medium">{profile.company}</span>
              </p>
              <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                <Action href={`tel:${profile.phone}`} icon={<PhoneCall className="h-4 w-4" />} label="Call" />
                <Action href={`mailto:${profile.email}`} icon={<Mail className="h-4 w-4" />} label="Email" />
                <Action href={profile.whatsapp} icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" />
                <Action href={profile.calendar} icon={<Calendar className="h-4 w-4" />} label="Book" />
                <Action href={profile.website} icon={<Globe className="h-4 w-4" />} label="Website" />
                <button onClick={downloadVCard} className="inline-flex items-center gap-2 text-sm rounded-full px-3 py-1.5 border border-current">
                  <Download className="h-4 w-4" /> Save Contact
                </button>
              </div>
            </div>
          </header>

          

          {/* Contact rows */}
          <div className="mt-6 grid gap-3 text-sm">
             <h2 className="text-lg font-semibold mb-3">Business Info</h2>
          
           
            <Row icon={<Globe className="h-4 w-4" />} text={profile.website.replace(/^https?:\/\//, "")} href={profile.website} />
            <Row icon={<MapPin className="h-4 w-4" />} text={profile.address} href={profile.maps} />
             <Row icon={<Mail className="h-4 w-4" />} text={profile.email} href={`mailto:${profile.email}`} />
               <Row icon={<Smartphone className="h-4 w-4" />} text={profile.phone} href={`tel:${profile.phone}`} />
          </div>


          

          {/* Socials */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Connect</h2>
            <div className="flex flex-wrap gap-3">
              <Social icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" href={profile.socials.linkedin} />
              <Social icon={<Instagram className="h-5 w-5" />} label="Instagram" href={profile.socials.instagram} />
              <Social icon={<Facebook className="h-5 w-5" />} label="Facebook" href={profile.socials.facebook} />
              <Social icon={<Youtube className="h-5 w-5" />} label="YouTube" href={profile.socials.youtube} />
            </div>
          </section>

          {/* Services */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Services</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {profile.services.map((s, i) => (
                <li key={i} className="rounded-xl border border-white/10 p-3">
                  <p className="font-medium">{s.title}</p>
                  <p className={`${subText} text-sm`}>{s.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Brochure */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Brochure / Catalog</h2>
            <a
              href={profile.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-current hover:opacity-80"
            >
              <FileText className="h-5 w-5" /> View PDF
            </a>
          </section>

          {/* Payments */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Pay Me</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* UPI */}
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Wallet className="h-5 w-5" />
                  <p className="font-medium">UPI</p>
                </div>
                <p className={`${subText} text-sm`}>UPI ID: {profile.upi.id}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={profile.upi.deepLink}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-current hover:opacity-80"
                  >
                    <CreditCard className="h-4 w-4" /> Pay via UPI
                  </a>
                </div>
                <div className="mt-4 grid place-items-center">
                  <QRCodeCanvas value={profile.upi.deepLink} size={140} />
                  <p className={`${subText} text-xs mt-2`}>Scan to pay</p>
                </div>
              </div>

              {/* International / other */}
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="h-5 w-5" />
                  <p className="font-medium">Cards & International</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={profile.stripe}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-current hover:opacity-80"
                  >
                    Stripe
                  </a>
                  <a
                    href={profile.paypal}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-current hover:opacity-80"
                  >
                    PayPal
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Share */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Share My Profile</h2>
            <ShareButtons brandColor={profile.brandColor} />
          </section>

          {/* Testimonials */}
          {/* <section className="mt-8">
            <h2 className="text-lg font-semibold mb-3">What Clients Say</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {profile.testimonials.map((t, i) => (
                <blockquote key={i} className="rounded-xl border border-white/10 p-4">
                  <p className="italic">“{t.text}”</p>
                  <p className={`${subText} mt-2 text-sm`}>— {t.name}</p>
                </blockquote>
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
}

function Row({ icon, text, href }) {
  const Comp = href ? "a" : "div";
  return (
    <Comp href={href} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5">
      <span className="opacity-80">{icon}</span>
      <span className="truncate">{text}</span>
    </Comp>
  );
}

function Action({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-current hover:opacity-80"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}

function Social({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-current hover:opacity-80"
      aria-label={label}
      title={label}
    >
      {icon}
      <span className="hidden sm:inline text-sm">{label}</span>
    </a>
  );
}

function ShareButtons({ brandColor }) {
  const url = typeof window !== "undefined" ? window.location.href : "https://yourprofile.link";
  const title = "My Digital Business Card";

  async function onShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard ✅");
      } catch {
        alert("Copy failed. Long-press to copy the URL.");
      }
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={onShare}
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-current hover:opacity-80"
        style={{ borderColor: brandColor, color: brandColor }}
      >
        <Share2 className="h-4 w-4" /> Share Profile
      </button>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(title + " - " + url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-current hover:opacity-80"
      >
        <MessageCircle className="h-4 w-4" /> Share on WhatsApp
      </a>
    </div>
  );
}
