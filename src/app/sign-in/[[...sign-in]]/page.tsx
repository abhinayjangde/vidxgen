import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-200",
            card: "bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl",
            headerTitle: "text-white",
            headerSubtitle: "text-gray-400",
            socialButtonsBlockButton:
              "bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600/50 transition-all duration-200",
            socialButtonsBlockButtonText: "text-white font-medium",
            dividerLine: "bg-gray-600",
            dividerText: "text-gray-400",
            formFieldLabel: "text-gray-300",
            formFieldInput:
              "bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500/20",
            footerActionLink: "text-violet-400 hover:text-violet-300",
            identityPreviewEditButton: "text-violet-400 hover:text-violet-300",
          },
        }}
      />
    </div>
  );
}
