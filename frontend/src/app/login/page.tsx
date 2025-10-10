"use client";

import Logo from "@/components/logo";
import { LoginForm } from "@/components/login-form";
import { useEffect, useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen bg-secondary p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo className="h-12 w-auto mx-auto" />
        </div>
        {mounted ? (
          <LoginForm />
        ) : (
          <Card>
            <CardHeader>&nbsp;</CardHeader>
            <div className="p-6 h-[460px]" /> 
          </Card>
        )}
      </div>
    </main>
  );
}
