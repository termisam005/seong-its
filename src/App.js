import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AccordionList from './pages/comp/AccordionList';
import Button from './pages/comp/Button';
import Cards from './pages/comp/Cards';
import Cardpattern from './pages/comp/Cardpattern';
import Control from './pages/comp/Control';
import Label from './pages/comp/Label';
import Input from './pages/comp/Input';
import Map from './pages/comp/Map';
import Navigation from './pages/comp/Navigation';
import Popover from './pages/comp/Popover';
import Tooltip from './pages/comp/Tooltip';
import Popup from './pages/comp/Popup';
import Progress from './pages/comp/Progress';
import Selector from './pages/comp/Selector';
import TabnToggle from './pages/comp/TabnToggle';
import Tables from './pages/comp/Tables';
import Tree from './pages/comp/Tree';
import Upload from './pages/comp/Upload';
import Chart from './pages/comp/Chart';

import ExLogin from './pages/template/ExLogin';
import ExMain from './pages/template/ExMain';
import ExError from './pages/template/ExError';
import ExSignal from './pages/template/ExSignal';
import ExRecord from './pages/template/ExRecord';
import ExUsers from './pages/template/ExUsers';

import Login from './pages/seongnam/Login';
import LoginPop from './pages/seongnam/LoginPop';
import Main from './pages/seongnam/Main';
import MainPop from './pages/seongnam/MainPop';
import Smart from './pages/seongnam/Smart';
import SmartAnalysis from './pages/seongnam/SmartAnalysis';
import SmartPop from './pages/seongnam/SmartPop';
import Businfo from './pages/seongnam/Businfo';
import BusinfoBit from './pages/seongnam/BusinfoBit';
import Parkinteg from './pages/seongnam/Parkinteg';
import DigitalTwin from './pages/seongnam/DigitalTwin';
import StatisticalAnalysis from './pages/seongnam/StatisticalAnalysis';
import StatisticsCrossway from './pages/seongnam/StatisticsCrossway';
import StatisticalDangerZone from './pages/seongnam/StatisticalDangerZone';
import StatisticalPedestrian from './pages/seongnam/StatisticalPedestrian';
import StatisticalJaywalking from './pages/seongnam/StatisticalJaywalking';
import StatisticalPeakHour from './pages/seongnam/StatisticalPeakHour';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* comp폴더 component페이지 */}
          <Route path={'/accordionlist'} element={<AccordionList />} />
          <Route path={'/button'} element={<Button />} />
          <Route path={'/cards'} element={<Cards />} />
          <Route path={'/cardpattern'} element={<Cardpattern />} />
          <Route path={'/control'} element={<Control />} />
          <Route path={'/input'} element={<Input />} />
          <Route path={'/label'} element={<Label />} />
          <Route path={'/map'} element={<Map />} />
          <Route path={'/navigation'} element={<Navigation />} />
          <Route path={'/popover'} element={<Popover />} />
          <Route path={'/tooltip'} element={<Tooltip />} />
          <Route path={'/popup'} element={<Popup />} />
          <Route path={'/Progress'} element={<Progress />} />
          <Route path={'/selector'} element={<Selector />} />
          <Route path={'/tabntoggle'} element={<TabnToggle />} />
          <Route path={'/tables'} element={<Tables />} />
          <Route path={'/tree'} element={<Tree />} />
          <Route path={'/upload'} element={<Upload />} />
          <Route path={'/chart'} element={<Chart />} />

          {/* template폴더 참고페이지 */}
          <Route path={'/exlogin'} element={<ExLogin />} />
          <Route path={'/exmain'} element={<ExMain />} />
          <Route path={'/exerror'} element={<ExError />} />
          <Route path={'/exsignal'} element={<ExSignal />} />
          <Route path={'/exrecord'} element={<ExRecord />} />
          <Route path={'/exusers'} element={<ExUsers />} />

          {/* seongnam폴더 페이지 */}
          <Route path={'/'} element={<Login />} />
          <Route path={'/loginpop'} element={<LoginPop />} />
          <Route path={'/main'} element={<Main />} />
          <Route path={'/mainpop'} element={<MainPop />} />
          <Route path={'/smart'} element={<Smart />} />
          <Route path={'/smartanalysis'} element={<SmartAnalysis />} />
          <Route path={'/smartpop'} element={<SmartPop />} />
          <Route path={'/businfo'} element={<Businfo />} />
          <Route path={'/businfobit'} element={<BusinfoBit />} />
          <Route path={'/parkinteg'} element={<Parkinteg />} />
          <Route path={'/digaitaltwin'} element={<DigitalTwin />} />
          <Route path={'/statisticalAnalysisMain'} element={<StatisticalAnalysis />} />
          <Route path={'/statisticalAnalysisCrossway'} element={<StatisticsCrossway />} />
          <Route path={'/statisticalAnalysisDangerZone'} element={<StatisticalDangerZone />} />
          <Route path={'/statisticalAnalysisPedestrian'} element={<StatisticalPedestrian />} />
          <Route path={'/statisticalAnalysisJaywalking'} element={<StatisticalJaywalking />} />
          <Route path={'/statisticalAnalysisPeakHour'} element={<StatisticalPeakHour />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;