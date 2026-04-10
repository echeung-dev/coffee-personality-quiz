"use client";

import { useState } from "react";
import Image from "next/image";

type PersonalityKey = "bold" | "sweet" | "night" | "health";

type Personality = {
  name: string;
  drink: string;
  tagline: string;
  image: string;
  chipColor: string;
};

type Answer = {
  text: string;
  emoji: string;
  personality: PersonalityKey;
};

type Question = {
  text: string;
  answers: Answer[];
};

const PERSONALITIES: Record<PersonalityKey, Personality> = {
  bold: {
    name: "Bold Adventurer",
    drink: "Double Espresso",
    tagline: "You live for intensity",
    image: "/bold-adventurer.jpg",
    chipColor: "#E8440A",
  },
  sweet: {
    name: "Sweet Enthusiast",
    drink: "Caramel Latte",
    tagline: "Life's too short for bitter",
    image: "/sweet-enthusiast.jpg",
    chipColor: "#D4820A",
  },
  night: {
    name: "Night Owl",
    drink: "Red Eye",
    tagline: "Sleep is optional",
    image: "/night-owl.jpg",
    chipColor: "#4A3F8F",
  },
  health: {
    name: "Health Nut",
    drink: "Oat Milk Americano",
    tagline: "Wellness in every sip",
    image: "/health-nut.jpg",
    chipColor: "#2A7A4B",
  },
};

const QUESTIONS: Question[] = [
  {
    text: "It's Saturday morning. What does your ideal weekend look like?",
    answers: [
      { emoji: "🏔️", text: "Hiking or an outdoor adventure", personality: "bold" },
      { emoji: "🧁", text: "Slow morning, pastry, good music", personality: "sweet" },
      { emoji: "😴", text: "Sleeping in — it's the weekend", personality: "night" },
      { emoji: "🧘", text: "Yoga class and a smoothie", personality: "health" },
    ],
  },
  {
    text: "You're picking a vacation. Where are you going?",
    answers: [
      { emoji: "🌋", text: "Volcano trekking in Iceland", personality: "bold" },
      { emoji: "🏝️", text: "A resort with room service", personality: "sweet" },
      { emoji: "🌃", text: "A city that never sleeps — Tokyo, NYC", personality: "night" },
      { emoji: "🚴", text: "Cycling through the countryside", personality: "health" },
    ],
  },
  {
    text: "What's your relationship with mornings?",
    answers: [
      { emoji: "⚡", text: "Up early, first one to the trail", personality: "bold" },
      { emoji: "☕", text: "Mornings are for slow rituals", personality: "sweet" },
      { emoji: "🦉", text: "What mornings? I'm a night person", personality: "night" },
      { emoji: "🌅", text: "Early riser — workout done by 7am", personality: "health" },
    ],
  },
  {
    text: "Pick your ideal meal out:",
    answers: [
      { emoji: "🌶️", text: "Spicy ramen or bold ethnic cuisine", personality: "bold" },
      { emoji: "🍰", text: "Brunch — the more indulgent the better", personality: "sweet" },
      { emoji: "🍕", text: "Late-night pizza with friends", personality: "night" },
      { emoji: "🥗", text: "Farm-to-table, locally sourced", personality: "health" },
    ],
  },
  {
    text: "Your energy at 10pm on a Friday:",
    answers: [
      { emoji: "🎯", text: "Planning tomorrow's adventure", personality: "bold" },
      { emoji: "🛁", text: "Wine, bath, early bed", personality: "sweet" },
      { emoji: "🎉", text: "Just getting started", personality: "night" },
      { emoji: "📖", text: "Reading or winding down intentionally", personality: "health" },
    ],
  },
  {
    text: "How do you handle a stressful week?",
    answers: [
      { emoji: "🧗", text: "Push through it with adrenaline", personality: "bold" },
      { emoji: "🍫", text: "Treat yourself — you deserve it", personality: "sweet" },
      { emoji: "🌙", text: "Stay up late, get it all done", personality: "night" },
      { emoji: "🏃", text: "Exercise it out", personality: "health" },
    ],
  },
];

export default function Home() {
  const [stage, setStage] = useState<"intro" | "quiz" | "results">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityKey[]>([]);

  function handleStart() {
    setStage("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  }

  function handleAnswer(personality: PersonalityKey) {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = personality;
    if (currentQuestion + 1 < QUESTIONS.length) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers(newAnswers);
      setStage("results");
    }
  }

  function handleBack() {
    if (currentQuestion === 0) {
      setStage("intro");
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function handleRetake() {
    setStage("intro");
    setCurrentQuestion(0);
    setAnswers([]);
  }

  // Score calculation
  const scores: Record<PersonalityKey, number> = { bold: 0, sweet: 0, night: 0, health: 0 };
  for (const a of answers) scores[a]++;
  const total = answers.length || 1;
  const percentages = (Object.keys(scores) as PersonalityKey[]).map((key) => ({
    key,
    pct: Math.round((scores[key] / total) * 100),
  }));
  percentages.sort((a, b) => b.pct - a.pct);
  const topKey = percentages[0]?.key ?? "bold";
  const top = PERSONALITIES[topKey];

  // --- INTRO ---
  if (stage === "intro") {
    return (
      <main
        style={{ background: "#FAF6F1", minHeight: "100vh" }}
        className="flex items-center justify-center p-4"
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 32,
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            maxWidth: 480,
            width: "100%",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 56, marginBottom: 12 }}>☕</div>
          <h1
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: 28,
              color: "#1A1A1A",
              marginBottom: 12,
            }}
          >
            What&apos;s Your Coffee Personality?
          </h1>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 16,
              color: "#666",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Answer 6 quick questions and discover your perfect Basecamp Coffee match.
          </p>
          <button
            onClick={handleStart}
            style={{
              background: "#E8440A",
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "14px 40px",
              fontSize: 17,
              fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(232,68,10,0.35)",
            }}
          >
            Start the Quiz →
          </button>
        </div>
      </main>
    );
  }

  // --- QUIZ ---
  if (stage === "quiz") {
    const q = QUESTIONS[currentQuestion];
    const selectedAnswer = answers[currentQuestion] ?? null;
    return (
      <main
        style={{ background: "#FAF6F1", minHeight: "100vh" }}
        className="flex items-center justify-center p-4"
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 32,
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            maxWidth: 540,
            width: "100%",
            padding: "40px 36px",
          }}
        >
          {/* Progress dots */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 24 }}>
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: i <= currentQuestion ? "#E8440A" : "#E5DDD5",
                  transition: "background 0.2s",
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: 8 }}>
            <button
              onClick={handleBack}
              style={{
                position: "absolute",
                left: 0,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#999",
                padding: "4px 0",
              }}
            >
              ← Back
            </button>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#E8440A",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: 0,
              }}
            >
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </p>
          </div>

          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: "#1A1A1A",
              textAlign: "center",
              marginBottom: 28,
              lineHeight: 1.4,
            }}
          >
            {q.text}
          </h2>

          {/* 2x2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {q.answers.map((answer, i) => {
              const isSelected = selectedAnswer === answer.personality;
              return (
              <button
                key={i}
                onClick={() => handleAnswer(answer.personality)}
                className={isSelected ? "answer-btn answer-btn--selected" : "answer-btn"}
              >
                <div style={{ fontSize: 28, marginBottom: 6 }}>{answer.emoji}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", lineHeight: 1.4 }}>
                  {answer.text}
                </div>
              </button>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  // --- RESULTS ---
  return (
    <main
      style={{ background: "#FAF6F1", minHeight: "100vh" }}
      className="flex items-center justify-center p-4"
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 32,
          boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          maxWidth: 520,
          width: "100%",
          padding: "40px 36px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "#E8440A",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 8,
          }}
        >
          Your Coffee Personality
        </p>

        {/* Top result hero */}
        <div
          style={{
            background: "#FAF6F1",
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 24,
            position: "relative",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: 200 }}>
            <Image
              src={top.image}
              alt={top.name}
              fill
              style={{ objectFit: "cover" }}
              onError={() => {}}
            />
          </div>
          <div style={{ padding: "20px 24px 24px" }}>
            <span
              style={{
                display: "inline-block",
                background: top.chipColor,
                color: "#fff",
                borderRadius: 50,
                padding: "4px 14px",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'Nunito', sans-serif",
                marginBottom: 8,
              }}
            >
              {top.drink}
            </span>
            <h2
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: 24,
                color: "#1A1A1A",
                margin: "6px 0 4px",
              }}
            >
              {top.name}
            </h2>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 15,
                color: "#666",
              }}
            >
              {top.tagline}
            </p>
          </div>
        </div>

        {/* All percentages */}
        <div style={{ textAlign: "left", marginBottom: 28 }}>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "#999",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 14,
            }}
          >
            Your Full Breakdown
          </p>
          {percentages.map(({ key, pct }) => {
            const p = PERSONALITIES[key];
            const isTop = key === topKey;
            return (
              <div key={key} style={{ marginBottom: 14 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: isTop ? 800 : 600,
                      fontSize: 14,
                      color: isTop ? "#1A1A1A" : "#555",
                    }}
                  >
                    {p.name} — {p.drink}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: isTop ? p.chipColor : "#999",
                    }}
                  >
                    {pct}%
                  </span>
                </div>
                <div
                  style={{
                    background: "#EDE8E2",
                    borderRadius: 50,
                    height: 8,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      background: p.chipColor,
                      height: "100%",
                      borderRadius: 50,
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleRetake}
          style={{
            background: "transparent",
            border: "2px solid #E8440A",
            color: "#E8440A",
            borderRadius: 50,
            padding: "12px 32px",
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "'Nunito', sans-serif",
            cursor: "pointer",
          }}
        >
          Retake the Quiz
        </button>
      </div>
    </main>
  );
}
