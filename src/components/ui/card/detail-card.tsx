interface DetailCardProps {
  title: string;
  image?: string;
  content: string;
}

// TODO: add image

export default function DetailCard({ title, image, content }: DetailCardProps) {
  return (
    <div className="rounded-3xl flex flex-col gap-8 border px-10 py-6">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p>{content}</p>
    </div>
  );
}
