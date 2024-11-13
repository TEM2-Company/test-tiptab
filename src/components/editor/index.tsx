import { EditorContent, useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import MenuBar from "./menu-bar";
import FontSize from "tiptap-extension-font-size";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";

interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}
const Editor = ({ onChange, value }: IProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Underline,
      FontSize,
      Color,
      Highlight.configure({ multicolor: true }),
    ],
    content: value,
    onUpdate({ editor }) {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
  });

  return (
    <div className="editor-frame">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
