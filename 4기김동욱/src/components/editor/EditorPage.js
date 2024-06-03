import Editor from "./Editor.js";

export default function EditorPage({ $target, initialState }) {
  const $page = document.createElement("div");

  this.state = initialState;

  new Editor({ $target: $page, initialState });

  $target.appendChild($page);
}
