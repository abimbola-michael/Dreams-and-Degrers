import { programsUtils} from "../../components/utils"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"


export default function P_side(){

    const router = useRouter()

    return(
        <>
             <div className="pb-[60px] md:pb-0 md:pr-[60px] md:w-[300px] xl:w-[650px] border-[#A0AEC0] md:border-b-0 border-b-[0.5px]">
                        <h1 className="text-42 md:text-56 text-[#343232] font-[700] md:text-left text-center leading-[61px] mb-[64px] font-paytone">Our <br className="hidden md:block" /> <span className='text-pry'>programs</span></h1>
                        {programsUtils.map((program, index) => {
                            return (
                                <Link href="/programs/[id]" as={`/programs/${program.id}`} key={program.id}>
                                    <a >
                                        <div  className={`${parseInt(router.query.id) === program.id ? "bg-[#E7E5EA]  border-[0.682471px] border-[#D68676]" : "transparent"} font-fellix mb-[16.3px] hover:bg-[#E7E5EA] border-[#E7E5EA] transition duration-100 cursor-pointer flex items-center rounded-[21.8391px] p-[22px] hover:border-[#D68676] border-[0.682471px]`}>
                                            <div className="relative w-[22px] h-[22px] mr-[18px]">
                                                <Image src={program.image} alt="category" layout="fill" quality={100}  priority />
                                            </div>
                                            <p className="text-14 text-[#1A202C] font-[700] leading-[19px] grow">{program.text}</p>
                                        </div>
                                    </a>
                                </Link>
                            )
                        })}
                        
                </div>
        </>
    )

}