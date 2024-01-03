const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="py-6 text-center text-xl text-white font-bold background-color bg-blue-400 rounded-t-sm">
      {title}
    </h1>
  );
};

export default Title;
