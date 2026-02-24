import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "header" ADD COLUMN IF NOT EXISTS "logo_text" varchar DEFAULT 'Sterling & Associates';
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "header" DROP COLUMN IF EXISTS "logo_text";
  `)
}
