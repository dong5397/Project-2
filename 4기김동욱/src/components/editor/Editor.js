export default function Editor({ $target, initialState }) {
  const $editor = document.createElement("div");
  $editor.className = "editorDiv";
  $target.appendChild($editor);

  this.state = initialState;

  $editor.innerHTML = `
      <input type="text" class="editorTitle" value=${this.state.title} placeholder="제목없음" />
      <textarea class="editorContent" placeholder="내용을 입력하세요">${this.state.content}</textarea>
      `;
}
