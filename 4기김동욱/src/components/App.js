import EditorPage from "./editor/EditorPage.js";
import PostPage from "./sidebar/PostPage.js";

export default function App({ $target }) {
  const $listContainer = document.createElement("div");
  $listContainer.className = "listContainer";
  const $rendingContainer = document.createElement("div");
  $rendingContainer.className = "rendingContainer";

  $target.appendChild($listContainer);
  $target.appendChild($rendingContainer);
  const testState = [
    {
      id: 1, // Document id
      title: "노션을 만들자", // Document title
      documents: [
        {
          id: 2,
          title: "블라블라",
          documents: [
            {
              id: 3,
              title: "함냐함냐",
              documents: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "hello!",
      documents: [],
    },
  ];
  const postPage = new PostPage({
    $target: $listContainer,
    initalState: testState,
  });

  const testRowState = {
    title: "안녕하세요",
    content: "아무거나 쓰기, 이건 내용입니다",
  };

  const editorPage = new EditorPage({
    $target: $rendingContainer,
    initialState: testRowState,
  });
}
