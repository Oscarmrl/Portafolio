import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-sm text-neutral-content justify-center p-4 md:justify-between caret-transparent">
      <aside className="flex flex-col items-center gap-4 md:flex-row md:justify-between font-roboto">
        <p>
          Copyright Oscar Murillo {new Date().getFullYear()} - All right
          reserved
        </p>
        <nav className="flex flex-row items-center gap-4 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=100024806562775"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-murillo-3885b4294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/Oscarmrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </nav>
      </aside>
    </footer>
  );
}
