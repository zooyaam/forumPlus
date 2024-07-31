import { ObjectId } from "mongodb";
import Link from "next/link";

interface EditCardProps {
  id?: ObjectId;
  title: string;
  image?: string;
  content: string;
}

// TODO: add image

export default function EditCard({ id, title, image, content }: EditCardProps) {
  return (
    <div className="flex flex-col gap-10 justify-center items-centers">
      <h1 className="text-3xl mx-auto pt-20 font-bold">게시글 수정하기</h1>

      <div className="rounded-3xl w-2/3 flex flex-col gap-8 mx-auto px-10 py-6 bg-white">
        <form action="/api/post/edit" method="POST" className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium pb-1">
            제목
          </label>
          <input
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
            className="text-xl mb-6"
            defaultValue={title}
          />

          <label htmlFor="content" className="text-lg font-medium pb-1">
            내용
          </label>
          <textarea
            name="content"
            placeholder="내용을 입력해주세요"
            className="text-lg resize-none h-60"
            defaultValue={content}
          />

          <input
            name="_id"
            type="text"
            defaultValue={id?.toString()}
            className="hidden"
          />

          <div className="flex gap-6 mt-10">
            <button
              type="submit"
              className="bg-secondary-300 rounded-xl w-full py-3 text-lg font-semibold"
            >
              완료
            </button>

            <Link
              href="/list"
              className="bg-secondary-400 hover:bg-secondary-500 duration-200 cursor-pointer w-full text-center rounded-xl py-3 text-lg font-semibold"
            >
              취소
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
