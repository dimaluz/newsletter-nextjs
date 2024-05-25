import Header from "@/shared/widgets/header/header"
import Banner from "./elements/banner"
import FeatureHighlight from "./elements/feature-highlight"
import Pricing from "./elements/pricing"
import Footer from "@/shared/widgets/footer/footer"

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <FeatureHighlight />
            <Pricing />
            <Footer />
        </div>
    )
}

export default Home