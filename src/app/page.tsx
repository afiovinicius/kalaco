import { tinaDataQuery } from "@/functions";

import { SectionHero } from "./_screens";

export default async function RootPage() {
  const { data, query, variables } = await tinaDataQuery("./page.json");

  return (
    <>
      <SectionHero sData={data} sQuery={query} sVariables={variables} />
    </>
  );
}
