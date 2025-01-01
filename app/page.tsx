import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default function Home() {
  return (
    <main className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 to-slate-500">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-bold text-white",
          font.className
          )}>
          🔐Auth
        </h1>
        <p className="text-xl font-semibold text-white">
          An authentication application built with Next.js and NextAuth
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg" className="font-semibold">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
