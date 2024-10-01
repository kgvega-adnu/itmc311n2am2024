/*
	drizzle-studio
	to run:
		[npx drizzle-kit studio]

	schema map:
		[user]
		pk:id
		name
		age
		password
		email
		createdAt
		updatedAt

		[shop]
		pk:id
		fk:userid (connected to [user])
		name
		location
*/

import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

// User Schema
export const userTable = pgTable("users", {
	id: text("id").notNull().primaryKey(),
	
	//
	username: varchar("username", {length: 255}),
	email: varchar("email", {length: 255}).unique(),
	passwordHash: varchar("password_hash", {length: 255}).notNull(),
	
	// 
	name: text("name"),
	avatar: text("avatar_url"),

	createdAt: timestamp("created_at", {mode: "string"}).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", {mode: "string"}).notNull().defaultNow()
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

// Multiple Oath Accounts
export const oathTable = pgTable("oath_account", {
	id: text("id").primaryKey(),
	userId: text("user_id").notNull().references(() => userTable.id),
	provider: text("provider").notNull(),
	providerUserId: text("provider_user_id").notNull(),
	accessToken: text("access_token").notNull(),
	refreshToken: text("refresh_token"),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull(),
})