/*
		[app/#]
		page.tsx

		collaborator:
			jeck
			ericjusteric
			lanooon06

		dev-note:
			setup
				1. nextjs
				2. vercel
					a. npx vercel
					b. vercel env pull .env.local
				3. drizzle-orm
				4. @vercel/postgres
				5. npm i -D drizzle-kit

			getting started
			1. clone repository
			2. install dependencies [npm i]
			3. [npm run dev]

			orm
				main
				1. npm i drizzle-orm drizzle-zod

				node-postgres
				2. npm i pg
				3. npm i -D drizzle-kit @types/pg

			ext
				1. npm i eslint-plugin-drizzle
				2. npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser


	note:
	- // --build-from-source in postinstall in package.json
*/

import React from "react";
import { validateRequest } from "@/lib/lucia/auth";
import { Header } from "@/components/header";
import { Card0 } from "@/components/main/cards/card";


export default async function HomePage() {
	const { user } = await validateRequest()

	return(
		<>
			<Header/>
			
			<div className="overflow-hidden flex gap-5 h-screen justify-start ml-[100px] items-center">
				<Card0/>
				<Card0/>
				<Card0/>
				<Card0/>
				<Card0/>
				<Card0/>

			</div>
			
			
			
		</>
	);
}
