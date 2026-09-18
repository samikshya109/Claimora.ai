import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { SignInModal } from "./SignInModal";
import { Breadcrumbs } from "./Breadcrumbs";
import { ProfileDropdown } from "./ProfileDropdown";
import claimoraLogo from "figma:asset/c0a320565bff3ba8b0fb7e5dd61bba975bfa3ff1.png";

interface ClaimoraUser {
  name: string;
  email: string;
  role: string;
  reason: string;
}

function readUser(): ClaimoraUser | null {
  try {
    const raw = localStorage.getItem("claimora_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function Header() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignedIn,        setIsSignedIn]        = useState(false);
  const [user,              setUser]              = useState<ClaimoraUser | null>(null);

  const refresh = () => {
    const signedIn = localStorage.getItem("isSignedIn") === "true";
    setIsSignedIn(signedIn);
    setUser(signedIn ? readUser() : null);
  };

  useEffect(() => {
    refresh();
    window.addEventListener("claimora-user-changed", refresh);
    return () => window.removeEventListener("claimora-user-changed", refresh);
  }, []);

  const handleSignIn = () => {
    localStorage.setItem("isSignedIn", "true");
    refresh();
  };

  const handleSignOut = () => {
    localStorage.removeItem("isSignedIn");
    refresh();
  };

  const navigationMap: Record<string, string> = {
    "/upload":  "/",
    "/analyze": "/upload",
    "/results": "/analyze",
    "/heatmap": "/results",
    "/gaps":    "/results",
    "/memo":    "/gaps",
  };

  const showBackButton    = location.pathname in navigationMap;
  const showAddFilesButton = location.pathname !== "/" && location.pathname !== "/upload";

  const handleBack = () => {
    const returnTo = (location.state as { returnTo?: string } | null)?.returnTo;
    const prev = returnTo ?? navigationMap[location.pathname];
    if (prev) navigate(prev);
  };
  const handleAddFiles = () => navigate("/upload", { state: { returnTo: location.pathname } });

  const firstName = user?.name?.trim().split(" ")[0] ?? "";
  const initial   = firstName ? firstName[0].toUpperCase() : "A";

  return (
    <>
      <div
        className="bg-[#0a1628] sticky top-0 z-50 shadow-lg"
        style={{ paddingTop: "var(--sat)" }}
      >
        <div className="flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
          {/* Left: back + logo */}
          <div className="flex items-center gap-1 sm:gap-3 min-w-0">
            {showBackButton && (
              <button
                onClick={handleBack}
                className="text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 flex items-center justify-center"
                style={{ minWidth: 44, minHeight: 44 }}
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity min-w-0"
              style={{ minHeight: 44 }}
              aria-label="Go to home"
            >
              <img
                src={claimoraLogo}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="font-semibold text-base sm:text-lg text-white truncate">Claimora</span>
            </button>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {showAddFilesButton && (
              <button
                onClick={handleAddFiles}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-semibold border border-white/30 px-2 sm:px-3"
                style={{ minHeight: 44 }}
                aria-label="Add more files"
              >
                <Plus className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="hidden sm:inline">Add files</span>
              </button>
            )}

            {isSignedIn ? (
              <ProfileDropdown
                user={user}
                initial={initial}
                firstName={firstName}
                onSignOut={handleSignOut}
              />
            ) : (
              <button
                onClick={() => setIsSignInModalOpen(true)}
                className="text-white text-sm font-semibold hover:bg-white/10 rounded-lg transition-colors px-3"
                style={{ minHeight: 44 }}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>

      <Breadcrumbs />

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        onSignIn={handleSignIn}
      />
    </>
  );
}
