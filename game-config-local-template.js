/**
 * LOCAL GAME CONFIGURATION FILE game-config-local.js
 *
 * This file lets you customize how the Morse game handles scores and leaderboards.
 * Use this for local development, testing, or running on a laptop without internet.
 *
 * IMPORTANT: This file should NOT be committed to git as it may contain credentials.
 *
 * STORAGE MODE OPTIONS:
 * - "auto"    (Recommended) Automatically detects if Supabase is available.
 *             Falls back to local storage if cloud is unreachable.
 *             Best for: laptops, events with unreliable internet, testing
 *
 * - "cloud"   Forces cloud storage only. Game will fail if Supabase is unavailable.
 *             Best for: permanent installations with reliable internet
 *
 * - "local"   Local storage only. Never connects to Supabase.
 *             Best for: offline events, testing, privacy concerns
 *
 * EVENT SYSTEM:
 * The game supports separate leaderboards for different events.
 * - "global"        Shows all scores from all events
 * - "jota-2024"     Example: JOTA 2024 event
 * - "camp-2024"     Example: Summer camp event
 * - Custom IDs: Use lowercase letters, numbers, and hyphens only
 *
 * SUPABASE CREDENTIALS:
 * These are needed for cloud storage mode. Get them from your Supabase project:
 * 1. Go to https://supabase.com
 * 2. Open your project → Settings → API
 * 3. Copy the Project URL and anon/public key
 * 4. Paste them below
 *
 * SECURITY NOTE: The anon key is safe to use here. It only allows reading
 * and inserting scores, thanks to Row Level Security policies.
 */

window.gameConfig = {
  /**
   * STORAGE MODE
   * Options: "auto", "cloud", "local"
   *
   * Examples:
   * storage_mode: "auto"     // Smart detection (recommended for laptops)
   * storage_mode: "cloud"    // Cloud only (for reliable internet)
   * storage_mode: "local"    // Local only (for offline use)
   */
  storage_mode: "auto",

  /**
   * EVENT CONFIGURATION
   * Change these to create separate leaderboards for different events
   *
   * Examples:
   * event_id: "global"                              // All-time leaderboard
   * event_id: "jota-2024"                          // JOTA 2024 event
   * event_id: "summer-camp-2024"                   // Camp event
   * event_id: "troop-123-weekly"                   // Weekly troop competition
   */
  event_id: "global",
  event_name: "Global Leaderboard",

  /**
   * SUPABASE CREDENTIALS
   * Only needed for cloud storage. Leave as-is for auto mode (will use defaults).
   *
   * For custom Supabase projects, replace with your own credentials:
   * supabase_url: "https://your-project.supabase.co"
   * supabase_key: "your-anon-key-here"
   *
   * To get these values:
   * 1. Go to your Supabase project dashboard
   * 2. Navigate to Settings → API
   * 3. Copy the Project URL and anon/public key
   * 4. Replace the values below
   *
   * NOTE: These credentials are safe to use in client-side code because:
   * - No admin privileges (anon key only)
   * - Row Level Security restricts operations
   * - Only allows reading and inserting scores (no delete/update)
   */
  supabase_url: "https://xxxxxxxxxxxxxxxxxxxxx.supabase.co",
  supabase_key: "sb_publishable_xxxxxxxxxxxxxxxxxxxxxxxxx"
};
