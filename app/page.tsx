import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {

  const companions = await getAllCompanions({limit:3})
  const recentSessionsCompanions = await getRecentSessions(10)
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
   
        <section className="home-section">

          {
            companions.map((companion)=>(
              <CompanionCard
                {...companion}
                key={companion.id}
                color={getSubjectColor(companion.subject)}
              />      
            ))
          }
        </section>

      <section className='home-section'>
      <CompanionsList
      title="Recenly completed sessions"
      companions={recentSessionsCompanions}                                                                                                                                                                                                                                                                                                                                                                               
      classNames = "w-full lg:w-2/3"
      />
      <CTA/>
      </section>
    </main>
  )
}

export default Page