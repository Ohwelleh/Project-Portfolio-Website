// Custom type
import type { SocialInfo } from "../custom types/Project";

function SocialButton({ social }: { social: SocialInfo }) {
  function handleOnClick(link: string) {
    if (link === "") {
      alert("Error: No link available.");
    } else {
      const newWindow = window.open(link, "_blank", "noopener, noreferrer");
      if (newWindow) newWindow.opener = null;
    }
  }

  return (
    <button onClick={() => handleOnClick(social.socialLink)}>
      {social.socialName}
    </button>
  );
}

export default SocialButton;
