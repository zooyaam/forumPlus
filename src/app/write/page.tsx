export default function WritePage() {
  return (
    <div className="flex flex-col gap-10 justify-center items-centers">
      <h1 className="text-3xl mx-auto pt-20 font-bold">게시글 작성하기</h1>
      <div className="rounded-3xl w-2/3 flex flex-col gap-8 mx-auto px-10 py-6 bg-white">
        <form action="/api/post/new" method="POST" className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium pb-1">
            제목
          </label>
          <input
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
            className="text-xl mb-6"
          />
          <label htmlFor="content" className="text-lg font-medium pb-1">
            내용
          </label>
          <textarea
            name="content"
            placeholder="내용을 입력해주세요"
            className="text-lg resize-none h-60"
          />
          <button
            type="submit"
            className="bg-secondary-300 mt-10 rounded-xl py-3 text-lg font-semibold"
          >
            완료
          </button>
        </form>
      </div>
    </div>
  );
}
