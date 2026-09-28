import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { nextStep, prevStep, markCompleted, TOTAL_STEPS } from "../store/slices/onboardingSlice";
import { completeOnboarding } from "../store/slices/authSlice";

import OnboardingShell from "../components/onboarding/OnboardingShell";
import Step1_Welcome    from "../components/onboarding/slides/Step1_Welcome";
import Step2_Role       from "../components/onboarding/slides/Step2_Role";
import Step3_Familiarity from "../components/onboarding/slides/Step3_Familiarity";
import Step4_Goals      from "../components/onboarding/slides/Step4_Goals";
import Step5_Summary    from "../components/onboarding/slides/Step5_Summary";

export default function OnboardingPage() {
  const dispatch   = useAppDispatch();
  const navigate   = useNavigate();
  const isAuth     = useAppSelector((s) => s.auth.isAuthenticated);
  const currentStep = useAppSelector((s) => s.onboarding.currentStep);

  // Guard: must be authenticated
  if (!isAuth) return <Navigate to="/login" replace />;

  const isLastStep = currentStep === TOTAL_STEPS - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (isLastStep) {
      dispatch(markCompleted());
      dispatch(completeOnboarding());
      navigate("/dashboard");
    } else {
      dispatch(nextStep());
    }
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  // ── Render the active slide ───────────────────────────────────────────────
  const renderSlide = () => {
    switch (currentStep) {
      case 0: return <Step1_Welcome    onNext={handleNext} />;
      case 1: return <Step2_Role       onNext={handleNext} />;
      case 2: return <Step3_Familiarity onNext={handleNext} />;
      case 3: return <Step4_Goals      onNext={handleNext} />;
      case 4: return <Step5_Summary    onNext={handleNext} />;
      default: return null;
    }
  };

  return (
    <OnboardingShell
      step={currentStep}
      totalSteps={TOTAL_STEPS}
      showBack={!isFirstStep}
      onBack={handleBack}
      isComplete={isLastStep}
    >
      {renderSlide()}
    </OnboardingShell>
  );
}
