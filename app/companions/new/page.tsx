import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermissions } from "@/lib/actions/companion.actions"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const NewCompanion = async () => {

  const {userId} = await auth()

  const canCreateCompanion = await newCompanionPermissions()

  if(!userId) redirect('/sign-in')

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {
        canCreateCompanion ? (
          <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm/>
      </article>
        ) :(
          <article className="companion-limit">
            <Image
              src='/images/limit.svg'
              alt='Companion limit reached'
              width={360}
              height={230}
            />
            <div className="cta-badge">
            Upgrade your Plan
            </div>

            <h1>
              You&apos;ve Reached Your Limit
            </h1>
            <p>
              You&apos;ve reached your companion limit. Upgrade to create more companions and premium featuers.
            </p>
            <Link href='/subscription' className="btn-primary w-full justify-center">
            Upgrade My PLan</Link>
          </article>
        )
      }
      
    </main>
  )
}

export default NewCompanion