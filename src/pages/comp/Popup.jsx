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
                    <h1>Popup</h1>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top flex_wrap">
                        <h2>Popup</h2>
                        <p className="m-t-10 w-100">배경 오버레이를 적용(modal) 하여 버튼클릭을 강제할 수도 있음 (선택사항)</p>
                    </div>
                    <section className="comp_conts m-t-20">
                        <div>
                            <div className="fs_bold">
                                Layout
                            </div>
                            <p className="m-t-10 fc_grey60 fs_12">Modal bg #000 50% </p>
                            <div className="m-t-100 dashed_box p-20">
                                <div className="dflx_as relative">
                                    <div>
                                        <div className="absolute swiper_top_text">
                                            <span className="fs_12 fc_grey60">Text</span>
                                        </div>

                                        <PopupComponent boxClass={'popover_box w320'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'Title'} close={''}>
                                            <div className="popup_contents p-20">
                                                <p className="fs_14 lh_18">
                                                    Contents text<br />
                                                    Contents text
                                                </p>
                                            </div>
                                        </PopupComponent>
                                    </div>
                                    <div className='m-l-100'>
                                        <div className="absolute swiper_top_text">
                                            <span className="fs_12 fc_grey60">Icon + Text + Button</span>
                                        </div>

                                        <PopupComponent boxClass={'popover_box w480'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'Title'} close={''}>
                                            <div className="popup_contents p-20 dflx_column">
                                                <div className="dflx_ac gap_12 m-b-16">
                                                    <span>
                                                        <ImgComponent className={'w24'} src={"sucess_fill_24.svg"} />
                                                    </span>
                                                    <p className="fs_14 lh_18">Contents text</p>
                                                </div>
                                                <div className="m-t-a m-l-a">
                                                    <ButtonComponent type={'button'} className={'btn_primary btn_m w140'} txt={'CTA'} />
                                                </div>
                                            </div>
                                        </PopupComponent>
                                    </div>
                                    <div className='m-l-100'>
                                        <div className="absolute swiper_top_text">
                                            <span className="fs_12 fc_grey60">2 Buttons</span>
                                        </div>

                                        <PopupComponent boxClass={'popover_box w480'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'Title'} close={''}>
                                            <div className="popup_contents p-20 dflx_column">
                                                <div className="dflx_as gap_12 m-b-16">
                                                    <span>
                                                        <ImgComponent className={'w24'} src={"sucess_fill_24.svg"} />
                                                    </span>
                                                    <p className="fs_14 lh_18">
                                                        Contents text<br />
                                                        Contents text<br />
                                                        Contents text
                                                    </p>
                                                </div>
                                                <div className="m-t-a m-l-a dflx gap_8">
                                                    <ButtonComponent type={'button'} className={'btn_secondary btn_m w140'} txt={'Button'} />
                                                    <ButtonComponent type={'button'} className={'btn_primary btn_m w140'} txt={'CTA'} />
                                                </div>
                                            </div>
                                        </PopupComponent>
                                    </div>
                                </div>
                                <div className="relative m-t-140">
                                    <div className="">
                                        <div className="absolute swiper_top_text">
                                            <span className="fs_12 fc_grey60">2단 콘텐츠</span>
                                        </div>

                                        <PopupComponent boxClass={'popover_box w320'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'Title'} close={''}>
                                            <div className="popup_contents p-20">
                                                <div className="display_grid gap_16">
                                                    <div className="dflx_ac fs_14 gap_24">
                                                        <span className="fc_grey60">sub</span>
                                                        <span>Contents text</span>
                                                    </div>
                                                    <div className="dflx_ac fs_14 gap_24">
                                                        <span className="fc_grey60">sub</span>
                                                        <span>Contents text</span>
                                                    </div>
                                                    <div className="dflx_ac fs_14 gap_24">
                                                        <span className="fc_grey60">sub</span>
                                                        <span>Contents text</span>
                                                    </div>
                                                    <div className="dflx_ac fs_14 gap_24">
                                                        <span className="fc_grey60">sub</span>
                                                        <span>Contents text</span>
                                                    </div>
                                                    <div className="dflx_ac fs_14 gap_24">
                                                        <span className="fc_grey60">sub</span>
                                                        <span>Contents text</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopupComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-t-80">
                            <div className="fs_bold">
                                Size
                            </div>
                            <div className="m-t-80">
                                <div className="dflx_as relative gap_40">
                                    <div className="">
                                        <div className="absolute swiper_top_text">
                                            <span className="fs_12 fc_grey60">320px</span>
                                        </div>

                                        <PopupComponent boxClass={'popover_box w320'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'Title'} close={''}>
                                            <div className="popup_contents p-20">
                                                <p className="fs_14 lh_18">
                                                    Contents text
                                                </p>
                                            </div>
                                        </PopupComponent>
                                    </div>
                                    <div className="">
                                        <div className="absolute swiper_top_text">
                                            <span className="fs_12 fc_grey60">480px</span>
                                        </div>

                                        <PopupComponent boxClass={'popover_box w480'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'Title'} close={''}>
                                            <div className="popup_contents p-20 dflx_column">
                                                <div className="dflx_as gap_12 m-b-16">
                                                    <p className="fs_14 lh_18">
                                                        Contents text
                                                    </p>
                                                </div>
                                                <div className="m-t-a m-l-a">
                                                    <ButtonComponent type={'button'} className={'btn_primary btn_m w140'} txt={'CTA'} />
                                                </div>
                                            </div> 
                                        </PopupComponent>
                                    </div>
                                    <div className="dflx_as relative gap_40">
                                        <div className="">
                                            <div className="absolute swiper_top_text">
                                                <span className="fs_12 fc_grey60">720px</span>
                                            </div>

                                            <PopupComponent boxClass={'popover_box w720'} titleBgClass={'popup_title_bg'} 
                                            titleClass={'popup_title'} title={'Title'} close={''}>
                                                <div className="popup_contents p-20 dflx_column">
                                                    <div className="dflx_as gap_12 m-b-16">
                                                        <p className="fs_14 lh_18">Contents text</p>
                                                    </div>
                                                    <div className="m-t-a m-l-a">
                                                        <ButtonComponent type={'button'} className={'btn_primary btn_m w140'} txt={'CTA'} />
                                                    </div>
                                                </div> 
                                            </PopupComponent>
                                        </div>
                                    </div>  
                                </div>                                                                
                            </div>                            
                        </div>        
                        <div className="m-t-80">
                            <div className="fs_bold">
                                Usage
                            </div>
                            <div className="m-t-20">
                                <div className="dflx_as gap_40">
                                    <div>
                                        <PopupComponent boxClass={'popover_box w480'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'우측 마우스 제한'} close={''}>
                                            <div className="popup_contents p-20 dflx_column">
                                                <div className="dflx_ac gap_12 m-b-16">
                                                    <span>
                                                        <ImgComponent className={'w24'} src={"error_fill_24.svg"} />
                                                    </span>
                                                    <p className="fs_14 lh_18">마우스 오른쪽 버튼 사용이 금지되었습니다.</p>
                                                </div>
                                                <div className="m-t-a m-l-a">
                                                    <ButtonComponent type={'button'} className={'btn_primary btn_m w140'} txt={'확인'} />
                                                </div>
                                            </div> 
                                        </PopupComponent>
                                    </div>
                                    <div>
                                        <PopupComponent boxClass={'popover_box w480'} titleBgClass={'popup_title_bg'} 
                                        titleClass={'popup_title'} title={'휴면 계정 알림'} close={''}>
                                            <div className="popup_contents p-20 dflx_column">
                                                <div className="dflx_as gap_12 m-b-16">
                                                    <span>
                                                        <ImgComponent className={'w24'} src={"sucess_fill_24.svg"} />
                                                    </span>
                                                    <p className="fs_14 lh_18">
                                                        장기간 접속을 하지 않아 휴면 상태의 아이디입니다.<br/>관리자에게 문의하세요.
                                                    </p>
                                                </div>
                                                <div className="m-t-a m-l-a">
                                                    <ButtonComponent type={'button'} className={'btn_primary btn_m w140'} txt={'확인'} />
                                                </div>
                                            </div> 
                                        </PopupComponent>
                                    </div>
                                    <PopupComponent boxClass={'popover_box w480'} titleBgClass={'popup_title_bg'} 
                                    titleClass={'popup_title'} title={'[경고] 비밀번호 오류'} close={''}>
                                        <div className="popup_contents p-20 dflx_column">
                                            <div className="dflx_as gap_12 m-b-16">
                                                <span>
                                                    <ImgComponent className={'w24'} src={"notice_fill_24.svg"} />
                                                </span>
                                                <p className="fs_14 lh_18">
                                                    비밀번호가 일치하지 않습니다.<br/>
                                                    비밀번호를 5회 이상 틀릴 경우 계정이 잠김 상태로 설정됩니다.<br/>
                                                    비밀번호를 찾거나 변경하시려면 관리자에게 초기화 요청하세요.
                                                </p>
                                            </div>
                                            <div className="m-t-a m-l-a dflx gap_8">
                                                <ButtonComponent type={'button'} className={'btn_secondary btn_m w140'} txt={'취소'} />
                                                <ButtonComponent type={'button'} className={'btn_primary btn_m w140'} txt={'확인'} />
                                            </div>
                                        </div> 
                                    </PopupComponent>
                                </div>                          
                            </div>                            
                        </div> 
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top flex_wrap">
                        <h2>Snack Bar</h2>
                        <p className="m-t-10 w-100">브라우저 상단 중앙정렬, 최대 2줄 넘지 않게 작성</p>
                    </div>
                    <section className="comp_conts ">
                        <div>
                            <div className="m-t-10 dashed_box p-20">
                                <div className="dflx_as relative gap_40">
                                    <SnackBarComponent barClass={'snackbar_box w480'}>
                                        <p className="fs_14 fc_white lh_18">
                                            <span className="fs_medium">Local host contents:</span><br/>
                                            Error : Please try again in a few minutes.
                                        </p>
                                    </SnackBarComponent>
                                    <SnackBarComponent barClass={'snackbar_box w480 dflx_ac'}>
                                        <p className="fs_14 fc_white lh_18">
                                            <span className="fs_medium">Local host contents:</span><br/>
                                            Error : Please try again in a few minutes.
                                        </p>
                                        <ButtonWithComponent type={'button'} className={'m-l-a'}>
                                            <ImgComponent className={'w20'} src={'close_line_fff_20.svg'} />
                                        </ButtonWithComponent>
                                    </SnackBarComponent>
                                    <SnackBarComponent barClass={'snackbar_box w480 dflx ai_end'}>
                                        <p className="fs_14 fc_white lh_18">
                                            <span className="fs_medium">Local host contents:</span><br/>
                                            Error : Please try again in a few minutes.
                                        </p>
                                        <ButtonWithComponent type={'button'} className={'m-l-a fc_primary fs_14_medium'}>
                                            Button
                                        </ButtonWithComponent>
                                    </SnackBarComponent>   
                                </div>                            
                            </div>
                        </div>                        
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top flex_wrap">
                        <h2>Hero notification</h2>
                        <p className="m-t-10 w-100">브라우저 상단 중앙정렬</p>
                    </div>

                    <div className="dflx">
                        <section className="comp_conts">
                            <p className="fs_bold">Default</p>
                            <NotificComponent bgClass={'notification_bg'} titleClass={'notification_title'} 
                            title={'부천역사거리 앞 3중 추돌, 부상 3명'} />
                        </section>

                        <section className="comp_conts relative p-b-100">
                            <p className="fs_bold">Closed</p>
                            <div class="notification_box hide m-t-20">
                                <div class="notification_bg">
                                    <p class="notification_title">부천역사거리 앞 3중 추돌, 부상 3명</p>
                                </div>
                                <ButtonWithComponent type={'button'} className={'btn_notification'}>
                                    <ImgComponent className={'w24'} src={'hero_notification_off_24.svg'} />
                                </ButtonWithComponent>
                            </div>
                        </section>
                    </div>
                </article>

            </div>

        </div>
      </div>
    );
};

export default Popup;
