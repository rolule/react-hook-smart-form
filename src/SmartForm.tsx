import { PropsWithChildren } from 'react'
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'
import { SubmitErrorHandlerEventless, SubmitHandlerEventless } from './lib'

type SmartFormProps<T, C> = {
  form: UseFormReturn<T, C>
  onValid?: SubmitHandlerEventless<T>
  onValidEvent?: SubmitHandler<T>
  onInvalid?: SubmitErrorHandlerEventless<T>
  onInvalidEvent?: SubmitErrorHandler<T>
} & PropsWithChildren

export const SmartForm = <T, C>({
  form,
  onValid,
  onValidEvent,
  onInvalid,
  onInvalidEvent,
  children,
  ...formProps
}: SmartFormProps<T, C>) => {
  const { handleSubmit } = form

  const onSubmitValid = onValid || onValidEvent
  const onSubmitInvalid = onInvalid || onInvalidEvent

  return (
    <form
      onSubmit={onSubmitValid && handleSubmit(onSubmitValid, onSubmitInvalid)}
      {...formProps}
    >
      <FormProvider {...form}>{children}</FormProvider>
    </form>
  )
}
