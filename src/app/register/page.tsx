export default function Register() {
  return (
    <div className="flex flex-col gap-10 justify-center items-centers">
      <h1 className="text-3xl mx-auto pt-20 font-bold">게시글 수정하기</h1>

      <div className="rounded-3xl w-2/3 flex flex-col gap-8 mx-auto px-10 py-6 bg-white">
        <form action="/api/auth/signup" method="POST" className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium pb-1">
            이름
          </label>
          <input
            type="text"
            name="name"
            placeholder="닉네임"
            className="text-xl mb-6"
          />

          <label htmlFor="email" className="text-lg font-medium pb-1">
            이메일
          </label>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            className="text-xl mb-6"
          />

          <label htmlFor="password" className="text-lg font-medium pb-1">
            비밀번호
          </label>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="text-xl mb-6"
          />

          <button
            type="submit"
            className="bg-primary-400 text-white text-xl font-semibold py-2 rounded-lg"
          >
            완료
          </button>
        </form>
      </div>
    </div>
  );
}
