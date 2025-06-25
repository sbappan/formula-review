import db from "@/db";

import { HeaderClient } from "./header-client";

export default async function Header() {
  const races = await db.query.races.findMany();
  return <HeaderClient races={races} />;
}
