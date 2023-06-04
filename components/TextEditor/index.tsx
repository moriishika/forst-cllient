'use client';

import { EditorContent, useEditor } from "@tiptap/react";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";

const ConfiguredStarterKit = StarterKit.configure({
  heading: {
    levels: [1, 2, 3, 4, 5, 6]
  }
})

const TextEditor = () => {

  const editor = useEditor({
    content: `<h1>Helllo</h1> <h2>Keren</h2>`,
    extensions: [ConfiguredStarterKit, Typography],
    editorProps: {
      attributes: {
        class: "bg-red-500 prose dark:prose-invert prose-sm sm:prose-base  prose-headings:m-0 prose-p:m-0 prose-p:leading-none  m-5 focus:outline-none"
      }
    }
  });

  return (
    <div>
      <h1>Keren</h1>
      <h2>KEren</h2>
      <EditorContent editor={editor}></EditorContent>
    </div>
  );
}

export default TextEditor;