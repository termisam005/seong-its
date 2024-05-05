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
import PutDropComponent from '../../components/common/PutDropComponent';
import ToggleComponent from '../../components/common/ToggleComponent';


const Button = () => {

    //라디오 탭
    const [radioIndi, setRadioIndi] = useState(1);
    const tabIndi = (index) =>{
        setRadioIndi(index);
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

            <div className="guide_center width1720">

                <article className="guide_top">
                    <h1>Button</h1>
                </article>

                <article className="Gr_contents m-t-100">
                    <div className="p-b-30">
                        <h2 className="fs_28_bold">Large</h2>
                        <div className="fs_16 fc_grey87 m-t-12">
                            <p className="m-b-5"> W: 디자인에 맞춰 조절 가능</p>
                            <p className="m-b-5"> H: 40px 고정 (48=login 전용)</p>
                            <p className="m-b-5">     Radius 2px</p>
                        </div>
                    </div>
                    <section className="comp_conts">
                        <dl className="comp_dl m-0">
                            <dt className="comp_dt w120 m-r-100">Primary</dt>
                            <dd className="comp_dd">
                                <div className="compline m-b-20">
                                    <p className="comp_size">48px</p>
                                    <div className="components">
                                        <ButtonComponent type={'button'} className={'btn_primary btn_l w240'} txt={'Default'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_primary btn_l selected w240'} txt={'Hover'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_primary btn_l selected w240 vsnone'} txt={'Hidden'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_primary btn_l disabled w240'} txt={'Disabled'}></ButtonComponent>
                                        <p className="fs_12 fc_grey99">*Login, error page</p>
                                    </div>
                                </div>
                                <div className="compline ">
                                    <p className="comp_size">40px</p>
                                    <div className="components">
                                        <ButtonComponent type={'button'} className={'btn_primary btn_m w240'} txt={'Default'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_primary btn_m selected w240'} txt={'Hover'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_primary btn_m selected w240 vsnone'} txt={'Hidden'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_primary btn_m disabled w240'} txt={'Disabled'}></ButtonComponent>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl m-0">
                            <dt className="comp_dt w120 m-r-100">Secondary</dt>
                            <dd className="comp_dd">
                                <div className="compline">
                                    <p className="comp_size"></p>
                                    <div className="components">
                                        <ButtonComponent type={'button'} className={'btn_secondary btn_m w240'} txt={'Default'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_secondary btn_m hover w240'} txt={'Hover'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_secondary btn_m selected w240'} txt={'Selected'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_secondary btn_m disabled w240'} txt={'Disabled'}></ButtonComponent>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl m-0">
                            <dt className="comp_dt w120 m-r-100">Floating action</dt>
                            <dd className="comp_dd">
                                <div className="compline m-b-20">
                                    <p className="comp_size">body</p>
                                    <div className="components">
                                        <ButtonComponent type={'button'} className={'btn_floating btn_m w240'} txt={'Default'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_floating btn_m hover w240'} txt={'Hover'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_floating btn_m selected w240'} txt={'Selected'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_floating btn_m disabled w240'} txt={'Disabled'}></ButtonComponent>
                                        <p className="fs_12 fc_grey99">*토글버튼으로 사용 가능</p>
                                    </div>
                                </div>
                                <div className="compline">
                                    <p className="comp_size">footer</p>
                                    <div className="components">
                                        <ButtonComponent type={'button'} className={'btn_floating_footer btn_m w240'} txt={'Default'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_floating_footer btn_m hover w240'} txt={'Hover'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_floating_footer btn_m selected w240'} txt={'Selected'}></ButtonComponent>
                                        <ButtonComponent type={'button'} className={'btn_floating_footer btn_m disabled w240'} txt={'Disabled'}></ButtonComponent>
                                        <p className="fs_12 fc_grey99">*토글버튼으로 사용 가능</p>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

                <article className="Gr_contents m-t-100 m-b-100">
                    <div className="p-b-30">
                        <h2 className="fs_28_bold">Small</h2>
                        <div className="fs_16 fc_grey87 m-t-12">
                            <p className="m-b-5"> W: 디자인 or 레이블 길이에 맞춰 조절 가능</p>
                            <p className="m-b-5"> H: 고정 (28 or 24px)</p>
                        </div>
                    </div>

                    <section className="comp_conts">
                        <div className="dflx col_gap20 m-b-10">
                            <p className="w268"></p>
                            <p className="fs_12 fc_grey60 w80">H 28px</p>
                            <p className="w680"></p>
                            <p className="fs_12 fc_grey60">H 24px</p>
                        </div>

                        <div className="dflx col_gap100">
                            <p className="w189"></p>
                            <p className="fs_12 fc_grey60 w300">Padding (L/R) 12px</p>
                            <p className="fs_12 fc_grey60">Padding (L/R) 8px</p>
                        </div>

                        <dl className="comp_dl">
                            <dt className="comp_dt w176 m-r-100">Primary</dt>
                            <dd className="comp_dd">
                                <div className="compline col_gap80">
                                    <div className="display_flex layout_ac w320">
                                        <div className="components">
                                            <ButtonComponent type={'button'} className={'btn_primary btn_s'} txt={'Default'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_primary btn_s selected'} txt={'Hover & Selected'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_primary btn_s disabled'} txt={'Disabled'}></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="display_flex layout_ac w320">
                                        <div className="components">
                                            <ButtonComponent type={'button'} className={'btn_primary btn_ms'} txt={'Default'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_primary btn_ms selected'} txt={'Hover & Selected'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_primary btn_ms disabled'} txt={'Disabled'}></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="display_flex layout_ac w320">
                                        <div className="components">
                                            <ButtonComponent type={'button'} className={'btn_primary btn_xs'} txt={'Default'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_primary btn_xs selected'} txt={'Hover & Selected'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_primary btn_xs disabled'} txt={'Disabled'}></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl">
                        <dt className="comp_dt w176 m-r-100">Secondary</dt>
                            <dd className="comp_dd">
                                <div className="compline col_gap80">
                                    <div className="display_flex layout_ac w320">
                                        <div className="components">
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_s'} txt={'Default'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_s hover'} txt={'Hover'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_s selected'} txt={'Selected'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_s disabled'} txt={'Disabled'}></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="display_flex layout_ac w320">
                                        <div className="components">
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_ms'} txt={'Default'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_ms hover'} txt={'Hover'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_ms selected'} txt={'Selected'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_ms disabled'} txt={'Disabled'}></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="display_flex layout_ac">
                                        <div className="components">
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_xs'} txt={'Default'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_xs hover'} txt={'Hover'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_xs selected'} txt={'Selected'}></ButtonComponent>
                                            <ButtonComponent type={'button'} className={'btn_secondary btn_xs disabled'} txt={'Disabled'}></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

                <article className="Gr_contents">
                    <section className="comp_conts">
                        <div className="m-b-100-negative">
                            <h2 className="fs_28_bold">Split button</h2>
                            <div className="fs_16 fc_grey87 m-t-12">
                                <p className="m-b-5"> 이중기능을 가진 분할버튼</p>
                                <p className="m-b-5"> body 영역에 floating으로</p>
                                <p className="m-b-5"> 사용사이즈 고정</p>
                            </div>
                        </div>

                        <div className="dflx col_gap32">
                            <div className="m-t-100">
                                <div className="dflx col_gap20">
                                    <p className="w100"></p>
                                    <p className="w140"></p>
                                    <p className="w160"></p>
                                    <p className="fs_12 fc_grey60 w160 m-b-10">hover</p>
                                    <p className="fs_12 fc_grey60 w160 m-b-10">selected</p>
                                </div>
                                <div className="dflx col_gap20 m-b-10">
                                    <p className="w100"></p>
                                    <p className="w140"></p>
                                    <p className="w160"></p>
                                    <p className="fs_12 fc_grey60 w150">좌우 기능에 동시적용</p>
                                    <p className="fs_12 fc_grey60 w200">
                                        좌측기능 toggle on에 적용 <br />
                                        (우측 기능 토글 시 아이콘만 변경)
                                    </p>
                                </div>
                                <dl className="comp_dl m-0">
                                    <dt className="comp_dt w176 m-r-100"></dt>
                                    <dd className="comp_dd">
                                        <div className="compline m-0">
                                            <div className="components col_gap20">
                                                <ButtonWithComponent type={'button'} className={'btn_floating none_shadow btn_m btn_drop'}>
                                                    <span className="word">Default</span>
                                                    <PutDropComponent normal>
                                                        <ImgComponent className={'img_down w20'} src={'arrow_up_sky_20.svg'} />
                                                        <ImgComponent className={'img_up w20'} src={'arrow_down_sky_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_floating hover btn_m btn_drop'}>
                                                    <span className="word">Hover</span>
                                                    <PutDropComponent normal>
                                                        <ImgComponent className={'img_down w20'} src={'arrow_up_sky_20.svg'} />
                                                        <ImgComponent className={'img_up w20'} src={'arrow_down_sky_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>                                              
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop selected'}>
                                                    <span className="word">Selected</span>
                                                    <PutDropComponent normal>
                                                        <ImgComponent className={'img_down w20'} src={'arrow_up_sky_20.svg'} />
                                                        <ImgComponent className={'img_up w20'} src={'arrow_down_sky_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>                                              
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop disabled'}>
                                                    <span className="word">Disabled</span>
                                                    <PutDropComponent disabled>
                                                        <ImgComponent className={'img_down w20'} src={'arrow_up_sky_20.svg'} />
                                                        <ImgComponent className={'img_up w20'} src={'arrow_down_sky_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>

                                <dl className="comp_dl m-0">
                                    <dt className="comp_dt w176 m-r-100"></dt>
                                    <dd className="comp_dd">
                                        <div className="compline">
                                            <div className="components col_gap20">
                                                <ButtonWithComponent type={'button'} className={'btn_floating none_shadow btn_m btn_drop'}>
                                                    <span className="word">Default</span>
                                                    <PutDropComponent selected>
                                                        <ImgComponent className={'img_down w20'} src={'arrow_up_sky_20.svg'} />
                                                        <ImgComponent className={'img_up w20'} src={'arrow_down_sky_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>                                                
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m hover btn_drop'}>
                                                    <span className="word">Hover</span>
                                                    <PutDropComponent selected>
                                                        <ImgComponent className={'img_down w20'} src={'arrow_up_sky_20.svg'} />
                                                        <ImgComponent className={'img_up w20'} src={'arrow_down_sky_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>                                              
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop selected'}>
                                                    <span className="word">Selected</span>
                                                    <PutDropComponent normal>
                                                        <ImgComponent className={'img_down w20'} src={'arrow_up_sky_20.svg'} />
                                                        <ImgComponent className={'img_up w20'} src={'arrow_down_sky_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>                                              
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop disabled'}>
                                                    <span className="word">Disabled</span>
                                                    <PutDropComponent selected>
                                                        <ImgComponent className={'img_down w20'} src={'arrow_up_sky_20.svg'} />
                                                        <ImgComponent className={'img_up w20'} src={'arrow_down_sky_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>

                                <dl className="comp_dl m-0">
                                    <dt className="comp_dt w176 m-r-100"></dt>
                                    <dd className="comp_dd">
                                        <div className="compline m-0">
                                            <div className="components col_gap20">
                                                <ButtonWithComponent type={'button'} className={'btn_floating none_shadow btn_m btn_drop'}>
                                                    <span className="word">Default</span>
                                                    <PutDropComponent seeOff>
                                                        <ImgComponent className={'img_see_off w20'} src={'eye_sky_on_20.svg'} />
                                                        <ImgComponent className={'img_see w20 op04'} src={'eye_fff_off_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop hover'}>
                                                    <span className="word">Hover</span>
                                                    <PutDropComponent see>
                                                        <ImgComponent className={'img_see_off w20'} src={'eye_sky_on_20.svg'} />
                                                        <ImgComponent className={'img_see w20 op04'} src={'eye_fff_off_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>                                              
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop selected'}>
                                                    <span className="word">Selected</span>
                                                    <PutDropComponent see>
                                                        <ImgComponent className={'img_see_off w20'} src={'eye_sky_on_20.svg'} />
                                                        <ImgComponent className={'img_see w20 op04'} src={'eye_fff_off_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>                                              
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop disabled'}>
                                                    <span className="word">Disabled</span>
                                                    <PutDropComponent seeDisabled>
                                                        <ImgComponent className={'img_see_off w20'} src={'eye_sky_on_20.svg'} />
                                                        <ImgComponent className={'img_see w20 op04'} src={'eye_fff_off_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>

                                <dl className="comp_dl">
                                    <dt className="comp_dt w176 m-r-100"></dt>
                                    <dd className="comp_dd">
                                        <div className="compline">
                                            <div className="components col_gap20">
                                                <ButtonWithComponent type={'button'} className={'btn_floating none_shadow btn_m btn_drop'}>
                                                    <span className="word">Default</span>
                                                    <PutDropComponent see>
                                                        <ImgComponent className={'img_see w20'} src={'eye_sky_on_20.svg'} />
                                                        <ImgComponent className={'img_see_off w20 op04'} src={'eye_fff_off_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop hover'}>
                                                    <span className="word">Hover</span>
                                                    <PutDropComponent see>
                                                        <ImgComponent className={'img_see w20'} src={'eye_sky_on_20.svg'} />
                                                        <ImgComponent className={'img_see_off w20 op04'} src={'eye_fff_off_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop selected'}>
                                                    <span className="word">Selected</span>
                                                    <PutDropComponent see>
                                                        <ImgComponent className={'img_see w20'} src={'eye_sky_on_20.svg'} />
                                                        <ImgComponent className={'img_see_off w20 op04'} src={'eye_fff_off_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>                                     
                                                <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop disabled'}>
                                                    <span className="word">Disabled</span>
                                                    <PutDropComponent seeDisabled>
                                                        <ImgComponent className={'img_see w20'} src={'eye_sky_on_20.svg'} />
                                                        <ImgComponent className={'img_see_off w20 op04'} src={'eye_fff_off_20.svg'} />
                                                    </PutDropComponent>
                                                </ButtonWithComponent>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>

                            <div className="usage_box">
                                <dt className="">Usage</dt>
                                <dl className="comp_dl h340">
                                    <dd className="comp_dd">
                                        <div className="dflx col_gap20 m-t-40 m-b-20">
                                            <p className="fs_12 fc_grey60 w150">Default</p>
                                            <p className="fs_12 fc_grey60">Dropdown</p>
                                        </div>
                                        <div className="compline">
                                            <div className="components">
                                                <div className="dflx_as col_gap20">
                                                    <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop'}>
                                                        <span className="word">주요 혼잡구역</span>
                                                        <PutDropComponent see>
                                                            <ImgComponent className={'img_see w20'} src={'eye_sky_on_20.svg'} />
                                                            <ImgComponent className={'img_see_off w20 op04'} src={'eye_fff_off_20.svg'} />
                                                        </PutDropComponent>
                                                        <div className="split_area">
                                                            <div className="acitvate_bg w109 h40"></div>
                                                            <div className="dflx m-t-8">
                                                                <div className="split_border w109 h8"></div>
                                                                <div className="split_border w38 h8 m-l-4"></div>
                                                            </div>
                                                            <div className="dflx m-t-8 fs_13 fc_gray87">
                                                                <p className='tac w109'>드롭다운<br/>
                                                                (109px)</p>
                                                                <p className='p-l-8'>지도 레이어<br/>
                                                                on/off</p>
                                                            </div>
                                                        </div>
                                                    </ButtonWithComponent>
                                                    <article className="drop_wrap">
                                                        <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop selected'}>
                                                            <span className="word">주요 혼잡구역</span>
                                                            <p className="put_see">
                                                                <ImgComponent className={'img_off w20'} src={'eye_sky_on_20.svg'} />
                                                            </p>
                                                        </ButtonWithComponent>
                                                        <section className="drop_content w320">
                                                            <p className="fs_11 op06 m-b-8">
                                                                시간범위: 2023.09.20  00:06:40 ~ 2023.09.20  16:05:00 
                                                            </p>
                                                            <div className="w-100 h240 scroll">
                                                                <table className='uni_table01 sm w360'>
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope='col'>순위</th>
                                                                            <th scope='col'>행정구역</th>
                                                                            <th scope='col'>구간명</th>
                                                                            <th scope='col'>부서</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>계양구</td>
                                                                            <td>신대4 → 나들목4</td>
                                                                            <td>교통정보운영과</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>계양구</td>
                                                                            <td>신대4 → 나들목4</td>
                                                                            <td>교통정보운영과</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>계양구</td>
                                                                            <td>신대4 → 나들목4</td>
                                                                            <td>교통정보운영과</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>계양구</td>
                                                                            <td>신대4 → 나들목4</td>
                                                                            <td>교통정보운영과</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>계양구</td>
                                                                            <td>신대4 → 나들목4</td>
                                                                            <td>교통정보운영과</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>계양구</td>
                                                                            <td>신대4 → 나들목4</td>
                                                                            <td>교통정보운영과</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>계양구</td>
                                                                            <td>신대4 → 나들목4</td>
                                                                            <td>교통정보운영과</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>계양구</td>
                                                                            <td>신대4 → 나들목4</td>
                                                                            <td>교통정보운영과</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </section>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>

                                <dl className="comp_dl m-t-100">
                                    <dd className="comp_dd">
                                        <div className="compline">
                                            <div className="components">
                                                <div className="dflx_as col_gap20">
                                                    <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop'}>
                                                        <span className="drop_word">[1] 계양구</span>
                                                        <p className="put_drop">
                                                            <ImgComponent className={'img_drop w20'} src={'arrow_down_sky_20.svg'} />
                                                        </p>
                                                        <div className="split_area">
                                                            <div className='dflx_jend'>
                                                                <div className="acitvate_bg w44 h40"></div>
                                                            </div>
                                                            <div className="dflx m-t-8">
                                                                <div className="split_border w109 h8"></div>
                                                                <div className="split_border w38 h8 m-l-4"></div>
                                                            </div>
                                                            <div className="dflx m-t-8 fs_13 fc_gray87">
                                                                <p className='tac w109'>팝업 open<br/>
                                                                (권역선택 지도)</p>
                                                                <p className='w44 tac'>드롭다운<br/>
                                                                (44px)</p>
                                                            </div>
                                                        </div>
                                                    </ButtonWithComponent>
                                                    <article className="drop_wrap">
                                                        <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop'}>
                                                            <span className="drop_word">[1] 계양구</span>
                                                            <p className="put_drop up">
                                                                <ImgComponent className={'img_drop w20'} src={'arrow_down_sky_20.svg'} />
                                                            </p>
                                                        </ButtonWithComponent>
                                                        <div className="drop_content p-16">
                                                            <p className={radioIndi === 1? "ch_radio p-0 m-b-16 on" : "ch_radio p-0 m-b-16"} 
                                                            onClick={() => tabIndi(1)}>
                                                                <span className="radio"></span>
                                                                <span className="word">전체 네트워크</span>
                                                            </p>
                                                            <p className={radioIndi === 2? "ch_radio p-0 on" : "ch_radio p-0"} 
                                                            onClick={() => tabIndi(2)}>
                                                                <span className="radio"></span>
                                                                <span className="word">권역별 네트워크</span>
                                                            </p>
                                                        </div>
                                                    </article> 
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>           
                    </section>
                </article>

                <article className="Gr_contents m-t-400-negative">
                    <div className="p-b-40">
                        <h2>Icon Button</h2>
                        <div className="fs_16 fc_grey87 m-t-10">
                            <p className='m-b-5'>사이즈 고정</p>
                            <p className='m-b-5'>Lable 있을 경우 길이에 맞춰 width 조절 가능</p>
                        </div>
                    </div>
                    
                    <section className="comp_conts">
                        <div className="dflx col_gap20 m-b-10">
                            <p className="w268"></p>
                            <p className="fs_12 fc_grey60 w140">28px</p>
                            <p className="w192"></p>
                            <p className="fs_12 fc_grey60 w150">40px (Footer toggle btn)</p>
                        </div>
                        <dl className="comp_dl m-0">
                            <dt className="comp_dt w120 m-r-10">Icon</dt>
                            <dd className="comp_dd">
                                <div className="compline">
                                    <p className="sub_font tae w120 m-r-30">Default</p>
                                    <div className="components col_gap40">
                                        <ButtonWithComponent type={'button'} className={'btn_srch28'}>
                                            <span className="dflx_ac_jcent op06">
                                                <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                                            </span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_secondary btn_s_h28'}>
                                            <ImgComponent className={'w20 op06 m-r-8'} src={'icon_download_20.svg'} />
                                            <span className="word">Label</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                            <div className='circle_grey28 icon'>
                                                <ImgComponent className={'img w20 op06'} src={'icon_cctv_20.svg'} />
                                                <ImgComponent className={'img_on w20'} src={'icon_cctv_sky_20.svg'} />
                                            </div>
                                            <span className="word">Label</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'circle32 icon'}>
                                            <ImgComponent className={'w20'} src={'icon_x_20.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24'} src={'layer_sky_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24'} src={'layer_sky_24.svg'} />
                                            <span className="word">Label</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl m-0">
                            <dt className="comp_dt w120 m-r-10"></dt>
                            <dd className="comp_dd">
                                <div className="compline">
                                    <p className="sub_font tae w120 m-r-30">Hover/Selected</p>
                                    <div className="components col_gap40">
                                        <ButtonWithComponent type={'button'} className={'btn_srch28 selected'}>
                                            <span className="dflx_ac_jcent op06">
                                                <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                                            </span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_secondary hover btn_s_h28'}>
                                            <ImgComponent className={'w20 op06 m-r-8'} src={'icon_download_20.svg'} />
                                            <span className="word">Label</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon selected'}>
                                            <div className='circle_grey28'>
                                                <ImgComponent className={'img w20 op06'} src={'icon_camera_20.svg'} />
                                                <ImgComponent className={'img_on w20'} src={'icon_camera_sky_20.svg'} />
                                            </div>
                                            <span className="word">Label</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'circle32 icon selected'}>
                                            <ImgComponent className={'w20'} src={'icon_x_20.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected'}>
                                            <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24'} src={'layer_sky_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m selected'}>
                                            <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24'} src={'layer_sky_24.svg'} />
                                            <span className="word">Label</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl m-0">
                            <dt className="comp_dt w120 m-r-10"></dt>
                            <dd className="comp_dd">
                                <div className="compline">
                                    <p className="sub_font tae w120 m-r-30">Active (검색어 입력 시)</p>
                                    <div className="components">
                                        <ButtonWithComponent type={'button'} className={'btn_srch28 on'}>
                                            <span className="dflx_ac_jcent op06">
                                                <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                                            </span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <h2>Arrow</h2>
                    </div>
                    <section className="comp_conts">
                        <dl className="comp_dl w-40">
                            <dt className="comp_dt p-t-32 w200">
                                Ellipse <br/>
                                <p className="fs_12 fc_grey60 m-t-10 w120">
                                    Swiper item으로 사용
                                </p>
                            </dt>
                            
                            <dd className="comp_dd">
                                <div className="compline">
                                    <div className="dflx_column m-t-50">
                                        <div className="dflx_ac">
                                            <div className="grid_column1 m-r-20 ai_center h120">
                                                <p className="fs_12 fc_grey60">Default</p>
                                                <p className="fs_12 fc_grey60">Selected</p>
                                                <p className="fs_12 fc_grey60 ">Disabled</p>
                                            </div>
                                            <div className="p-20 dflx">
                                                <div className="dflx_column row_gap20 relative">
                                                    <div className="dflx_ac col_gap20">
                                                        <div className="absolute swiper_top_text tac">
                                                            <span className="fs_12 fc_grey60">Line</span>
                                                        </div>
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle line'}>
                                                                <ImgComponent className={'img w12 op06'} src={'arrow_left_fff_12.svg'} />
                                                                <ImgComponent className={'img_on w12 op06'} src={'arrow_left_sky_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle line'}>
                                                                <ImgComponent className={'img w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                                <ImgComponent className={'img_on w12 op06'} src={'arrow_right_sky_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                    </div>
                                                    <div className="dflx_ac col_gap20">
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle line selected'}>
                                                                <ImgComponent className={'img w12 op06'} src={'arrow_left_fff_12.svg'} />
                                                                <ImgComponent className={'img_on w12 op06'} src={'arrow_left_sky_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle line selected'}>
                                                                <ImgComponent className={'img w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                                <ImgComponent className={'img_on w12 op06'} src={'arrow_right_sky_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                    </div>
                                                    <div className="dflx_ac col_gap20">
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle line disabled'}>
                                                                <ImgComponent className={'img w12 op06'} src={'arrow_left_fff_12.svg'} />
                                                                <ImgComponent className={'img_on w12 op06'} src={'arrow_left_sky_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle line disabled'}>
                                                                <ImgComponent className={'img w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                                <ImgComponent className={'img_on w12 op06'} src={'arrow_right_sky_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="dflx_column row_gap20 m-l-60">
                                                    <div className="dflx_ac col_gap20 relative">
                                                        <div className="absolute swiper_top_text tac">
                                                            <span className="fs_12 fc_grey60">Ghost</span>
                                                        </div>
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle'}>
                                                                <ImgComponent className={'w12 op08'} src={'arrow_left_fff_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle'}>
                                                                <ImgComponent className={'w12 op08'} src={'arrow_right_fff_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                    </div>
                                                    <div className="dflx_ac col_gap20">
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle selected'}>
                                                                <ImgComponent className={'w12 op08'} src={'arrow_left_fff_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle selected'}>
                                                                <ImgComponent className={'w12 op08'} src={'arrow_right_fff_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                    </div>
                                                    <div className="dflx_ac col_gap20">
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle disabled'}>
                                                                <ImgComponent className={'w12 op08'} src={'arrow_left_fff_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                        <div className="w-50">
                                                            <ButtonWithComponent type={'button'} className={'btn_arrow_circle disabled'}>
                                                                <ImgComponent className={'w12 op08'} src={'arrow_right_fff_12.svg'} />
                                                            </ButtonWithComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl w-60">
                            <dt className="comp_dt p-t-32 w250">
                                Rectangle <br/>
                                <p className="fs_12 fc_grey60 m-t-10 w400">
                                    L: Card Group을 화면 바깥으로 숨기거나 열 때 사용 <br/>
                                    M: 콘텐츠 박스 두개의 사이에 놓여 콘텐츠를 쌍방향 이동할 때 사용 <br/>
                                    S: Tab 영역이 넘칠 때 좌우 swiper로 사용
                                </p>
                            </dt>

                            <dd className="comp_dd m-t-100">
                                <div className="compline">
                                    <div className="dflx_column m-t-50">
                                        <div className="dflx_ac">
                                            <div className="grid_column1 m-r-20 ai_center h220 p-t-20">
                                                <p className="fs_12 fc_grey60">L</p>
                                                <p className="fs_12 fc_grey60">M</p>
                                                <p className="fs_12 fc_grey60 ">S</p>
                                            </div>

                                            <div className="p-20 dflx">
                                                <div className="dflx_column row_gap30 relative m-r-60">
                                                    <div className="dflx_ac_jcent col_gap20">
                                                        <div className="absolute swiper_top_text tac m-b-20">
                                                            <span className="fs_12 fc_grey60">Default</span>
                                                        </div>
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l right'}>
                                                            <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                                                        </ButtonWithComponent>
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l left'}>
                                                            <ImgComponent className={'w16'} src={'arrow_left_2line_sky_16.svg'} />
                                                        </ButtonWithComponent>
                                                    </div>
                                                    <div className="dflx_ac_jcent col_gap20">
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow'}>
                                                            <ImgComponent className={'img w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                            <ImgComponent className={'img_on w12 op06'} src={'arrow_right_sky_12.svg'} />
                                                        </ButtonWithComponent>
                                                    </div>
                                                    <div className="dflx_ac_jcent col_gap20">
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow_s'}>
                                                            <ImgComponent className={'w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                        </ButtonWithComponent>
                                                    </div>
                                                </div>

                                                <div className="dflx_column row_gap30 relative">
                                                    <div className="dflx_ac_jcent col_gap20">
                                                        <div className="absolute swiper_top_text tac m-b-20">
                                                            <span className="fs_12 fc_grey60">Hover/click</span>
                                                        </div>
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l hover right'}>
                                                            <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                                                        </ButtonWithComponent>
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l hover left'}>
                                                            <ImgComponent className={'w16'} src={'arrow_left_2line_sky_16.svg'} />
                                                        </ButtonWithComponent>
                                                    </div>
                                                    <div className="dflx_ac_jcent col_gap20">
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow hover'}>
                                                            <ImgComponent className={'img_on w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                            <ImgComponent className={'img w12'} src={'arrow_right_sky_12.svg'} />
                                                        </ButtonWithComponent>
                                                    </div>
                                                    <div className="dflx_ac_jcent col_gap20">
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow_s hover'}>
                                                            <ImgComponent className={'w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                        </ButtonWithComponent>
                                                    </div>
                                                </div>

                                                <div className="dflx_column row_gap30 m-l-60">
                                                    <div className="dflx_ac_jcent col_gap20 relative">
                                                        <div className="absolute swiper_top_text tac m-b-20">
                                                            <span className="fs_12 fc_grey60">Disabled</span>
                                                        </div>
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l right disabled'}>
                                                            <ImgComponent className={'w16'} src={'arrow_right_2line_fff_16.svg'} />
                                                        </ButtonWithComponent>
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l left disabled'}>
                                                            <ImgComponent className={'w16'} src={'arrow_left_2line_fff_16.svg'} />
                                                        </ButtonWithComponent>
                                                    </div>
                                                    <div className="dflx_ac_jcent col_gap20">
                                                        <ButtonWithComponent type={'button'} className={'btn_arrow disabled'}>
                                                            <ImgComponent className={'img w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                            <ImgComponent className={'img_on w12 op06'} src={'arrow_right_sky_12.svg'} />
                                                        </ButtonWithComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Button;
