import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link"
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Header from "./components/Header/Header";
import TextBlock from "./components/TextBlock/TextBlock";
import EditorBlock from "./components/EditorBlock/EditorBlock";
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
import EditorComponent from "./components/EditorComponent/EditorComponent";
import MenuBar from "./components/MenuBar/MenuBar";

export default function App() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Underline,
      Highlight,
      CharacterCount.configure({
        limit: 10000,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false
            }

            // disallowed protocols
            const disallowedProtocols = ['ftp', 'file', 'mailto']
            const protocol = parsedUrl.protocol.replace(':', '')

            if (disallowedProtocols.includes(protocol)) {
              return false
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))

            if (!allowedProtocols.includes(protocol)) {
              return false
            }

            // disallowed domains
            const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
            const domain = parsedUrl.hostname

            if (disallowedDomains.includes(domain)) {
              return false
            }

            // all checks have passed
            return true
          } catch {
            return false
          }
        },
        shouldAutoLink: url => {
          try {
            // construct URL
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

            // only auto-link if the domain is not in the disallowed list
            const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
            const domain = parsedUrl.hostname

            return !disallowedDomains.includes(domain)
          } catch {
            return false
          }
        },

      }),
    ],
  });

  return (
    <>
      <Header />
      <main>
        <SideBar>
          {editor && <MenuBar editor={editor} />}
        </SideBar>
        <MainContent>
{/* TextBlock просто заглушка */}
          <TextBlock /> 
          <EditorBlock>
            {editor && <EditorComponent editor={editor} />}
          </EditorBlock>
        </MainContent>
        <SideBar/>
      </main>
    </>
  );
}
