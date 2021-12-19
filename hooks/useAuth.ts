import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "@/api/index";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const { data: profile, error, mutate }: any = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000, // 1 hour
    revalidateOnFocus: false,
    ...options
  })

  console.log({ profile, error })
  const firstLoading = profile === undefined && error === undefined

  async function login() {
    await authApi.login({
      username: 'test1',
      password: '123456',
    })

    // login, redirect then fetch profile. 
    await mutate()

    // login, fetch profile then redirect
    // mutate()
  }

  async function logout() {
    await authApi.logout()

    // false: should not revalidate
    mutate({}, false)
  }

  return {
    profile, error, login, logout, firstLoading
  }
}