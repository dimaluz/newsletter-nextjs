import Header from "@/shared/widgets/header/header"
import Banner from "./features/banner"
import FeatureHighlight from "./features/feature-highlight"
import Pricing from "./features/pricing"

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <FeatureHighlight />
            <Pricing />
        </div>
    )
}

export default Home