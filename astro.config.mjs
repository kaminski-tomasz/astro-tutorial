// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://animated-otter-9afef4.netlify.app",
  integrations: [preact()],
});