CREATE TABLE IF NOT EXISTS "contactInformation" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200) NOT NULL,
	"email" varchar(200) NOT NULL,
	"project" varchar(200) NOT NULL,
	"message" varchar(1024) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
