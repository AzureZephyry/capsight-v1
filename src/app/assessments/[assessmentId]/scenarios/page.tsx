import { AssessmentRoute } from "../AssessmentRoute";

export const dynamic = "force-dynamic";

export default async function ScenariosPage({
  params,
}: {
  params: Promise<{ assessmentId: string }>;
}) {
  const { assessmentId } = await params;
  return <AssessmentRoute assessmentId={assessmentId} section="scenarios" />;
}
