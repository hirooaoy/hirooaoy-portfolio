import Link from "next/link";

export default function ZenniOpticals() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-16 hover:opacity-70 transition-opacity">
          ← Back
        </Link>

        {/* Project Content */}
        <h1 className="text-4xl font-normal mb-8">Zenni Opticals</h1>
        <p className="text-xl mb-16 opacity-70">I built process that got our app to #1 glasses app.</p>

        {/* Add your project details here */}
        <div className="space-y-8">
          <p>Project details coming soon...</p>
        </div>
      </div>
    </div>
  );
}
