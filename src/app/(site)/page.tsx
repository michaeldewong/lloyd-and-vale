import { PageShell } from "@/components/layout/PageShell";
import { pageTitles } from "@/content/navigation";

export default function HomePage() {
  return <PageShell title={pageTitles.home} />;
}
