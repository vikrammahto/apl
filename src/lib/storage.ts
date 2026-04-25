export const APP_STORAGE_KEY = "mindful:mvp:v1";

export type Mood = "really-low" | "low" | "okay" | "good" | "great";

export type JournalEntry = {
  id: string;
  createdAt: string;
  updatedAt: string;
  mood: Mood;
  desiredMood?: Mood;
  note: string;
  tags: string[];
};

export type BreathingSession = {
  id: string;
  completedAt: string;
  pattern: "4-7-8";
  durationSeconds: number;
};

export type AppStorage = {
  version: 1;
  auth: {
    isLoggedIn: boolean;
    username: string;
    displayName: string;
    loggedInAt: string | null;
  };
  profile: {
    name: string;
    avatarInitials: string;
    timezone: string;
  };
  journalEntries: JournalEntry[];
  moodCheckIns: JournalEntry[];
  breathingSessions: BreathingSession[];
  preferences: {
    reminderEnabled: boolean;
    reminderTime: string;
    activeTheme: "calm";
  };
};

export function createInitialAppStorage(): AppStorage {
  return {
    version: 1,
    auth: {
      isLoggedIn: false,
      username: "",
      displayName: "Vikram",
      loggedInAt: null,
    },
    profile: {
      name: "Vikram",
      avatarInitials: "VK",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    journalEntries: [],
    moodCheckIns: [],
    breathingSessions: [],
    preferences: {
      reminderEnabled: false,
      reminderTime: "09:00",
      activeTheme: "calm",
    },
  };
}

export function readAppStorage(): AppStorage {
  if (typeof window === "undefined") {
    return createInitialAppStorage();
  }

  const rawStorage = window.localStorage.getItem(APP_STORAGE_KEY);

  if (!rawStorage) {
    return createInitialAppStorage();
  }

  try {
    return {
      ...createInitialAppStorage(),
      ...JSON.parse(rawStorage),
    };
  } catch {
    return createInitialAppStorage();
  }
}

export function writeAppStorage(storage: AppStorage) {
  window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(storage));
}

export function seedLoggedInUser(username: string) {
  const storage = readAppStorage();

  writeAppStorage({
    ...storage,
    auth: {
      ...storage.auth,
      isLoggedIn: true,
      username,
      displayName: "Vikram",
      loggedInAt: new Date().toISOString(),
    },
    profile: {
      ...storage.profile,
      name: "Vikram",
      avatarInitials: "VK",
    },
  });
}
