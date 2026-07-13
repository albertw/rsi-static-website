# Radio Scouting Ireland Website

This is the static website for Radio Scouting Ireland. The site is built using HTML, Tailwind CSS, and vanilla JavaScript.

## Contributing

To contribute to the website you will need a github account. See the GitHub getting startted guide for details at https://docs.github.com/en/get-started

To make changes you fork the repository, make your changes on your computer, push the changes to your repository and generate a pull request.

Once code is pushed to the main brange it is automatically deployed.

## Deployment

The site is deployed with github actions (.github/workflows/deploy.yml). The SUPABASE_ANON_KEY & SUPABASE_URL secrets are set in the deployment so they are not obviously visible in the repository. A malicious user can figure out how to add new scores but at least will not be able to delete rows or drop tables.

## Website

### File Structure

- `index.html` - Main homepage
- `resources.html` - Resources and downloads page
- `certificate.html` - Certificate Printing page
- `highscore.html` - High Score page
- `morsegame.html` - Morse Game
- `template.html` - Template for creating new pages
- `styles.css` - Common CSS styles
- `header-footer.js` - Dynamic header and footer inclusion
- `images/` - Image assets
- `resources/` - Downloadable PDF and other resource files

### Creating New Pages

To create a new page, follow these steps:

1. **Copy the template**:
   Start by copying `template.html` as your new page (e.g., `about.html`)

2. **Update the head section**:
   ```html
   <title>Your Page Title - Radio Scouting Ireland</title>
   <meta name="description" content="Your page description">
   ```

3. **Add your content**:
   Replace the placeholder content in the `<main>` section with your page content.

4. **Update navigation** (if needed):
   If you want to add a new link to the navigation menu, edit `header-footer.js` and update the nav links in both the desktop and mobile navigation sections.


#### Colors
The site uses a custom color scheme defined in Tailwind config:
- `rsi-green`: #1a5d1a - Primary green
- `rsi-light`: #2d8b2d - Lighter green
- `rsi-accent`: #f59e0b - Amber accent color
- `rsi-dark`: #1e293b - Dark slate

To add new pages or modify the navigation, edit `header-footer.js`. This file contains the header and footer HTML templates that are dynamically inserted into every page.

## Morse Game

The morse game is based on Johns original code. It now has an online global highscore table. The databse is handled via supabase.com. 

### Certificate

When a user gets a highscore they are given an ID, they can use this to generate a certificate. They can use the browser print dialog to print it.

We can let the user input the code or give them a specific URL e.g. certificate.html?id=B7SM31


### Local deployment

To deploy the game on a laptop just clone the repo or download the latest zip file https://github.com/albertw/rsi-static-website/archive/refs/heads/main.zip

You will need to create a game-config-local.js configuration file. A template is included game-config-local-template.js

The key things to pay attention to in the config are:

-  event_id: "global" - 'global' defaults to the global leaderboard, you may enter a different identifier for local competitions, e.g. 'jota2026-larchhill'
-  event_name: "Global Leaderboard" - A corresponding meaningful name for the Event

The above will cause the game to only display highscores for this event.

-  supabase_url: "https://xxxxxxxxxxxxxxxxxxxxx.supabase.co",  supabase_key: "sb_publishable_xxxxxxxxxxxxxxxxxxxxxxxxx" - to support uploading to the database these values need to be set to the real values. Contact EI6KO or EI3ISB 

By default if the laptop running the game has an internet connection the scores will be uploaded to supabase. If it does not the scores can be synced when a connection is available.

## Database Configuration

This is the basic Scema for the DB:

```
CREATE TABLE public.events (
  id text NOT NULL,
  name text NOT NULL,
  description text,
  location text,
  start_date timestamp with time zone,
  end_date timestamp with time zone,
  certificate_template text,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT events_pkey PRIMARY KEY (id)
);
CREATE TABLE public.high_scores (
  id text NOT NULL,
  name text NOT NULL,
  score integer NOT NULL,
  game_type text NOT NULL,
  event_id text NOT NULL,
  section text NOT NULL,
  scout_group text NOT NULL,
  country text NOT NULL,
  level integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  client_id text,
  age integer,
  correct_answers bigint,
  total_questions bigint,
  CONSTRAINT high_scores_pkey PRIMARY KEY (id)
);
```

The event id and description are automatically created when a client uses a new event, however the details (description, location etc.) must be manually added in supabase. This design should allow us to get all information for certificates from a single ID.

### Costs

This setup uses the free github pages feature and the free supabase database. Very high traffic may push us beyond the free tier limits.