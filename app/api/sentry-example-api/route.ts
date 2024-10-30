import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  // Throw an error to trigger Sentry's monitoring
  throw new Error("Sentry Example API Route Error");
}
