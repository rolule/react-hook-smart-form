import { jsx } from "react/jsx-runtime"
import { FormProvider } from "react-hook-form"

const SmartForm = ({
  form,
  onValid,
  onValidEvent,
  onInvalid,
  onInvalidEvent,
  children,
  ...formProps
}) => {
  const { handleSubmit } = form
  const onSubmitValid = onValid || onValidEvent
  const onSubmitInvalid = onInvalid || onInvalidEvent
  return jsx("form", {
    onSubmit: onSubmitValid && handleSubmit(onSubmitValid, onSubmitInvalid),
    ...formProps,
    children: jsx(FormProvider, { ...form, children: children }),
  })
}

export { SmartForm }
