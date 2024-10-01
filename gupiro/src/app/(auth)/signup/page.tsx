


import { Header } from "@/components/header";
import { SignUpForm } from "@/components/lucia/signup-form";
import { validateRequest } from "@/lib/lucia/auth";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
    const { user } = await validateRequest();
    if(user) {
        return redirect("/");
    }

    return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="w-96">
					<h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Create an account</h1>
					<p className="mb-4">Lets get stared with your 7 days free trial</p>
					<SignUpForm/>

					<div className="text-xs text-center mt-5">
						If you already have an account <a href="/login" className="underline">Log in</a>
					</div>
				</div>
			</div>
		</>

    );
}
