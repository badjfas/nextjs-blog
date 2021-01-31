import Editor from "@toast-ui/editor";
import React from "react";
import EditorPresenter from "./EditorPresenter";
import "codemirror/lib/codemirror.css"; // Editor's Dependency Style
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style

const EditorContainer = () => {
  const editor = new Editor({
    el: document.querySelector("#editor"),
    height: "500px",
    initialEditType: "markdown",
    previewStyle: "vertical",
  });

  return <EditorPresenter editor={editor} />;
};

export default EditorContainer;
