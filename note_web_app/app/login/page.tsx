"use client";

import { useActionState, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { signin } from "./signinaction";
import { saveEmailToLocalStorage } from "../lib/storage";

const sendOTPEmail = async (email: string, otp: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch('/api/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, error: 'Failed to send OTP' };
  }
};

interface FormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [state, signinAction] = useActionState(signin, undefined);
  const [isPending, startTransition] = useTransition();
  const [showOTPInput, setShowOTPInput] = useState<boolean>(false);
  const [generatedOTP, setGeneratedOTP] = useState<string>("");
  const [userOTP, setUserOTP] = useState<string>("");
  const [isLoadingOTP, setIsLoadingOTP] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    if (!showOTPInput) {
      setIsLoadingOTP(true);
      setEmailError("");

      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const email = formDataObj.get('email') as string;

      setFormData({
        email: email,
        password: formDataObj.get('password') as string
      });

      try {
        const emailResult = await sendOTPEmail(email, otp);

        if (emailResult.success) {
          setGeneratedOTP(otp);
          setShowOTPInput(true);
          alert(`OTP sent to ${email}! Check your inbox.`);
          console.log(`OTP sent to ${email}: ${otp}`);
        } else {
          setEmailError("Failed to send OTP. Please try again.");
          console.error("Email sending failed:", emailResult.error);
        }
      } catch (error) {
        setEmailError("Failed to send OTP. Please check your email address.");
        console.error("Error:", error);
      } finally {
        setIsLoadingOTP(false);
      }

    } else {
      if (userOTP === generatedOTP) {
        startTransition(() => {
          const finalFormData = new FormData();
          finalFormData.append('email', formData.email);
          finalFormData.append('password', formData.password);

          signinAction(finalFormData);
        });
        saveEmailToLocalStorage(formData.email);
      } else {
        alert("Invalid OTP! Please try again.");
        setUserOTP("");
      }
    }
  };

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      await signIn('google', { 
        callbackUrl: '/home'
      });
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white relative">
      {/* Logo */}
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <img src="/assets/logo.png" alt="HD Logo" className="w-8 h-8" />
        <span className="font-semibold text-lg">HD</span>
      </div>

      {/* Form */}
      <div className="flex flex-1 flex-col justify-center items-center py-12 px-6">
        <div className="w-full max-w-md rounded-lg p-8">
          <h1 className="text-[40px] font-bold text-center md:text-left">Sign in</h1>
          <p className="text-gray-500 text-[16px] mb-8 text-center md:text-left md:text-[18px]">
            Sign in to enjoy the feature of HD
          </p>

          {/* Form Starts Here */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={formData.email}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="jonas_kahnwald@gmail.com"
                required
                disabled={showOTPInput || isPending}
              />
              {(state?.error?.email || emailError) && (
                <p className="text-red-500 text-sm">
                  {state?.error?.email?.[0] || emailError}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                defaultValue={formData.password}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
                disabled={showOTPInput || isPending}
              />
              {state?.error?.password && (
                <p className="text-red-500 text-sm">{state.error.password[0]}</p>
              )}
            </div>

            {/* OTP Input */}
            {showOTPInput && (
              <div>
                <label className="block text-sm mb-1" htmlFor="otp">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  value={userOTP}
                  onChange={(e) => setUserOTP(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the OTP"
                  maxLength={6}
                  required
                  disabled={isPending}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Check your email for the 6-digit OTP code
                </p>
              </div>
            )}

            <SubmitButton
              showOTPInput={showOTPInput}
              isLoadingOTP={isLoadingOTP}
              isPending={isPending}
            />
          </form>

          {/* Google Sign In */}
          {!showOTPInput && !isPending && (
            <>
              <p className="mt-2 text-center text-gray-500">Or</p>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="mt-2 w-full cursor-pointer flex items-center justify-center space-x-3 border border-gray-300 rounded py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                <img
                  src="/assets/google.png"
                  alt="Google Logo"
                  className="w-5 h-5"
                />
                <span className="font-medium">Sign in with Google</span>
              </button>
            </>
          )}

          <div className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 hidden md:flex items-center justify-center p-2">
        <div className="w-[825px] h-[98vh] overflow-hidden rounded-3xl shadow-lg">
          <img
            src={"/assets/signup_illus.jpg"}
            alt="Sign In Illustration"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

function SubmitButton({
  showOTPInput,
  isLoadingOTP,
  isPending
}: {
  showOTPInput: boolean;
  isLoadingOTP: boolean;
  isPending: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || isLoadingOTP || isPending}
      className="cursor-pointer py-2 px-2 text-white font-bold rounded-lg w-full bg-blue-500 mt-4 hover:bg-blue-600 transition disabled:opacity-60"
    >
      {isPending ? "Signing In..." :
        isLoadingOTP ? "Sending OTP..." :
          showOTPInput ? "Verify" : "Get OTP"}
    </button>
  );
}

export default SignInForm;
