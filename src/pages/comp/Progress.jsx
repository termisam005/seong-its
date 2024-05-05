import React from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';

import PopupComponent from '../../components/popup/PopupComponent';
import SnackBarComponent from '../../components/common/SnackBarComponent';
import NotificComponent from '../../components/common/NotificComponent';
import BoardTitle from '../../components/layout/BoardTitle';


const Popup = () => {

    return (
    <div className='guide_back'>
        <div className='guide_wrap'>
            
            <Header>
                <HeaderLeft />
                <GnbComponents />
                <HeaderRight>
                    <ProfileComponent />
                </HeaderRight>
            </Header>

            <div className='guide_center width1720'>

                <article className='guide_top'>
                    <h1>Progress</h1>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top flex_wrap">
                        <h2>Ring</h2>
                    </div>
                    <section className="comp_conts dflx col_gap60">
                        <div>
                            <p className="m-t-10 fc_grey60 fs_12">Large 120px</p>
                            <ImgComponent src={'ring_large.png'} className={'spin_animation m-t-20'} />
                        </div>
                        <div>
                            <p className="m-t-10 fc_grey60 fs_12">Small(40px)</p>
                            <div className="dflx_ac_jcent m-t-40">
                                <ImgComponent src={'ring_small.png'} className={'spin_animation m-t-20'} />
                            </div>
                        </div>
                    </section>

                    <div className="comp_top flex_wrap m-t-80">
                        <h2>Progress bars</h2>
                    </div>
                    <section className="comp_conts m-t-20">
                        <div className="progress_bar w320 h4">
                            <div className="progress_percetage"></div>
                        </div>
                        <div className="fc_primary fs_14_bold m-t-10 text_shadow50 loading_text_animation">
                            Loading...
                        </div>
                    </section>
                </article>
            </div>

        </div>
      </div>
    );
};

export default Popup;
