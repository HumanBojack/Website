export const copy = (e, text, message="Copied!") => {
  // const permissionName = "clipboard-write" as PermissionName;
  // navigator.permissions.query({ name: permissionName })
  //   .then((result) => {
  //     if (result.state != "granted" && result.state != "prompt") {
  //       return;
  //     }
  //   })

  navigator.clipboard.writeText(text);

  const content = e.target.textContent;
  e.target.textContent = message;

  setTimeout(() => {
    e.target.textContent = content;
  }, 800)
}