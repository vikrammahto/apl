export const APP_STORAGE_KEY = 'mindful:mvp:v1';

export type Mood = 'really-low' | 'low' | 'okay' | 'good' | 'great';

export const moodLabels: Record<Mood, string> = {
  'really-low': 'Really low',
  low: 'Low',
  okay: 'Okay',
  good: 'Good',
  great: 'Great',
};

export const moodScores: Record<Mood, number> = {
  'really-low': 1,
  low: 2,
  okay: 3,
  good: 4,
  great: 5,
};

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
  pattern: '4-7-8';
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
    email: string;
    avatarInitials: string;
    timezone: string;
  };
  journalEntries: JournalEntry[];
  moodCheckIns: JournalEntry[];
  breathingSessions: BreathingSession[];
  preferences: {
    reminderEnabled: boolean;
    reminderTime: string;
    activeTheme: 'light' | 'dark';
  };
};

export function createInitialAppStorage(): AppStorage {
  return {
    version: 1,
    auth: {
      isLoggedIn: false,
      username: '',
      displayName: 'Vikram',
      loggedInAt: null,
    },
    profile: {
      name: 'Vikram',
      email: 'vikram@email.com',
      avatarInitials: 'VK',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    journalEntries: [],
    moodCheckIns: [],
    breathingSessions: [],
    preferences: {
      reminderEnabled: false,
      reminderTime: '19:00',
      activeTheme: 'light',
    },
  };
}

function mergeStorage(parsedStorage: Partial<AppStorage>): AppStorage {
  const initialStorage = createInitialAppStorage();

  return {
    ...initialStorage,
    ...parsedStorage,
    auth: {
      ...initialStorage.auth,
      ...parsedStorage.auth,
    },
    profile: {
      ...initialStorage.profile,
      ...parsedStorage.profile,
    },
    preferences: {
      ...initialStorage.preferences,
      ...parsedStorage.preferences,
    },
    journalEntries:
      parsedStorage.journalEntries ?? initialStorage.journalEntries,
    moodCheckIns: parsedStorage.moodCheckIns ?? initialStorage.moodCheckIns,
    breathingSessions:
      parsedStorage.breathingSessions ?? initialStorage.breathingSessions,
  };
}

export function readAppStorage(): AppStorage {
  if (typeof window === 'undefined') {
    return createInitialAppStorage();
  }

  const rawStorage = window.localStorage.getItem(APP_STORAGE_KEY);

  if (!rawStorage) {
    return createInitialAppStorage();
  }

  try {
    return mergeStorage(JSON.parse(rawStorage));
  } catch {
    return createInitialAppStorage();
  }
}

export function writeAppStorage(storage: AppStorage) {
  window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(storage));
  window.dispatchEvent(new CustomEvent('mindful-storage-change'));
}

export function seedLoggedInUser(username: string) {
  const storage = readAppStorage();
  const displayName = storage.profile.name || 'Vikram';

  writeAppStorage({
    ...storage,
    auth: {
      ...storage.auth,
      isLoggedIn: true,
      username,
      displayName,
      loggedInAt: new Date().toISOString(),
    },
    profile: {
      ...storage.profile,
      name: displayName,
      avatarInitials: getInitials(displayName),
    },
  });
}

export function getInitials(name: string) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  return initials || 'ME';
}

export function formatMinutes(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes === 0) {
    return `${seconds}s`;
  }

  return seconds === 0 ? `${minutes}m` : `${minutes}m ${seconds}s`;
}
