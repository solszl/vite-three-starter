import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { Pane } from "tweakpane";
// import { BladeController, View } from "@tweakpane/core";
export const gui = new Pane();

gui.registerPlugin(EssentialsPlugin);

export const fps = gui.addBlade({
  view: "fpsgraph",
  label: "fps",
});
