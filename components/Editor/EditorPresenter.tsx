import React from "react";
import Editor from "@toast-ui/editor";

const EditorPresenter = ({ editor }) => {
  return editor.getHtml();
};

export default EditorPresenter;
