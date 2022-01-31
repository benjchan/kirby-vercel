import Vercel from "./components/Vercel.vue";
import Vercelstaging from "./components/VercelStaging.vue";

panel.plugin("f-mahler/kirby-vercel", {
  fields: {
    vercel: Vercel,
    vercelstaging: Vercelstaging
  }
});
