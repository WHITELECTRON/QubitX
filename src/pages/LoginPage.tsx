import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import FormInput from "../components/ui/FormInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import SocialButton from "../components/ui/SocialButton";

import { GoogleIcon, GitHubIcon, EyeIcon, EyeOffIcon } from "../components/ui/icons";
import { useAuth } from "../hooks/useAuth";
import { createClientUserId } from "../utils/clientUserId";

// ─── Validation Schema ────────────────────────────────────────────────────────

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address").toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, finishOnboarding } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setAuthError(null);

    // Simulate async auth (replace with API call when backend exists)
    await new Promise((r) => setTimeout(r, 600));

    // Mock: any valid-format credentials succeed
    login({
      id: createClientUserId(),
      name: data.email.split("@")[0],
      email: data.email,
    });

    // Mark onboarding complete for returning user & navigate straight to dashboard
    finishOnboarding();
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      {/* ── Card ──────────────────────────────────────── */}
      <div className="w-full max-w-[480px] bg-white rounded-[48px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_24px_-4px_rgba(15,23,42,0.06)] p-[40px] flex flex-col gap-6">

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[22px] font-semibold text-[#0B1C30] leading-[38px]">
            Welcome back
          </h1>
          <p className="text-[15px] font-normal text-[#64748B] leading-[26px]">
            Continue your quantum learning journey.
          </p>
        </div>

        {/* Global error */}
        {authError && (
          <div className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {authError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
          <FormInput
            label="Email address"
            type="email"
            placeholder="ada@computing.org"
            autoComplete="email"
            {...register("email")}
            error={errors.email}
          />

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-normal text-[#334155] tracking-[0.35px]">
                Password
              </span>
              <a
                href="#"
                className="text-[12px] font-medium text-[#64748B] hover:text-[#0B1C30] transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <FormInput
              label=""
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              autoComplete="current-password"
              {...register("password")}
              error={errors.password}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-[#64748B] hover:text-[#0B1C30] transition-colors p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              }
            />
          </div>

          <div className="pt-2">
            <PrimaryButton type="submit" fullWidth isLoading={isSubmitting}>
              Log in
            </PrimaryButton>
          </div>
        </form>

        {/* Divider */}
        <div className="relative flex items-center">
          <div className="flex-1 h-px bg-[#E2E8F0]" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-[11px] font-semibold text-[#64748B] tracking-[0.59px]">
            or
          </span>
        </div>

        {/* OAuth */}
        <div className="flex gap-3">
          <SocialButton icon={<GoogleIcon />} label="Google" />
          <SocialButton icon={<GitHubIcon />} label="GitHub" />
        </div>

        {/* Footer links */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-[13px] text-[#64748B] leading-[27px] tracking-[0.09px]">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#0B1C30] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>

          <p className="text-center text-[12px] text-[#64748B] leading-[18px] max-w-[340px]">
            By continuing, you agree to the{" "}
            <a href="#" className="text-[#334155] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#334155] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
