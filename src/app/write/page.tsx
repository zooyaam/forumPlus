export default function WritePage() {
  return (
    <div>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="제목을 입력해주세요" />
        <input type="text" name="content" placeholder="내용을 입력해주세요" />
        <button type="submit">WRITE</button>
      </form>
    </div>
  );
}
