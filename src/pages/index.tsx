import { PageLayout } from "@/components";
import Button1 from "@/components/reusable/buttons/Button1";

export default function Home() {
  return (
    <PageLayout showHeader>
      <Dummy />
    </PageLayout>
  );
}

const Dummy = () => {
  return (
    <div className="w-full ">
      <div className="h-screen bg-[var(--Primary)]"></div>
      <div className="h-screen bg-[var(--Secondary)]"></div>
    </div>
  );
};
