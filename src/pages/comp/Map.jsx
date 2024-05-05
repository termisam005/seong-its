import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import ListBlockComponent from '../../components/common/ListBlockComponent';

import ClusterComponent from '../../components/map/ClusterComponent';
import LayerComponent from '../../components/map/LayerComponent';
import TooltipwindowComponent from '../../components/map/TooltipwindowComponent';
import TooltipComponent from '../../components/common/TooltipComponent';
import CustomOverlayComponent from '../../components/map/CustomOverlayComponent';
import TooltipLegendComponent from '../../components/map/TooltipLegendComponent';

import PopupComponent from '../../components/popup/PopupComponent';
import ImagePopover from '../../components/popup/ImagePopover';

import DistanceComponent from '../../components/map/DistanceComponent';
import ProgressComponent from '../../components/map/ProgressComponent';
import ProgressBox from '../../components/map/ProgressBox';

import MapSliderLine from '../../components/control/MapSliderLine';
import MapSliderTimeline from '../../components/control/MapSliderTimeline';
import MapControlRotation from '../../components/control/MapControlRotation';

const Map = () => {
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
                        <h1>Map</h1>
                    </article>
                    <article className="Gr_contents">
                        <div className="comp_top flex_wrap">
                            <h2>Area</h2>
                        </div>
                        <section className="comp_conts dflx">
                            <div>
                                <div className="fs_bold">
                                    Map
                                </div>
                                <div className="dflx_column m-t-50">
                                    <div className="dflx">
                                        <div className="dflx_column gap_20 relative">
                                            <div className="">
                                                <div className="dflx_ac gap_40 tac">
                                                    <span className="fc_annotation60">Default</span>
                                                    <span className="fc_annotation60">Hover</span>
                                                    <span className="fc_annotation60">Selected</span>
                                                    <span className="fc_annotation60">Disabled</span>
                                                </div>
                                            </div>

                                            <div className="dflx_ac gap_20">
                                                <div className="map_area_circle"></div>
                                                <div className="map_area_circle hover"></div>
                                                <div className="map_area_circle selected"></div>
                                                <div className="map_area_circle disabled"></div>
                                            </div>

                                            <div className="dflx_ac gap_20">
                                                <div className="map_area_circle op00"></div>
                                                <div className="map_area_circle ver2 hover"></div>
                                                <div className="map_area_circle ver2 selected"></div>
                                                <div className="map_area_circle op00"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="m-l-100">
                                <div className="m-t-50">
                                    <ImgComponent src={'map_frame.svg'} style={{maxWidth:'none'}} />
                                </div>
                            </div>

                            <div className="m-l-100">
                                <div className="fs_bold">
                                    Linked Group
                                </div>
                                <div className="dflx_column m-t-50">
                                    <div className="dflx">
                                        <div className="dflx_column gap_20 relative">
                                            <div className="dflx_ac gap_40 tac">
                                                <span className="fc_annotation60">Default</span>
                                                <span className="fc_annotation60">Hover</span>
                                                <span className="fc_annotation60">Selected</span>
                                                <span className="fc_annotation60">Disabled</span>
                                            </div>

                                            <div className="dflx_ac gap_20">
                                                <div className="linked_circle"></div>
                                                <div className="linked_circle hover"></div>
                                                <div className="linked_circle selected"></div>
                                                <div className="linked_circle disabled"></div>
                                            </div>
                                        </div>
                                        <div className="dflx col_gap200">
                                            <div className="area_group_box m-l-100 relative">
                                                <div className="area_group no00 disabled"></div>
                                                <div className="area_group no1 hover"></div>
                                                <div className="area_group no2"></div>
                                                <div className="area_group no3"></div>
                                                <div className="area_group no4 selected"></div>
                                                <div className="area_group no5"></div>
                                                <div className="area_group no6"></div>
                                                <div className="area_group no7"></div>
                                            </div>
                                            <div>
                                                <div className="area_group large dflx col_gap40 m-b-40">
                                                    <div className="state_box">
                                                        <button className="btn_toggle_icon map" type="button">
                                                            <span className="circle_grey28 map">
                                                                <ImgComponent className={'w20'} src={'crossroad_fill_20.svg'} />
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="state_box">
                                                        <button className="btn_toggle_icon map" type="button">
                                                            <span className="circle_grey28 map">
                                                                <ImgComponent className={'w20'} src={'crossroad_fill_20.svg'} />
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="state_box">
                                                        <button className="btn_toggle_icon map" type="button">
                                                            <span className="circle_grey28 map">
                                                                <ImgComponent className={'w20'} src={'crossroad_fill_20.svg'} />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="area_group large selected dflx col_gap40">
                                                    <div className="state_box">
                                                        <button className="btn_toggle_icon map" type="button">
                                                            <span className="circle_grey28 map">
                                                                <ImgComponent className={'w20'} src={'crossroad_fill_20.svg'} />
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="state_box">
                                                        <button className="btn_toggle_icon map" type="button">
                                                            <span className="circle_grey28 map">
                                                                <ImgComponent className={'w20'} src={'crossroad_fill_20.svg'} />
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="state_box">
                                                        <button className="btn_toggle_icon map" type="button">
                                                            <span className="circle_grey28 map">
                                                                <ImgComponent className={'w20'} src={'crossroad_fill_20.svg'} />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="m-t-100">
                            <div className="fs_bold">
                                Polygon
                            </div>
                            <div className="dflx_column m-t-50">
                                <div className="dflx">
                                    <div className="dflx_column gap_20 relative">
                                        <div className="dflx_ac gap_20">
                                            <div className="polygon black">
                                                <ImgComponent src={'polygon_black.svg'} />
                                                <p className="polygon_text">지역명</p>
                                            </div>
                                            <div className="polygon blue">
                                                <ImgComponent src={'polygon_blue.svg'} />
                                                <p className="polygon_text">지역명</p>
                                            </div>
                                            <div className="polygon purple">
                                                <ImgComponent src={'polygon_purple.svg'} />
                                                <p className="polygon_text">지역명</p>
                                            </div>
                                            <div className="polygon green">
                                                <ImgComponent src={'polygon_green.svg'} />
                                                <p className="polygon_text">지역명</p>
                                            </div>
                                            <div className="polygon yellow">
                                                <ImgComponent src={'polygon_yellow.svg'} />
                                                <p className="polygon_text">지역명</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    <article className='Gr_contents'>
                        <div className='comp_top flex_wrap'>
                            <h2>Marker</h2>
                        </div>
                        <section className='comp_conts dflx'>
                            <div>
                                <div className='fs_bold p-l-80'>Basic</div>
                                <div className='dflx_column m-t-100'>
                                    <div className='dflx_as'>
                                        <div className='grid_column1 m-r-20 ai_center h220'>
                                            <p className='fs_12 fc_grey60'>Default</p>
                                            <p className='fs_12 fc_grey60'>Active</p>
                                            <p className='fs_12 fc_grey60 '>Numbering</p>
                                        </div>
                                        <div className='dflx'>
                                            <div className='dflx_column gap_20 relative'>
                                                <div className='dflx_s gap_20'>
                                                    <div className='absolute swiper_top_text tac'>
                                                        <span className='fs_12 fc_grey60'>Icon</span>
                                                    </div>
                                                </div>
                                                <div className='dflx_ac gap_20'>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48'} onClick={''}>
                                                        <ImgComponent className='img_off' src={'cctv_normal_32.svg'} />
                                                        <ImgComponent className='img_selected' src={'cctv_normal_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48'} onClick={''}>
                                                        <ImgComponent className='img_off' src={'weather_center_48.svg'} />
                                                        <ImgComponent className='img_selected' src={'weather_center_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                </div>
                                                <div className='dflx_ac gap_20'>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48 on'} onClick={''}>
                                                        <ImgComponent className='img_off' src={'cctv_normal_32.svg'} />
                                                        <ImgComponent className='img_selected' src={'cctv_normal_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48 on'} onClick={''}>
                                                        <ImgComponent className='img_off' src={'weather_center_48.svg'} />
                                                        <ImgComponent className='img_selected' src={'weather_center_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                </div>
                                                <div className='dflx_ac gap_20'>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48 dflx_column'} onClick={''}>
                                                        <div className='fs_14_medium fc_primary marker_numbering_text'>1</div>
                                                        <ImgComponent className='img_off' src={'cctv_normal_32.svg'} />
                                                        <ImgComponent className='img_selected' src={'weather_center_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='dflx m-l-60'>
                                            <div className='dflx_column gap_20 relative'>
                                                <div className='dflx_s gap_20'>
                                                    <div className='absolute swiper_top_text tac'>
                                                        <span className='fs_12 fc_grey60'>Text</span>
                                                    </div>
                                                </div>
                                                <div className='dflx_ac gap_20'>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48'} onClick={''}>
                                                        <ImgComponent className='img_off' src={'bus_green_basic_32.svg'} />
                                                        <ImgComponent className='img_selected' src={'bus_green_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48'} onClick={''}>
                                                        <ImgComponent className='img_off' src={'depart_48.svg'} />
                                                        <ImgComponent className='img_selected' src={'depart_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                </div>
                                                <div className='dflx_ac gap_20'>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48 on'} onClick={''}>
                                                        <ImgComponent className='img_off' src={'bus_green_basic_32.svg'} />
                                                        <ImgComponent className='img_selected' src={'bus_green_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                    <ButtonWithComponent type={'button'} className={'marker mk48 on'} onClick={''}>
                                                        <ImgComponent className='img_off' src={'depart_48.svg'} />
                                                        <ImgComponent className='img_selected' src={'depart_selected_48.svg'} />
                                                    </ButtonWithComponent>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dflx m-l-60">
                                            <div className="dflx_column gap_20 relative">
                                                <div className="dflx_s gap_20">
                                                    <div className="absolute swiper_top_text tac">
                                                        <span className="fs_12 fc_grey60">Icon+text</span>
                                                    </div>
                                                </div>
                                                <div className="dflx_ac">
                                                    <div className="park_space">
                                                        <p className="park_sign danger">
                                                            <span className="park_txt">190/200</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="dflx_ac">
                                                    <div className="park_space">
                                                        <p className="park_sign danger on">
                                                            <span className="park_txt">190/200</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='m-l-140'>
                                <div className='fs_bold'>Cluster</div>
                                <div className='dflx_column m-t-100'>
                                    <div className='dflx_as'>
                                        <div className='dflx'>
                                            <div className='dflx_ac gap_40'>
                                                <ClusterComponent addedClass='circle16' count=''>
                                                </ClusterComponent>
                                                <ClusterComponent addedClass='circle32' count='+10'>
                                                    <ImgComponent className='w20' src={'cctv_fff_20.svg'} />
                                                </ClusterComponent>
                                                <ClusterComponent addedClass='circle48' count='+100'>
                                                    <ImgComponent className='w36' src={'cctv_fff_20.svg'} />
                                                </ClusterComponent>
                                                <ClusterComponent addedClass='circle64' count='+1,000'>
                                                    <ImgComponent className='w48' src={'cctv_fff_20.svg'} />
                                                </ClusterComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className='Gr_contents m-t-100'>
                        <section className='comp_conts'>
                            <div className='fs_bold'>
                                Usage
                            </div>
                            <div className='fs_12 fc_grey60 m-t-5'>마커 클릭 시 팝업이나 인포원도우가 열릴 수 있음</div>
                            <div className="dflx m-t-256">
                                <div className='tooltip_parents m-l-120'>
                                    <ButtonWithComponent type={'button'} className={'marker mk48 on'} onClick={''}>
                                        <ImgComponent className='img_off' src={'cctv_normal_32.svg'} />
                                        <ImgComponent className='img_selected' src={'cctv_normal_selected_48.svg'} />
                                    </ButtonWithComponent>
                                    <TooltipwindowComponent title='Title' addedClass='top on with_marker'>
                                        <p className='fc_grey60 lh_18'>Lorem ipsum dolor sit amet consectetur. Ac fames sapien sed lacus cursus. Blandit viverra consequat nibh odio. Amet mauris fames </p>
                                    </TooltipwindowComponent>                                                  
                                </div>
                                <div className='m-l-120 relative'>
                                    <div className='popover_box w320 dflx_column dflx_ac'>
                                        <ButtonWithComponent type={'button'} className={'marker mk48 on'} onClick={''}>
                                            <ImgComponent className='img_off' src={'cctv_normal_32.svg'} />
                                            <ImgComponent className='img_selected' src={'cctv_normal_selected_48.svg'} />
                                        </ButtonWithComponent>                
                                        <PopupComponent boxClass={'popover_box w320 show placement top left m-b-8'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'시청역 사거리'} close={''}>
                                            <div className="popup_contents">
                                                <ImgComponent className='valign_top' src={'image_map_sample.png'} />
                                            </div>
                                        </PopupComponent>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className='Gr_contents m-t-100'>
                        <section className='comp_conts'>
                            <div className='fs_bold'>
                                Layer
                            </div>
                            <div className='fs_12 fc_grey60 m-t-5'>마커와 결합하여 사용</div>
                            <div className='dflx_ac m-t-12 gap_40'>
                                <div>
                                    <div className='h240 dflx_ac'>
                                        <LayerComponent layerClass='h64 w64' iconClass='bg_ui_sky border_black30'>
                                            <ImgComponent src={'crossroad_fill_20.svg'} />
                                        </LayerComponent>
                                    </div>    
                                    <div className='tac fc_grey60 fs_12'>15m 이하<br/>64px</div>
                                </div>                            
                                <div>
                                    <div className='h240 dflx_ac'>
                                        <LayerComponent layerClass='h96 w96' iconClass='bg_ui_sky border_black30'>
                                            <ImgComponent src={'crossroad_fill_20.svg'} />
                                        </LayerComponent>
                                    </div>    
                                    <div className='tac fc_grey60 fs_12'>30m 이하<br/>96px</div>
                                </div>   
                                <div>
                                    <div className='h240 dflx_ac'>
                                        <LayerComponent layerClass='h128 w128' iconClass='bg_ui_blue border_black30'>
                                            <ImgComponent src={'smart_crossroad_24.svg'} />
                                        </LayerComponent>
                                    </div>    
                                    <div className='tac fc_grey60 fs_12'>60m 이하<br/>128px</div>
                                </div>   
                                <div>
                                    <div className='h240 dflx_ac'>
                                        <LayerComponent layerClass='h160 w160' iconClass='bg_ui_sky border_black30'>
                                            <ImgComponent src={'crossroad_fill_20.svg'} />
                                        </LayerComponent>
                                    </div>    
                                    <div className='tac fc_grey60 fs_12'>125m 이하<br/>160px</div>
                                </div>  
                                <div>
                                    <div className='h240 dflx_ac'>
                                        <LayerComponent layerClass='h192 w192' iconClass='bg_ui_blue border_black30'>
                                            <ImgComponent src={'smart_crossroad_24.svg'} /> 
                                        </LayerComponent>
                                    </div>    
                                    <div className='tac fc_grey60 fs_12'>250m 이하<br/>192px</div>
                                </div> 
                            </div>
                            <div className='dflx_ac m-t-40 gap_40'>
                                
                                <div>
                                    <div className='h320 dflx_ac'>
                                        <LayerComponent layerClass='h224 w224' iconClass='bg_ui_sky border_black30'>
                                            <ImgComponent src={'crossroad_fill_20.svg'} />
                                        </LayerComponent>
                                    </div>    
                                    <div className='tac fc_grey60 fs_12'>500m 이하<br/>224px</div>
                                </div> 
                                <div>
                                    <div className='h320 dflx_ac'>
                                        <LayerComponent layerClass='h256 w256' iconClass='bg_ui_blue border_black30'>
                                            <ImgComponent src={'smart_crossroad_24.svg'} />
                                        </LayerComponent>
                                    </div>    
                                    <div className='tac fc_grey60 fs_12'>1km 이상<br/>256px</div>
                                </div> 
                            </div>
                        </section>
                    </article>

                    <article className='Gr_contents m-t-100'>                    
                        <div className='comp_top flex_wrap'>
                            <h2>Route</h2>
                        </div>
                        <section className="comp_conts dflx">
                            <div>
                                <div className="fs_bold">
                                    Line
                                </div>
                                <div className="dflx_column m-t-50">
                                    <div className="dflx_as">
                                        <div className="grid_column1 m-r-20 ai_center h160">
                                            <p className="fc_annotation60">Default</p>
                                            <p className="fc_annotation60">Active</p>
                                            <p className="fc_annotation60">Selected</p>
                                        </div>
                                        <div className="dflx">
                                            <div className="dflx_column relative">
                                                <div className="dflx_s gap_20">
                                                    <div className="absolute swiper_top_text tac">
                                                        <span className="fc_annotation60">Lv1</span>
                                                    </div>
                                                </div>
                                                <div className="dflx_ac m-t-20">
                                                    <div className="route_line w100 route_border_sky40 m-r-10"></div>
                                                    <div className="marker_departure w17 h17 bg_white"></div>
                                                </div>
                                                <div className="dflx_ac m-t-36">
                                                    <div className="route_line w100 route_border_sky"></div>
                                                </div>
                                                <div className="dflx_ac m-t-36">
                                                    <div className="route_line w100 route_border_yellow"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dflx m-l-60">
                                        <div className="dflx_column relative">
                                                <div className="dflx_s gap_20">
                                                    <div className="absolute swiper_top_text tac">
                                                        <span className="fc_annotation60">Lv2</span>
                                                    </div>
                                                </div>
                                                <div className="dflx_ac m-t-20">
                                                    <div className="route_line w100 route_border_blue m-r-10"></div>
                                                    <div className="marker_departure blue w17 h17 bg_white"></div>
                                                </div>
                                                <div className="dflx_ac m-t-36">
                                                    <div className="route_line w100 route_border_sky"></div>
                                                </div>
                                                <div className="dflx_ac m-t-36">
                                                    <div className="route_line w100 route_border_yellow"></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="dflx m-l-60">
                                            <div className="dflx_column relative">
                                                <div className="dflx_s gap_20">
                                                    <div className="absolute swiper_top_text tac">
                                                        <span className="fc_annotation60"></span>
                                                    </div>
                                                </div>
                                                <div className="dflx_ac m-t-20">
                                                    <div className="route_line w100 route_border_purple op06 m-r-10"></div>
                                                    <div className="marker_departure purple w17 h17 bg_white"></div>
                                                </div>
                                                <div className="dflx_ac m-t-36">
                                                    <div className="route_line w100 route_border_purple"></div>
                                                </div>
                                                <div className="dflx_ac m-t-36">
                                                    <div className="route_line w100 route_border_yellow"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dflx m-l-60">
                                            <div className="dflx_column relative">
                                                <div className="dflx_s gap_20">
                                                    <div className="absolute swiper_top_text tac">
                                                        <span className="fc_annotation60"></span>
                                                    </div>
                                                </div>
                                                <div className="dflx_ac m-t-20">
                                                    <div className="route_line w100 route_border_red op06 m-r-10"></div>
                                                    <div className="marker_departure red w17 h17 bg_white"></div>
                                                </div>
                                                <div className="dflx_ac m-t-36">
                                                    <div className="route_line w100 route_border_red "></div>
                                                </div>
                                                <div className="dflx_ac m-t-36">
                                                    <div className="route_line w100 route_border_yellow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="comp_conts m-t-100">
                            <div className="fs_bold">
                                Marker
                            </div>
                            <div className="dflx col_gap50">
                                <div className="">
                                    <div className="dflx_ac m-t-20">
                                        <div className="fc_annotation60 w80">Departure</div>
                                        <div className="marker_departure w17 h17 bg_white">
                                        </div>
                                        <div className="marker_departure w17 h17 m-l-40 bg_ui_sky">
                                        </div>
                                        <div className="m-l-30">
                                            <ImgComponent src={'marker_depart_48.svg'} />
                                        </div>
                                    </div>

                                    <div className="dflx_ac m-t-36">
                                        <div className="fc_annotation60 w80">Arrival</div>
                                        <div className="arrival_car">
                                            <ImgComponent src={'marker_arrival_car.svg'} />
                                        </div>
                                        <div className="m-l-10 arrival_marker">
                                            <ImgComponent src={'marker_arrival_area.svg'} />
                                        </div>
                                        <div className="m-l-10">
                                            <ImgComponent src={'marker_arrive_48.svg'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="dflx col_gap30 m-l-100">
                                    <div>
                                        <div className="pass_road">
                                            <ImgComponent src={'pass_dark.svg'} />
                                        </div>
                                        <div className="pass_car">
                                            <ImgComponent src={'marker_arrival_car.svg'} />
                                        </div>
                                    </div>
                                    <div style={{transform: 'translate(0px, -20px)'}}>
                                        <div className="marker_departure w17 h17 bg_white pass_departure"></div>
                                        <div className="pass_road">
                                            <ImgComponent src={'pass_dark.svg'} />
                                        </div>
                                        <div className="m-l-10 arrival_marker pass_arrival">
                                            <ImgComponent src={'marker_arrival_area.svg'} />
                                        </div>
                                    </div>
                                    <div style={{transform: 'translate(0px, -50px)'}}>
                                        <div className="pass_departure_marker">
                                            <ImgComponent src={'marker_depart_48.svg'} />
                                        </div>
                                        <div className="pass_road">
                                            <ImgComponent src={'pass_dark.svg'} />
                                        </div>
                                        <div className="pass_arrival_marker">
                                            <ImgComponent src={'marker_arrive_48.svg'} />
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </section>
                    </article>

                    <article className="Gr_contents m-t-80">                 
                        <div className="comp_top flex_wrap">
                            <h2>Image popover</h2>
                        </div>
                        <section className="comp_conts">
                            <div className="dflx col_gap80">
                                <p className="fc_annotation60 w-80 m-t-10">Front</p>
                                <p className="fc_annotation60 w-100 m-t-10">Back</p>
                            </div>

                            <div className="dflx_as">
                                <div className="m-t-40 dflx_as col_gap50">
                                    <ImagePopover className={'imgpopover_box'} src={'image_popover_sample.png'} img>
                                    </ImagePopover>
                                    <ImagePopover className={'imgpopover_box'} >
                                    </ImagePopover>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className="Gr_contents m-t-80">
                        <h2 className='fs_bold'>
                        Map Control
                        </h2>
                        <div className="dflx">
                            <div>
                                <section className='comp_conts'>
                                    <div className='dflx_as m-t-40'>
                                        <div className='m-t-10'>
                                            <p className='fs_bold w120'>Zoom</p>
                                        </div>
                                        <div className="dflx_ac col_gap48">
                                            <p className='fs_12 fc_grey60'>40</p>
                                            <ProgressComponent size='large'>
                                                <ProgressBox boxClass={'progress_box h40'} />
                                            </ProgressComponent>
                                        </div>                                        
                                    </div>
                                    <div className='dflx_as m-t-32'>
                                        <div className='w120'>
                                        </div>
                                        <div className="dflx_ac col_gap48">
                                            <p className='fs_12 fc_grey60'>36</p>
                                            <ProgressComponent size='medium'>
                                                <ProgressBox boxClass={'progress_box h36'} />
                                            </ProgressComponent>
                                        </div>                                        
                                    </div>
                                    <div className='dflx_as m-t-32'>
                                        <div className='w120'>
                                        </div>
                                        <div className="dflx_ac col_gap48">
                                            <p className='fs_12 fc_grey60'>24</p>
                                            <ProgressComponent size='mini'>
                                                <ProgressBox boxClass={'progress_box h24 w112'} />
                                            </ProgressComponent>   
                                        </div>                                        
                                    </div>
                                    <div className='dflx_as m-t-32'>
                                        <div className='w120'>
                                        </div>
                                        <div className="dflx_ac col_gap48">
                                            <p className='fs_12 fc_grey60'>20</p>
                                            <ProgressComponent size='xmini'>
                                                <MapSliderTimeline top bottom small addedClass='w72 timeline_outline'>
                                                    <MapSliderLine addedClass='map_control_line m-tb-4-negative' size='h14 w-40'>
                                                    </MapSliderLine>  
                                                </MapSliderTimeline>
                                            </ProgressComponent>   
                                        </div>                                        
                                    </div>
                                    <div className="dflx gap_16 m-t-40">
                                        <div className='w160 fs_bold'>
                                            Usage
                                        </div>
                                        <DistanceComponent distClass={'dflx_ac gap_8 p-t-4'} distance={'5km'} />
                                        <ProgressComponent size='large'>
                                            <ProgressBox boxClass={'progress_box h40'} />
                                        </ProgressComponent>
                                    </div>   
                                </section>
                            </div>
                            <div className='m-l-140  m-t-40'>
                                <section className='comp_conts dflx'>
                                    <div className='w160 fs_bold'>
                                        3d map
                                    </div>
                                    <div>
                                        <div>
                                            <MapControlRotation direction></MapControlRotation>
                                        </div>
                                        <div className='m-t-10'>                                    
                                            <MapControlRotation></MapControlRotation>
                                        </div>
                                        <ListBlockComponent listClass={'btn_map_anchor dflx gap_8'}>
                                            <ButtonWithComponent type={'button'} className={'dflx_ac_jcent'} onClick={''}>
                                                <ImgComponent src={'mapcontrol_home_20.svg'} />
                                            </ButtonWithComponent>
                                            <ButtonWithComponent type={'button'} className={'dflx_ac_jcent'} onClick={''}>
                                                <ImgComponent src={'mapcontrol_location_20.svg'} />
                                            </ButtonWithComponent>
                                            <ButtonWithComponent type={'button'} className={'dflx_ac_jcent'} onClick={''}>
                                                <ImgComponent src={'mapcontrol_airplane_20.svg'} />
                                            </ButtonWithComponent>
                                        </ListBlockComponent>      
                                        <div className="control_line m-t-20">
                                            <ButtonWithComponent className={'btn_icon icon_ffb xmini'}>
                                                <ImgComponent className={'w12'} src={'minus_fff_24.svg'} />
                                            </ButtonWithComponent>
                                            <MapSliderTimeline top bottom small addedClass='w72 timeline_outline'>
                                                <MapSliderLine addedClass='map_control_line m-tb-4-negative' size='h14 w-40'>
                                                </MapSliderLine>  
                                            </MapSliderTimeline> 
                                            <ButtonWithComponent className={'btn_icon icon_ffb xmini'}>
                                                <ImgComponent className={'w12'} src={'plus_line_fff_24.svg'} />
                                            </ButtonWithComponent>
                                        </div>        
                                    </div>          
                                </section>
                            </div>
                        </div>
                    </article>
                    
                    <article className='Gr_contents m-t-140'>                    
                        <div className='comp_top flex_wrap'>
                            <h2>Info Window</h2>
                            <p className='w-100 m-t-10'>지도 위 상시 노출 정보표시 등에 사용, Default 버튼 hover 시 확대됨</p>
                        </div>
                        <section className='comp_conts dflx_as'>
                            <div className='dashed_box p-20 m-t-80 dflx_as'>
                                <div className='relative w160 dflx'>
                                    <div className='absolute swiper_top_text tac'>
                                        <span className='fs_12 fc_grey60'>Default</span>
                                    </div>      
                                    <TooltipwindowComponent title='Title' active=''>
                                        <p className='fc_grey60'>Lorem ipsum dolor sit amet consectetur. Ac fames sapien sed lacus cursus. Blandit viverra consequat nibh odio. Amet mauris fames </p>
                                    </TooltipwindowComponent>
                                </div>
                                <div className='relative m-l-20 w160 dflx'>
                                    <div className='absolute swiper_top_text tac'>
                                        <span className='fs_12 fc_grey60'>Hover</span>
                                    </div>                                    
                                    <TooltipwindowComponent title='Title' addedClass='on'>
                                        <p className='fc_grey60'>Lorem ipsum dolor sit amet consectetur. Ac fames sapien sed lacus cursus. Blandit viverra consequat nibh odio. Amet mauris fames </p>
                                    </TooltipwindowComponent>
                                </div>
                                <div className='relative m-l-20 w160 dflx'>
                                    <TooltipwindowComponent title='Title' addedClass='on'>
                                        <p className='fc_grey60'>Lorem ipsum dolor sit amet consectetur. Ac fames sapien sed lacus cursus. Blandit viverra consequat nibh odio. Amet mauris fames </p>
                                        <ButtonComponent type='button' className='btn_primary btn_xs m-t-10 w-100' txt='Default'></ButtonComponent>
                                    </TooltipwindowComponent>
                                </div>
                                <div className='relative m-l-20 w160 dflx'>
                                    <TooltipwindowComponent title='Title' addedClass='on'>
                                        <div className='dflx gap_4 m-b-10'>
                                            <span className='label_tag bg_grey10 fs_11 w48'>Label</span>
                                            <span className='label_tag grade_color02 fs_11 w48'>Label</span>
                                        </div>
                                        <p className='fc_grey60'>Lorem ipsum dolor sit amet consectetur. Ac fames sapien sed lacus cursus. Blandit viverra consequat nibh odio. Amet mauris fames </p>
                                        <ButtonComponent type='button' className='btn_primary btn_xs m-t-10 w-100' txt='Default'></ButtonComponent>
                                    </TooltipwindowComponent>                                    
                                </div>
                            </div>
                        </section>
                        <section className='comp_conts m-t-100'>
                            <div className='comp_top flex_wrap'>
                                <p className='fs_bold'>Custom Overlay</p>
                                <p className='w-100 m-t-10 fc_grey60 fs_12'>지도 위에 모달로 사용</p>
                            </div>
                            <div className='dflx_as'>
                                <div className='dashed_box p-20 m-t-40 dflx_as'>
                                    <div className='relative '>
                                        <div className='absolute swiper_top_text tac'>
                                            <span className='fs_12 fc_grey60'>L</span>
                                        </div>                   
                                        <div>
                                            <p className='fs_14_medium tac m-b-5'>남동구</p>
                                            <CustomOverlayComponent title='Title' addedClass='large'>
                                                <div className='fc_yellow fs_14_medium'>25Km/h</div>
                                                <div className='fc_white fs_14_medium'>500</div>
                                                <div className='fc_white fs_14_medium'>50건</div>
                                            </CustomOverlayComponent>
                                        </div>
                                    </div>
                                    <div className='relative m-l-80'>
                                        <div className='absolute swiper_top_text tac'>
                                            <span className='fs_12 fc_grey60'>S</span>
                                        </div>                   
                                        <div>
                                            <p className='fs_14_medium tac m-b-5'>남동구</p>
                                            <CustomOverlayComponent title='Title' addedClass='small'>
                                                <div className='fc_yellow fs_14_medium'>25Km/h</div>
                                                <div className='fc_white fs_14_medium'>500</div>
                                                <div className='fc_white fs_14_medium'>50건</div>
                                            </CustomOverlayComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className='m-l-80'>
                                    <p className='w-100 fc_grey60 fs_12'>Usage</p>
                                    <div className='dflx p-t-60'>
                                        <div>
                                            <div className='tooltip_parents'>
                                                <ButtonWithComponent type={'button'} className={'marker mk48'} onClick={''}>
                                                    <ImgComponent className='img_off' src={'cctv_normal_32.svg'} />
                                                    <ImgComponent className='img_selected' src={'cctv_normal_selected_48.svg'} />
                                                </ButtonWithComponent>
                                                <TooltipComponent className={'tooltip_label top on'} txt={'시청역 사거리'} />
                                            </div>
                                            <div className='tooltip_parents m-t-40'>
                                                <ButtonWithComponent type={'button'} className={'marker mk48 on'} onClick={''}>
                                                    <ImgComponent className='img_off' src={'cctv_normal_32.svg'} />
                                                    <ImgComponent className='img_selected' src={'cctv_normal_selected_48.svg'} />
                                                </ButtonWithComponent>
                                                <TooltipComponent className={'tooltip_label top on'} txt={'시청역 사거리'} />
                                            </div>
                                        </div>
                                        <div className='m-l-140'>
                                            <div className='tooltip_parents m-t-120'>
                                                <ButtonWithComponent type={'button'} className={'marker mk48 on'} onClick={''}>
                                                    <ImgComponent className='img_off' src={'car_accident_56.svg'} />
                                                    <ImgComponent className='img_selected' src={'car_accident_selected_56.svg'} />
                                                </ButtonWithComponent>
                                                <TooltipwindowComponent title='시청역사거리 추돌사고' addedClass='top on with_marker'>
                                                    <div className='dflx gap_4 m-b-10'>
                                                        <span className='label_tag bg_grey10 fs_11'>사고</span>
                                                        <span className='label_tag grade_color02 fs_11'>매우심각</span>
                                                    </div>
                                                    <p className='fc_grey60 lh_18'>2022.07.05  12:22:22<br/>
                                                        부평삼거리로 2-2<br/>
                                                        UTIS(교통돌발 제공)</p>
                                                    <ButtonComponent type='button' className='btn_primary btn_xs m-t-10 w-100' txt='상세보기'></ButtonComponent>
                                                </TooltipwindowComponent>
                                            </div>
                                            <div className='tooltip_parents m-t-40'>
                                                <div className='marker mk48 on'>
                                                    <ImgComponent className='img_selected' src={'bus_yellow_32.svg'} />
                                                </div>
                                                <TooltipLegendComponent addedClass='bottom on m-t-4-negative'>                                                    
                                                    <p className='fs_11'>경기71 아 3720</p>
                                                    <p className='fc_green fs_11_medium'>여유</p>
                                                </TooltipLegendComponent>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className="Gr_contents m-t-140">
                        <div className="comp_top flex_wrap">
                            <h2>Map label</h2>
                        </div>

                        <section className="comp_conts dflx col_gap60">
                            <div className="dflx col_gap40 m-t-50">
                                <div className="w80">
                                    <div className="fs_bold m-b-60">Text color</div>
                                    <div className="fs_bold">Usage</div>
                                </div>
                                <div className="m-t-80">
                                    <p className="fc_annotation60">Default</p>
                                    <p className="fc_annotation60 m-t-20">Others</p>
                                    <p className="fc_annotation60 m-t-50">Compare(vs)</p>
                                </div>
                            </div>

                            <div className="card_box p-40 w-100">
                                <div className="dflx col_gap10 m-b-40">
                                    <div className="color_box_mini"></div>
                                    <div className="color_box_mini rainbow1"></div>
                                    <div className="color_box_mini gradec"></div>
                                    <div className="color_box_mini rainbows4"></div>
                                </div>
                                <div className="compline">
                                    <div className="fs_20_medium bg_default btn_s pd-2-12">
                                        <span className="fc_primary">최적화 분석</span>
                                    </div>
                                </div>
                                
                                <div className="compline m-b-40">
                                    <div className="fs_20_medium bg_default btn_s pd-2-12">
                                        <span className="fc_grey87">현황 분석</span>
                                    </div>
                                </div>

                                <div className="compline">
                                    <div className="fs_20_medium bg_default btn_s pd-2-12">
                                        <span className="fc_primary">스마트교차로</span> 
                                        <span className="fc_grey87">vs</span>
                                        <span className="fc_green_text">예측 데이터</span>
                                    </div>
                                </div>

                                <div className="compline">
                                    <div className="fs_20_medium bg_default btn_s pd-2-12">
                                        <span className="fc_primary">스마트교차로</span> 
                                        <span className="fc_grey87">vs</span>
                                        <span className="fc_yellow">예측 시뮬레이션</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Map;
