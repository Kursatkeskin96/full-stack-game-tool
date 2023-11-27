'use client'
import {signIn, signOut, useSession} from 'next-auth/react'

const Home = () => {
  const {data: session} = useSession()

  return (
    <div className='pt-20 h-screen'>
        {session && (
      <button className='pt-20' onClick={() => signOut('discord')}>Sign Out</button>
      )}
      {!session && (
            <> Not signed in <br />
          <button onClick={() => signIn('discord')}>Sign In</button>
          </>
      )}

    </div>
  )
}

export default Home
