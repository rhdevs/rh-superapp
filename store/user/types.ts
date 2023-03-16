export interface ICredentials {
  email: string
  password: string
  username?: string
}

export interface IStar {
  id: number
  user_id: number
  post_id: number
}

export interface IUser {
  id: number
  email: string
  username: string
  profile_picture: string
  stars: IStar[]
  bio: string
  admin_level: number
  created_at: string
}

//-1 is used as the default id for an empty IUser object as database ids are non-negative
export const initialUserState: IUser = {
  id: -1,
  email: '',
  username: '',
  profile_picture: '',
  stars: [],
  bio: '',
  admin_level: -1,
  created_at: '',
}
