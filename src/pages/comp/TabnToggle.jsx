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
import TexttabComponent from '../../components/common/TexttabComponent';
import ConnectComponent from '../../components/common/ConnectComponent';
import SwitchComponent from '../../components/common/SwitchComponent';


const TabnToggle = () => {

    const [tabButton, setTabButton] = useState(1);
    const onClickTab = (index) => {
        setTabButton(index);
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

            <div className='guide_center'>

                <article className='guide_top'>
                    <h1>Tab&Toggle</h1>
                </article>

                <article class="Gr_contents">
                    <div class="comp_top">
                        <h2>Button tab</h2>
                    </div>
                    <section class="comp_conts">
                        <dl class="comp_dl">
                            <dt class="comp_dt p-t-15">Large</dt>
                            <dd class="comp_dd">
                                <div class="compline grid_column2">
                                    <div class="components">
                                        <div class="tab_line spacing">
                                            <ButtonComponent type={'button'} 
                                            className={tabButton === 1? 'btn_toggle_secondary btn_m selected w120' : 'btn_toggle_secondary btn_m w120'} 
                                            txt={'Selected'} onClick={() => onClickTab(1)} />
                                            <ButtonComponent type={'button'} 
                                            className={tabButton === 2? 'btn_toggle_secondary btn_m selected w120' : 'btn_toggle_secondary btn_m w120'} 
                                            txt={'Default'} onClick={() => onClickTab(2)} />
                                            <ButtonComponent type={'button'} 
                                            className={tabButton === 3? 'btn_toggle_secondary btn_m selected w120' : 'btn_toggle_secondary btn_m w120'} 
                                            txt={'Default'} onClick={() => onClickTab(3)} />
                                        </div>
                                    </div>
                                </div>
                                <div class="compline grid_column2">
                                    <div class="components">
                                        <div class="tab_line spacing">
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m selected w120'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m w120'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m disabled w120'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                    <div class="components">
                                        <div class="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m selected w120'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m w120'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m disabled w120'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                </div>
                                <div class="compline grid_column2">
                                    <div class="components">
                                        <div class="tab_line spacing">
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m selected w120'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m w120'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m disabled w120'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                    <div class="components">
                                        <div class="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_toggle_ffb btn_m selected w120'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_ffb btn_m w120'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_ffb btn_m disabled w120'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                </div>

                                <div class="compline grid_column2">
                                    <div class="components">
                                        <div class="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m selected w120'} txt={'상황관리'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m w120'} txt={'긴급차량'} onClick={''} />
                                        </div>
                                    </div>
                                    <div class="components">
                                        <div class="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m selected w120'} txt={'상황관리'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m w120'} txt={'긴급차량'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m w120'} txt={'돌발금지'} onClick={''} />
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl class="comp_dl">
                            <dt class="comp_dt p-t-15">Small</dt>
                            <dd class="comp_dd">
                                <div class="compline grid_column2 m-b-20">
                                    <div class="components">
                                        <div class="tab_line spacing">
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s selected'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s disabled'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                    <div class="components">
                                        <div class="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s selected'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s disabled'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                </div>
                                <div class="compline grid_column2 m-b-20">
                                    <div class="components">
                                        <div class="tab_line spacing">
                                            <ButtonComponent type={'button'} className={'btn_toggle_secondary btn_s selected'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_secondary btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_secondary btn_s disabled'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                    <div class="components">
                                        <div class="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_toggle_secondary btn_s selected'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_secondary btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_secondary btn_s disabled'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                </div>
                                <div class="compline grid_column2 m-b-20">
                                    <div class="components">
                                        <div class="tab_line spacing">
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_s selected'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_s disabled'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                    <div class="components">
                                        <div class="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_s selected'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_s disabled'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                </div>
                                <div class="compline grid_column2 m-b-20">
                                    <div class="components">
                                        <div class="tab_line spacing">
                                            <ButtonComponent type={'button'} className={'btn_line1 btn_s selected'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_line1 btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_line1 btn_s disabled'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                    <div class="components">
                                        <div class="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_line1 btn_s selected'} txt={'Selected'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_line1 btn_s'} txt={'Default'} onClick={''} />
                                            <ButtonComponent type={'button'} className={'btn_line1 btn_s disabled'} txt={'Disabled'} onClick={''} />
                                        </div>
                                    </div>
                                </div>

                                <div class="compline gap_32 m-b-20">
                                    <div class="tab_line">
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected'} txt={'Label'} onClick={''} />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs'} txt={'Label'} onClick={''} />
                                    </div>
                                    <div class="tab_line">
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected w140'} txt={'Label'} onClick={''} />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs w140'} txt={'Label'} onClick={''} />
                                    </div>
                                    <div class="tab_line w280">
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected w-33'} txt={'Label'} onClick={''} />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs w-33'} txt={'Label'} onClick={''} />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs w-33'} txt={'Label'} onClick={''} />
                                    </div>
                                </div>
                                <div class="compline gap_32 m-b-20">
                                    <div class="tab_line">
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_s selected'} txt={'Label'} onClick={''} />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_s'} txt={'Label'} onClick={''} />
                                    </div>
                                    <div class="tab_line">
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s selected w140'} txt={'Label'} onClick={''} />
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s w140'} txt={'Label'} onClick={''} />
                                    </div>
                                    <div class="tab_line w280">
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s selected w-33'} txt={'Label'} onClick={''} />
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s w-33'} txt={'Label'} onClick={''} />
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s w-33'} txt={'Label'} onClick={''} />
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

                <article class="Gr_contents">
                    <div class="comp_top">
                        <h2>Text tab</h2>
                    </div>
                    <section class="comp_conts">
                        <dl class="comp_dl m-b-0">
                            <dd class="comp_dd">
                                <div class="compline">
                                    <p class="comp_size">16px</p>
                                    <div class="dflx_ac">
                                        <TexttabComponent className={'a_link more selected'} txt={'Selected'} />
                                        <TexttabComponent className={'a_link more'} txt={'Default'} />
                                        <TexttabComponent className={'a_link more disabled'} txt={'Disabled'} />
                                    </div>
                                    <p class="p-l-20"></p>
                                    <p class="comp_size">14px</p>
                                    <div class="dflx_ac">
                                        <TexttabComponent className={'a_link selected'} txt={'Selected'} />
                                        <TexttabComponent className={'a_link'} txt={'Default'} />
                                        <TexttabComponent className={'a_link disabled'} txt={'Disabled'} />
                                    </div>
                                </div>
                            </dd>
                        </dl>
                        <dl class="comp_dl">
                            <dd class="comp_dd">
                                <div class="compline">
                                    <div class="dflx_ac">
                                        <p class="comp_size">16px</p>
                                        <div class="tab_line">
                                            <TexttabComponent className={'a_link more selected'} txt={'Selected'} />
                                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                                            <TexttabComponent className={'a_link more disabled'} txt={'Disabled'} />
                                        </div>
                                    </div>
                                    <p class="p-l-15"></p>
                                    <div class="dflx_ac">
                                        <div class="tab_line">
                                            <TexttabComponent className={'a_link more selected'} txt={'Selected'} />
                                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                                            <TexttabComponent className={'a_link more disabled'} txt={'Disabled'} />
                                        </div>
                                    </div>
                                </div>
                                <div class="compline">
                                    <div class="dflx_ac">
                                        <p class="comp_size">14px</p>
                                        <div class="tab_line">
                                            <TexttabComponent className={'a_link selected'} txt={'Selected'} />
                                            <TexttabComponent className={'a_link'} txt={'Default'} />
                                            <TexttabComponent className={'a_link disabled'} txt={'Disabled'} />
                                        </div>
                                    </div>
                                    <p class="p-l-15"></p>
                                    <div class="dflx_ac">
                                        <div class="tab_line">
                                            <TexttabComponent className={'a_link selected'} txt={'Selected'} />
                                            <TexttabComponent className={'a_link'} txt={'Default'} />
                                            <TexttabComponent className={'a_link'} txt={'Default'} />
                                            <TexttabComponent className={'a_link'} txt={'Default'} />
                                            <TexttabComponent className={'a_link'} txt={'Default'} />
                                            <TexttabComponent className={'a_link'} txt={'Default'} />
                                            <TexttabComponent className={'a_link'} txt={'Default'} />
                                            <TexttabComponent className={'a_link disabled'} txt={'Disabled'} />
                                        </div>
                                    </div>
                                </div>
                                <div class="compline">
                                    <div class="dflx_ac">
                                        <p class="comp_size">14px</p>
                                        <div class="tab_line">
                                            <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                            <TexttabComponent className={'a_link short'} txt={'Default'} />
                                            <TexttabComponent className={'a_link short disabled'} txt={'Disabled'} />
                                        </div>
                                    </div>
                                    <p class="p-l-15"></p>
                                    <div class="dflx_ac">
                                        <div class="tab_line">
                                            <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                            <TexttabComponent className={'a_link short'} txt={'Default'} />
                                            <TexttabComponent className={'a_link short'} txt={'Default'} />
                                            <TexttabComponent className={'a_link short'} txt={'Default'} />
                                            <TexttabComponent className={'a_link short'} txt={'Default'} />
                                            <TexttabComponent className={'a_link short'} txt={'Default'} />
                                            <TexttabComponent className={'a_link short'} txt={'Default'} />
                                            <TexttabComponent className={'a_link short disabled'} txt={'Disabled'} />
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

                <article class="Gr_contents">
                    <div class="comp_top">
                        <h2>Floating tab/toggle</h2>
                    </div>
                    <section class="comp_conts p-t-20">
                        <dl class="comp_dl">
                            <dt class="comp_dt p-t-15">Text type</dt>
                            <dd class="comp_dd">
                                <div class="dflx_as">
                                    <ConnectComponent className={'connect_line more'}>
                                        <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                        <span class="vtline_20 m-l-8 m-r-8"></span>
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                    </ConnectComponent>
                                    <p class="p-l-15"></p>
                                    <ConnectComponent className={'connect_line more'}>
                                        <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                    </ConnectComponent>
                                    <p class="p-l-15"></p>
                                    <ConnectComponent className={'connect_line more'}>
                                        <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <span class="vtline_20 m-l-8 m-r-12"></span>
                                        <div class="etc_zone">
                                            <button type='button' className="btn_etc">
                                                <ImgComponent className={'img w24 op06'} src={'more_fff_24.svg'} />
                                                <ImgComponent className={'img_on w24'} src={'more_sky_24.svg'} />
                                            </button>
                                        </div>
                                    </ConnectComponent>
                                </div>

                                <div class="dflx_as m-t-20">
                                    <ConnectComponent className={'connect_line more sky'}>
                                        <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                        <span class="vtline_20 m-l-8 m-r-8"></span>
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                    </ConnectComponent>
                                    <p class="p-l-15"></p>
                                    <ConnectComponent className={'connect_line more sky'}>
                                        <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                    </ConnectComponent>
                                    <p class="p-l-15"></p>
                                    <ConnectComponent className={'connect_line more sky'}>
                                        <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <span class="vtline_20 m-l-8 m-r-12"></span>
                                        <div class="etc_zone">
                                            <button type='button' className="btn_etc">
                                                <ImgComponent className={'img w24 op06'} src={'more_fff_24.svg'} />
                                                <ImgComponent className={'img_on w24'} src={'more_sky_24.svg'} />
                                            </button>
                                        </div>
                                    </ConnectComponent>
                                </div>

                                <div class="dflx_as m-t-20 gap_16">
                                    <div class="connect_line sky w320">
                                        <div class="shadow left">
                                            <p class="arrow_box">
                                                <ImgComponent className={'w12 op06'} src={'arrow_left_fff_12.svg'} />
                                            </p>
                                        </div>
                                        <div class="horizon_line w280">
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short selected">
                                                    Selected
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                        </div>
                                        <div class="shadow right">
                                            <p class="arrow_box">
                                                <ImgComponent className={'w12 op06'} src={'arrow_right_fff_12.svg'} />
                                            </p>
                                        </div>
                                    </div>
                                    <div class="connect_line sky w320">
                                        <div class="horizon_line w280">
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short selected">
                                                    Selected
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div class="horibox">
                                                <a class="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                        </div>
                                        <div class="shadow right">
                                            <p class="arrow_box">
                                                <ImgComponent className={'w12 op06'} src={'arrow_right_fff_12.svg'} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl class="comp_dl">
                            <dt class="comp_dt p-t-15">Icon type</dt>
                            <dd class="comp_dd">
                                <div class="compline m-b-30">
                                    <div class="tab_line">
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="w24" src={'minus_fff_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="w24" src={'plus_line_fff_24.svg'} />
                                        </ButtonWithComponent>
                                    </div>
                                    <p class="p-l-30"></p>
                                    <div class="tab_line">
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'legend_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'legend_sky_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                        </ButtonWithComponent>
                                    </div>
                                    <p class="p-l-30"></p>
                                    <div class="connect_line">
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m selected'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Selected</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div class="compline gap_16 m-b-30">
                                    <div class="connect_line">
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m selected'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Selected</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                    </div>
                                    <div class="connect_line sky">
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m selected'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Selected</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                            <span class="word">Default</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div class="compline m-b-30">
                                    <div class="connect_line rounding sky">
                                        <div class="dflx_ac bd_right1">
                                            <ButtonWithComponent type={'button'} className={'btn_toggle_icon selected'}>
                                                <span class="circle_grey32">
                                                    <ImgComponent className="img w24 op04" src={'icon_signal_24.svg'} />
                                                    <ImgComponent className="img_on w24 op04" src={'icon_signal_sky_24.svg'} />
                                                </span>
                                                <span class="word">라벨</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                <span class="circle_grey32">
                                                    <ImgComponent className="img w24 op04" src={'icon_signal_24.svg'} />
                                                    <ImgComponent className="img_on w24 op04" src={'icon_signal_sky_24.svg'} />
                                                </span>
                                                <span class="word">라벨</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                <span class="circle_grey32">
                                                    <ImgComponent className="img w24 op04" src={'icon_signal_24.svg'} />
                                                    <ImgComponent className="img_on w24 op04" src={'icon_signal_sky_24.svg'} />
                                                </span>
                                                <span class="word">라벨</span>
                                            </ButtonWithComponent>
                                        </div>
                                        <div class="dflx_ac">
                                            <ButtonWithComponent type={'button'} className={'btn_toggle_icon selected'}>
                                                <span class="circle_grey32">
                                                    <ImgComponent className="img w24 op04" src={'icon_signal_24.svg'} />
                                                    <ImgComponent className="img_on w24 op04" src={'icon_signal_sky_24.svg'} />
                                                </span>
                                                <span class="word">라벨</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                                <span class="circle_grey32">
                                                    <ImgComponent className="img w24 op04" src={'icon_signal_24.svg'} />
                                                    <ImgComponent className="img_on w24 op04" src={'icon_signal_sky_24.svg'} />
                                                </span>
                                                <span class="word">라벨</span>
                                            </ButtonWithComponent>
                                        </div>
                                    </div>
                                    <p class="p-l-30"></p>

                                    <div class="connect_line box">
                                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon selected'}>
                                            <span class="circle_grey32">
                                                <ImgComponent className="img w24 op04" src={'map_fill_fff_24.svg'} />
                                                <ImgComponent className="img_on w24 op04" src={'map_fill_sky_24.svg'} />
                                            </span>
                                            <span class="word">일반</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                            <span class="circle_grey32 line">
                                                <ImgComponent className="img w24 op04" src={'satellite_fill_fff_24.svg'} />
                                                <ImgComponent className="img_on w24 op04" src={'satellite_fill_fff_24.svg'} />
                                            </span>
                                            <span class="word">위성</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                            <span class="circle_grey32 line">
                                                <ImgComponent className="img w24 op04" src={'mountain_fill_fff_24.svg'} />
                                                <ImgComponent className="img_on w24 op04" src={'mountain_fill_sky_24.svg'} />
                                            </span>
                                            <span class="word">지형</span>
                                        </ButtonWithComponent>
                                        <section class="control_line">
                                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb medium'}>
                                                <ImgComponent className="w20" src={'minus_fff_24.svg'} />
                                            </ButtonWithComponent>
                                            <div class="progress_box">
                                                <div class="bar scrubber">
                                                    <div class="empty"></div>
                                                    <div class="bar progress white"></div>
                                                </div>
                                            </div>
                                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb medium'}>
                                                <ImgComponent className="w20" src={'plus_line_fff_24.svg'} />
                                            </ButtonWithComponent>
                                        </section>
                                    </div>
                                    
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

                <article class="Gr_contents">
                    <div class="comp_top p-b-16">
                        <h2>Switch</h2>
                    </div>
                    <section class="comp_conts">
                        <dl class="comp_dl">
                            <dt className='comp_dt p-t-15'></dt>
                            <dd class="comp_dd">
                                <div class="compline">
                                    <p class="comp_size">Default</p>
                                    <SwitchComponent labelClass={'switch_label'} spanClass="switch_button" />
                                    <p class="comp_size m-l-16 m-r-4">Fill_Line</p>
                                    <SwitchComponent labelClass={'switch_label fill_line'} spanClass="switch_button" />
                                    <p class="comp_size m-l-16">Line</p>
                                    <SwitchComponent labelClass={'switch_label line'} spanClass="switch_button" />
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

            </div>

        </div>
      </div>
    );
};

export default TabnToggle;
