import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("ethang-admin", "main", {
  preVersionBumpScripts: ["UPDATE", "PRUNE"],
  postVersionBumpScripts: ["DEDUPE", "LINT", "BUILD"],
  isLibrary: false,
});
