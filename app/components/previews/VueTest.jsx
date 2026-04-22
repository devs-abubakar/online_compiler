import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";

export default function VueTest() {
  return (
<SandpackProvider template="vue">
  <SandpackPreview />
</SandpackProvider>
  );
}