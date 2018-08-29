import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Homepage from './HomePage.jsx';
import Register from './Register.jsx';
import CreateMneumonic from './CreateMneumonic.jsx';
import ConfirmMneumonic from './ConfirmMneumonic.jsx';
import PublicKey from './PublicKey.jsx';
import PrivateKey from './PrivateKey.jsx';
import CreateWallet from './CreateWallet.jsx';
import CoinInfo from './CoinInfo.jsx';
import SampleBuy from './SampleBuy.jsx';
import SampleSell from './SampleSell.jsx';
import BlockchainExplorer from './BlockchainExplorer.jsx';
import TutorialCompletion from './TutorialCompletion.jsx';

// Description
import Description from './Description.jsx'

const Container = props => (
  <div className="container">
    <Description />

    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/createmneumonic" component={CreateMneumonic} />
      <Route path="/confirmmneumonic" component={ConfirmMneumonic} />
      <Route path="/publickey" component={PublicKey} />
      <Route path="/privatekey" component={PrivateKey} />
      <Route path="/createwallet" component={CreateWallet} />
      <Route path="/coininfo" component={CoinInfo} />
      <Route path="/samplebuy" component={SampleBuy} />
      <Route path="/samplesell" component={SampleSell} />
      <Route path="/blockchainexplorer" component={BlockchainExplorer} />
      <Route path="/tutorialcomplete" component={TutorialCompletion} />
    </Switch>
  </div>
);

export default Container;
