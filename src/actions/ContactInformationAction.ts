"use server";
import { contactInformationType } from "@/types/contactInformationType";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });
const { contactInformation } = schema;

export async function insertContactInformation(contactInforData:contactInformationType) {
 const dbResponse= await db.insert(contactInformation).values({
    name: contactInforData.name,
    email: contactInforData.email,
    project: contactInforData.project,
    message: contactInforData.message,
  }).returning({contactInformationID:contactInformation.id});
  return dbResponse
}
