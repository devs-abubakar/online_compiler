import Editor_UI from "./Editor_UI";
import CodePreview from "./Code_preview";

const SplitLayout = () => {
  return (
    <div className="flex w-full h-full overflow-hidden">

      {/* Editor */}
      <Editor_UI />

      {/* Divider */}
      <div className="w-2 bg-gray-700" />

      {/* Preview */}
      <div className="w-1/2 h-full min-w-0 bg-white">
        <CodePreview />
      </div>

    </div>
  );
};

export default SplitLayout;