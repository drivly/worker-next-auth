import { Router } from 'itty-router'
import { callback, providers, session, signin, signout } from 'next-auth/core'

const router = Router()

// router.get('/signin', 

export default {
  fetch: router.handler
}
