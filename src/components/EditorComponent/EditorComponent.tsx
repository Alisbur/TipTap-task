import "./EditorComponent.less";
import { Editor, EditorContent } from "@tiptap/react";
import Button from "../../shared/ui/button/Button";
import Icon from "../../shared/ui/icon/Icon";

type TEditorProps = {
  editor: Editor | null;
};

export default function EditorComponent ({editor}: TEditorProps) {
  return (
    <div className="editorWrapper">
      <EditorContent className="editor" editor={editor} />
      <Button onClick={()=>{alert(editor?.getHTML())}}>
        <span>Send</span>
        <Icon glyph="arrowTop" />
      </Button>
    </div>
  )
}