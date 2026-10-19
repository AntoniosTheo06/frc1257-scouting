import { FormValues } from "@/pages"
import { useFormContext } from "react-hook-form"

interface AddButtonProps {
  title: string       
  id: keyof FormValues
  addValue: number 
  className?: string
  max?: number       
  min?: number 
}

const AddButton = (props: AddButtonProps): JSX.Element => {
  const { getValues, setValue } = useFormContext<FormValues>()

  const handleClick = () => {
    const current = Number(getValues(props.id)) || 0
    let newValue = current + props.addValue
    if (props.max !== undefined) {
      newValue = Math.min(newValue, props.max)
    }
    if (props.min !== undefined) {
      newValue = Math.max(newValue, props.min)
    }
    setValue(props.id, newValue, { shouldValidate: true, shouldDirty: true })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`h-14 px-6 text-2xl rounded-lg border-4 ${props.className}`}
    >
     {props.title}{props.addValue} 
    </button>
  )
}

export default AddButton