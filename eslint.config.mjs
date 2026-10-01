import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const databasePackages = "(?:@prisma/[^/]+|prisma|pg|postgres|mysql2)(?:/|$)";
const frameworkPackages = "(?:react|react-dom|next)(?:/|$)";
const domainIOPackages =
  "(?:node:)?(?:fs|http|http2|https|net|tls|dns|child_process|worker_threads)(?:/|$)";

// Built-in ESLint rules cover packages, including literal dynamic imports and
// require calls. Resolved path zones below cover both aliases and relative paths.
function restrictedPackages(regex, message) {
  return {
    "no-restricted-imports": [
      "error",
      { patterns: [{ regex: `^(?:${regex})`, message }] },
    ],
    "no-restricted-syntax": [
      "error",
      {
        selector: `ImportExpression[source.value=/^(?:${regex.replaceAll("/", "\\/")})/]`,
        message,
      },
      {
        selector: `CallExpression[callee.name='require'][arguments.0.value=/^(?:${regex.replaceAll("/", "\\/")})/]`,
        message,
      },
    ],
  };
}

const domainPackages = restrictedPackages(
  `${databasePackages}|${frameworkPackages}|${domainIOPackages}`,
  "Domain and the future Capacity Engine must stay independent of frameworks, database access, and I/O.",
);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/**/*.{ts,tsx,mts}"],
    rules: {
      "import/no-restricted-paths": [
        "error",
        {
          basePath: import.meta.dirname,
          zones: [
            {
              target: "./src/domain",
              from: [
                "./src/app",
                "./src/application",
                "./src/presentation",
                "./src/infrastructure",
                "./src/generated",
              ],
              message: "Domain must stay independent of outer layers.",
            },
            {
              target: "./src/application",
              from: [
                "./src/app",
                "./src/presentation",
                "./src/infrastructure",
                "./src/generated",
              ],
              message: "Application uses Domain and injected store contracts.",
            },
            {
              target: "./src/presentation",
              from: ["./src/infrastructure", "./src/generated"],
              message: "Presentation must not access persistence adapters.",
            },
            {
              target: "./src/infrastructure",
              from: ["./src/app", "./src/presentation"],
              message:
                "Infrastructure must not depend on UI or route adapters.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/domain/**/*.{ts,tsx,mts}"],
    rules: {
      ...domainPackages,
      "no-restricted-syntax": [
        ...domainPackages["no-restricted-syntax"],
        {
          selector: "JSXElement",
          message: "Domain must remain plain TypeScript.",
        },
        {
          selector: "JSXFragment",
          message: "Domain must remain plain TypeScript.",
        },
      ],
      "no-restricted-globals": [
        "error",
        {
          checkGlobalObject: true,
          globals: [
            "window",
            "document",
            "navigator",
            "localStorage",
            "sessionStorage",
            "indexedDB",
            "fetch",
            "XMLHttpRequest",
            "WebSocket",
            "EventSource",
            "Worker",
          ],
        },
      ],
    },
  },
  {
    files: ["src/application/**/*.{ts,tsx,mts}"],
    rules: restrictedPackages(
      `${databasePackages}|${frameworkPackages}`,
      "Application must use Domain and injected contracts, not framework or database implementations.",
    ),
  },
  {
    files: ["src/presentation/**/*.{ts,tsx,mts}"],
    rules: restrictedPackages(
      databasePackages,
      "Presentation must not access Prisma or database drivers.",
    ),
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
