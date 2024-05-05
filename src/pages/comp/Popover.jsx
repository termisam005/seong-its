import React from 'react';
import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';

import PopoverContainerScroll from '../../components/popup/PopoverContainerScroll';
import PopoverContainer1 from '../../components/popup/PopoverContainer1';
import PopoverContainer2 from '../../components/popup/PopoverContainer2';
import PopoverTitle from '../../components/popup/PopoverTitle';
import PopoverContents from '../../components/popup/PopoverContents';
import PlacementComponent from '../../components/popup/PlacementComponent';
import CheckComponent from '../../components/common/CheckComponent';
import AccordionComponent from '../../components/accordion/AccordionComponent';
import ToggleComponent from '../../components/common/ToggleComponent';
import ButtonComponent from '../../components/common/ButtonComponent';



const Popover = () => {

    //라디오 탭
    const [radioIndi, setRadioIndi] = useState(1);
    const tabIndi = (index) =>{
        setRadioIndi(index);
    }
    const [radioDator, setRadioDator] = useState(1);
    const tabDator = (index) => {
        setRadioDator(index);
    }

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
                    <h1>Popover</h1>
                </article>

                <article class="Gr_contents">
                    <div class="comp_top flex_wrap">
                        <h2>Layout</h2>
                        <p class="w-100 m-t-12 lh_21">width 최대 320px, 콘텐츠 양에 맞춰 축소 가능 (최소없음)<br/>
                            버튼 위치에 따라 열림 방향 조정</p>
                    </div>
                    <section class="comp_conts grid_column3">
                        <div>
                            <div class="fs_13 m-b-12">
                                Padding
                            </div>
                            {/* Placement Scroll 예시 */}
                            <PopoverContainerScroll className={'popover_box h325 dflx'} scroll />
                        </div>
                        <div>
                            <div class="fs_13 m-b-12">
                                일반 콘텐츠 간격
                            </div>
                            {/* Layout 예시1 */}
                            <PopoverContainer1 className={"popover_box dflx h282"} />
                        </div>
                        <div>
                            <div class="fs_13 m-b-12">
                                아코디언 콘텐츠 간격
                            </div>
                            {/* Layout 예시2 */}
                            <PopoverContainer2 className={"popover_box dflx h400"} />
                        </div>
                    </section>
                </article>

                <article class="Gr_contents m-t-140">
                    <div class="comp_top flex_wrap">
                        <h2>Placement</h2>
                        <p class="w-100 m-t-12">버튼 위치에 따라 열림 방향 조정</p>
                    </div>
                    <section class="comp_conts grid_column4">

                        <div className="popover_box dflx w320 h183">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected'}>
                                <ImgComponent className={'img w24'} src={'layer_fff_24.svg'} />
                                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            </ButtonWithComponent>
                            <PlacementComponent boxClass={'w320 show placement bottom left'} 
                            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'}>
                                <div className={'popover_contents'}>
                                    <div className="scroll h100">
                                    </div>
                                </div>
                            </PlacementComponent>
                        </div>  

                        <div className="popover_box dflx w320 h183">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected m-l-a'}>
                                <ImgComponent className={'img w24'} src={'layer_fff_24.svg'} />
                                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            </ButtonWithComponent>
                            <PlacementComponent boxClass={'w320 show placement bottom right'} 
                            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'}>
                                <div className={'popover_contents'}>
                                    <div className="scroll h100">
                                    </div>
                                </div>
                            </PlacementComponent>
                        </div>

                        <div className="popover_box dflx w320 h227">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected m-t-a'}>
                                <ImgComponent className={'img w24'} src={'layer_fff_24.svg'} />
                                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            </ButtonWithComponent>
                            <PlacementComponent boxClass={'w320 show placement left_bottom'} 
                            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'}>
                                <div className={'popover_contents'}>
                                    <div className="scroll h100">
                                    </div>
                                </div>
                            </PlacementComponent>
                        </div>

                        <div className="popover_box dflx w364 h240">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected m-l-a m-t-a'}>
                                <ImgComponent className={'img w24'} src={'layer_fff_24.svg'} />
                                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            </ButtonWithComponent>
                            <PlacementComponent boxClass={'w320 show placement right_bottom'} 
                            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'}>
                                <div className={'popover_contents'}>
                                    <div className="scroll h100">
                                    </div>
                                </div>
                            </PlacementComponent>
                        </div>

                        <div className="popover_box dflx w320 h282">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected m-t-a'}>
                                <ImgComponent className={'img w24'} src={'layer_fff_24.svg'} />
                                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            </ButtonWithComponent>
                            <PlacementComponent boxClass={'w320 show placement left top'} 
                            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'}>
                                <div className={'popover_contents'}>
                                    <div className="scroll h100">
                                    </div>
                                </div>
                            </PlacementComponent>
                        </div>
                        <div className="popover_box dflx w320 h282">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected m-t-a m-l-a'}>
                                <ImgComponent className={'img w24'} src={'layer_fff_24.svg'} />
                                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            </ButtonWithComponent>
                            <PlacementComponent boxClass={'w320 show placement left top'} 
                            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'}>
                                <div className={'popover_contents'}>
                                    <div className="scroll h100">
                                    </div>
                                </div>
                            </PlacementComponent>
                        </div>

                        <div className="popover_box dflx w364 m-t-60">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected'}>
                                <ImgComponent className={'img w24'} src={'layer_fff_24.svg'} />
                                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            </ButtonWithComponent>
                            <PlacementComponent boxClass={'w320 show placement left_top'} 
                            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'}>
                                <div className={'popover_contents'}>
                                    <div className="scroll h100">
                                    </div>
                                </div>
                            </PlacementComponent>
                        </div>
                        <div className="popover_box dflx w364 m-t-60">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected m-l-a'}>
                                <ImgComponent className={'img w24'} src={'layer_fff_24.svg'} />
                                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            </ButtonWithComponent>
                            <PlacementComponent boxClass={'w320 show placement right_top'} 
                            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'}>
                                <div className={'popover_contents'}>
                                    <div className="scroll h100">
                                    </div>
                                </div>
                            </PlacementComponent>
                        </div>
                    </section>
                </article>

                <article class="Gr_contents m-t-100">
                    <div class="comp_top flex_wrap">
                        <h2>Usage</h2>
                    </div>
                    <section class="dflx m-t-12">
                        <div>
                            <p class="fs_bold m-t-10 m-b-25">Contents(legend)</p>
                            <div className="dflx col_gap40 ">
                                <div>
                                    <p class="fc_grey60 fs_13 m-b-16">
                                        콘텐츠 정렬 예시
                                    </p>
                                    <div class="popover_box w320">
                                        <PopoverTitle titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'범례'} />
                                        <PopoverContents className={'popover_contents'}>
                                            <div class="fs_13_medium fc_white m-b-12">이벤트</div>
                                            <div class="grid_column2 gap_row10 p-b-24">
                                                <div class="dflx_ac gap_8">
                                                    <ImgComponent className={'w28'} src={'legend_car_accident_28.svg'} />
                                                    <span class="fs_12">사고</span>
                                                </div>
                                                <div class="dflx_ac gap_8">
                                                    <ImgComponent className={'w28'} src={'legend_weather_28.svg'} />
                                                    <span class="fs_12">기상</span>
                                                </div>
                                                <div class="dflx_ac gap_8">
                                                    <ImgComponent className={'w28'} src={'legend_construction_28.svg'} />
                                                    <span class="fs_12">공사</span>
                                                </div>
                                                <div class="dflx_ac gap_8">
                                                    <ImgComponent className={'w28'} src={'legend_event_28.svg'} />
                                                    <span class="fs_12">행사</span>
                                                </div>
                                                <div class="dflx_ac gap_8">
                                                    <ImgComponent className={'w28'} src={'legend_etc_28.svg'} />
                                                    <span class="fs_12">기타</span>
                                                </div>    
                                            </div>
                                            <div class="fs_13_medium fc_white m-b-12">교통 시설</div>
                                            <div class="grid_column2 gap_row8 p-b-24">
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'vms_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'vms_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">VMS</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'anpr_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'anpr_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">번호인식검지기</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'cctv_fff_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'cctv_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">교통 CCTV</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'vds_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'vds_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">영상검지기</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'dsrc_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'dsrc_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">DSRC</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'edge_box_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'edge_box_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">엣지박스</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'radar_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'radar_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">레이더검지기</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'smart_cctv_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'smart_cctv_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">스마트CCTV</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'pims_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'pims_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">PIMS</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'oldcar_monitoring_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'oldcar_monitoring_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">노후차량단속카메라</span>
                                                </ButtonWithComponent>
                                            </div>
                                            <div class="fs_13 fc_white m-b-12">운영 상태</div>
                                            <div class="grid_column2 p-b-24">
                                                <div class="dflx_ac gap_10">
                                                    <ImgComponent className={'img'} src={'cctv_state_normal_28.svg'} />
                                                    <span class="fs_12">정상</span>
                                                </div>                                    
                                                <div class="dflx_ac gap_10">
                                                    <ImgComponent className={'img'} src={'cctv_state_error_28.svg'} />
                                                    <span class="fs_12">장애</span>
                                                </div>
                                            </div>                                
                                            <section>
                                                <div class="dflx_ac_jbet m-b-12 ">
                                                    <div class="fs_13_medium fc_white">소통정보(시군도)</div>
                                                    <div class="fs_12 fc_grey60">(단위 : km/h)</div>
                                                </div>
                                                <div class="grid_column3">
                                                    <div>
                                                        <div class="dust_color02 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">원활</span>
                                                            <span>26 이상</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color03 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">보통</span>
                                                            <span>16 이상</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color04 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">정체</span>
                                                            <span>15 이하</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </section>                           
                                            <section>
                                                <div class="dflx_ac_jbet m-t-24 m-b-12 ">
                                                    <div class="fs_13_medium fc_white">소통정보(고속도로)</div>
                                                    <div class="fs_12 fc_grey60">(단위 : km/h)</div>
                                                </div>
                                                <div class="grid_column3">
                                                    <div>
                                                        <div class="dust_color02 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">원활</span>
                                                            <span>81 이상</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color03 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">서행</span>
                                                            <span>41 이상</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color04 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">정체</span>
                                                            <span>40.9 이하</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div class="dflx_ac_jbet m-t-24 m-b-12 ">
                                                    <div class="fs_13_medium fc_white">교차로 교통정보</div>
                                                    <div class="fs_12 fc_grey60">(단위 : level)</div>
                                                </div>
                                                <div class="grid_column6">
                                                    <div>
                                                        <div class="dust_color02 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">A</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color02_1 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">B</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color03 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">C</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color03_1 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">D</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color03_2 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">E</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="dust_color04 h12"></div>
                                                        <p class="tac fs_12 fc_white m-t-4">
                                                            <span class="dpblock lh_18">F</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </section>
                                        </PopoverContents>
                                    </div>
                                </div>

                                <div>
                                    <p class="fc_grey60 fs_13 m-b-16">
                                        width 콘텐츠 맞춤
                                    </p>
                                    <div class="dflx_ac">
                                        <div class="popover_box">
                                            <PopoverTitle titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'시설물'} />
                                            <PopoverContents className={'popover_contents'}>
                                                <div class="grid_wauto">
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'vds_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'vds_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">VDS</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'dsrc_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'dsrc_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">DSRC-RSE</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'cctv_fff_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'cctv_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">CCTV</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'anpr_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'anpr_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">ANPR</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'rwis_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'rwis_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">RWIS</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'parking_camera_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'parking_camera_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">WebCamera</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'vms_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'vms_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">VMS</span>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                    <span class="circle_grey28">
                                                        <ImgComponent className={'img w20'} src={'signal_20.svg'} />
                                                        <ImgComponent className={'img_on w20'} src={'signal_fill_sky_20.svg'} />
                                                    </span>
                                                    <span class="fs_12">신호등</span>
                                                </ButtonWithComponent>
                                                </div>
                                            </PopoverContents>                  
                                        </div>
                                    </div>
                                    <div class="dflx_ac">
                                        <div class="popover_box m-t-16">
                                            <PopoverTitle titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'데이터'} />
                                            <PopoverContents className={'popover_contents'}>
                                                <div class="dflx_column gap_18">
                                                    <p className={radioDator === 1? "ch_radio p-0 on" : "ch_radio p-0"} onClick={() => tabDator(1)}>
                                                        <span className="radio"></span>
                                                        <span className="word">전체 네트워크</span>
                                                    </p>
                                                    <p className={radioDator === 2? "ch_radio p-0 on" : "ch_radio p-0"} onClick={() => tabDator(2)}>
                                                        <span className="radio"></span>
                                                        <span className="word">권역별 네트워크</span>
                                                    </p>
                                                    <p className={radioDator === 3? "ch_radio p-0 on" : "ch_radio p-0"} onClick={() => tabDator(3)}>
                                                        <span className="radio"></span>
                                                        <span className="word">연동 그룹</span>
                                                    </p>
                                                </div>
                                            </PopoverContents>                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-l-120'>
                            <p class="fs_bold m-t-10 m-b-25">Accordion</p>
                            <section class="comp_conts dflx col_gap40 m-t-12">
                                <div>
                                    <p className='fc_grey60 fs_13 m-b-16'>Close</p>
                                    <div class="popover_box w320">
                                        <PopoverTitle titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'시설관제 설정'} />

                                        <PopoverContents className={'popover_contents p-0'}>

                                            <AccordionComponent accordClass={'accordion_block default btm_white20'} accordTitle={'소통지도 설정'} normal>
                                                <div class="dflx_ac h36">
                                                    <ToggleComponent>
                                                        <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                        <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                    </ToggleComponent>
                                                    <span class="fs_14 m-l-16">행정동 경계</span>
                                                </div>
                                                <div class="dflx_ac h36">
                                                    <ToggleComponent>
                                                        <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                        <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                    </ToggleComponent>
                                                    <span class="fs_14 m-l-16">도로</span>
                                                </div>
                                            </AccordionComponent>

                                            <AccordionComponent accordClass={'accordion_block default btm_white20'} accordTitle={'운영상태 설정'} normal>
                                                <div class="dflx_ac h36">
                                                    <ToggleComponent>
                                                        <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                        <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                    </ToggleComponent>
                                                    <span class="fs_14 m-l-16">장애</span>
                                                </div>
                                                <div class="dflx_ac h36">
                                                    <ToggleComponent>
                                                        <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                        <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                    </ToggleComponent>
                                                    <span class="fs_14 m-l-16">정상</span>
                                                </div>
                                            </AccordionComponent>

                                            <AccordionComponent accordClass={'accordion_block default btm_white20'} accordTitle={'교통시설 설정'} scroll>
                                                <div class="h200 scroll p-r-14">
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 주정차단</span>
                                                    </div>
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 단거리 전용무선 통신기</span>
                                                    </div>
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 영상감지기</span>
                                                    </div>
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 노변경고</span>
                                                    </div>
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 레이더검지기</span>
                                                    </div>

                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 레이더검지기</span>
                                                    </div>
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 레이더검지기</span>
                                                    </div>
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 레이더검지기</span>
                                                    </div>
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 레이더검지기</span>
                                                    </div>
                                                    <div class="dflx_ac h36">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <span class="fs_14 m-l-16">(기) 레이더검지기</span>
                                                    </div>
                                                </div>
                                            </AccordionComponent>

                                        </PopoverContents>
                                    </div>
                                    <p className='fc_grey60 fs_13 m-t-40 m-b-16'>Open</p>
                                    <div class="popover_box w320">
                                        <PopoverTitle titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'시설관제 설정'} />

                                        <PopoverContents className={'popover_contents p-0'}>
                                            <div class="dflx_column gap_2">

                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="fs_14 fc_white">소통지도 설정</div>
                                                        <button class="accordion_toggle on h20" type="button">
                                                            <ImgComponent className={'accordion_up w20"'} src={'arrow_up_fff_20.svg'} />
                                                            <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                        </button>
                                                    </div>
                                                    <div class="accordion_contents show">
                                                        <div class="dflx_ac h36">
                                                            <div class="toggle on">
                                                                <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                            </div>
                                                            <span class="fs_14 m-l-16">행정동 경계</span>
                                                        </div>
                                                        <div class="dflx_ac h36">
                                                            <div class="toggle">
                                                                <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                            </div>
                                                            <span class="fs_14 m-l-16">도로</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="fs_14 fc_white">운영상태 설정</div>
                                                        <button class="accordion_toggle on h20" type="button">
                                                            <ImgComponent className={'accordion_up w20"'} src={'arrow_up_fff_20.svg'} />
                                                            <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                        </button>
                                                    </div>
                                                    <div class="accordion_contents show">
                                                        <div class="dflx_ac h36">
                                                            <div class="toggle on">
                                                                <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                            </div>
                                                            <span class="fs_14 m-l-16">장애</span>
                                                        </div>
                                                        <div class="dflx_ac h36">
                                                            <div class="toggle">
                                                                <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                            </div>
                                                            <span class="fs_14 m-l-16">정상</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="fs_14 fc_white">교통시설 설정</div>
                                                        <button class="accordion_toggle on h20" type="button">
                                                            <ImgComponent className={'accordion_up w20"'} src={'arrow_up_fff_20.svg'} />
                                                            <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                        </button>
                                                    </div>
                                                    <div class="accordion_contents show p-r-6">
                                                        <div class="h200 scroll p-r-14">
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle on">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 주정차단</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 단거리 전용무선 통신기</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 영상감지기</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 노변경고</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 레이더검지기</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 운전자용 버스 정보 안내기</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 단거리 전용무선 통신기</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 영상감지기</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 노변경고</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 레이더검지기</span>
                                                            </div>
                                                            <div class="dflx_ac h36">
                                                                <div class="toggle">
                                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                                </div>
                                                                <span class="fs_14 m-l-16">(기) 운전자용 버스 정보 안내기</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </PopoverContents>
                                    </div>
                                </div>
                                <div>                                    
                                    <p className='fc_grey60 fs_13 m-b-16'>Lv.2 open</p>
                                    <div class="popover_box w320 show placement top left">
                                        <PopoverTitle titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'레이어 관리'} />

                                        <PopoverContents className={'popover_contents p-0'}>
                                            <div class="dflx_column gap_2">
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="toggle on">
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </div>
                                                        <div class="m-l-16">
                                                            <ImgComponent className={'w20'} src={'crossroad_name_fff_20.svg'} />
                                                        </div>
                                                        <div class="fs_14 fc_white m-l-8">교차로명</div>
                                                        <button class="accordion_toggle on h20 m-l-a" type="button">
                                                            <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                            <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                        </button>
                                                    </div>
                                                    <div class="accordion_contents inner show">
                                                        <div class="p-t-10 p-b-12">
                                                            <div class="dflx_ac">
                                                                <div class="w50 fs_11">색상</div>
                                                                <div class="map_color__tag label_color15"></div>
                                                            </div>
                                                            <div class="dflx_ac m-t-20">
                                                                <div class="w50 fs_11">크기</div>
                                                                <div class="flex1">
                                                                    <div class="map_control_line ">
                                                                        <div class="map_control_rate h14 m-b-4 w-40">
                                                                            <div class="rate_block"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="toggle on">
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </div>
                                                        <div class="m-l-16">
                                                            <ImgComponent className={'w20'} src={'car_line_fff_20.svg'} />
                                                        </div>
                                                        <div class="fs_14 fc_white m-l-8">개별차량 아이콘</div>
                                                        <button class="accordion_toggle on h20 m-l-a" type="button">
                                                            <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                            <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                        </button>
                                                    </div>
                                                    <div class="accordion_contents show accordion_level2 p-0">
                                                        <div class="accordion_contents show">
                                                            <div class="p-t-10 p-b-12">
                                                                <div class="dflx_ac gap_20">
                                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'car01'} name={'sample_car01'} 
                                                                    labelClass={'fs_13'} txt={'개별차량'} checked={true} />
                                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'car02'} name={'sample_car01'} 
                                                                    labelClass={'fs_13'} txt={'속도'} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="toggle on">
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </div>
                                                        <div class="m-l-16">
                                                            <ImgComponent className={'w20'} src={'car_line_fff_20.svg'} />
                                                        </div>
                                                        <div class="fs_14 fc_white m-l-8">개별차량 아이콘</div>
                                                        <button class="accordion_toggle on h20 m-l-a" type="button">
                                                            <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                            <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                        </button>
                                                    </div>
                                                    <div class="accordion_contents show accordion_level2 p-0">
                                                        <div class="accordion_title accord_title_in dflx_ac">
                                                            <div class="fs_14">표출지표</div>
                                                            <button class="accordion_toggle on h20 m-l-a" type="button">
                                                                <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                                <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                            </button>
                                                        </div>
                                                        <div class="accordion_contents show">
                                                            <div class="p-t-5 p-b-12">
                                                                <div class="dflx_ac gap_20">
                                                                    <p className={radioIndi === 1? "ch_radio p-0 on" : "ch_radio p-0"} onClick={() => tabIndi(1)}>
                                                                        <span className="radio"></span>
                                                                        <span className="word">개별차량 궤적</span>
                                                                    </p>
                                                                    <p className={radioIndi === 2? "ch_radio p-0 on" : "ch_radio p-0"} onClick={() => tabIndi(2)}>
                                                                        <span className="radio"></span>
                                                                        <span className="word">세그먼트</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion_title accord_title_in dflx_ac">
                                                            <div class="fs_14">히트맵 색상</div>
                                                            <button class="accordion_toggle on h20 m-l-a" type="button">
                                                                <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                                <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                            </button>
                                                        </div>
                                                        <div class="accordion_contents show p-b-12">
                                                            <div class="dflx_ac_jbet p-t-2 p-b-2">
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color01" name="sample_heat" checked hidden />
                                                                    <label for="heat_color01">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color1.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color02" name="sample_heat" hidden />
                                                                    <label for="heat_color02">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color2.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="dflx_ac_jbet p-t-2 p-b-2">
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color03" name="sample_heat" hidden />
                                                                    <label for="heat_color03">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color3.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color04" name="sample_heat" hidden />
                                                                    <label for="heat_color04">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color4.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="dflx_ac_jbet p-t-2 p-b-2">
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color05" name="sample_heat" hidden />
                                                                    <label for="heat_color05">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color5.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color06" name="sample_heat" hidden />
                                                                    <label for="heat_color06">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color6.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="dflx_ac_jbet p-t-2 p-b-2">
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color07" name="sample_heat" hidden />
                                                                    <label for="heat_color07">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color7.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color08" name="sample_heat" hidden />
                                                                    <label for="heat_color08">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color8.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="dflx_ac_jbet p-t-2 p-b-2">
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color09" name="sample_heat" hidden />
                                                                    <label for="heat_color09">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color9.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color10" name="sample_heat" hidden />
                                                                    <label for="heat_color10">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color10.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="dflx_ac_jbet p-t-2 p-b-2">
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color11" name="sample_heat" hidden />
                                                                    <label for="heat_color11">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color11.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div class="radio_type dflx_ac">
                                                                    <input type="radio" id="heat_color12" name="sample_heat" hidden />
                                                                    <label for="heat_color12">
                                                                        <div class="w80">
                                                                            <ImgComponent className={'w-100'} src={'heat_color12.svg'} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="toggle">
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </div>
                                                        <div class="m-l-16">
                                                            <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                        </div>
                                                        <div class="fs_14 fc_white m-l-8">신호패턴</div>
                                                        <div class="m-l-a"></div>
                                                    </div>
                                                </div>
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="toggle">
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </div>
                                                        <div class="m-l-16">
                                                            <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                        </div>
                                                        <div class="fs_14 fc_white m-l-8">CI, 교차로 서비스 수준</div>
                                                        <div class="m-l-a"></div>
                                                    </div>
                                                </div>
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="toggle on">
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </div>
                                                        <div class="m-l-16">
                                                            <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                        </div>
                                                        <div class="fs_14 fc_white m-l-8">소통정보 3D</div>
                                                        <button class="accordion_toggle on h20 m-l-a" type="button">
                                                            <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                            <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                        </button>
                                                    </div>
                                                    <div class="accordion_contents show accordion_level2 p-0">
                                                        <div class="accordion_contents show">
                                                            <div class="p-t-10 p-b-12">
                                                                <div class="dflx_ac gap_20">
                                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm01'} name={'sample_comm01'} 
                                                                    labelClass={'fs_13'} txt={'속도'} checked />
                                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm02'} name={'sample_comm01'} 
                                                                    labelClass={'fs_13'} txt={'교통량'} />
                                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm03'} name={'sample_comm01'} 
                                                                    labelClass={'fs_13'} txt={'시간점유율'} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac_jbet">
                                                        <div class="toggle on">
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </div>
                                                        <div class="m-l-16">
                                                            <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                        </div>
                                                        <div class="fs_14 fc_white m-l-8">소통정보 2D</div>
                                                        <button class="accordion_toggle on h20 m-l-a" type="button">
                                                            <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                            <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                        </button>
                                                    </div>
                                                    <div class="accordion_contents show accordion_level2 p-0">
                                                        <div class="accordion_contents show">
                                                            <div class="p-t-10 p-b-12">
                                                                <div class="dflx_ac gap_20">
                                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm04'} name={'sample_comm02'} 
                                                                    labelClass={'fs_13'} txt={'속도'} checked />
                                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm05'} name={'sample_comm02'} 
                                                                    labelClass={'fs_13'} txt={'교통량'} />
                                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm06'} name={'sample_comm02'} 
                                                                    labelClass={'fs_13'} txt={'시간점유율'} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <div class="fs_14 fc_white m-l-16">도로 네트워크</div>
                                                    </div>
                                                </div>
                                                <div class="accordion_block default">
                                                    <div class="accordion_title dflx_ac">
                                                        <ToggleComponent>
                                                            <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                            <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                        </ToggleComponent>
                                                        <div class="fs_14 fc_white m-l-16">최소 제어그룹</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopoverContents>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </article>

                <article class="Gr_contents m-t-80">
                    <div class="dflx_as w-100">
                        <div class="w-40">
                            <p class="fs_bold m-t-10 m-b-40">Profile menu</p>
                            <div class="dflx fc_grey60 fs_12">
                                <span class="w100 p-l-20">Closed</span>
                                <span class="m-l-20">Open</span>
                            </div>
                            <section class="dflx_ac m-t-12">

                                <div className="dashed_box dflx p-20 w280 h325">
                                    <div className="hd_profile">
                                        <div className="profile_box">
                                            <span className="profile20"></span>
                                            <span className="comma_under8"></span>
                                        </div>
                                    </div>
                                    <div className="hd_profile m-l-a">
                                        <div className="profile_box on">
                                            <span className="profile20"></span>
                                            <span className="comma_under8"></span>
                                        </div>
                                        <div className="member_popover p-20 on">
                                            <div className="tac m-b-12">
                                                <ImgComponent className="w32" src={'member_icon_32.svg'} />
                                                <h5 className="m-t-8 fs_14_bold">교통행정과</h5>
                                            </div>
                                            <div className="dflx_ac_jbet btm_white20 p-t-8 p-b-8 w142">
                                                <span className="fs_14 fc_grey60">아이디</span>
                                                <span className="fs_14_medium">abcdee123</span>
                                            </div>
                                            <div className="dflx_ac_jbet btm_white20 p-t-8 p-b-8 w142">
                                                <span className="fs_14 fc_grey60">이름</span>
                                                <span className="fs_14_medium">홍길동</span>
                                            </div>
                                            <ButtonComponent className={'btn_s m-t-32 w-100 btn_secondary radius_2'} txt={'로그아웃'} onClick={''} />
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                        <div class="w-60">
                            <p class="fs_bold m-t-10 m-b-40">Toggle</p>
                            <div class="dflx fc_grey60 fs_12">
                                <span class="w200 p-l-16">Closed</span>
                                <span>Open</span>
                            </div>
                            <section class="dflx_as gap_20 p-10 m-t-12">
                                <div class="display_grid gap_10">
                                    <div class="popover_box toggle_shadow">
                                        <ButtonWithComponent type={'button'} className={'btn_floating btn_m w160'}>
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                    </div>
                                    <div class="popover_box toggle_shadow">
                                        <ButtonWithComponent type={'button'} className={'btn_floating btn_m w160'}>
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div class="display_grid gap_10">
                                    <div class="popover_box">
                                        <ButtonWithComponent type={'button'} className={'btn_floating btn_m selected w160'}>
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                        <section class="drop_content w360 h120 m-t-2"></section>
                                    </div>
                                    <div class="popover_box toggle_shadow">
                                        <ButtonWithComponent type={'button'} className={'btn_floating btn_m w160'}>
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>

            </div>

        </div>
      </div>
    );
};

export default Popover;
