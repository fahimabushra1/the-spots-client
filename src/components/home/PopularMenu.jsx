import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
    const subHeading = 'popular item';
    const [menu, setMenu]=useState([]);
    useEffect(()=>{
        fetch('../../../menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems = data.filter(item => item.category==='popular')
            setMenu(popularItems)
        })
    },[])
    return (
     <section className="mb-12">
        <SectionTitle>
        subHeading={subHeading}
        heading={'from our menu'}
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item=>
                    <MenuItem
                    key={item._id}
                    item={item}/>
                )
            }
        </div>
     </section>
    );
};

export default PopularMenu;