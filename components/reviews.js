import Image from "next/image"
import { review_utils } from "./utils"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { RightQuoteIcon , LeftQuoteIcon} from "./icons/icons";


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


export default function Reviews(){


    return(
        <>
         <div className="flex relative">
             <OwlCarousel autoWidth={true} autoplay={true} loop={true} autoplayTimeout={4000} nav={true}>
             { review_utils.map((review, index) => {
                        return(
                            <div key={index} className="border-[#E8E9ED] border-[1.5px]  w-[320px] md:w-[420px] rounded-[20px] p-[20px] flex justify-center flex-col items-center text-center mr-[16px]">
                                <div className="w-[88px] h-[88px] rounded-full relative mb-[8px] overflow-hidden">
                                    <Image src={review.image} objectFit="cover" alt={review.name} />
                                </div>
                                <p className="text-16 font-[700] text-[#1B1C20]">{review.name}</p>
                                <p  className="text-12 font-[400] text-[#D68676] mt-[8px] mb-[11px]">{review.profession}</p>
                                <article className="review_article relative">
                                    <div className="leftquoteicon absolute top-0 -left-[10px]">
                                        <LeftQuoteIcon />
                                    </div>
                                    <div className="rightquoteicon absolute bottom-0 right-[10px]">
                                        <RightQuoteIcon />
                                    </div>
                                    <p className="text-14 font-[500] leading-[20px] text-para2 px-8 z-10 relative">{review.review}</p>
                                </article>
                            </div>
                        )
                    }) }
             </OwlCarousel>
        </div>
        </>
      
    )

}