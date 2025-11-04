import AuthForm from "../../components/AuthForm";
import Link from "next/link";
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="bg-white px-10 py-26 rounded-xl shadow-xl h-full w-1/4">
            <h5 className="text-xl text-center italic font-semibold mb-4">
                Every Story starts with a sip
            </h5>
            <div className="w-full">
                <AuthForm mode="login" />
            </div>
            <div className="mt-10 text-center">
                <p className="text-lg">Don't have an account <Link href="/onboarding/signup" className="font-bold">Sign up</Link></p>
            </div>
        </div>
    </div>
  );
}
