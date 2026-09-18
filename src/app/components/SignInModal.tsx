import { Lock, Shield, Eye, EyeOff, AlertCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
}

interface SignUpErrors {
  name?: string;
  email?: string;
  role?: string;
  reason?: string;
  password?: string;
  confirmPassword?: string;
}

interface SignInErrors {
  email?: string;
  password?: string;
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p
      id={id}
      role="alert"
      aria-live="polite"
      className="flex items-center gap-1.5 mt-1.5 text-xs text-[#d4183d] animate-in fade-in slide-in-from-top-1 duration-150"
    >
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

const ROLES = [
  { value: "qui-tam-attorney", label: "Qui tam attorney" },
  { value: "paralegal", label: "Paralegal / legal staff" },
  { value: "whistleblower", label: "Whistleblower / relator" },
  { value: "compliance-officer", label: "Compliance officer" },
  { value: "investigator", label: "Investigator / journalist" },
  { value: "other", label: "Other" },
];

const REASONS = [
  { value: "build-case", label: "I have a case I want to build" },
  { value: "evaluate-case", label: "I want to evaluate a potential case" },
  { value: "attorney-client", label: "I'm researching on behalf of a client" },
  { value: "due-diligence", label: "Due diligence / compliance review" },
  { value: "research", label: "Academic or industry research" },
];

function inputClass(touched: boolean, error?: string) {
  return `w-full h-11 px-4 border rounded-lg outline-none transition-all text-[#111827] placeholder:text-[#9ca3af] bg-white ${
    touched && error
      ? "border-2 border-[#d4183d] focus:ring-2 focus:ring-[#d4183d]/30 focus:border-[#d4183d]"
      : "border border-[#e5e7eb] focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
  }`;
}

function selectClass(touched: boolean, error?: string) {
  return `w-full h-11 px-4 border rounded-lg outline-none transition-all text-[#111827] bg-white appearance-none cursor-pointer ${
    touched && error
      ? "border-2 border-[#d4183d] focus:ring-2 focus:ring-[#d4183d]/30 focus:border-[#d4183d]"
      : "border border-[#e5e7eb] focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
  }`;
}

// ─── Sign-in form ───────────────────────────────────────────────────────────

function SignInForm({ onSignIn, onClose, onSwitch }: {
  onSignIn: () => void;
  onClose: () => void;
  onSwitch: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<SignInErrors>({});

  const validate = (e = email, p = password): SignInErrors => ({
    email: !e ? "Email address is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? "Enter a valid email address" : undefined,
    password: !p ? "Password is required" : undefined,
  });

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    const errs = validate();
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    onSignIn();
    onClose();
    toast.success("Signed in successfully", { description: "Welcome back to Claimora" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 pt-2" noValidate>
      <div>
        <label htmlFor="si-email" className="block text-sm font-medium text-[#374151] mb-1.5">
          Email address
        </label>
        <input
          type="email"
          id="si-email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (touched.email) setErrors(validate(e.target.value, password)); }}
          onBlur={() => handleBlur("email")}
          className={inputClass(!!touched.email, errors.email)}
          placeholder="you@example.com"
          aria-describedby={errors.email ? "si-email-error" : undefined}
          aria-invalid={!!touched.email && !!errors.email}
          autoComplete="email"
        />
        {touched.email && errors.email && <FieldError id="si-email-error" message={errors.email} />}
      </div>

      <div>
        <label htmlFor="si-password" className="block text-sm font-medium text-[#374151] mb-1.5">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="si-password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); if (touched.password) setErrors(validate(email, e.target.value)); }}
            onBlur={() => handleBlur("password")}
            className={`${inputClass(!!touched.password, errors.password)} pr-12`}
            placeholder="Enter your password"
            aria-describedby={errors.password ? "si-password-error" : undefined}
            aria-invalid={!!touched.password && !!errors.password}
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {touched.password && errors.password && <FieldError id="si-password-error" message={errors.password} />}
      </div>

      <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl p-4 space-y-3">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[#111827]">End-to-end encryption</p>
            <p className="text-xs text-[#6b7280] mt-0.5">Your case data is encrypted at rest and in transit</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[#111827]">Attorney-client privilege</p>
            <p className="text-xs text-[#6b7280] mt-0.5">Your information is protected under legal confidentiality</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-lg font-semibold transition-all shadow-sm hover:shadow-md"
        style={{ minHeight: 48 }}
      >
        Sign in
      </button>

      <p className="text-center text-sm text-[#6b7280]">
        New to Claimora?{" "}
        <button type="button" onClick={onSwitch} className="text-[#0d9488] hover:text-[#0f766e] font-semibold transition-colors">
          Create a free account
        </button>
      </p>
    </form>
  );
}

// ─── Sign-up form ───────────────────────────────────────────────────────────

function SignUpForm({ onSignIn, onClose, onSwitch }: {
  onSignIn: () => void;
  onClose: () => void;
  onSwitch: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [reason, setReason] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<SignUpErrors>({});

  const validate = (fields = { name, email, role, reason, password, confirmPassword }): SignUpErrors => ({
    name: !fields.name.trim() ? "Full name is required" : undefined,
    email: !fields.email ? "Email address is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ? "Enter a valid email address" : undefined,
    role: !fields.role ? "Please select your role" : undefined,
    reason: !fields.reason ? "Please tell us why you're here" : undefined,
    password: !fields.password ? "Password is required" : fields.password.length < 8 ? "Password must be at least 8 characters" : undefined,
    confirmPassword: !fields.confirmPassword ? "Please confirm your password" : fields.password !== fields.confirmPassword ? "Passwords do not match" : undefined,
  });

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (field: string, value: string) => {
    const updated = { name, email, role, reason, password, confirmPassword, [field]: value };
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "role") setRole(value);
    if (field === "reason") setReason(value);
    if (field === "password") setPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);
    if (touched[field]) setErrors(validate(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, role: true, reason: true, password: true, confirmPassword: true };
    setTouched(allTouched);
    const errs = validate();
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    localStorage.setItem("claimora_user", JSON.stringify({ name, email, role, reason }));
    localStorage.setItem("claimora_onboarding_needed", "true");
    window.dispatchEvent(new CustomEvent("claimora-user-changed"));
    onSignIn();
    onClose();
    toast.success("Account created", { description: `Welcome to Claimora, ${name.trim().split(" ")[0]}!` });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-2" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="su-name" className="block text-sm font-medium text-[#374151] mb-1.5">
          Full name
        </label>
        <input
          type="text"
          id="su-name"
          value={name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          className={inputClass(!!touched.name, errors.name)}
          placeholder="Jane Smith"
          aria-describedby={errors.name ? "su-name-error" : undefined}
          aria-invalid={!!touched.name && !!errors.name}
          autoComplete="name"
        />
        {touched.name && errors.name && <FieldError id="su-name-error" message={errors.name} />}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="su-email" className="block text-sm font-medium text-[#374151] mb-1.5">
          Work email
        </label>
        <input
          type="email"
          id="su-email"
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          className={inputClass(!!touched.email, errors.email)}
          placeholder="you@lawfirm.com"
          aria-describedby={errors.email ? "su-email-error" : undefined}
          aria-invalid={!!touched.email && !!errors.email}
          autoComplete="email"
        />
        {touched.email && errors.email && <FieldError id="su-email-error" message={errors.email} />}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="su-role" className="block text-sm font-medium text-[#374151] mb-1.5">
          What best describes your role?
        </label>
        <div className="relative">
          <select
            id="su-role"
            value={role}
            onChange={(e) => handleChange("role", e.target.value)}
            onBlur={() => handleBlur("role")}
            className={`${selectClass(!!touched.role, errors.role)} ${!role ? "text-[#9ca3af]" : "text-[#111827]"}`}
            aria-describedby={errors.role ? "su-role-error" : undefined}
            aria-invalid={!!touched.role && !!errors.role}
          >
            <option value="" disabled>Select your role</option>
            {ROLES.map(r => (
              <option key={r.value} value={r.value} className="text-[#111827]">{r.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] pointer-events-none" aria-hidden="true" />
        </div>
        {touched.role && errors.role && <FieldError id="su-role-error" message={errors.role} />}
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="su-reason" className="block text-sm font-medium text-[#374151] mb-1.5">
          Why are you using Claimora?
        </label>
        <div className="relative">
          <select
            id="su-reason"
            value={reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            onBlur={() => handleBlur("reason")}
            className={`${selectClass(!!touched.reason, errors.reason)} ${!reason ? "text-[#9ca3af]" : "text-[#111827]"}`}
            aria-describedby={errors.reason ? "su-reason-error" : undefined}
            aria-invalid={!!touched.reason && !!errors.reason}
          >
            <option value="" disabled>Select your primary goal</option>
            {REASONS.map(r => (
              <option key={r.value} value={r.value} className="text-[#111827]">{r.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] pointer-events-none" aria-hidden="true" />
        </div>
        {touched.reason && errors.reason && <FieldError id="su-reason-error" message={errors.reason} />}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="su-password" className="block text-sm font-medium text-[#374151] mb-1.5">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="su-password"
            value={password}
            onChange={(e) => handleChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            className={`${inputClass(!!touched.password, errors.password)} pr-12`}
            placeholder="At least 8 characters"
            aria-describedby={errors.password ? "su-password-error" : undefined}
            aria-invalid={!!touched.password && !!errors.password}
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {touched.password && errors.password && <FieldError id="su-password-error" message={errors.password} />}
      </div>

      {/* Confirm password */}
      <div>
        <label htmlFor="su-confirm" className="block text-sm font-medium text-[#374151] mb-1.5">
          Confirm password
        </label>
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            id="su-confirm"
            value={confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            onBlur={() => handleBlur("confirmPassword")}
            className={`${inputClass(!!touched.confirmPassword, errors.confirmPassword)} pr-12`}
            placeholder="Repeat your password"
            aria-describedby={errors.confirmPassword ? "su-confirm-error" : undefined}
            aria-invalid={!!touched.confirmPassword && !!errors.confirmPassword}
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
          >
            {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {touched.confirmPassword && errors.confirmPassword && <FieldError id="su-confirm-error" message={errors.confirmPassword} />}
      </div>

      <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl p-4 space-y-3">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[#111827]">End-to-end encryption</p>
            <p className="text-xs text-[#6b7280] mt-0.5">Your case data is encrypted at rest and in transit</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[#111827]">Attorney-client privilege</p>
            <p className="text-xs text-[#6b7280] mt-0.5">Your information is protected under legal confidentiality</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-lg font-semibold transition-all shadow-sm hover:shadow-md"
        style={{ minHeight: 48 }}
      >
        Create account
      </button>

      <p className="text-center text-sm text-[#6b7280]">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch} className="text-[#0d9488] hover:text-[#0f766e] font-semibold transition-colors">
          Sign in
        </button>
      </p>
    </form>
  );
}

// ─── Modal shell ─────────────────────────────────────────────────────────────

export function SignInModal({ isOpen, onClose, onSignIn }: SignInModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => setIsSignUp(v => !v);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#111827] tracking-tight">
            {isSignUp ? "Create your account" : "Welcome back"}
          </DialogTitle>
          <p className="text-sm text-[#6b7280] mt-1">
            {isSignUp
              ? "Tell us a bit about yourself to get started"
              : "Sign in to continue your case analysis"}
          </p>
        </DialogHeader>

        {isSignUp
          ? <SignUpForm onSignIn={onSignIn} onClose={onClose} onSwitch={handleSwitch} />
          : <SignInForm onSignIn={onSignIn} onClose={onClose} onSwitch={handleSwitch} />}
      </DialogContent>
    </Dialog>
  );
}
