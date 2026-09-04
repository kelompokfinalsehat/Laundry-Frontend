import { BypassDetailContent } from "@/components/back-office/bypass/BypassDetailContent";

type Props = {
  params: Promise<{
    bypassId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { bypassId } = await params;

  return <BypassDetailContent bypassId={bypassId} />;
}
