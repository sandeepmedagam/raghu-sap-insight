import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Play, X } from "lucide-react";
import heroImg from "@/assets/hero.png";
import { SiteHeader } from "@/components/expert/SiteHeader";
import { Arrow, ExtLink, Reveal, Section, SectionHeader } from "@/components/expert/primitives";
import {
  ARTICLE_CATEGORIES,
  AUDIT_MATRIX,
  BOOKS,
  CERTIFICATIONS,
  EXPERTISE,
  LINKS,
  MODERN_LANDSCAPE,
  PODCAST_TOPICS,
  RESEARCH_TOPICS,
  SPEAKING_CHANNELS,
  TRUST,
  VIEWPOINT_QUESTIONS,
} from "@/data/raghu";

const TITLE = "Raghu Boddu | SAP Security Expert | SAP Security, GRC & SecOps";
const DESCRIPTION =
  "Raghu Boddu is an SAP Security and GRC expert with 25+ years of experience across SAP Security, cybersecurity, access governance, automation, audit and SAP SecOps.";

export const Route = createFileRoute("/experts/raghu-boddu")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/experts/raghu-boddu/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/experts/raghu-boddu/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Raghu Boddu",
          jobTitle: "SAP Security Expert",
          description: DESCRIPTION,
          url: LINKS.personalSite,
          sameAs: [
            LINKS.linkedin,
            LINKS.sapPressAuthor,
            LINKS.sapCommunity,
            LINKS.sapSecurityExpert,
            LINKS.toggleNow,
          ],
          knowsAbout: [
            "SAP Security",
            "SAP GRC",
            "Cyber Security",
            "Access Governance",
            "SAP S/4HANA Security",
            "SAP Cloud Security",
            "Security Automation",
            "AI for SAP Security",
            "SAP SecOps",
            "Audit & Compliance",
          ],
          worksFor: { "@type": "Organization", name: "ToggleNow", url: LINKS.toggleNow },
        }),
      },
    ],
  }),
  component: ExpertProfile,
});

function ExpertProfile() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1440px]">
          <Hero />
          <TrustStrip />
          <Overview />
          <Expertise />
          <AuditRisk />
          <Books />
          <Training />
          <Certifications />
          <SecOps />
          <Research />
          <Articles />
          <Podcasts />
          <Speaking />
          <Interviews />
          <Viewpoint />
          <Connect />
      </main>
    </div>
  );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section
      id="overview"
      className="hero-section scroll-mt-24"
    >
      <div className="hero-layout">
        <Reveal className="hero-copy">
          <h1 className="hero-title">
            Raghu<br className="block sm:hidden" /> Boddu
          </h1>
          <p className="hero-role">SAP Security Expert</p>
          <p className="hero-summary">
            Building practical, continuously governed SAP security for complex enterprise environments.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href="#expertise" className="button-primary">
              Explore expertise <Arrow className="text-white" />
            </a>
            <a href="#connect" className="text-link button-secondary">
              Connect with Raghu <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="hero-portrait-wrap">
          <figure className="hero-portrait">
            <img
              src={heroImg || "/hero.png"}
              alt="Raghu Boddu"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="proof-strip">
      <ul className="proof-grid mx-auto max-w-[1440px] px-5 md:px-8">
        {TRUST.map((item) => (
          <li key={item.value} className="proof-item">
            <span className="proof-value">{item.value}</span>
            <span className="proof-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------ Overview */

function Overview() {
  return (
    <Section id="about">
      <SectionHeader title="A career built around practical SAP security" />
      <div className="career-grid mt-10">
        <Reveal className="career-lead">
          <p className="career-years">25+</p>
          <p className="career-years-label">years in SAP Security and GRC</p>
          <p className="career-summary">
            Raghu’s work moves SAP security from role administration and periodic reviews toward
            automation, access governance and continuous oversight.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <ExtLink href={LINKS.sapSecurityExpert}>SAP Security Expert</ExtLink>
            <ExtLink href={LINKS.automationStories}>Automation Stories</ExtLink>
          </div>
        </Reveal>

        <div className="career-evidence">
          <Reveal className="career-fact">
            <h3>Published work</h3>
            <p>
              Author of books on SAP Access Control, SAP Process Control and SAP Cloud Identity and
              Access Governance.
            </p>
            <ExtLink href={LINKS.sapPressAuthor}>SAP PRESS author page</ExtLink>
          </Reveal>
          <Reveal delay={60} className="career-fact">
            <h3>Credentials</h3>
            <p>CISA · CFE · CDPSE · SAP Certified Security Professional · SAP GRC Associate</p>
          </Reveal>
          <Reveal delay={120} className="career-fact">
            <h3>Recognition</h3>
            <p>Microsoft Most Valuable Professional for Windows Shell, three years running.</p>
          </Reveal>
          <Reveal delay={180} className="career-fact">
            <h3>Leadership</h3>
            <p>
              CEO, ToggleNow, leading product innovation and design; board member at{" "}
              <ExtLink href={LINKS.agInnoLabs}>Access Governance Inno Labs Oy</ExtLink>.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- Expertise */

function Expertise() {
  return (
    <Section id="expertise" tone="muted">
      <SectionHeader
        title="Areas of Expertise"
      />
      <div className="expertise-grid mt-10">
        {EXPERTISE.map((e, i) => (
          <Reveal as="article" key={e.n} delay={i * 80}>
            <div className="expertise-item">
              <p className="font-mono text-[12px] tracking-[0.12em] text-signal">{e.n}</p>
              <h3 className="mt-4 max-w-md text-[22px] md:text-[25px]">{e.title}</h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
                {e.summary}
              </p>
              <ul className="expertise-topics mt-6">
                {e.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function AuditRisk() {
  return (
    <Section id="audit" tone="surface">
      <SectionHeader
        title="Audit, Risk & Compliance"
      />
      <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIT_MATRIX.map((c, i) => (
          <Reveal key={c} delay={i * 40} className="audit-item">
            <span aria-hidden="true" className="audit-number">
              0{i + 1}
            </span>
            <p>{c}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Books */

function Books() {
  return (
    <Section id="books" tone="muted">
      <SectionHeader
        title="SAP PRESS Author"
      />
      <div className="book-grid mt-10">
        {BOOKS.map((b, i) => (
          <Reveal
            as="article"
            key={b.title}
            delay={i * 80}
            className={`book-card ${i === 0 ? "book-card-featured" : ""}`}
          >
            <div className={`book-cover book-cover-${i + 1}`}>
              <p className="book-publisher">SAP PRESS</p>
              <p className="book-index">0{i + 1}</p>
              <p className="book-cover-title">
                  {b.title}
              </p>
            </div>
            <div className="book-details">
              <p>{b.description}</p>
              <ExtLink href={b.href}>{b.cta}</ExtLink>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120} className="mt-8">
        <ExtLink href={LINKS.sapPressAuthor}>
          All published works on the SAP PRESS author page
        </ExtLink>
      </Reveal>
    </Section>
  );
}

function Training() {
  const topics = [
    "Authorization concepts",
    "User management",
    "Roles & profiles",
    "Fiori authorizations",
    "Troubleshooting",
    "Auditing",
  ];

  return (
    <Section id="training" tone="surface">
      <div className="training-layout mt-2">
        <Reveal className="training-intro">
          <p className="training-index">01 / LEARNING</p>
          <h2 className="section-heading">SAP S/4HANA<br />Security Training</h2>
          <ExtLink href={LINKS.training} className="training-link">View course</ExtLink>
        </Reveal>
        <div className="training-topics" aria-label="Course topics">
          {topics.map((topic, i) => (
            <Reveal as="article" key={topic} delay={i * 35} className="training-topic">
              <span className="training-topic-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{topic}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Certifications() {
  const stack1 = CERTIFICATIONS.slice(0, 4);
  const stack2 = CERTIFICATIONS.slice(4, 8);

  return (
    <Section id="certifications" tone="muted">
      <SectionHeader title="Professional Qualifications & Certifications" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
        <ul className="divide-y divide-border border-y border-border">
          {stack1.map((c, i) => (
            <Reveal
              as="li"
              key={c.code}
              delay={i * 50}
              className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6 px-2 rounded-sm transition-colors duration-200 hover:bg-background/80 md:py-5"
            >
              <div className="flex items-center gap-2 sm:w-40 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c94b38] shrink-0" />
                <span className="tech text-[14px] font-semibold text-text-primary">{c.code}</span>
              </div>
              <span className="text-[15px] text-text-secondary">{c.name}</span>
            </Reveal>
          ))}
        </ul>

        <ul className="divide-y divide-border border-y border-border">
          {stack2.map((c, i) => (
            <Reveal
              as="li"
              key={c.code}
              delay={(i + 4) * 50}
              className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6 px-2 rounded-sm transition-colors duration-200 hover:bg-background/80 md:py-5"
            >
              <div className="flex items-center gap-2 sm:w-40 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c94b38] shrink-0" />
                <span className="tech text-[14px] font-semibold text-text-primary">{c.code}</span>
              </div>
              <span className="text-[15px] text-text-secondary">{c.name}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- SecOps */

function SecOps() {
  return (
    <Section id="secops" tone="surface">
      <SectionHeader
        title="SAP SecOps"
      />

      {/* Evolution Architecture: Classic vs Modern */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Traditional Model */}
        <Reveal
          delay={60}
          className="flex flex-col rounded-xl border border-border bg-background p-6 md:p-8"
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="eyebrow text-text-muted">Traditional Model</p>
              <h3 className="mt-1 text-[20px] font-semibold text-text-primary">
                Classic SAP Security
              </h3>
            </div>
            <span className="tech rounded border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-text-muted">
              Static · Periodic
            </span>
          </div>

          <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">
            Built primarily around static role provisioning, standard authorization profiles, and
            periodic manual governance reviews.
          </p>

          <div className="mt-6 flex-1">
            <p className="eyebrow mb-3">Authorization Pipeline</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Users", "Roles", "Authorizations", "Transactions"].map((s, i) => (
                <div
                  key={s}
                  className="flex flex-col items-center justify-center rounded-md border border-border bg-surface-2 p-3 text-center transition-colors hover:border-primary/40"
                >
                  <span className="font-mono text-[10px] text-text-muted">0{i + 1}</span>
                  <span className="font-display text-[13.5px] font-semibold text-text-primary mt-0.5">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="font-mono text-[11.5px] text-text-muted">
              Focus: Entitlement assignment &amp; quarterly box-ticking compliance.
            </p>
          </div>
        </Reveal>

        {/* Modern SecOps Model */}
        <Reveal
          delay={120}
          className="flex flex-col rounded-xl border border-primary/30 bg-surface p-6 md:p-8 shadow-xs"
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h3 className="text-[20px] font-semibold text-text-primary">
                SAP SecOps Landscape
              </h3>
            </div>
          </div>

          <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">
            Encompasses human and non-human identities across hybrid cloud fabrics, orchestrated
            automations, and live risk monitoring.
          </p>

          <div className="mt-6 flex-1">
            <p className="eyebrow mb-3">Ecosystem Vectors</p>
            <div className="flex flex-wrap gap-2">
              {MODERN_LANDSCAPE.map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-[12px] font-medium text-text-primary shadow-2xs transition-colors hover:border-[#c94b38] hover:bg-orange-50/30"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="font-mono text-[11.5px] text-text-primary">
              <span className="font-bold text-slate-900">Focus:</span>{" "}
              <span className="text-text-secondary">
                Pervasive visibility, live threat detection &amp; human oversight.
              </span>
            </p>
          </div>
        </Reveal>
      </div>

      {/* Analytical Axiom: Can Do vs Did Do */}
      <Reveal delay={160} className="mt-8 rounded-xl border border-border bg-background p-6 md:p-8">
        <div className="max-w-2xl">
          <h3 className="text-[22px] font-semibold text-text-primary md:text-[24px]">
            The “Can Do” vs. “Did Do” Duality
          </h3>
          <p className="mt-2 text-[15px] text-text-secondary">
            Raghu’s foundational methodology asserts that knowing what an identity is permitted to
            do is insufficient without analyzing what that identity actually performs.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Can Do */}
          <Reveal delay={80}>
            <div className="h-full rounded-lg border border-border bg-surface-2 p-5 md:p-6">
              <div className="flex items-center justify-between">
                <span className="tech inline-flex items-center gap-1.5 rounded border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c94b38]" />
                  Entitlement State
                </span>
                <span className="font-mono text-[11px] text-text-muted">Static Analysis</span>
              </div>
              <h4 className="mt-3 font-display text-[20px] font-semibold text-text-primary">
                Can Do
              </h4>
              <p className="mt-2 text-[15px] font-medium text-text-primary">
                “What can this identity technically execute?”
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                Evaluates assigned roles, transaction authorizations, and Segregation of Duties
                (SoD) permissions configured in SAP GRC and identity governance repositories.
              </p>
            </div>
          </Reveal>

          {/* Did Do */}
          <Reveal delay={160}>
            <div className="h-full rounded-lg border border-border bg-surface-2 p-5 md:p-6">
              <div className="flex items-center justify-between">
                <span className="tech inline-flex items-center gap-1.5 rounded border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c94b38]" />
                  Runtime Activity
                </span>
                <span className="font-mono text-[11px] text-text-muted">Dynamic Telemetry</span>
              </div>
              <h4 className="mt-3 font-display text-[20px] font-semibold text-text-primary">
                Did Do
              </h4>
              <p className="mt-2 text-[15px] font-medium text-text-primary">
                “What did the identity actually perform?”
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                Captures audit logs, transaction executions, database queries, and behavioral
                anomalies to verify if potential access was actually exercised.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Synthesis formula banner */}
        <Reveal delay={240}>
          <div className="mt-6 flex flex-col items-center justify-between gap-5 rounded-lg border border-border bg-surface-2 p-5 md:p-6 lg:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[13.5px] sm:gap-4 md:text-[14.5px]">
              <span className="inline-flex min-w-[130px] items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-center font-semibold text-text-primary shadow-xs sm:min-w-[145px]">
                Can Do
              </span>
              <span className="text-[16px] font-bold text-[#c94b38]">+</span>
              <span className="inline-flex min-w-[130px] items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-center font-semibold text-text-primary shadow-xs sm:min-w-[145px]">
                Did Do
              </span>
              <span className="text-[16px] font-bold text-text-muted">➔</span>
              <span className="inline-flex min-w-[185px] items-center justify-center rounded-md border border-primary bg-primary px-6 py-2.5 text-center font-semibold text-primary-foreground shadow-xs sm:min-w-[210px]">
                Security Context
              </span>
            </div>
            <p className="max-w-md text-center text-[13.5px] text-text-secondary lg:text-right">
              Continuous correlation enables proactive incident containment rather than
              retrospective audits.
            </p>
          </div>
        </Reveal>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------ Research */

function Research() {
  const mid = Math.ceil(RESEARCH_TOPICS.length / 2);
  const col1 = RESEARCH_TOPICS.slice(0, mid);
  const col2 = RESEARCH_TOPICS.slice(mid);

  return (
    <Section id="research" tone="muted">
      <SectionHeader title="Expert Recommendations" />

      <div className="mt-10 grid gap-x-10 border-t border-border lg:grid-cols-2">
        <ul className="divide-y divide-border">
          {col1.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 30}>
              <a
                href={LINKS.sseRecommendations}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 border-b border-border py-4 transition-colors duration-200 hover:bg-surface-2"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-primary transition-colors group-hover:text-[#c94b38] md:text-[13px]">
                  {t}
                </span>
                <Arrow className="shrink-0 text-[#c94b38] transition-transform duration-200 group-hover:translate-x-[3px]" />
              </a>
            </Reveal>
          ))}
        </ul>
        <ul className="divide-y divide-border">
          {col2.map((t, i) => (
            <Reveal as="li" key={t} delay={(i + mid) * 30}>
              <a
                href={LINKS.sseRecommendations}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 border-b border-border py-4 transition-colors duration-200 hover:bg-surface-2"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-primary transition-colors group-hover:text-[#c94b38] md:text-[13px]">
                  {t}
                </span>
                <Arrow className="shrink-0 text-[#c94b38] transition-transform duration-200 group-hover:translate-x-[3px]" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={100} className="mt-10">
        <article className="max-w-3xl rounded-lg border border-border bg-surface-2 p-6 md:p-8">
          <h3>SAP Security 2015 model already behind</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            In his latest SAP Security Expert work, Raghu states that the traditional security model
            from 2015 is no longer sufficient for the current SAP landscape, where Fiori, BTP, APIs,
            automation and AI open up additional access paths and identities.
          </p>
          <div className="mt-5">
            <ExtLink href={LINKS.sse2015Model}>Read Expert Recommendation</ExtLink>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

function Articles() {
  return (
    <Section id="articles" tone="surface">
      <SectionHeader title="Technical Writing" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLE_CATEGORIES.map((a, i) => (
          <Reveal as="article" key={a.category} delay={i * 60}>
            <div className="flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-colors duration-200 hover:border-primary">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                {a.category}
              </p>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-secondary">
                {a.description}
              </p>
              <div className="mt-5">
                <ExtLink href={LINKS.sapSecurityExpert}>Read articles</ExtLink>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={100} className="mt-8 flex flex-wrap gap-6">
        <ExtLink href={LINKS.linkedin}>Publishing presence on LinkedIn</ExtLink>
        <ExtLink href={LINKS.sapPressAuthor}>SAP PRESS author page</ExtLink>
      </Reveal>
    </Section>
  );
}

function Podcasts() {
  return (
    <Section id="podcasts" tone="muted">
      <div className="podcast-layout">
        <div className="podcast-lead">
          <SectionHeader title="Podcasts & Discussion" />
          <Reveal delay={80} className="podcast-feature">
            <span className="podcast-feature-number">SAP<br />SECURITY<br />EXPERT</span>
            <h3>Conversations on securing SAP</h3>
            <ExtLink href={LINKS.ssePodcasts} className="podcast-feature-link">Explore the series</ExtLink>
          </Reveal>
        </div>
        <ol className="podcast-topics">
          {PODCAST_TOPICS.map((topic, i) => (
            <Reveal as="li" key={topic} delay={i * 35}>
              <a href={LINKS.ssePodcasts} target="_blank" rel="noopener noreferrer">
                <span className="podcast-topic-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="podcast-topic-title">{topic}</span>
                <Arrow className="podcast-topic-arrow" />
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Speaking() {
  return (
    <Section id="speaking" tone="surface">
      <SectionHeader title="Speaking & Sharing Knowledge" />
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {SPEAKING_CHANNELS.map((s, i) => (
              <Reveal
                as="li"
                key={s}
                delay={i * 50}
                className="bg-background p-4 flex items-center gap-2.5 text-[15px] text-text-primary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#c94b38] shrink-0" />
                <span>{s}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="flex flex-col justify-end">
          <blockquote className="border-l-2 border-[#c94b38] pl-6">
            <p className="font-display text-[22px] font-semibold leading-snug text-text-primary md:text-[26px]">
              “So what should a security professional actually do differently on Monday morning?”
            </p>
            <footer className="mt-4 text-[14px] text-text-secondary">
              Raghu’s focus is deliberately practical.
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </Section>
  );
}

function Interviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const media = [
    {
      source: "Sakshi TV",
      title: "Interview — “Is AI a threat?”",
      href: LINKS.sakshiTv,
      videoId: "AiGP4hL041s",
    },
    {
      source: "Hybiz TV",
      title: "Cyber frauds — television discussion",
      href: LINKS.hybizTv,
      videoId: "Rhs66vy54OE",
    },
  ];

  return (
    <Section id="interviews" tone="muted">
      <SectionHeader title="Interviews & Media" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {media.map((m, i) => {
          const isPlaying = activeVideo === `${m.videoId}-${i}`;
          const thumbnailUrl = `https://img.youtube.com/vi/${m.videoId}/hqdefault.jpg`;

          return (
            <Reveal as="article" key={`${m.title}-${i}`} delay={i * 70}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-200 hover:border-primary">
                {/* 16:9 Video or Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  {isPlaying ? (
                    <div className="relative h-full w-full">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${m.videoId}?autoplay=1&rel=0&modestbranding=1`}
                        title={m.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                      <button
                        type="button"
                        onClick={() => setActiveVideo(null)}
                        aria-label="Close video"
                        className="absolute right-2 top-2 z-10 rounded-full bg-black/75 p-1.5 text-white transition hover:bg-black cursor-pointer"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(`${m.videoId}-${i}`)}
                      className="group relative h-full w-full text-left cursor-pointer focus:outline-hidden"
                      aria-label={`Play video: ${m.title}`}
                    >
                      <img
                        src={thumbnailUrl}
                        alt={m.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

                      {/* Top badge */}
                      <div className="absolute left-3 top-3">
                        <span className="tech rounded bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-xs">
                          {m.source}
                        </span>
                      </div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-signal text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-5 w-5 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c94b38]" />
                    {m.source}
                  </span>
                  <h3 className="mt-2 flex-1 text-[17px] font-semibold leading-snug text-text-primary md:text-[18px]">
                    {m.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(`${m.videoId}-${i}`)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#c94b38] hover:underline cursor-pointer"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" /> Watch Video
                    </button>
                    <ExtLink href={m.href} className="text-[13px] text-text-muted">
                      Open on YouTube
                    </ExtLink>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={80} className="mt-8 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
        <p>
          Raghu has also contributed significantly to a variety of technical communities, publishing
          on{" "}
          <ExtLink href={LINKS.sapCommunity} className="!inline-flex align-baseline">
            SAP Community Blogs
          </ExtLink>{" "}
          and authoring over 30 Microsoft Knowledge Base articles during his earlier Microsoft
          ecosystem work. He was awarded Microsoft Most Valuable Professional (MVP) for Windows
          Shell three years running.
        </p>
      </Reveal>
    </Section>
  );
}

/* ----------------------------------------------------------- Viewpoint */

function Viewpoint() {
  const stack1 = VIEWPOINT_QUESTIONS.slice(0, 4);
  const stack2 = VIEWPOINT_QUESTIONS.slice(4, 8);

  return (
    <Section id="viewpoint" tone="surface">
      <SectionHeader title="Raghu’s Viewpoint" />
      <Reveal delay={60} className="mt-6 max-w-3xl">
        <p className="font-display text-[22px] font-semibold leading-snug text-text-primary md:text-[28px]">
          SAP Security should be more than just “Can the user access it?”
        </p>
        <p className="mt-4 text-[15px] text-text-secondary">
          Security today demands a wider set of questions.
        </p>
      </Reveal>

      {/* 8 questions organized into two equal stacks side by side */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Left Stack: Questions 01 - 04 */}
        <ol className="divide-y divide-border border-y border-border">
          {stack1.map((q, i) => (
            <Reveal
              as="li"
              key={q}
              delay={i * 50}
              className="group flex items-start gap-4 py-4 transition-colors duration-200 hover:bg-background/80 px-2 rounded-sm md:py-5"
            >
              <span className="tech w-7 shrink-0 pt-0.5 text-[12px] font-bold text-[#c94b38]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[17px] font-semibold leading-snug text-text-primary md:text-[19px]">
                {q}
              </span>
            </Reveal>
          ))}
        </ol>

        {/* Right Stack: Questions 05 - 08 */}
        <ol className="divide-y divide-border border-y border-border">
          {stack2.map((q, i) => (
            <Reveal
              as="li"
              key={q}
              delay={(i + 4) * 50}
              className="group flex items-start gap-4 py-4 transition-colors duration-200 hover:bg-background/80 px-2 rounded-sm md:py-5"
            >
              <span className="tech w-7 shrink-0 pt-0.5 text-[12px] font-bold text-[#c94b38]">
                {String(i + 5).padStart(2, "0")}
              </span>
              <span className="font-display text-[17px] font-semibold leading-snug text-text-primary md:text-[19px]">
                {q}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={80} className="mt-8 max-w-3xl text-[15px] text-text-secondary">
        <p>These questions are increasingly shaping Raghu’s philosophy of SAP Security.</p>
      </Reveal>
    </Section>
  );
}

function Connect() {
  const channels = [
    { label: "LinkedIn", value: "Raghu Boddu", href: LINKS.linkedin },
    { label: "SAP Profile", value: "@GRCwithRaghu", href: LINKS.sapCommunity },
    { label: "SAP Security Expert", value: "sapsecurityexpert.com", href: LINKS.sapSecurityExpert },
    { label: "ToggleNow", value: "togglenow.com", href: LINKS.toggleNow },
    { label: "Personal website", value: "www.raghuboddu.com", href: LINKS.personalSite },
  ];
  return (
    <Section id="connect" tone="surface" className="connect-section">
      <div className="connect-layout">
        <Reveal className="connect-intro">
          <p className="connect-kicker">RAGHU BODDU</p>
          <SectionHeader title="Follow & Connect" />
          <p className="connect-description">For SAP security conversations, speaking and collaboration.</p>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="connect-primary button-primary">
            Connect on LinkedIn <Arrow className="text-white" />
          </a>
        </Reveal>
        <Reveal delay={100} className="connect-links-wrap">
          <h3 className="connect-links-heading">Find Raghu online</h3>
          <ul className="connect-links">
            {channels.map((c, i) => (
              <li key={c.label}>
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  <span className="connect-number">0{i + 1}</span>
                  <span className="connect-channel">
                    <span>{c.label}</span>
                    <small>{c.value}</small>
                  </span>
                  <Arrow className="connect-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
