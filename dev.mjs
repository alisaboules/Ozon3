import { spawn } from "node:child_process";
import open from "open";

const dev = spawn("bun", ["x", "next", "dev"], {
  stdio: "inherit",
  shell: true
});

setTimeout(() => {
  open("http://localhost:3000");
}, 2000);