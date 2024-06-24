import SectionTitle from "../SectionTitle";
import featured from '../../assets/home/featured.jpg';

const Featured = () => {
    return (
       <section>
        <SectionTitle>
        subHeading={'check it out'}
        heading={'featured item'}
        </SectionTitle>
<div>
  <div>
  <img src={featured} alt="" />
  </div>
  <div>
    <p>Aug 20,2029</p>
    <p className="uppercase">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maxime magni enim totam sit et quaerat sunt mollitia expedita beatae vitae at vero, aut debitis reprehenderit. Incidunt aut esse ducimus, corporis dignissimos dolorum nobis voluptas, nemo nisi numquam modi omnis aliquid vel et ex officia odio! Fugit natus iste numquam?</p>
    <button className="btn btn-outline">order now</button>
  </div>
</div>
       </section>
    );
};

export default Featured;