import { useContext } from 'react';
import { Card } from 'react-bootstrap';
// import detectEthereumProvider from '@metamask/detect-provider';
// import { ethers } from 'ethers';
import { LanguageContext } from '../contexts/LanguageContext';
// import { EthersContext } from '../contexts/EthersContext';
// import { GovernorAlphaContext } from '../contexts/GovernorAlphaContext';

// import Taro from '../contracts/contracts/Taro.sol/Taro.json';
// import taroAddress from '../contracts/contracts/Taro/contract-address.json';
//
// import GovernorAlpha from '../contracts/contracts/GovernorAlpha.sol/GovernorAlpha.json';
// import governorAlphaAddress from '../contracts/contracts/GovernorAlpha/contract-address.json';

const RejectedProposal = ({title, typeOfAction, neighborhood, personInCharge, description, expiration, budget, requiredTaroToVote, forVotes, againstVotes, id, proposer, proposalYear, proposalMonth, proposalDay}) => {
  // let [governorAlpha, setGovernorAlpha] = useState();
  // let [taro, setTaro] = useState();
  // let [signerAddress, setSignerAddress] = useState();

  let [isEnglish] = useContext(LanguageContext);
  // let {governorAlpha} = useContext(GovernorAlphaContext);
  // let {provider} = useContext(EthersContext);
  //
  // useEffect(() => {
  //   const main = async () => {
  //     // setIsMetamaskInstalled(true);
  //     // setIsConnected(false);
  //     try {
  //       //detect whether the browser is connected to a provider
  //       let ethereumProvider = await detectEthereumProvider();
  //       if (ethereumProvider) {
  //         // setProvider(ethereumProvider);
  //         startApp(ethereumProvider);
  //       } else {
  //         // setIsMetamaskInstalled(false);
  //         return;
  //       };
  //     } catch (error) {
  //       console.error(error);
  //     };
  //
  //     async function startApp(_ethereumProvider) {
  //       try {
  //         //The provider detected by detectEthereumProvider() must be the same as window.ethereum
  //         if (_ethereumProvider !== window.ethereum) {
  //           // setIsMetamaskInstalled(false);
  //           return;
  //         };
  //
  //         //Check if a MetaMask account has permission to connect to app
  //         let metamaskAccount;
  //         let accounts = await _ethereumProvider.request({ method: 'eth_accounts' });
  //           if (accounts.length > 0) {
  //             metamaskAccount = accounts[0];
  //             // setCurrentMetaMaskAccount(accounts[0]);
  //             // setIsMetamaskInstalled(true);
  //             // setIsConnected(true);
  //           };
  //         console.log(`metamaskAccount ${metamaskAccount}`);
  //
  //         //Force the browser to refresh whenever the network chain is changed
  //         // let chainId = await _ethereumProvider.request({ method: 'eth_chainId' });
  //         // _ethereumProvider.on('chainChanged', handleChainChanged);
  //         // console.log('chainId: ', chainId);
  //
  //         //Create the Ethers.js provider and set it in state
  //         let _ethersProvider = await new ethers.providers.Web3Provider(_ethereumProvider);
  //         // setEthersProvider(_ethersProvider);
  //         console.log('_ethersProvider: ', _ethersProvider)
  //         // make call to contract to check if current user is validated.
  //         // this may need to be done inside handleOnConnect as well
  //         // if user is validated, then set isValidated(true)
  //
  //         if(accounts.length !== 0) {
  //           let signer = await _ethersProvider.getSigner();
  //           // setEthersSigner(signer);
  //
  //           const _taro = new ethers.Contract(
  //             taroAddress.Taro,
  //             Taro.abi,
  //             signer
  //           );
  //           setTaro(_taro);
  //
  //           let _signerAddress = await signer.getAddress();
  //           // console.log("signerAddress: ", _signerAddress);
  //           setSignerAddress(_signerAddress);
  //
  //           // let _userBalance = await _taro.balanceOf(signerAddress);
  //           // console.log('_userBalance in useEffect: ', _userBalance.toString());
  //           // if(_userBalance) {
  //           //   setUserBalance(_userBalance.toString());
  //           // };
  //
  //           const _governorAlpha = new ethers.Contract(
  //             governorAlphaAddress.GovernorAlpha,
  //             GovernorAlpha.abi,
  //             signer
  //           );
  //           setGovernorAlpha(_governorAlpha);
  //         };
  //       } catch (error) {
  //         console.error(error);
  //       };
  //     };
  //   };
  //   main();
  // }, []);

  return (
    <div>
      {isEnglish === 'english'
      ?
      <div class="proposal">
        <div class="proposal-expiration">
          <h2 class="prop-title">💡 Proposal # {id}</h2>
          <span class="yellowr"> made on {proposalDay}/{proposalMonth}/{proposalYear}</span> 
        </div>
        <div class="rproposal">Rejected by {againstVotes} votes</div>
        <div class="mini-title">🎯 Objetive:</div>
        <div class="prop-hl"> {title}</div><br/><br/>
        <div class="grid-prop">
          <div class="minit-bg">⚙️ Action: <div class="prop-hl">{typeOfAction}</div></div>
          <div class="minit-bg">🦸 In charge: <div className="prop-hl">{personInCharge}</div></div>      
          <div class="minit-bg"> 📍 Where: <div className="prop-hl">{neighborhood}</div></div>
          <div class="minit-bg">💸 Cost: <div className="prop-hl">{budget} pesos</div> </div>
        </div>
        <div class="description-bg">📑 Description: <div class="prop-description">{description}</div></div>
          {/*}
          <div className ="proposal-main">
            <div className="proposal-sub">Costo: {budget}</div>
            <div className="proposal-subaction">TARO to vote:{requiredTaroToVote} TARO</div>
          </div>
          */}
      <div class="yellow">made by {proposer}</div><br/>
      <div className="vote-grid">
        <div class="prop-bgw"><h2>Supported by:<br/><br/>{forVotes}<br/><br/>TARO</h2></div>    
        <div class="prop-bga2"><h2>Rejected by:<br/><br/>{againstVotes}<br/><br/> TARO</h2></div>
      </div>
    </div>

        :
        <Card className="proposalr">
        <div className="prop-title">💡 Propuesta # {id} 
      <span className="proposal-date"> hecha el día {proposalDay}/{proposalMonth}/{proposalYear}</span> 
      <div className="proposal-authorpast">por {proposer}</div>
    </div>
    <div className="proposal-title">🎯{title}</div>
    <div className="proposal-details">🔍 Detalles:</div>
    <div className="proposal-container">
      <div className="proposal-hero">🦸 Responsable de la actividad🦸‍♂️ <div className="table-text">{personInCharge}</div></div>
      <div className="proposal-table">
        <div className="proposal-action">⚙️ Tipo: <div className="table-text">{typeOfAction}</div></div>
        <div className="proposal-location">📍 Dónde: <div className="table-text">{neighborhood}</div></div>
        <div className="proposal-cost">💸 Costo: <div className="table-text">{budget} pesos</div></div>
      </div>
      
      
      <div className="proposal-description" >📑 Descripción: <div className="table-text">{description}</div></div>
    </div>
    
            {/*}
            <div className ="proposal-main">
              <div className="proposal-sub">Costo: {budget}</div>
              <div className="proposal-subaction">TARO to vote:{requiredTaroToVote} TARO</div>
            </div>
            */}

  <Card.Body className="proposal-table">
        <div className="proposal-main">
        <div className="proposal-favor">
          <div>
            ✔️ A favor:
          </div>
          <p className="big-iconf">{forVotes}<p>TARO</p></p>
          </div>
          <div>
          <div className="proposal-against">
            ❌ Rachazada por:
          </div>
             <p className="big-icona">{againstVotes} <p>TARO</p></p>
          </div>
        </div>
      </Card.Body>
    </Card>

      }
    </div>
  );
};

export default RejectedProposal;
