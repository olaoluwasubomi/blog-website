import AuthForm from "../../components/AuthForm";
import Link from "next/link";
export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="bg-white px-10 py-26 rounded-xl shadow-xl h-full w-1/4">
            <h5 className="text-xl text-center italic font-semibold mb-4">
                Join our coffee family 
            </h5>
            <div className="w-full">
                <AuthForm mode="signup" />
            </div>
            <div className="mt-10 text-center">
                <p className="text-lg">Already have an acount <Link href="/onboarding/login" className="font-bold">Sign In</Link></p>
            </div>
        </div>
    </div>
  );
}
