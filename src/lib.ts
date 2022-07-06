// required because we want to pass in mutate functions directly
// with the normal SubmitHandler, we always need create an inline functions

import { FieldErrors } from 'react-hook-form'

// because its second argument is an event and the mutation options are incompatible to it
export type SubmitHandlerEventless<T> = (data: T) => unknown | Promise<unknown>

// same as above for onInvalid
export type SubmitErrorHandlerEventless<T> = (
  errors: FieldErrors<T>,
) => unknown | Promise<unknown>
