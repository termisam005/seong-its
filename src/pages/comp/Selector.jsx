import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import CheckComponent from '../../components/common/CheckComponent';
import ImgComponent from '../../components/common/ImgComponent';

import SelectBoxLine from '../../components/select/SelectBoxLine';
import SelectBoxLineFill from '../../components/select/SelectBoxLineFill';
import SelectBoxFill from '../../components/select/SelectBoxFill';
import SelectBoxLineDual from '../../components/select/SelectBoxLineDual';
import SelectBoxLineFillDual from '../../components/select/SelectBoxLineFillDual';
import SelectBoxFillDual from '../../components/select/SelectBoxFillDual';
import Counter from '../../components/select/Counter';

import DatepickerLine from '../../components/date/DatepickerLine';
import DatepickerFill from '../../components/date/DatepickerFill';
import DatepickerLineWith from '../../components/date/DatepickerLineWith';
import DatepickerFillWith from '../../components/date/DatepickerFillWith';
import DatepickerLineDual from '../../components/date/DatepickerLineDual';
import DatepickerFillDual from '../../components/date/DatepickerFillDual';
import DragdropComponent from '../../components/common/DragdropComponent';


const Selector = () => {

    //checkbox_type
    const [checkBox01, setCheckBox01] = useState(true);
    const [checkBox02, setCheckBox02] = useState(true);

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
                    <h1>Selector</h1>
                </article>

                <article className="Gr_contents">
                    <h2 className='m-t-80'>Button</h2>
                    <section className="comp_conts m-t-100">
                        <div className="p-20">
                            <div className="dflx">
                                <div className="relative">
                                    <h2 className='fs_16_bold' style={{position:'absolute', top:'-60px'}}>Radio</h2>
                                    <div className="dflx gap_40">
                                        <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'radiobox01'} name={'radiobox_sample'} 
                                        labelClass={'fs_13'} txt={'Default'} />
                                        <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'radiobox02'} name={'radiobox_sample'} 
                                        labelClass={'fs_13'} txt={'Selected'} checked />
                                        <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'radiobox03'} name={'radiobox_sample'} 
                                        labelClass={'fs_13'} txt={'Disabled'} disabled />
                                    </div>
                                </div>
                                <div className="relative m-l-100">
                                    <h2 className='fs_16_bold' style={{position:'absolute', top:'-60px'}}>Check box</h2>
                                    <div className="dflx gap_40">
                                        <p className="fs_bold w100">Primary</p>
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type'} checkId={'checkbox01'} name={'checkbox_list'} 
                                        labelClass={'fs_13'} txt={'Default'} />
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type'} checkId={'checkbox02'} name={'checkbox_list'} 
                                        labelClass={'fs_13'} txt={'Selected'} checked={checkBox01} onChange={setCheckBox01} />
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type'} checkId={'checkbox03'} name={'checkbox_list'} 
                                        labelClass={'fs_13'} txt={'Disabled'} disabled />
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type part'} checkId={'checkbox04'} name={'checkbox_list'} 
                                        labelClass={'fs_13'} txt={'Selected(part)'} />
                                    </div>
                                    <div className="dflx gap_40 m-t-40">
                                        <p className="fs_bold w100">Login</p>
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type login'} checkId={'checkbox05'} name={'checkbox_login'} 
                                        labelClass={'fs_13'} txt={'Default'} />
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type login'} checkId={'checkbox06'} name={'checkbox_login'} 
                                        labelClass={'fs_13'} txt={'Selected'} checked={checkBox02} onChange={setCheckBox02} />
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type login'} checkId={'checkbox06'} name={'checkbox_login'} 
                                        labelClass={'fs_13'} txt={'Disabled'} disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                <article class="Gr_contents" style={{marginTop:'100px'}}>
                    <div class="comp_top flex_wrap">
                        <h2>Image</h2>
                    </div>
                    <div class="dashed_box p-20 dflx">
                        <div class="image_frame on">
                            <div class="image_dimbg">                                
                                <p class="image_frame_text">Hover/Selected</p>
                            </div>
                            <ImgComponent src={'image_select_sample.png'} />
                        </div>
                        <div class="image_frame m-l-40">
                            <div class="image_dimbg">                                
                                <p class="image_frame_text">Default</p>
                            </div>
                            <ImgComponent src={'image_select_sample.png'} />
                        </div>
                        <div class="dflx m-l-a gap_8">
                            <div>
                                <div class="image_selected w76 on">
                                    <div class="image_dimbg"></div>                   
                                    <ImgComponent src={'image_select_sample.png'} />
                                </div>
                                <p class="tac fc_grey60 fs_12 m-t-10">Selected</p>
                            </div>
                            <div>
                                <div class="image_selected w76 hover">
                                    <div class="image_dimbg"></div>                   
                                    <ImgComponent src={'image_select_sample.png'} />
                                </div>
                                <p class="tac fc_grey60 fs_12 m-t-10">Hover</p>
                            </div>
                            <div>
                                <div class="image_selected w76">
                                    <div class="image_dimbg"></div>                   
                                    <ImgComponent src={'image_select_sample.png'} />
                                </div>
                                <p class="tac fc_grey60 fs_12 m-t-10">Default</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="Gr_contents">
                    <h2 className="m-t-100">Select / Combo box</h2>
                    <section className="comp_conts m-t-100">
                        <div className="p-20 m-t-80">
                            <div className="dflx">
                                <div className="relative">
                                    <p className="fs_bold" style={{position:'absolute', top:'-60px'}}>Line</p>
                                    <SelectBoxLine placeholder={'placeholder'} />
                                    <p className='m-t-25'></p>
                                    <SelectBoxLine placeholder={'disabled'} disabled />
                                </div>
                                <div className="relative m-l-80">
                                    <p className="fs_bold" style={{position:'absolute', top:'-60px'}}>Line + Fill</p>
                                    <SelectBoxLineFill placeholder={'placeholder'} />
                                    <p className='m-t-25'></p>
                                    <SelectBoxLineFill placeholder={'disabled'} disabled />
                                </div> 
                                <div className="relative m-l-80">
                                    <p className="fs_bold" style={{position:'absolute', top:'-60px'}}>Fill</p>
                                    <SelectBoxFill placeholder={'placeholder'} />
                                    <p className='m-t-25'></p>
                                    <SelectBoxFill placeholder={'disabled'} disabled />
                                </div> 
                            </div>
                        </div>
                        <div className="p-20 m-t-20">
                            <div className="dflx">
                                <div>
                                    <SelectBoxLineDual placeholder1={'label1'} placeholder2={'label2'} />
                                </div>      
                                <div className="m-l-80">
                                    <SelectBoxLineFillDual placeholder1={'label3'} placeholder2={'label4'} />
                                </div>
                                <div className="m-l-80">
                                    <SelectBoxFillDual placeholder1={'label5'} placeholder2={'label6'} />
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                <article className="Gr_contents">
                    <section className="comp_conts m-t-100">
                        <h2 className="m-t-100">Date Picker</h2>
                        <div className="p-20 m-t-80">
                            <div className="dflx">
                                <div className="relative">
                                    <p className="fs_bold" style={{position:'absolute', top:'-50px'}}>Single</p>
                                    <div className='dflx gap_40'>
                                        <DatepickerLine />
                                        <DatepickerFill wrapClass={'date_wrap w200'} />
                                    </div>
                                </div>
                                <div className="relative m-l-100">
                                    <p className="fs_bold" style={{position:'absolute', top:'-50px'}}>Dual calendar</p>
                                    <div className='dflx gap_40'>
                                        <DatepickerLineWith />
                                        <DatepickerFillWith />
                                    </div>
                                </div>
                            </div>
                            <div className="dflx m-t-100">
                                <div className="relative">
                                    <p className="fs_bold" style={{position:'absolute', top:'-50px'}}>Dual date</p>
                                    <div className='dflx gap_50'>
                                        <DatepickerLineDual />
                                        <DatepickerFillDual />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                <article className="Gr_contents" style={{marginTop:'110px'}}>
                    <div className="comp_top flex_wrap">
                        <h2>Stepper</h2>
                    </div>
                    <div className="dflx">
                        <div className="dashed_box p-20 dflx">
                            <Counter boxClass={'stepper_box gap_2'} type={'text'} inputClass={'wrput line tac w120'} />
                            <div className="stepper_box gap_2 m-l-60">
                                <input type="text" className="wrput line tac w120 selected" value="Selected" /> 
                                <button type="button" className="stepper_arrow up on">
                                    <ImgComponent src={'arrow_up_fill_fff_12.svg'} />
                                </button>
                                <button type="button" className="stepper_arrow down on">
                                    <ImgComponent src={'arrow_down_fill_fff_12.svg'} />
                                </button>
                            </div>
                            <div className="stepper_box gap_2 m-l-60">
                                <input type="text" className="wrput line tac w120 disabled" value="Disabled" disabled /> 
                                <button type="button" className="stepper_arrow up disabled">
                                    <ImgComponent src={'arrow_up_fill_fff_12.svg'} />
                                </button>
                                <button type="button" className="stepper_arrow down disabled">
                                    <ImgComponent src={'arrow_up_fill_fff_12.svg'} />
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="Gr_contents" style={{marginTop:'100px'}}>
                    <div className="comp_top flex_wrap">
                        <h2>Drag & drop</h2>
                    </div>
                    <div class="dashed_box p-20 m-t-60">
                        <div class="dflx gap_40">
                            <div class="relative">
                                <p class="w-100 fs_14 fc_grey60" style={{position:'absolute', top:'-60px'}}>Default</p>
                                <DragdropComponent dragClass={'dragdrop_box w280 h120'} numberClass={"dragdrop_number"} number={'1'}>
                                    <div class="dragdrop_text gap_8">
                                        <p class="fs_medium fc_white">돌발 감지</p>
                                        <p class="fs_13 fc_grey60">CCTV0001</p>
                                    </div>
                                </DragdropComponent>
                            </div>
                            <div class="relative">
                                <p class="w-100 fs_14 fc_grey60" style={{position:'absolute', top:'-60px'}}>Select</p>
                                <DragdropComponent dragClass={'dragdrop_box w280 h120 select'} numberClass={"dragdrop_number"} number={'1'}>
                                    <div class="dragdrop_text gap_8">
                                        <p class="fs_medium fc_white">돌발 감지</p>
                                        <p class="fs_13 fc_grey60">CCTV0001</p>
                                    </div>
                                </DragdropComponent>
                            </div>
                            <div class="relative">
                                <p class="w-100 fs_14 fc_grey60" style={{position:'absolute', top:'-60px'}}>Drag</p>
                                <DragdropComponent dragClass={'dragdrop_box w280 h120 drag'} numberClass={"dragdrop_number dpnone"}>
                                    <div class="dragdrop_text gap_8">
                                        <p class="fs_medium fc_white">돌발 감지</p>
                                        <p class="fs_13 fc_grey60">CCTV0001</p>
                                    </div>
                                </DragdropComponent>
                            </div>
                        </div>
                        <div class="m-t-80 h160">
                            <div class="relative">
                                <DragdropComponent dragClass={'dragdrop_box w280 h120 drag'} style={{position:'absolute', left:'20px', zIndex: '3'}}>
                                    <div class="dragdrop_text gap_8">
                                        <p class="fs_medium fc_white">돌발 감지</p>
                                        <p class="fs_13 fc_grey60">CCTV0001</p>
                                    </div>
                                </DragdropComponent>
                                <DragdropComponent dragClass={'dragdrop_box w280 h120 drag'} style={{position:'absolute', top:'-20px', left:'10px', zIndex: '2'}}>
                                    <div class="dragdrop_text gap_8">
                                        <p class="fs_medium fc_white">돌발 감지</p>
                                        <p class="fs_13 fc_grey60">CCTV0001</p>
                                    </div>
                                </DragdropComponent>
                                <DragdropComponent dragClass={'dragdrop_box w280 h120 drag'} style={{position:'absolute', top:'-10px', zIndex: '1'}}>
                                    <div class="dragdrop_text gap_8">
                                        <p class="fs_medium fc_white">돌발 감지</p>
                                        <p class="fs_13 fc_grey60">CCTV0001</p>
                                    </div>
                                </DragdropComponent>
                            </div>
                        </div> 
                    </div>                    
                </article>

            </div>

        </div>
      </div>
    );
};

export default Selector;
