interface DetailCardProps {
  title: string;
  image?: string;
  content: string;
}

export default function DetailCard({ title, image, content }: DetailCardProps) {
  return (
    <div className="rounded-3xl w-2/3 flex flex-col gap-8 mx-auto border px-10 py-6 bg-white">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p>{content}</p>
    </div>
  );
}
