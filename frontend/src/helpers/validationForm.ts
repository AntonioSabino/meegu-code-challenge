import { UseFormRegister } from 'react-hook-form'
import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(2).max(100),
  birthdate: z
    .string()
    .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value))
    .refine((value) => {
      const currentDate = new Date()
      const eighteenYearsAgo = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate(),
      )
      const selectedDate = new Date(value)
      return selectedDate <= eighteenYearsAgo
    }, 'Você deve ter mais de 18 anos'),
  document: z.string().length(11),
  acceptedTermsAndConditions: z.boolean(),
  zipcode: z.string().length(8),
  street: z.string().min(3).max(100),
  neighborhood: z.string().min(3).max(100),
  city: z.string().min(3).max(100),
  state: z.string().length(2),
})

export type FormInputs = z.infer<typeof formSchema>

export interface InputProps {
  register: UseFormRegister<FormInputs>
}
