import axios from 'axios'
import { FormInputs } from '../helpers/validationForm'

export const createUser = async (data: FormInputs) => {
  return axios
    .post('https://meegu-api.onrender.com/users', data)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
