import { EditorContent, useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import TextStyle from "@tiptap/extension-text-style";
import MenuBar from "./menu-bar";
import FontSize from "tiptap-extension-font-size";
import Color from "@tiptap/extension-color";
interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}
const Editor = ({ onChange, value }: IProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Strike,
      TextStyle,
      FontSize,
      Color,
      Heading.configure({ levels: [1, 2, 3] }),
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
