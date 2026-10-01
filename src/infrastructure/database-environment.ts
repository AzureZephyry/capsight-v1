const reportedProblems = new Set<string>();

function unavailable(reason: "missing" | "invalid"): never {
  if (!reportedProblems.has(reason)) {
    // Static diagnostics only: never log a URL or the underlying parser error.
    console.error(
      `CapSight persistence: DATABASE_URL is ${reason}. Set a PostgreSQL connection URL in the process environment or ignored .env.local.`,
    );
    reportedProblems.add(reason);
  }
  throw new Error("Assessment database unavailable");
}

export function getDatabaseUrl(): string {
  const connectionString = process.env.DATABASE_URL?.trim();
  if (!connectionString) return unavailable("missing");

  try {
    const url = new URL(connectionString);
    if (url.protocol === "postgresql:" || url.protocol === "postgres:") {
      return connectionString;
    }
  } catch {
    // The parser's error can contain credentials; discard it.
  }
  return unavailable("invalid");
}
