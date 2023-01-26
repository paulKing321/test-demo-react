type Props = {
    title: string;
    children: React.ReactNode;
    className?: string;
  };
  
  const Grid = ({ title, children, className }: Props) => (
    <div className={className}>
      <h2 className='pb-4 text-xl font-bold'>{title}</h2>
      <div className='grid gap-8 grid-cols-auto-fill'>{children}</div>
    </div>
  );
  
  export default Grid;