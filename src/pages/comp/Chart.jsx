import React from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';

import RatioChart1 from '../../components/chart/RatioChart1';
import RatioChart2 from '../../components/chart/RatioChart2';
import RatioChart3 from '../../components/chart/RatioChart3';
import RatioHalfChart1 from '../../components/chart/RatioHalfChart1';
import RatioHalfChart2 from '../../components/chart/RatioHalfChart2';
import ScopeChart1 from '../../components/chart/ScopeChart1';
import ScopeChart2 from '../../components/chart/ScopeChart2';
import ScopeChart3 from '../../components/chart/ScopeChart3';
import BoundaryChart1 from '../../components/chart/BoundaryChart1';
import SalesChart1 from '../../components/chart/SalesChart1';
import SalesChart2 from '../../components/chart/SalesChart2';

import RadarChart from '../../components/chart/RadarChart';
import XYChart1 from '../../components/chart/XYChart1';
import XYChartColor from '../../components/chart/XYChartColor';
import XYChartDual from '../../components/chart/XYChartDual';
import StackBarchart from '../../components/chart/StackBarchart';
import RangeAreaChart from '../../components/chart/RangeAreaChart';
import RangeFillChart from '../../components/chart/RangeFillChart';
import ClusterColumnChart from '../../components/chart/ClusterColumnChart';



const Chart = () => {

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
                    <h1>Chart</h1>
                </article>

                <article class="Gr_contents">
                    <section class="comp_conts">
                        <dl class="comp_dl m-t-80">
                            <div className='w-30'>
                                <h2 className='m-b-60'>Line</h2>
                                <div className='dflx_ac gap_50 m-t-40'>
                                    <div className='dflx_column dflx_ac gap_20'>
                                        <span className='fs_12'>Type 1</span>
                                        <div className='gr_label'>
                                            <p className='bel_line'></p>
                                        </div>
                                    </div>
                                    <div className='dflx_column dflx_ac gap_20'>
                                        <span className='fs_12'>Type 2</span>
                                        <div className='gr_label'>
                                            <p className='bel_line'>
                                                <span className='bel_circle left'></span>
                                                <span className='bel_circle right'></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-70'>
                                <h2>Legend</h2>
                                <div className='dflx_ac gap_30 m-t-60'>
                                    <div className='gr_label'>
                                        <span className='square sky'></span>
                                        <span className='word'>Label</span>
                                    </div>
                                    <div className='gr_label'>
                                        <span className='square'></span>
                                        <span className='word'>Label</span>
                                    </div>
                                    <div className='gr_label'>
                                        <p className='bel_line w24'>
                                            <span className='bel_circle left'></span>
                                            <span className='bel_circle right'></span>
                                        </p>
                                        <span className='word'>Label</span>
                                    </div>
                                    <div className='ch_radio on'>
                                        <span className='radio mini'></span>
                                        <span className='fs_11'>Label (범례자리가 좁을 경우)</span>
                                    </div>
                                </div>
                            </div>
                        </dl>
                    </section>
                </article>

                <article class="Gr_contents">
                    <div class="comp_top p-b-0">
                        <h2 className='m-t-30'>Bar & Line</h2>
                    </div>
                    <section class="comp_conts">
                        <dl class="comp_dl m-t-10">
                            <dd class="comp_dd">

                                <div class="compline grid_column2 gap_20 p-b-40">
                                    <section className='relative'>
                                        <XYChart1 />
                                        <div className='chart_label dflx_ac_jcent gap_20'>
                                            <div className='gr_label'>
                                                <span className='square sky'></span>
                                                <span className='word'>전체 돌발건수</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square'></span>
                                                <span className='word'>자동참지 건수</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='relative'>
                                        <ClusterColumnChart />
                                        <div className='chart_label dflx_ac_jcent gap_20'>
                                            <div className='gr_label'>
                                                <span className='square white'></span>
                                                <span className='word'>교통량</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square white h2'></span>
                                                <span className='word'>통일속도</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square sky'></span>
                                                <span className='word'>전일</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square'></span>
                                                <span className='word'>현재</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square violet'></span>
                                                <span className='word'>전주</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div class="compline p-b-40">
                                    <section className='relative w-50'>
                                        <XYChartColor />
                                        <div className='chart_label right_top display_grid'>
                                            <div className='gr_label'>
                                                <span className='square green_light'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square green'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square sky'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square sky_blue'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square blue'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square blue_deep'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square violet'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square purple'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square purple_light'></span>
                                                <span className='word'>Label</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='relative w-45 m-l-a'>
                                        <div className='xydual_wrap'>
                                            <XYChartDual />
                                            <div className='chart_label left_bottom dflx_ac gap_20 m-b-12 p-l-24'>
                                                <p className='fs_11 m-r-5'>(구간속도 km/h)</p>
                                                <div className='gr_label'>
                                                    <span className='square sky'></span>
                                                    <span className='word'>누적</span>
                                                </div>
                                                <div className='gr_label'>
                                                    <span className='square'></span>
                                                    <span className='word'>현재</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div class="compline grid_column2 gap_20 m-t-40 m-b-80">
                                    <section className='relative'>
                                        <RangeFillChart />
                                    </section>
                                    <section className='relative'>
                                        <StackBarchart />
                                        <div className='chart_label dflx_ac_jcent gap_20'>
                                            <div className='gr_label'>
                                                <span className='square sky'></span>
                                                <span className='word'>교차로(현재기준)</span>
                                            </div>
                                            <div className='gr_label'>
                                                <span className='square'></span>
                                                <span className='word'>도로(현재기준)</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div class="compline grid_column2 gap_20 m-t-60">
                                    <SalesChart1 />
                                    <SalesChart2 />
                                </div>
                                <div class="compline grid_column2 gap_20 m-t-30">
                                    <ScopeChart1 />
                                    <ScopeChart2 />
                                </div>
                                <div class="compline grid_column2 gap_20 m-t-30">
                                    <ScopeChart3 />
                                    <BoundaryChart1 />
                                </div>

                            </dd>
                        </dl>
                    </section>
                </article>

                <article class="Gr_contents">
                    <div class="comp_top">
                        <h2 className='m-t-30 m-b-40'>Pie</h2>
                    </div>
                    <section class="comp_conts">
                        <dl class="comp_dl m-t-10">
                            <dd class="comp_dd">
                                <p className='fs_bold m-t-20 p-l-40'>Dount</p>
                                <div class="compline grid_column2 gap_20">
                                    <div>
                                        <RatioChart1 />
                                    </div>
                                    <div>
                                        <RatioChart2 />
                                    </div>
                                </div>
                                <div class="compline m-t-60">
                                    <RatioChart3 />
                                </div>
                                <p className='fs_bold m-t-80 p-l-40'>Gauges</p>
                                <div class="compline grid_column2 gap_20 m-t-0">
                                    <RatioHalfChart1 />
                                    <RatioHalfChart2 />
                                </div>
                                <p className='fs_bold m-t-30 p-l-40'>Radar</p>
                                <div class="compline grid_column2">
                                    <RadarChart />
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

export default Chart;
