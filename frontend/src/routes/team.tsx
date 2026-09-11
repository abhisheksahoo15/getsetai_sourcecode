import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import teamsImage from "@/assets/teams.jpg";
import teamsLadyImage from "@/assets/teams(lady).png";

type Accent = "purple" | "gold";

interface TeamMember {
  name: string;
  accent: Accent;
  label: string;
  isFounder?: boolean;
  isDeveloper?: boolean;
  image?: string;
}

const members: TeamMember[] = [
  {
    name: "Bugtha Bharadwaj",
    accent: "purple",
    label: "Director, COO",
    isFounder: true,
    image: teamsImage,
  },
  {
    name: "Abhishek Sahoo",
    accent: "gold",
    label: "Director, CEO",
    isFounder: true,
    image: teamsImage,
  },
  {
    name: "Nidhi Galande",
    accent: "gold",
    label: "HR",
    image: teamsLadyImage,
  },
  {
    name: "Kavya Sucharitha",
    accent: "purple",
    label: "HR",
    image: teamsLadyImage,
  },
  {
    name: "Ram Charan",
    accent: "purple",
    label: "Head Of Community",
    image: teamsImage,
  },
  {
    name: "Yuvraj Yadav",
    accent: "gold",
    label: "Chief Technical Officer",
    isDeveloper: true,
    image: teamsImage,
  },
  {
    name: "Gajula Neeraj Kumar",
    accent: "gold",
    label: "Full Stack Developer",
    isDeveloper: true,
    image: teamsImage,
  },
  {
    name: "Nelluri Praveen Sai",
    accent: "purple",
    label: "Full Stack Developer",
    isDeveloper: true,
    image: teamsImage,
  },
  {
    name: "Manoj",
    accent: "purple",
    label: "AI Engineer",
    isDeveloper: true,
    image: teamsImage,
  },
];

function Avatar({ image }: { image?: string }) {
  return (
    <img 
      src={image || teamsImage} 
      alt="Team member" 
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%"
      }}
    />
  );
}

function TeamPage() {
  return (
    <div className="ot-page">
      <div className="ot-stage">
        <div className="ot-header-row">
          <h1 className="ot-our-team">Our Team</h1>
        </div>

        <div className="ot-founders-row">
          {members.filter(m => m.isFounder).map((member) => (
            <div key={member.name} className={`ot-member ot-founder`}>
              <div className={`ot-card ot-${member.accent} ot-founder-hover`}>
                <div className="ot-founder-badge">Founder</div>
                <span className={`ot-name-vert ot-${member.accent}-text ot-founder-hover`}>{member.name}</span>
                <div className="ot-avatar">
                  <Avatar image={member.image ?? teamsImage} />
                </div>
              </div>
              <div className={`ot-label-pill ot-${member.accent} ot-founder-hover`}>{member.label}</div>
            </div>
          ))}
        </div>

        <div className="ot-section-divider">
          <span className="ot-divider-text">Leadership Team</span>
        </div>

        <div className="ot-team-row">
          {members.filter(m => !m.isFounder && !m.isDeveloper).map((member) => (
            <div key={member.name} className="ot-member">
              <div className={`ot-card ot-${member.accent}`}>
                <span className={`ot-name-vert ot-${member.accent}-text`}>{member.name}</span>
                <div className="ot-avatar">
                  <Avatar image={member.image ?? teamsImage} />
                </div>
              </div>
              <div className={`ot-label-pill ot-${member.accent}`}>{member.label}</div>
            </div>
          ))}
        </div>

        <div className="ot-section-divider">
          <span className="ot-divider-text">Development Team</span>
        </div>

        <div className="ot-developers-row">
          {members.filter(m => m.isDeveloper).map((member) => (
            <div key={member.name} className={`ot-member`}>
              <div className={`ot-card ot-${member.accent}`}>
                <span className={`ot-name-vert ot-${member.accent}-text`}>{member.name}</span>
                <div className="ot-avatar">
                  <Avatar image={member.image ?? teamsImage} />
                </div>
              </div>
              <div className={`ot-label-pill ot-${member.accent}`}>{member.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ot-page {
          margin: 0;
          font-family: "Segoe UI", Arial, sans-serif;
          background: var(--background);
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 120px 20px 64px;
          box-sizing: border-box;
          color: var(--foreground);
        }

        .ot-page * { box-sizing: border-box; }

        .ot-stage {
          position: relative;
          width: 100%;
          max-width: 1180px;
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          overflow: visible;
        }

        .ot-stage::before {
          content: none;
        }

        .ot-header-row,
        .ot-team-row,
        .ot-footer-row {
          position: relative;
          z-index: 2;
        }

        .ot-header-row {
          margin-bottom: 44px;
        }

        .ot-founders-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .ot-team-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .ot-developers-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .ot-section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 0;
          position: relative;
        }

        .ot-section-divider::before,
        .ot-section-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .ot-divider-text {
          padding: 0 20px;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--muted-foreground);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .ot-member {
          position: relative;
          width: 220px;
          border-radius: 28px;
          padding-bottom: 64px;
          overflow: visible;
        }



        .ot-card {
          position: relative;
          border-radius: 28px;
          height: 330px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.08);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
          transition: all 0.3s ease;
        }

        .ot-card.ot-purple {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005)),
            rgba(17, 17, 20, 0.92);
        }

        .ot-card.ot-gold {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005)),
            rgba(17, 17, 20, 0.92);
        }



        .ot-card.ot-founder-hover:hover {
          background: linear-gradient(180deg, rgba(255, 215, 0, 0.15), rgba(255, 193, 7, 0.05)),
            rgba(17, 17, 20, 0.95);
          border: 2px solid rgba(255, 215, 0, 0.3);
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .ot-card.ot-founder-hover:hover .ot-name-vert {
          color: rgba(255, 215, 0, 0.95);
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
          transition: all 0.3s ease;
        }

        .ot-card.ot-founder-hover:hover .ot-label-pill {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.4), rgba(255, 193, 7, 0.3));
          border: 2px solid rgba(255, 215, 0, 0.7);
          color: rgba(255, 215, 0, 1);
          font-weight: 800;
          letter-spacing: 0.5px;
          transform: translateX(-50%) scale(1.08);
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
          transition: all 0.3s ease;
        }

        .ot-founder-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.05));
          color: rgba(255, 215, 0, 0.7);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          z-index: 4;
          border: 1px solid rgba(255, 215, 0, 0.2);
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }

        .ot-card.ot-founder-hover:hover .ot-founder-badge {
          opacity: 1;
          transform: translateY(0);
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.8), rgba(255, 193, 7, 0.6));
          color: #000;
          border: 1px solid rgba(255, 215, 0, 0.4);
          box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
        }

        .ot-avatar {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .ot-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .ot-name-vert {
          position: absolute;
          top: 14px;
          right: 10px;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 2.6rem;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 1;
          z-index: 3;
          transition: all 0.3s ease;
        }

        .ot-name-vert.ot-purple-text {
          color: rgba(255,255,255,0.9);
          text-shadow: 0 0 18px rgba(255,255,255,0.08);
        }

        .ot-name-vert.ot-gold-text {
          color: rgba(255,255,255,0.9);
          text-shadow: 0 0 18px rgba(255,255,255,0.06);
        }

        .ot-label-pill {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 88%;
          text-align: center;
          padding: 12px 10px;
          border-radius: 14px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--foreground);
          transition: all 0.3s ease;
        }

        .ot-member.ot-founder {
          width: 240px;
        }

        .ot-footer-row {
          margin-top: 70px;
        }

        .ot-our-team {
          font-size: clamp(2.6rem, 6vw, 5rem);
          font-weight: 900;
          margin: 0;
          letter-spacing: -0.05em;
          line-height: 0.96;
          color: var(--foreground);
        }

        .ot-blurb {
          max-width: 540px;
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--muted-foreground);
          opacity: 0.95;
        }

        @media (max-width: 980px) {
          .ot-member {
            width: 44%;
          }

          .ot-member.ot-founder {
            width: 44%;
          }

          .ot-founders-row {
            gap: 28px;
            margin-bottom: 40px;
          }

          .ot-developers-row {
            gap: 20px;
          }

          .ot-section-divider {
            margin: 30px 0;
          }

          .ot-divider-text {
            font-size: 0.9rem;
          }

          .ot-stage {
            padding: 40px 24px;
          }
        }

        @media (max-width: 560px) {
          .ot-member {
            width: 100%;
          }

          .ot-name-vert {
            font-size: 2rem;
          }

          .ot-our-team {
            font-size: 2.6rem;
          }
        }
      `}</style>
    </div>
  );
}

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Getsetai Innovations" },
      {
        name: "description",
        content:
          "Meet the Getsetai Innovations team building AI products, digital experiences, and growth systems.",
      },
      { property: "og:title", content: "Team — Getsetai Innovations" },
      {
        property: "og:description",
        content:
          "A multidisciplinary team covering design, product, engineering, strategy, and marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});
