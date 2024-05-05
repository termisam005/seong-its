import React from 'react';
import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import TooltipComponent from '../../components/common/TooltipComponent';


const Tooltip = () => {

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
                    <h1>Tooltip</h1>
                </article>

                <article class="Gr_contents m-t-100">
                    <div class="comp_top flex_wrap">
                        <p class="w-100 m-t-12 lh_21">
                            아이콘버튼 등을 <span className='fc_yellow'>Hover 시 버튼과 인접하여 노출</span><br/>
                            w: 콘텐츠에 맞춤, H:고정
                        </p>
                    </div>
                    
                    <div class="dflx_as col_gap200">
                        <div>
                            <p class="fs_bold m-b-30">Default</p>
                            <div className="tooltip_parents">                            
                                <TooltipComponent className={'tooltip_label on'} txt={'Tooltip'} />
                            </div>
                            <div class="tab_line m-l-100">
                                <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m tooltip_parents selected'}>
                                    <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24 op04'} src={'layer_fff_24.svg'} />
                                    <TooltipComponent className={'tooltip_label'} txt={'레이어 관리'} />
                                </ButtonWithComponent>
                                <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                    <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24'} src={'legend_sky_24.svg'} />
                                    <TooltipComponent className={'tooltip_label'} txt={'범례'} />
                                </ButtonWithComponent>
                                <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                    <ImgComponent className={'img w24 op04'} src={'linked_group_fill_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24'} src={'linked_group_fill_sky_24.svg'} />
                                    <TooltipComponent className={'tooltip_label'} txt={'연동그룹'} />
                                </ButtonWithComponent>
                            </div>
                        </div>      
                        <div class="m-l-100">
                            <p class="fs_bold m-b-30">Bubble</p>
                            <div class="dflx">
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_bottom bb_black on'} txt={'Tooltip'} />
                                </div>
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_top bb_black on'} txt={'Tooltip'} />
                                </div>
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_right bb_black on'} txt={'Tooltip'} />
                                </div>
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_left bb_black on'} txt={'Tooltip'} />
                                </div>
                            </div>
                            <div class="dflx m-t-40">
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_bottom bb_blue on'} txt={'Tooltip'} />
                                </div>
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_top bb_blue on'} txt={'Tooltip'} />
                                </div>
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_right bb_blue on'} txt={'Tooltip'} />
                                </div>
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_left bb_blue on'} txt={'Tooltip'} />
                                </div>
                            </div>
                            <div className="dflx m-t-40">
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_bottom bb_grey on'} txt={'Tooltip'} />
                                </div>
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_top bb_grey on'} txt={'Tooltip'} />
                                </div>
                                <div class="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_right bb_grey on'} txt={'Tooltip'} />
                                </div>
                                <div className="tooltip_parents w80">                            
                                    <TooltipComponent className={'tooltip_label bubble bb_left bb_grey on'} txt={'Tooltip'} />
                                </div>
                            </div>
                        </div>                 
                    </div>
                </article>

            </div>

        </div>
      </div>
    );
};

export default Tooltip;
