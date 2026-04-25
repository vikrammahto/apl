# Focus: Mental Health & Wellbeing App

## 1. Product Vision
- **Purpose**: Provide a frictionless, safe space for quick emotional grounding and reflection.
- **Target Audience**: Stressed professionals, students, and anyone feeling overwhelmed needing immediate calm.
- **Core Problem**: People often lack the time, energy, or tools to process overwhelming emotions in the moment.

## 2. MVP Scope (Hackathon Focus - 1 Hour)
We are optimizing for speed. Authenticated flows and complex databases are out. LocalStorage is our database for now.
- Emoji-based mood check-in (Fast input)
- Simple text journaling (Venting space)
- Guided 4-7-8 breathing exercise (Immediate grounding)
- Clean, calming, distraction-free UI

## 3. Feature Breakdown (Post-MVP)
- **Core**: User authentication (Supabase/Firebase), historical mood charts, cloud sync.
- **AI Features**: Sentiment analysis on journal entries, personalized daily affirmations based on mood.
- **Gamification**: Streaks for consecutive check-ins, unlockable breathing routines (e.g., box breathing).
- **Personalization**: Custom themes, customizable push notification reminders.

## 4. User Flow
1. **Landing / Home**: Greeting based on time of day + primary CTA: "How are you feeling right now?"
2. **Mood Selection**: Click an emoji -> immediately opens a brief journal prompt ("Want to elaborate?").
3. **Action Choice**: User can either save the entry or jump into a 1-minute breathing exercise.
4. **Dashboard**: View today's entry and access the breathing exercise directly.

## 5. UI Screens List
- **Home/Dashboard**: Mood selector + recent entry preview.
- **Journal Modal/Screen**: Text area for elaboration.
- **Breathing Exercise**: Full-screen, simple expanding/contracting circle animation.

## 6. Tech Architecture
- **Frontend**: Next.js (App Router), React, TailwindCSS.
- **Backend (MVP)**: None. Use `localStorage` to persist data.
- **State Management**: React `useState` and `useEffect` for local storage sync.
- **Hosting**: Vercel (instant deployment).

## 7. Folder Structure (Next.js App Router)
```text
/app
  /breathing      # Breathing exercise route (page.tsx)
  /journal        # Optional separate route or handle via Next.js parallel routes/modals
  layout.tsx      # Global layout, fonts, neutral background
  page.tsx        # Home dashboard
/components
  /ui             # Reusable atomic UI (Button, Card, Input)
  MoodSelector.tsx
  BreathingCircle.tsx
  JournalInput.tsx
/lib
  storage.ts      # Helper functions for localStorage
  utils.ts        # Tailwind `cn` utility (if using shadcn concepts)
```

## 8. Component Breakdown
- **`Button`**: Soft, rounded edges, subtle hover states.
- **`Card`**: Glassmorphism or very soft drop shadows on off-white backgrounds.
- **`MoodSelector`**: Row of 5 emojis. Scales up on hover.
- **`JournalInput`**: Auto-resizing textarea with no harsh borders.
- **`BreathingCircle`**: CSS-animated circle using Tailwind `animate-pulse` or custom keyframes.

## 9. Data Model (localStorage MVP)

Use one versioned localStorage key so the MVP can migrate cleanly later:

- **Key**: `mindful:mvp:v1`
- **Shape**: one JSON object containing auth, profile, journal, mood, breathing, and preferences.
- **Auth rule**: dummy login accepts `username` / `password`, then stores `auth.isLoggedIn = true`.
- **Profile seed**: use `Vikram` as the display name.

```ts
type Mood = "really-low" | "low" | "okay" | "good" | "great";

type JournalEntry = {
  id: string;
  createdAt: string;
  updatedAt: string;
  mood: Mood;
  desiredMood?: Mood;
  note: string;
  tags: string[];
};

type BreathingSession = {
  id: string;
  completedAt: string;
  pattern: "4-7-8";
  durationSeconds: number;
};

type AppStorage = {
  version: 1;
  auth: {
    isLoggedIn: boolean;
    username: string;
    displayName: "Vikram";
    loggedInAt: string | null;
  };
  profile: {
    name: "Vikram";
    avatarInitials: "VK";
    timezone: string;
  };
  journalEntries: JournalEntry[];
  moodCheckIns: JournalEntry[];
  breathingSessions: BreathingSession[];
  preferences: {
    reminderEnabled: boolean;
    reminderTime: string; // HH:mm
    activeTheme: "calm";
  };
}
```

## 10. Microcopy Guidelines
- **Tone**: Calm, supportive, non-judgmental, brief.
- **Examples**:
  - *Instead of "Submit"*: "Save note" or "Let it go"
  - *Instead of "Error"*: "Take a deep breath, let's try that again."
  - *Greeting*: "Take a moment for yourself."
  - *Breathing*: "Inhale... Hold... Exhale..."

## 11. Design Guidelines
- **Colors**:
  - Background: Soft cream (`#F9FAFB`) or very pale sage green (`#F3F4F6`).
  - Text: Deep charcoal (`#374151`) instead of harsh black.
  - Accents: Soft blues, lavenders, and muted greens. No alarming reds.
- **Typography**: `Inter`, `Outfit`, or system fonts. Sans-serif, rounded if possible. Large line heights (e.g., `leading-relaxed`).
- **Spacing**: Generous padding (`p-8`, `p-12`). Let the UI breathe. White space is a feature.
- **UX**: Minimum clicks. No complex forms.

## 12. Execution Plan (1 Hour Breakdown)
- **0–10 min: Setup**
  - `npx create-next-app@latest .`
  - Clean up boilerplate. Set up global layout and fonts.
- **10–30 min: Core UI (Home & Mood)**
  - Build `MoodSelector`.
  - Build `JournalInput`.
  - Wire them to local state.
- **30–50 min: Features & Logic**
  - Implement `localStorage` saving mechanism.
  - Build `BreathingCircle` animation screen.
- **50–60 min: Polish**
  - Refine Tailwind colors.
  - Add soft transitions (`transition-all duration-300`).
  - Vercel deploy.

## 13. Future Roadmap
1. **Cloud Sync**: Migrate `localStorage` to Supabase. Introduce Google/Apple Auth.
2. **Analytics**: Add weekly/monthly mood trend visualization.
3. **AI Therapist**: Opt-in feature where an AI reads the journal entry and offers a CBT-based reframing suggestion.
4. **Habit Tracking**: Track consecutive logging days to build a mindfulness habit.
5. **Community**: Opt-in anonymous sharing stream ("You are not alone").
