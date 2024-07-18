interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <div className="mx-auto border cursor-pointer py-4 px-4 w-[700px] flex flex-col gap-4 bg-white rounded-xl duration-500 hover:shadow-md">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex justify-between">
        <p className="text-gray-600">2020년 1월 1일</p>
        <p>조회 1 좋아요 0</p>
      </div>
    </div>
  );
}
