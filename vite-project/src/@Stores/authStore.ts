import * as pin from 'pinia'
import {ref} from 'vue'
const useAuthStore = pin.defineStore('auth',()=> {
 const is_authorized = ref<Boolean>(false)
  const username = ref<string | undefined>('1005');
  const authenticate = (status:boolean,user_name?: string) => {
    is_authorized.value = status
    username.value = user_name
  }
  return {
    is_authorized,
    username,
    authenticate
  }
})
export default {
  useAuthStore
}
