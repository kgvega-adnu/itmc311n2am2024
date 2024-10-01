/*
    main file for database
    [configuration]
    
    dependencies
    1. drizzle-orm, -D drizzle-kit
    2. dotenv
    3. @vercel/postgres

    apply changes to database (config "drizzle.config.ts" and ".env.local")
    1. npx drizzle-kit generate
    2. npx drizzle-kit migrate
    3. npx drizzle-kit push

    tutorial: https://www.youtube.com/watch?v=vyU5mJGCJMw&t=603s
*/

import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { config } from 'dotenv';
import * as schema from './schema'

config({ path: '.env.local' }); // or .env

// read the entire schema i made
export const db = drizzle<typeof schema>(sql, { schema });