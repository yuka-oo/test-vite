import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { s as skyboxImage, e as environmentImage } from "../chunks/chunk-4f6f5a9f.js";
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "パネル" }),
    /* @__PURE__ */ jsx(
      "model-viewer",
      {
        ar: true,
        "ar-modes": "scene-viewer quick-look",
        "skybox-image": skyboxImage,
        "environment-image": environmentImage,
        src: "/public/assets/models/ar_sample_new.glb",
        alt: "torii",
        "camera-controls": true,
        "camera-orbit": "45deg 90deg 100%"
      }
    )
  ] });
}
export {
  Page
};
