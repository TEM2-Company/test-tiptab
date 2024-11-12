import { Editor } from "@tiptap/react";
import { Button, Divider } from "antd";
import {
  BoldOutlined,
  FontSizeOutlined,
  ItalicOutlined,
  OrderedListOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import TextColor from "./text-color";
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  return (
    <div className="toolbar">
      <Button
        icon={<BoldOutlined />}
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={
          editor?.isActive("bold")
            ? "t-btn  bold is-active editor-icon"
            : "t-btn editor-icon"
        }
      />
      <Button
        icon={<ItalicOutlined />}
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className={
          editor?.isActive("italic")
            ? "t-btn  italic is-active editor-icon"
            : "t-btn editor-icon"
        }
      />
      <Button
        icon={<UnderlineOutlined />}
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
        className={
          editor?.isActive("underline")
            ? "t-btn  underline is-active editor-icon"
            : "t-btn editor-icon"
        }
      />
      <Button
        icon={<StrikethroughOutlined />}
        onClick={() => editor?.chain().focus().toggleStrike().run()}
        className={
          editor?.isActive("strike")
            ? "t-btn strike is-active editor-icon"
            : "t-btn editor-icon"
        }
      />

      <Divider type="vertical" style={{ height: 24, marginTop: 6 }} />

      <Button
        icon={<FontSizeOutlined />}
        onClick={() => editor?.chain().focus().setFontSize("18px").run()}
        className={"t-btn  editor-icon"}
      />
      <Divider type="vertical" style={{ height: 24, marginTop: 6 }} />

      <Button
        icon={<OrderedListOutlined />}
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        className={
          editor?.isActive("orderedList")
            ? "t-btn  orderlist is-active editor-icon"
            : "t-btn editor-icon"
        }
      />

      <Button
        icon={<UnorderedListOutlined />}
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={
          editor?.isActive("bulletList")
            ? "t-btn  bulletList is-active editor-icon"
            : "t-btn editor-icon"
        }
      />
      <Divider type="vertical" style={{ height: 24, marginTop: 6 }} />
      <TextColor
        value={editor?.getAttributes("textStyle").color}
        onChange={(event) => editor?.chain().focus().setColor(event).run()}
      />
    </div>
  );
};

export default MenuBar;
