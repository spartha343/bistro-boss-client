import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading='Featured Item'
                subHeading='Check it out'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can I get some ?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero iusto labore, accusamus magni cupiditate eos quisquam exercitationem ea enim consequatur voluptatem, praesentium id molestias quod soluta animi explicabo cumque, facere quibusdam reprehenderit! Accusamus quos molestiae delectus impedit eos porro repellendus nisi? Ipsa explicabo sed nobis ut nemo quos quia nihil?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;