function SocialButton({
  social,
  socialLink,
}: {
  social: string;
  socialLink: string;
}) {
  function handleOnClick(link: string) {
    if (link === "") {
      alert("Error: No link available.");
    } else {
      const newWindow = window.open(link, "_blank", "noopener, noreferrer");
      if (newWindow) newWindow.opener = null;
    }
  }

  return <button onClick={() => handleOnClick(socialLink)}>{social}</button>;
}

export default SocialButton;
