export const Title = ({ title }: { title: string }) => {
  return (
    <h1
      className={`mb-10 text-center text-2xl font-bold lowercase tracking-widest`}
    >
      {title}
    </h1>
  );
};
