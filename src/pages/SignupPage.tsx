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

const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long"),
  email: z
    .string()
    .email("Enter a valid email address")
    .toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Include at least one uppercase letter")
    .regex(/[0-9]/, "Include at least one number"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SignupPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    // Simulate async network call (replace with real API when backend exists)
    await new Promise((r) => setTimeout(r, 600));

    // Persist user in Redux (no backend — generate a client-side ID)
    login({
      id: createClientUserId(),
      name: data.name,
      email: data.email,
    });

    navigate("/onboarding");
  };

  return (
    <AuthLayout>
      {/* ── Card ──────────────────────────────────────── */}
      <div className="w-full max-w-[480px] bg-white rounded-[48px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_24px_-4px_rgba(15,23,42,0.06)] p-[40px] flex flex-col gap-6">

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[22px] font-semibold text-[#0B1C30] leading-[38px]">
            Create your account
          </h1>
          <p className="text-[15px] font-normal text-[#64748B] leading-[26px]">
            Start proving what qubits do with interactive
            <br />
            quantum simulation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
          <FormInput
            label="Full name"
            type="text"
            placeholder="Ada Lovelace"
            autoComplete="name"
            {...register("name")}
            error={errors.name}
          />

          <FormInput
            label="Work or personal email"
            type="email"
            placeholder="ada@computing.org"
            autoComplete="email"
            {...register("email")}
            error={errors.email}
          />

          <FormInput
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••"
            autoComplete="new-password"
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

          <div className="pt-2">
            <PrimaryButton type="submit" fullWidth isLoading={isSubmitting}>
              Create account
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#0B1C30] font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>

          <p className="text-center text-[12px] text-[#64748B] leading-[18px] max-w-[340px]">
            By signing up, you agree to the{" "}
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
