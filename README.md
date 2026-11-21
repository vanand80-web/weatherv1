# Atmos — Weather Forecast & Air Quality

Next.js + TypeScript + Tailwind app using Open-Meteo public APIs.

## Features
- Search for cities and locations; optional browser geolocation
- 7-day forecast: high/low, weather code, rain probability, rainfall, wind and UV
- Air quality: US AQI, European AQI, PM2.5, PM10 and ozone
- Best 3 outdoor days ranked with an explainable 0–100 heuristic
- Select a day for a scientist-style conditions readout
- Celsius/Fahrenheit toggle
- Automatic browser refresh every 15 minutes and manual refresh

## Free API endpoints
- Geocoding: https://geocoding-api.open-meteo.com/v1/search
- Weather: https://api.open-meteo.com/v1/forecast
- Air quality: https://air-quality-api.open-meteo.com/v1/air-quality

The included public endpoints do not require an API key for non-commercial use. Review Open-Meteo's latest terms, attribution requirements and usage limits before commercial/public production use.

## Local setup
Node.js 20+ recommended.

```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000. No environment variables are required.

## GitHub
Create an empty repository, extract this ZIP and run:

```bash
git init
git add .
git commit -m "Initial Atmos weather app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Vercel deployment
1. Sign in at https://vercel.com.
2. Add New → Project → import your GitHub repository.
3. Keep the Next.js framework preset.
4. No environment variables are required for this version.
5. Deploy.

## Refresh behavior
The open browser tab fetches updated data every 15 minutes. This is client-side polling and does not require a Vercel Cron job. If the tab is closed or suspended, it refreshes when active again.

## AQI interpretation
Main AQI is the US AQI scale; European AQI is shown separately. Daily AQI and pollutant numbers are averages of hourly forecast values, not an instantaneous monitor reading. The air-quality endpoint provides modelled forecast estimates, not ground-station observations.

## Outdoor-day score
Starts at 100 and subtracts points for rain probability, high winds, elevated US AQI, high UV and hot maximum temperatures. Deductions are shown with the recommendation. It is a lightweight heuristic, not a validated forecast model, medical advice, or a guarantee of safe conditions. Check official local alerts.

## Important
This starter is intended for non-commercial use of the free Open-Meteo API. Check current provider terms before commercial use or high-volume traffic.
