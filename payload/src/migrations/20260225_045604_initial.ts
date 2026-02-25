import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_style" AS ENUM('default', 'gold');
  CREATE TYPE "public"."enum__pages_v_version_hero_style" AS ENUM('default', 'gold');
  CREATE TYPE "public"."enum_header_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_cta_link_appearance" AS ENUM('default', 'outline');
  ALTER TABLE "pages" ADD COLUMN "hero_eyebrow" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_style" "enum_pages_hero_style" DEFAULT 'default';
  ALTER TABLE "pages" ADD COLUMN "hero_show_scroll_indicator" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_scroll_indicator_label" varchar DEFAULT 'Discover';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_eyebrow" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_style" "enum__pages_v_version_hero_style" DEFAULT 'default';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_show_scroll_indicator" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_scroll_indicator_label" varchar DEFAULT 'Discover';
  ALTER TABLE "header" ADD COLUMN "logo_text" varchar DEFAULT 'Sterling & Associates';
  ALTER TABLE "header" ADD COLUMN "cta_link_type" "enum_header_cta_link_type" DEFAULT 'reference';
  ALTER TABLE "header" ADD COLUMN "cta_link_new_tab" boolean;
  ALTER TABLE "header" ADD COLUMN "cta_link_url" varchar;
  ALTER TABLE "header" ADD COLUMN "cta_link_label" varchar NOT NULL;
  ALTER TABLE "header" ADD COLUMN "cta_link_appearance" "enum_header_cta_link_appearance" DEFAULT 'default';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP COLUMN "hero_eyebrow";
  ALTER TABLE "pages" DROP COLUMN "hero_style";
  ALTER TABLE "pages" DROP COLUMN "hero_show_scroll_indicator";
  ALTER TABLE "pages" DROP COLUMN "hero_scroll_indicator_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_eyebrow";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_style";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_show_scroll_indicator";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_scroll_indicator_label";
  ALTER TABLE "header" DROP COLUMN "logo_text";
  ALTER TABLE "header" DROP COLUMN "cta_link_type";
  ALTER TABLE "header" DROP COLUMN "cta_link_new_tab";
  ALTER TABLE "header" DROP COLUMN "cta_link_url";
  ALTER TABLE "header" DROP COLUMN "cta_link_label";
  ALTER TABLE "header" DROP COLUMN "cta_link_appearance";
  DROP TYPE "public"."enum_pages_hero_style";
  DROP TYPE "public"."enum__pages_v_version_hero_style";
  DROP TYPE "public"."enum_header_cta_link_type";
  DROP TYPE "public"."enum_header_cta_link_appearance";`)
}
