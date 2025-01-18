# Park Appeal UK

Park Appeal UK helps drivers understand the differences between official “penalty charge notices” (PCNs) and private parking tickets under UK law, gather information about their specific situation, and determine whether they have grounds for appeal. Users can generate a customized appeal letter and optionally upload photos as evidence.

Below is a list of user journeys you can explore.

1. [Introduction & Explanation](docs/journeys/introduction.md) - Learn about UK parking fines & your rights  
2. [Submit an Appeal](docs/journeys/submit-appeal.md) - Provide detailed personal, issuer, and ticket information  
3. [Generate Appeal Letter](docs/journeys/generate-appeal-letter.md) - Create a more detailed Citizens Advice–style letter

This app does not require any paid subscriptions to use.

## External Services Used
- [Sentry](https://sentry.io): Error logging and monitoring
- [Progressier](https://progressier.app): PWA support
- [Umami](https://umami.is/): Web analytics

## Environment Variables
You must provide the following environment variables in a `.env` file:

- COCKROACH_DB_URL
- NPM_TOKEN
- VITE_PUBLIC_APP_ID
- VITE_PUBLIC_APP_ENV
- VITE_PUBLIC_SENTRY_DSN
- VITE_PUBLIC_UMAMI_WEBSITE_ID
