import { ReactNode } from 'react'

//interface para User
export interface IUser {
  login?: string
  token?: string
  user?: string
  
}

export interface IContext extends IUser {
  authenticate: (login: string, token: string) => Promise<void>
  isTokenValid: (token?: string) => boolean
  logout: () => void
}

export interface IAuthProvider {
  children: ReactNode
}

export interface IDecodedToken {
  sub: string
  iat: number
  exp: number
}
