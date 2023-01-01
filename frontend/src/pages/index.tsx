import { NextPageContext } from 'next'
import { getSession, signIn, useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  console.log('here is the data ', data)
  return (
    <div>
      <button onClick={() => signIn('google')}>Sign in</button>
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
