import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9b407968dd867c7010d478d1d2717cde@o4509442118975488.ingest.de.sentry.io/4509442120876112",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});