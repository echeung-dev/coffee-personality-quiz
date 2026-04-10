# Coffee Personality Quiz — Requirements

## Overview
A "What's Your Coffee Personality?" quiz for Basecamp Coffee's loyalty program. Users answer lifestyle questions and get a personality type + coffee recommendation. Results show a full percentage breakdown across all personality types.

---

## Personality → Coffee Pairings

| Personality | Coffee | Tagline | Image |
| --- | --- | --- | --- |
| Bold Adventurer | Double Espresso | "You live for intensity" | public/bold-adventurer.jpg |
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" | public/sweet-enthusiast.jpg |
| Night Owl | Red Eye (coffee + espresso shot) | "Sleep is optional" | public/night-owl.jpg |
| Health Nut | Oat Milk Americano | "Wellness in every sip" | public/health-nut.jpg |

---

## Result Display
**Style B: Show all percentages**
Show the user's full breakdown across all 4 personalities with percentages, e.g.:
- 50% Bold Adventurer → Double Espresso
- 30% Night Owl → Red Eye
- 20% Sweet Enthusiast → Caramel Latte
- 0% Health Nut → Oat Milk Americano

Highlight the top result as their primary personality.

---

## Visual Style
**Style 1: Playful & Colorful (with café warmth)**
- Warm cream/off-white background (#FAF6F1 or similar) — cozy café feel, not loud
- White rounded card (border-radius: 32px) with soft shadow
- Bold, bubbly font (Nunito)
- Colorful accent chips/labels (warm oranges, greens — not neon)
- 2x2 grid layout for answer options
- Emoji icons next to each answer option
- Progress bar with dots at top

---

## Images & Icons
- **Images:** Yes — one photo per personality result (downloaded to public/ folder)
- **Icons:** Yes — emoji icons next to each answer option

---

## Quiz Questions

### Q1: It's Saturday morning. What does your ideal weekend look like?
- 🏔️ Hiking or an outdoor adventure → **Bold Adventurer**
- 🧁 Slow morning, pastry, good music → **Sweet Enthusiast**
- 😴 Sleeping in — it's the weekend → **Night Owl**
- 🧘 Yoga class and a smoothie → **Health Nut**

### Q2: You're picking a vacation. Where are you going?
- 🌋 Volcano trekking in Iceland → **Bold Adventurer**
- 🏝️ A resort with room service → **Sweet Enthusiast**
- 🌃 A city that never sleeps — Tokyo, NYC → **Night Owl**
- 🚴 Cycling through the countryside → **Health Nut**

### Q3: What's your relationship with mornings?
- ⚡ Up early, first one to the trail → **Bold Adventurer**
- ☕ Mornings are for slow rituals → **Sweet Enthusiast**
- 🦉 What mornings? I'm a night person → **Night Owl**
- 🌅 Early riser — workout done by 7am → **Health Nut**

### Q4: Pick your ideal meal out:
- 🌶️ Spicy ramen or bold ethnic cuisine → **Bold Adventurer**
- 🍰 Brunch — the more indulgent the better → **Sweet Enthusiast**
- 🍕 Late-night pizza with friends → **Night Owl**
- 🥗 Farm-to-table, locally sourced → **Health Nut**

### Q5: Your energy at 10pm on a Friday:
- 🎯 Planning tomorrow's adventure → **Bold Adventurer**
- 🛁 Wine, bath, early bed → **Sweet Enthusiast**
- 🎉 Just getting started → **Night Owl**
- 📖 Reading or winding down intentionally → **Health Nut**

### Q6: How do you handle a stressful week?
- 🧗 Push through it with adrenaline → **Bold Adventurer**
- 🍫 Treat yourself — you deserve it → **Sweet Enthusiast**
- 🌙 Stay up late, get it all done → **Night Owl**
- 🏃 Exercise it out → **Health Nut**

---

## Tech Stack
- Next.js (React framework)
- JavaScript
- CSS (inline styles or Tailwind)
- Images stored in public/ folder
