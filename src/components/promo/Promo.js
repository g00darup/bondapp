import PromoHeading from "./PromoHeading";
const data = {
    heading: "99% of all items must go",
    callToAction: "Everything must go!"
  }

function Promo() {
    return (
        <div>
            <PromoHeading
            heading={data.heading}
            callToAction={data.callToAction}/>
        </div>
    )
}

export default Promo;