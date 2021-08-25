import { Grid } from '@material-ui/core';
import React from 'react';
import './Content.css'

import TourList from '../Tour/TourList';

const Content = () => {
    return (
        <>
        <Grid>
            <TourList/>
        </Grid>
            <div><img src="https://eturbonews.com/wp-content/uploads/2020/10/0a1-190.jpg" className='foto'/></div>
            {/* <span className="spa">
            <img src="https://eturbonews.com/wp-content/uploads/2020/10/0a1-190.jpg" className='foto'/>
            </span> */}
            <span className='texxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla accusamus tempora qui explicabo facere! Expedita vitae cum exercitationem voluptatibus doloremque! Minus dolores tenetur inventore eos corporis obcaecati quaerat neque.
            Tempore minus corrupti voluptatem saepe obcaecati nostrum fugiat est doloremque magnam ex soluta autem aspernatur quos odit, in incidunt delectus, dolores sit deleniti totam error vero dicta possimus? Deleniti, numquam?
            Quis voluptatibus sunt fugiat aut ea unde quod voluptate neque architecto quibusdam eos porro magnam quisquam, non earum amet. Quam cum doloremque maxime. Sed dignissimos adipisci rerum consequuntur vel facilis.
            Nostrum unde corrupti, asperiores voluptatibus dolores dolorem eveniet odit inventore, voluptatum ab amet commodi quia, veritatis ducimus debitis accusamus cumque hic totam deserunt. Pariatur alias ullam qui, ipsa non saepe?
            Nobis, ipsum at. Repudiandae, numquam. Perferendis consectetur sint cumque voluptate quaerat magni laudantium expedita debitis numquam rem. Excepturi sit, ut aperiam, maxime dolore iusto similique magnam deleniti nulla iure illo?
            Assumenda recusandae corporis omnis ipsa quibusdam quidem totam labore laboriosam in accusantium, excepturi placeat aliquam vitae deserunt neque repellat nemo fugiat sequi, cupiditate porro culpa molestias perspiciatis? Eum, debitis voluptatum?
            Est minima iste, molestias eos excepturi eum odit non mollitia aspernatur dolorem earum incidunt numquam omnis recusandae dolor exercitationem. Nam, minima! Illum rerum provident asperiores dicta non quasi distinctio veniam.
            </span>
        </>
    );
};

export default Content;