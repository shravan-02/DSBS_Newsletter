import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'
import HomeFacts from '../components/HomeFacts'

export default function Home({ posts }) {
  return (
    <>
    
        <div className='h-screen bg-contain bg-center mx-10 mr-30 bg-no-repeat mb-10 border-solid	' style={{backgroundImage: "url('https://i.imgur.com/u3JoOKi.png')"}}></div>
          {/* Older Front page with content */}
          {/* Insert The Description of newsletter here */}
          {/*<div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
             <h1 className="bg-clip-text text-center text-3xl font-semibold leading-loose ">
              OFFICIAL NEWSLETTER
            </h1>
            <h1 className="text-center text-xl font-medium leading-loose">
              DEPARTMENT OF DATA SCIENCE AND BUSINESS SYSTEMS
            </h1>
            <br />
            <h1 className="text-center text-lg font-medium">
              SCHOOL OF COMPUTING
              <br />
              SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
              <br />
              KATTANKULATHUR
            </h1>
            <br />
            <h1 className="text-justify text-xl font-medium indent-8 leading-relaxed">
              <div className="hover:text-xl hover:font-semibold">The department of Data Science and Business Systems (DSBS) started
              in 2021 with the primary objective of producing leaders and
              skilled professionals in Data Science and Business Systems to meet
              the growing demand for Data Scientists, Data Engineers and
              Business Analysts in India and worldwide. Every business is driven
              by data in today’s evolving technological world. The department
              ensures the students have strong fundamentals in theory, project
              experience in various data science related tools and technologies,
              and domain knowledge in mathematics, business system and
              engineering science.</div>
              <br />
              <div className='bg-scroll bg-center h-80 bg-no-repeat my-10' style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/f/fe/Srmseal.png')"}}>
                
              </div>
              <div className="hover:text-xl hover:font-semibold">
              As per the industry requirement department
              offers the following courses, UG - B.Tech in “Computer Science and
              Business System (Jointly with TCS), Computer Science and
              Engineering Specialization in Gaming Technology/ Block Chain
              Technology / Big Data Analytics / Data Science”; Integrated PG
              course M.Tech in Computer Science and Engineering Specialization
              in Data Science and PG courses M. Tech in Big Data Analytics /
              Data Science / Data Engineering.</div> <br />
              <div className="hover:text-xl hover:font-semibold">The department has 37 teaching faculty with multidisciplinary
              expertise. More than 95% percent of the faculty have completed
              their doctorate, and remaining members are pursuing Ph.D. The
              department has collaborative projects with national and
              international agencies worth more than ₹ 50 lakhs. 22 research
              scholars pursuing their Ph.D. (Full Time) in the department with
              stipend provided by SRMIST. To pronote the research culture, the
              department organizes a weekly seminar titled “Jeffrey Ullman
              Colloquium” for the research scholars.</div><br />
              <div className="hover:text-xl hover:font-semibold">The department offers special elective courses jointly with visiting
               professors working
              overseas institutes and industry. Also having joint research
              projects with various overseas universities including Dalhousie
              University, National Chung Chang University-Taiwan, New Castle
              University- Australia, Oakland University -USA, University of
              Saskatchewan, Canada, Skolkovo Institute of Science and
              Technology, Russia. The department is in discussion with several
              Data Science and Business Analytics companies for internship and
              academic collaborations.</div>
               
            </h1>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="absolute top-8 lg:sticky">
            <Categories />
            <HomeFacts />
          </div>   */}
        
    </>
  )
}
