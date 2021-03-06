import RouterInterface from "varie/lib/routing/RouterInterface";

import middleware from "./middleware";
import ErrorViews from "@views/errors";
import Resume from "@views/Resume.vue";

export default function($router: RouterInterface) {
  /*
  |--------------------------------------------------------------------------
  | Your default routes for your application
  |--------------------------------------------------------------------------
  |
  */
  $router.middleware([middleware.SetTitleFromMeta]).group(() => {
    $router.route("/", Resume).setMeta({
      title: "Luke Policinski - Resume",
    });
  });

  $router.route("*", ErrorViews.Error404);
}
