import Container from "@/components/layouts/Container"
import TeamCard from "@/components/TeamCard"
import { teamMembers } from "@/utils/constants"

function AboutPage() {
  return (
    <Container>
      <div className="py-20">
        <div className="text-center my-10 md:w-[80%] mx-auto px-4 ">
          <h1 className="text-5xl font-bold mb-8">About ChromX</h1>
          <p className="font-light text-xl mb-8">
            An e-commerce project expertly leveraged the power of Next.js, which
            seamlessly combines server-side rendering (SSR) for faster initial
            page loading, client-side rendering (CSR) for smoother interactions,
            and improved Search Engine Optimization (SEO). TailwindCSS added a
            visually appealing touch, while Firebase Auth ensured secure user
            authentication. Additionally, we seamlessly integrated a dummy JSON
            API to facilitate realistic data interactions for comprehensive
            testing. The synergy of Next.js, TailwindCSS, Firebase Auth, and the
            dummy JSON API resulted in a sophisticated e-commerce platform that
            met the project requirements with finesse.
          </p>
        </div>
        <div className="flex md:w-[80%] flex-col md:flex-row md:flex-wrap mx-auto gap-10 md:gap-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default AboutPage
