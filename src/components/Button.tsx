const Button = ({
  children,
  onSubmit,
}: {
  children: string;
  onSubmit: () => void;
}) => {
  return (
    <button
      onClick={onSubmit}
      className="px-4 py-1 w-[85%] h-[60%] text-white bg-blue-500  hover:bg-blue-600 rounded-full "
    >
        <span className="text-2xl">

      {children}
        </span>
    </button>
  );
};

export default Button;
