# Lipno App

## Windy forecast setup

The weather pages use Windy Point Forecast server-side through `WINDY_API_KEY`.

### Local development

1. Copy `.env.example` to `.env.local`
2. Add your rotated Windy key:

```env
WINDY_API_KEY=your_new_windy_key
```

3. Start the app with:

```bash
npm run dev
```

If the key is missing or Windy is unavailable, the app falls back to static demo weather data.

### Vercel deployment

Set the same environment variable in Vercel:

1. Project Settings
2. Environment Variables
3. Add `WINDY_API_KEY`
4. Redeploy

The live forecast is exposed internally via `/api/weather`, while the Windy key stays server-side only.
