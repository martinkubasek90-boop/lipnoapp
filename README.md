# Lipno App

## Mobile app foundation

The current codebase is a mobile-first Next.js app with PWA support for Android and iOS:

- `/manifest.webmanifest` is generated from `app/manifest.ts`
- `/sw.js` caches the app shell and serves `/offline` when navigation fails
- iOS standalone metadata and safe-area viewport handling are configured in `app/layout.tsx`
- `android/` and `ios/` are Capacitor native shells for app-store builds

### Local mobile testing

```bash
npm run build
npm run start
```

Open the local URL on a phone or emulator. On Android/Chrome use "Install app". On iOS/Safari use "Add to Home Screen".

### Native packaging

Because this app uses server-side Next.js routes, Android/iOS packaging wraps the deployed web app instead of static-exporting it. The default native shell URL is `https://lipnoapp.vercel.app` and can be overridden:

```bash
CAPACITOR_SERVER_URL=https://your-production-domain.example npm run native:sync
```

Open native projects:

```bash
npm run native:android
npm run native:ios
```

Build Android debug APK:

```bash
npm run android:debug
```

The debug APK is written to:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Prepare Android release signing:

```bash
cp android/keystore.properties.example android/keystore.properties
```

Then edit `android/keystore.properties` with the real keystore path and passwords. Keep the real `keystore.properties` and `.jks` files out of git.

Build Android release bundle:

```bash
npm run android:bundle
```

Build iOS simulator app:

```bash
npm run ios:sim:build
```

The backend routes stay hosted on Vercel, including `/api/weather`, `/api/chat`, and `/api/service-status`.

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
