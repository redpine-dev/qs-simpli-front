import { useState, ChangeEvent, SetStateAction, Dispatch } from "react"

export const useForm = <T extends Object>(
  initialValue: T
): [
  T,
  Dispatch<SetStateAction<T>>,
  (
    event: React.ChangeEvent<{ value: unknown; id: string; name: string }>
  ) => void,

  (
    event: React.ChangeEvent<{ value: unknown; id: string; name: string }>
  ) => void
] => {
  const [values, setValues] = useState<T>(initialValue)

  const handleChange = (
    event: React.ChangeEvent<{ value: unknown; id: string; name: string }>
  ) => {
    setValues({
      ...values,
      [event.target.id ?? event.target.name]: event.target.value,
    })
  }

  const handleChangeInt = (
    event: React.ChangeEvent<{ value: unknown; id: string; name: string }>
  ) => {
    setValues({
      ...values,
      [event.target.id ?? event.target.name]: parseInt(
        event.target.value as string
      ),
    })
  }

  return [values, setValues, handleChange, handleChangeInt]
}
