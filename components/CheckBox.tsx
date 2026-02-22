import { useFormContext } from "react-hook-form";

interface CheckBoxProps {
  title: string;
  id: string;
  className?: string;
}

const CheckBox = ({ title, id, className }: CheckBoxProps): JSX.Element => {
  const { register, watch, setValue } = useFormContext();
  const checked = watch(id); 

  return (
    <div className={`flex flex-row items-center justify-center py-4 ${className}`}>
      <div className=" text-xl w-[150px] ">{title}</div>
      <input
        type="checkbox"
        {...register(id)}
        checked={checked || false} 
        onChange={() => setValue(id, !checked)}
        className="w-8 h-8"
      />
    </div>
  );
};

export default CheckBox;
