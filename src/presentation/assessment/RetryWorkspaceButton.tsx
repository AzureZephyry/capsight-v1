"use client";

import { useRouter } from "next/navigation";
import { RetryButton } from "./RetryButton";

export function RetryWorkspaceButton() {
  const router = useRouter();
  return <RetryButton onRetry={() => router.refresh()} />;
}
