const MAX_REFRESHES = 10;
const STORAGE_KEY = 'page_refresh_count';
const TIMESTAMP_KEY = 'refresh_timestamp';
const BLOCKED_KEY = 'blocked_until';
const BLOCK_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

interface RefreshData {
  count: number;
  timestamp: number;
}

export function checkRefreshLimit(): { allowed: boolean; message?: string; timeRemaining?: number } {
  const now = Date.now();
  
  // Check if user is currently blocked
  const blockedUntil = localStorage.getItem(BLOCKED_KEY);
  if (blockedUntil) {
    const blockedTime = parseInt(blockedUntil, 10);
    if (now < blockedTime) {
      const timeRemaining = Math.ceil((blockedTime - now) / 1000 / 60); // minutes
      return {
        allowed: false,
        message: `Access temporarily restricted. Please try again in ${timeRemaining} minute(s).`,
        timeRemaining: timeRemaining
      };
    } else {
      // Block period expired, clear it
      localStorage.removeItem(BLOCKED_KEY);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(TIMESTAMP_KEY);
    }
  }

  // Get current refresh count
  const storedData = localStorage.getItem(STORAGE_KEY);
  const storedTimestamp = localStorage.getItem(TIMESTAMP_KEY);
  
  let count = 0;
  const timestamp = storedTimestamp ? parseInt(storedTimestamp, 10) : now;
  
  // If refresh happened within 1 minute, increment count
  // Otherwise, reset the count (legitimate use)
  if (storedData && (now - timestamp) < 60000) {
    count = parseInt(storedData, 10) + 1;
  } else {
    // Reset count if more than 1 minute has passed
    count = 1;
  }

  // Update storage
  localStorage.setItem(STORAGE_KEY, count.toString());
  localStorage.setItem(TIMESTAMP_KEY, now.toString());

  // Check if limit exceeded
  if (count >= MAX_REFRESHES) {
    const blockUntil = now + BLOCK_DURATION;
    localStorage.setItem(BLOCKED_KEY, blockUntil.toString());
    return {
      allowed: false,
      message: 'Too many rapid page refreshes detected. Access has been temporarily restricted for 1 hour.',
      timeRemaining: 60
    };
  }

  return { allowed: true };
}

export function resetRefreshCount(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TIMESTAMP_KEY);
  localStorage.removeItem(BLOCKED_KEY);
}

export function getRefreshCount(): number {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? parseInt(storedData, 10) : 0;
}

