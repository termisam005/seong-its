import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';

import AccordionComponent from '../../components/accordion/AccordionComponent';
import AccordionCheckSingle from '../../components/accordion/AccordionCheckSingle';
import AccordionCheckgroup from '../../components/accordion/AccordionCheckgroup';

import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import CheckComponent from '../../components/common/CheckComponent';
import ListBlockComponent from '../../components/common/ListBlockComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ToggleComponent from '../../components/common/ToggleComponent';


const AccordionList = () => {
    //accordion 이벤트
    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
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
                    <h1>Accordion & List</h1>
                </article>
                <article className="Gr_contents" style={{marginTop: '100px'}}>
                    <div className="m-b-60">
                        <h2 className="m-b-12">Accordion</h2>
                        <p className="fs_12 m-b-4">레벨별 1종류 사용</p>
                        <p className="fs_12 m-b-4">여러 종류 교차 사용 자제</p>
                        <p className="fs_12 m-b-4">가급적 시스템 공통으로 사용</p>
                        <p className="fs_12 m-b-4">기획에 따라 Accordion을 collapse로 사용 가능 (다중열림)</p>
                    </div>
                    <div className="dflx">
                        <div>
                            <p className="w160 fs_bold m-t-70">Label</p>
                            <p className="w160 fs_bold m-t-256">+ checkbox</p>
                            <p className="w160 fs_bold m-t-320">+ toggle</p>
                            <p class="fc_annotation87 tar w150 m-t-288">with Icon
                                <br/>(사용 자제)
                            </p>
                        </div>    
                        <div className="dashed_box p-20 m-t-40">
                            <div className="dflx col_gap40">
                                <div className="relative">
                                    <p className="fs_12 fc_grey87" style={{position: 'absolute', top:'-80px'}}>Lv1</p>
                                    <div>
                                        <p className="fc_annotation87 m-b-12">Default</p>
                                    </div>
                                    <div className="w320 dflx_column row_gap2">
                                        <AccordionComponent accordClass={'accordion_block default'} addTitleClass={''} 
                                        accordTitle={'Default - close'} normal>
                                            <div className="accordion_paragraph">
                                                Contents..
                                            </div>
                                        </AccordionComponent>
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac_jbet on">
                                                <div className="fs_14_medium ">Default - open</div>
                                                <button className="accordion_toggle on h20" type="button">
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                        </div>
                                        <AccordionComponent accordClass={'accordion_block default'} addTitleClass={'hover'} 
                                        accordTitle={'Hover - close'} normal>
                                            <div className="accordion_paragraph">
                                                Contents..
                                            </div>
                                        </AccordionComponent>
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac_jbet on hover">
                                                <div className="fs_14_medium ">Hover - open</div>
                                                <button className="accordion_toggle on h20" type="button">
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="accordion_block disabled">
                                            <div className="accordion_title dflx_ac_jbet">
                                                <div className="fs_14_medium ">Disabled</div>
                                                <button class="accordion_toggle h20" type="button" disabled>
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                            <div className="accordion_contents">
                                                <div className="accordion_paragraph">
                                                    Contents..
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div>
                                        <p className="fc_annotation87 m-b-12">Point</p>
                                    </div>
                                    <div className="w320 dflx_column row_gap2">
                                        <AccordionComponent accordClass={'accordion_block point'} addTitleClass={''} 
                                        accordTitle={'Default - close'} normal>
                                            <div className="accordion_paragraph">
                                                Contents..
                                            </div>
                                        </AccordionComponent>
                                        <div className="accordion_block point">
                                            <div className="accordion_title dflx_ac_jbet on">
                                                <div className="fs_14 ">Default - open</div>
                                                <button className="accordion_toggle on h20" type="button">
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                        </div>
                                        <AccordionComponent accordClass={'accordion_block point'} addTitleClass={'hover'} 
                                        accordTitle={'Hover - close'} normal>
                                            <div className="accordion_paragraph">
                                                Contents..
                                            </div>
                                        </AccordionComponent>
                                        <div className="accordion_block point">
                                            <div className="accordion_title dflx_ac_jbet hover on">
                                                <div className="fs_14 ">Hover - open</div>
                                                <button className="accordion_toggle h20" type="button">
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="accordion_block point disabled">
                                            <div className="accordion_title dflx_ac_jbet">
                                                <div className="fs_14_medium ">Disabled</div>
                                                <button class="accordion_toggle h20" type="button" disabled>
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                            <div className="accordion_contents">
                                                <div className="accordion_paragraph">
                                                    Contents..
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <p className="fs_12 fc_grey87" style={{position: 'absolute', top:'-80px'}}>Lv2</p>
                                    <div className="w320 dflx_column row_gap2">
                                        <AccordionComponent accordClass={'accordion_block level'} accordTitle={'Closed'} normal>
                                            <div className="accordion_paragraph">
                                                Contents..
                                            </div>
                                        </AccordionComponent> 
                                        <div className="accordion_block level">
                                            <div className="accordion_title dflx_ac_jbet on">
                                                <div className="fs_14 ">Open</div>
                                                <button className="accordion_toggle h20" type="button">
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                        </div>  
                                        <div className="accordion_block level disabled">
                                            <div className="accordion_title dflx_ac_jbet hover">
                                                <div className="fs_14_medium ">Disabled</div>
                                                <button class="accordion_toggle h20" type="button" disabled>
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                            <div className="accordion_contents">
                                                <div className="accordion_paragraph">
                                                    Contents..
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            
                            <div className=" dflx col_gap40 m-t-80">
                                <div className="relative">
                                    <p className="fs_12 fc_grey87" style={{position: 'absolute', top:'-30px'}}>Default</p>
                                    <div className="w320 dflx_column row_gap2">
                                        <AccordionCheckSingle accordClass={'accordion_block select'} accordTitle={'Default'} checkId={'check01'} >
                                        </AccordionCheckSingle>
                                        <div className="accordion_block select">
                                            <div className="accordion_title dflx_ac_jbet on">
                                                <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_14 p-l-30'} txt={'Selected'}
                                                checkId={'check02'} checked />
                                            </div>
                                        </div>
                                        <div className="accordion_block select">
                                            <div className="accordion_title dflx_ac_jbet hover">
                                                <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_14 p-l-30'} txt={'Hover'}
                                                checkId={'check03'} />
                                            </div>
                                        </div>
                                        <div className="accordion_block select">
                                            <div className="accordion_title dflx_ac_jbet hover">
                                                <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_14 p-l-30'} txt={'Hover'}
                                                checkId={'check04'} checked />
                                            </div>
                                        </div>       
                                        <AccordionCheckSingle accordClass={'accordion_block disabled'} accordTitle={'Disabled'} checkId={'check04'} disabled={'disabled'}>
                                        </AccordionCheckSingle>                               
                                    </div>
                                </div>

                                <div className="relative">
                                    <p className="fs_12 fc_grey87" style={{position: 'absolute', top:'-30px'}}>Accordion</p>
                                    <div className="w320 dflx_column row_gap2">
                                        <AccordionCheckgroup accordClass={'accordion_block accord_select'} accordTitle={'Default - close'} checkId={'check05'}>
                                            <div className="accordion_paragraph">
                                                Contents..
                                            </div>
                                        </AccordionCheckgroup>
                                        <div className="accordion_block accord_select">
                                            <div className="accordion_title dflx_ac_jbet">
                                                <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_14 p-l-30'} txt={'Default - open'}
                                                checkId={'check06'}  />
                                                <button className="accordion_toggle on h20" type="button">
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                        </div>
                                        <AccordionCheckgroup accordClass={'accordion_block accord_select'} addTitleClass={'selected'} accordTitle={'Selected - close'} 
                                        checkId={'check07'} checked>
                                            <div className="accordion_paragraph">
                                                Contents..
                                            </div>
                                        </AccordionCheckgroup>
                                        <div className="accordion_block accord_select">
                                            <div className="accordion_title dflx_ac_jbet selected on">
                                                <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_14 p-l-30'} txt={'Selected - open'}
                                                checkId={'check08'} checked />
                                                <button className="accordion_toggle h20" type="button">
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                        </div>   
                                        <AccordionCheckgroup accordClass={'accordion_block accord_select'} addTitleClass={'hover'} accordTitle={'Hover - close'} 
                                        checkId={'check09'} checked>
                                            <div className="accordion_paragraph">
                                                Contents..
                                            </div>
                                        </AccordionCheckgroup>
                                        <div className="accordion_block accord_select">
                                            <div className="accordion_title dflx_ac_jbet hover on">
                                                <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_14 p-l-30'} txt={'Hover - open'}
                                                checkId={'check10'} checked />
                                                <button className="accordion_toggle h20" type="button">
                                                    <ImgComponent className="accordion_up w20" src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className="accordion_down w20" src={'arrow_down_fff_20.svg'} />
                                                </button>
                                            </div>
                                        </div>   
                                        <AccordionCheckSingle accordClass={'accordion_block accord_select disabled'} accordTitle={'Disabled'} 
                                        checkId={'check11'} disabled={'disabled'}>
                                        </AccordionCheckSingle>                                    
                                    </div>
                                </div>

                                <div className="relative">
                                    <p className="fs_12 fc_grey87" style={{position: 'absolute', top:'-30px'}}></p>
                                    <div className="w320 dflx_column row_gap2">
                                        <AccordionCheckSingle accordClass={'accordion_block select level2'} accordTitle={'Default'} checkId={'check12'}>
                                        </AccordionCheckSingle>
                                        <AccordionCheckSingle accordClass={'accordion_block select level2'} accordTitle={'Selected'} checkId={'check13'} checked>
                                        </AccordionCheckSingle>   
                                        <AccordionCheckSingle accordClass={'accordion_block disabled select level2'} accordTitle={'Disabled'} checkId={'check14'} disabled>
                                        </AccordionCheckSingle>   
                                        <div className="accordion_block select level2">
                                            <div className="p-t-10 p-b-12 p-l-30">
                                                <div className="dflx_ac col_gap20">
                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'radio01'} name={'radio_type'} 
                                                    labelClass={'fs_13'} txt={'Selected'} checked={true} />
                                                    <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'radio02'} name={'radio_type'} 
                                                    labelClass={'fs_13'} txt={'Default'} />
                                                </div>
                                            </div>                                       
                                        </div>                                
                                    </div>
                                </div>
                            </div>

                            <div className="dflx col_gap40 m-t-80">
                                <div className="relative">
                                    <p className="fs_12 fc_grey87" style={{position: 'absolute', top:'-30px'}}>Default</p>
                                    <div className="w320 dflx_column row_gap2">
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent selected>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">View</div>
                                            </div>
                                        </div>
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide</div>
                                            </div>
                                        </div>
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac hover">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">Hover</div>
                                            </div>
                                        </div>   
                                        <div className="accordion_block disabled">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent disabled>
                                                    <ImgComponent className={'img_off w20 op02'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16 op02">Disabled</div>
                                            </div>
                                        </div>                               
                                    </div>
                                </div>

                                <div className="relative">
                                    <p className="fs_12 fc_grey87" style={{position: 'absolute', top:'-30px'}}>Accordion</p>
                                    <div className="w320 dflx_column row_gap2">
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent selected>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">View - close</div>
                                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a on' : 'accordion_toggle m-l-a'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                            <div className={accordion? 'accordion_contents show': 'accordion_contents'}>
                                                <div className="accordion_paragraph">
                                                    Contents..
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent selected>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">View - open</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a on'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                                       
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide - close</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                       
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide - open</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a on'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                                         
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac hover">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide - close - hover</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                       
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac hover">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide - open - hover</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a on'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>            
                                        <div className="accordion_block disabled">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent disabled>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 m-l-16">Disabled</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                            
                                    </div>
                                </div>

                                <div className="relative">
                                    <p className="fs_12 fc_grey87" style={{position: 'absolute', top:'-30px'}}></p>
                                    <div className="w320 dflx_column row_gap2">
                                        <div className="accordion_block level2">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent selected>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">View</div>
                                            </div>
                                        </div>
                                        <div className="accordion_block level2">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide</div>
                                            </div>
                                        </div>
                                        <div className="accordion_block level2 disabled">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent disabled>
                                                    <ImgComponent className={'img_off w20 op02'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div class="fs_14 fc_grey87 m-l-16 op02">Disabled</div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="dflx col_gap40 m-t-40">
                                <div className="relative">
                                    <div className="w320 dflx_column row_gap2">
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent selected>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">View</div>
                                            </div>
                                        </div>
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide</div>
                                            </div>
                                        </div>       
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac hover">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">Hover</div>
                                            </div>
                                        </div>
                                        <div className="accordion_block disabled">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent disabled>
                                                    <ImgComponent className={'img_off w20 op02'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 m-l-16">Disabled</div>
                                            </div>
                                        </div>                       
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="w320 dflx_column row_gap2">
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent selected>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">View - close</div>
                                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a on' : 'accordion_toggle m-l-a'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                            <div className={accordion? 'accordion_contents show': 'accordion_contents'}>
                                                <div className="accordion_paragraph">
                                                    Contents..
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent selected>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">View - open</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a on'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                                       
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide - close</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                       
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide - open</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a on'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                                         
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac hover">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide - close - hover</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                       
                                        <div className="accordion_block default">
                                            <div className="accordion_title dflx_ac hover">
                                                <ToggleComponent normal>
                                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 fc_grey87 m-l-16">Hide - open - hover</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a on'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>            
                                        <div className="accordion_block disabled">
                                            <div className="accordion_title dflx_ac">
                                                <ToggleComponent disabled>
                                                    <ImgComponent className={'img_off w20 op02'} src={'layer_fff_off_20.svg'} />
                                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                                </ToggleComponent>
                                                <div className='m-l-16'>
                                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                                </div>
                                                <div class="fs_14 m-l-16">Disabled</div>
                                                <ButtonWithComponent className={'accordion_toggle m-l-a'}>
                                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="Gr_contents" style={{marginTop:'100px'}}>
                    <div className="comp_top flex_wrap">
                        <h2>List</h2>
                    </div>
                    <div className="dflx">
                        <div className="dashed_box p-20 dflx m-t-60 col_gap40 h136">
                            <div className="relative">
                                <p className="w-100 fs_14 fc_grey60" style={{position: 'absolute', top:'-60px', whiteSpace:'nowrap'}}>text </p>
                                <div className="w172 display_grid auto_row24 row_gap12">
                                    <ListBlockComponent listClass={'list_block'}>
                                        <span class="list_text">Enabled</span>
                                    </ListBlockComponent>
                                    <ListBlockComponent listClass={'list_block on'}>
                                        <span class="list_text">Hover</span>
                                        <ButtonComponent className={'m-l-a fc_primary'} txt={'변경'}></ButtonComponent>
                                    </ListBlockComponent>
                                    <ListBlockComponent listClass={'list_block disabled'}>
                                        <span class="list_text">Disabled</span>
                                        <ButtonComponent className={'m-l-a fc_grey40'} txt={'불가'}></ButtonComponent>
                                    </ListBlockComponent>
                                </div>
                            </div>
                            <div className="relative">
                                <p className="w-100 fs_14 fc_grey60" style={{position: 'absolute', top:'-60px', whiteSpace:'nowrap'}}>Check box</p>
                                <div className="w172 display_grid auto_row24 row_gap12">
                                    <ListBlockComponent listClass={'list_block'}>
                                        <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_13 p-l-30'} checkId={'listCheckbox01'} txt={'Enabled'} />
                                    </ListBlockComponent>
                                    <ListBlockComponent listClass={'list_block on'}>
                                        <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_13 p-l-30'} checkId={'listCheckbox02'} txt={'Hover'} />
                                    </ListBlockComponent>
                                    <ListBlockComponent listClass={'list_block disabled'}>
                                        <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} labelClass={'fs_13 p-l-30'} checkId={''} txt={'Disabled'} />
                                    </ListBlockComponent>
                                </div>
                            </div>
                            <div className="relative">
                                <p className="w-100 fs_14 fc_grey60" style={{position: 'absolute', top:'-60px', whiteSpace:'nowrap'}}>Button</p>
                                <div className="w172 display_grid auto_row24 row_gap12">
                                    <ListBlockComponent listClass={'list_block'}>
                                        <span class="list_text">Enabled</span>
                                        <ButtonComponent className={'m-l-a btn_list_text'} txt={'변경'}></ButtonComponent>
                                    </ListBlockComponent>
                                    <ListBlockComponent listClass={'list_block on'}>
                                        <span class="list_text">Hover</span>
                                        <ButtonComponent className={'m-l-a btn_list_text'} txt={'변경'}></ButtonComponent>
                                    </ListBlockComponent>
                                    <ListBlockComponent listClass={'list_block disabled'}>
                                        <span class="list_text">Disabled</span>
                                        <ButtonComponent className={'m-l-a btn_list_text'} txt={'불가'}></ButtonComponent>
                                    </ListBlockComponent>
                                </div>
                            </div>
                        </div>
                        <div className="m-t-60 m-l-120">
                            <div className="relative">
                                <p className="fs_bold" style={{position: 'absolute', top:'-40px', whiteSpace:'nowrap'}}>Usage </p>
                            </div>
                            <div className="list_usage_box p-12 fc_white row_gap8">
                                <div className="dflx col_gap20 fs_13">
                                    <span className="w60">CCTV명:</span>
                                    <span>시청역사거리</span>
                                </div>
                                <div className="dflx col_gap20 fs_13">
                                    <span className="w60">설치지점:</span>
                                    <span>시청역사거리</span>
                                </div>
                                <div className="dflx col_gap20 fs_13">
                                    <span className="w60">CCTV No.:</span>
                                    <span>CCTV0001</span>
                                </div>
                                <p className="fs_13">
                                    프리셋 리스트
                                </p>
                                <div className="w172 display_grid auto_row24 row_gap4">
                                    <ListBlockComponent listClass={'list_block'}>
                                        <span class="list_text">시청교차로 방면</span>
                                    </ListBlockComponent>
                                    <ListBlockComponent listClass={'list_block'}>
                                        <span class="list_text">시청역사거리 방면 시청역사거리 방면 시청역사거리 방면</span>
                                    </ListBlockComponent>
                                    <ListBlockComponent listClass={'list_block disabled'}>
                                        <span class="list_text">시청삼거리 방면</span>
                                        <ButtonComponent className={'m-l-a fc_grey38'} txt={'불가'}></ButtonComponent>
                                    </ListBlockComponent>
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

export default AccordionList;
