import "./MenuBar.less";
import type { Editor } from "@tiptap/react";

import { Fragment } from "react";

import MenuItem from "../../shared/ui/menu-item/MenuItem.js";
import { TMenuItem } from "../../shared/types/types.js";

export default function MenuBar({ editor }: { editor: Editor }) {

  // const setLink = useCallback(() => {
  //   const previousUrl = editor?.getAttributes('link').href
  //   const url = window.prompt('URL', previousUrl)

  //   // cancelled
  //   if (url === null) {
  //     return
  //   }

  //   // empty
  //   if (url === '') {
  //     editor?.chain().focus().extendMarkRange('link').unsetLink()
  //       .run()

  //     return
  //   }

  //   // update link
  //   try {
  //     editor?.chain().focus().extendMarkRange('link').setLink({ href: url })
  //       .run()
  //   } catch (e: any) {
  //     alert(e.message)
  //   }
  // }, [editor])

  // if (!editor) {
  //   return null
  // }

  const items: TMenuItem[] = [
    {
      icon: "bold",
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: "italic",
      title: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: "strike",
      title: "Strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      icon: "underline",
      title: "Underline",
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: () => editor.isActive("underline"),
    },
    {
      icon: "code",
      title: "Code",
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
    {
      icon: "link",
      title: "Link",
      action: () => {
        const previousUrl = editor.getAttributes('link').href
        const url: string | null = window.prompt('Input URL', previousUrl)
    
        // cancelled
        if (url === null) {
          return
        }
    
        // empty
        if (url === '') {
          editor?.chain().focus().extendMarkRange('link').unsetLink()
            .run()
    
          return
        }
    
        // update link
        try {
          editor?.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
        } catch (e: unknown) {
          if (e instanceof Error) {
            alert(e.message)
          } else {
            alert("Something goes wrong!");
          }
          
        }
      },
      isActive: () => editor.isActive("link"),
    },
  ];

  return (
    <div className="menuBar">
      <span className="divider"/>
      {items.map((item, index) => (
        <Fragment key={index}>
          <MenuItem {...item} />
        </Fragment>
      ))}
      <span className="divider"/>
    </div>
  );
}
