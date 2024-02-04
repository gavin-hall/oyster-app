import { InlineSnippet } from "@/components/form/domain-configuration";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-[#151416]">
      <Image
        width={512}
        height={512}
        src="/logo-text.svg"
        alt="Platforms on Vercel"
        className="w-48"
      />
      <h1 className="text-white">Public demo soon</h1>
    </div>
  );
}
