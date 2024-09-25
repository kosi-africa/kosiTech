import { serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const contactInformation=pgTable("contactInformation",{
    id: serial('id').primaryKey(),
    name: varchar('name',{length:200}).notNull(),
    email: varchar('email',{length:200}).notNull(),
    project:varchar('project',{length:200}).notNull(),
    message: varchar('message',{length:1024}).notNull(),
    createdAt:timestamp('created_at').notNull().defaultNow()
})